# Tomato Disease Detection AI System 🍅🦠

An end-to-end AI system for detecting and diagnosing tomato leaf diseases using deep learning.

## Project Overview
This project is a web-based application where users can upload an image of a tomato leaf to receive:
1.  **Health Status**: Healthy or Diseased.
2.  **Disease Name**: Identification of the specific disease (e.g., Early Blight).
3.  **Confidence Score**: AI's certainty in the prediction.
4.  **Recommendations**: Expert treatment and prevention tips.

## Tech Stack
-   **Model Training**: Python, TensorFlow, Keras (MobileNetV2 Transfer Learning)
-   **Dataset**: PlantVillage Tomato Dataset
-   **Backend**: FastAPI
-   **Frontend**: React + Vite + Tailwind CSS
-   **Documentation**: Markdown

## Project Structure
-   `dataset/`: PlantVillage tomato leaf images.
-   `backend/`: FastAPI source code and configuration.
    -   `app/`: Core logic (inference, preprocessing).
    -   `data/`: JSON mappings for classes and recommendations.
    -   `models/`: Trained model binaries.
-   `frontend/`: React + Vite + Tailwind CSS UI (Placeholder).
-   `notebooks/`: Jupyter Notebooks for training and evaluation.
-   `docs/`: Project documentation and architecture details.

## Project Status: PHASE 3 - FULL RECOVERY & POLISH 🚀

The project has successfully bypassed several critical AI engineering hurdles:
1.  **AI Recovery**: Fixed "Dataset Collapse" and "Catastrophic Forgetting" by enabling Transfer Learning (`weights='imagenet'`).
2.  **Logic Fix**: Resolved "Double Preprocessing" bug in the backend that distorted AI vision.
3.  **Real-Time Diagnostics**: Fully functional FastAPI/React integration with real-time prediction and recommendations.

### Next Objectives (Active)
- [x] Correct Model Training Strategy (`weights='imagenet'`)
- [x] Resolve Backend Preprocessing Conflict
- [x] Implement Dynamic Frontend Recommendations
- [ ] Perform Base-Layer Fine-Tuning (for 95%+ accuracy)
- [ ] Deploy to Cloud Infrastructure (Vercel/DigitalOcean)

## Getting Started
1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/tomato-disease-detection.git
    cd tomato-disease-detection
    ```
2.  **Setup Training Environment**:
    ```bash
    pip install -r requirements-training.txt
    ```
3.  **Start Model Training**:
    Follow the steps in `notebooks/train_tomato_disease_model.ipynb`.

## License
MIT License
