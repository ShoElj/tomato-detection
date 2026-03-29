import numpy as np
import tensorflow as tf
from tensorflow.keras.models import load_model
import os
import json


def load_trained_model(model_path: str):
    """
    Loads the trained Keras model from the specified path.
    """
    if not os.path.exists(model_path):
        print(f"[PREDICTOR] Error: Model file not found at {model_path}")
        return None
    try:
        model = load_model(model_path)
        print(f"[PREDICTOR] Model loaded successfully from {model_path}")
        print(f"[PREDICTOR] Input shape : {model.input_shape}")
        print(f"[PREDICTOR] Output shape: {model.output_shape}")
        return model
    except Exception as e:
        print(f"[PREDICTOR] Error loading model: {str(e)}")
        return None


def predict_disease(model, processed_image):
    """
    Makes a prediction using the loaded model and processed image.
    Returns (class_idx, confidence, all_preds_array) so the caller
    can build the probabilities dict without a second model.predict call.
    """
    if model is None:
        return None, 0.0, None

    # Single inference — do NOT call model.predict anywhere else
    predictions = model.predict(processed_image, verbose=0)
    preds = predictions[0]

    class_idx = int(np.argmax(preds))
    confidence = float(np.max(preds))

    # Load class names for debug output
    class_names = []
    class_names_path = os.path.join(
        os.path.dirname(os.path.dirname(__file__)), "data", "class_names.json"
    )
    if os.path.exists(class_names_path):
        with open(class_names_path, 'r', encoding='utf-8') as f:
            class_names = json.load(f)

    # Debug output
    print(f"\n[PREDICTOR] ---- Prediction Debug ----")
    print(f"[PREDICTOR] Raw vector: {np.array2string(preds, precision=6, suppress_small=True)}")
    print(f"[PREDICTOR] Predicted index: {class_idx}")
    if class_names and class_idx < len(class_names):
        print(f"[PREDICTOR] Predicted Class: {class_names[class_idx]}")
    print(f"[PREDICTOR] Confidence: {confidence:.6f}")

    # Top 3
    top3_idx = np.argsort(preds)[-3:][::-1]
    for rank, idx in enumerate(top3_idx, 1):
        name = class_names[idx] if class_names and idx < len(class_names) else f"class[{idx}]"
        print(f"[PREDICTOR]   #{rank}  {name} = {preds[idx]:.6f}")
    print(f"[PREDICTOR] --------------------------\n")

    return class_idx, confidence, preds