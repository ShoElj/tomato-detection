import json
import os

# Base directory for data
DATA_DIR = os.path.join(os.path.dirname(__file__), "..", "data")
RECOMMENDATIONS_PATH = os.path.join(DATA_DIR, "disease_recommendations.json")

def get_recommendations(disease_name: str):
    """
    Lookup recommendations from disease_recommendations.json based on disease name.
    """
    if not os.path.exists(RECOMMENDATIONS_PATH):
        return {
            "status": "Unknown",
            "treatment": ["Recommendations file not found."],
            "prevention": ["Please ensure disease_recommendations.json exists in backend/data/"]
        }
    
    try:
        with open(RECOMMENDATIONS_PATH, 'r', encoding='utf-8') as f:
            data = json.load(f)
            
        # Try to find specific disease, or return a default
        recommendation = data.get(disease_name, {
            "status": "Diseased",
            "treatment": ["Consult with a local agricultural specialist for specific treatment."],
            "prevention": ["Maintain good hygiene and monitor the crop closely."]
        })
        
        # Ensure treatment and prevention are lists even if single strings are provided in JSON
        if isinstance(recommendation.get("treatment"), str):
            recommendation["treatment"] = [recommendation["treatment"]]
        if isinstance(recommendation.get("prevention"), str):
            recommendation["prevention"] = [recommendation["prevention"]]
            
        return recommendation
    except Exception as e:
        return {
            "status": "Error",
            "treatment": [f"Error loading recommendations: {str(e)}"],
            "prevention": []
        }