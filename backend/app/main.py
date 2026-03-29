from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import os
import json
import hashlib
import numpy as np

# Import internal modules
from .predictor import load_trained_model, predict_disease
from .preprocessing import preprocess_image
from .recommendations import get_recommendations
from .utils import logger

app = FastAPI(title="TomatoGuard AI - Backend")

# Define paths
BASE_DIR = os.path.dirname(os.path.dirname(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "models", "tomato_model.keras")
CLASS_NAMES_PATH = os.path.join(BASE_DIR, "data", "class_names.json")

# Enable CORS for production and local development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, you should replace "*" with your Vercel URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Global variable for the model
model = None
class_names_list = []


@app.on_event("startup")
async def startup_event():
    global model, class_names_list
    if os.path.exists(MODEL_PATH):
        model = load_trained_model(MODEL_PATH)
    else:
        logger.warning(f"Model file not found at {MODEL_PATH}.")

    # Load class names once at startup (not on every request)
    if os.path.exists(CLASS_NAMES_PATH):
        with open(CLASS_NAMES_PATH, 'r', encoding='utf-8') as f:
            class_names_list = json.load(f)
        print(f"[STARTUP] Loaded {len(class_names_list)} class names: {class_names_list}")
    else:
        logger.error("class_names.json not found!")


@app.get("/")
async def root():
    return {
        "project": "TomatoGuard AI",
        "author": "Adeosun Ezekiel Ayomide",
        "status": "Running",
        "model_loaded": model is not None,
        "classes_loaded": len(class_names_list),
    }


@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    global model, class_names_list

    # 1. Validate content type — accept all image/* types including image/jpeg for .jfif
    if not (file.content_type and file.content_type.startswith("image/")):
        raise HTTPException(status_code=400, detail="File provided is not an image.")

    if model is None:
        if os.path.exists(MODEL_PATH):
            model = load_trained_model(MODEL_PATH)
        if model is None:
            raise HTTPException(
                status_code=503,
                detail="AI Model not loaded. Ensure 'tomato_model.keras' exists in backend/models/"
            )

    try:
        # 2. Read bytes and log diagnostics
        image_bytes = await file.read()
        file_hash = hashlib.sha256(image_bytes).hexdigest()
        file_size = len(image_bytes)

        print(f"\n[BACKEND] ==== Incoming Request ====")
        print(f"[BACKEND] Filename   : {file.filename}")
        print(f"[BACKEND] ContentType: {file.content_type}")
        print(f"[BACKEND] File Size  : {file_size} bytes")
        print(f"[BACKEND] SHA256     : {file_hash}")
        print(f"[BACKEND] ==========================\n")

        # 3. Preprocess
        processed_image = preprocess_image(image_bytes)

        # 4. Single inference call — returns (class_idx, confidence, all_preds array)
        class_idx, confidence, all_preds = predict_disease(model, processed_image)

        # 5. Map index -> name
        if class_names_list and class_idx < len(class_names_list):
            disease_name = class_names_list[class_idx]
        else:
            disease_name = "Unknown Disease"

        # 6. Build probabilities dict
        probabilities = {}
        if class_names_list and all_preds is not None:
            for i, name in enumerate(class_names_list):
                probabilities[name] = float(all_preds[i])

        # 7. Fetch recommendations
        rec_data = get_recommendations(disease_name)

        # 8. Return result
        return {
            "disease": disease_name,
            "confidence": float(confidence),
            "status": rec_data.get("status", "Diseased") if isinstance(rec_data, dict) else "Diseased",
            "treatment": rec_data.get("treatment", []) if isinstance(rec_data, dict) else [],
            "prevention": rec_data.get("prevention", []) if isinstance(rec_data, dict) else [],
            "probabilities": probabilities,
        }

    except Exception as e:
        logger.error(f"Prediction Error: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Inference error: {str(e)}")


if __name__ == "__main__":
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)