import logging

# Configure logging to console
logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
logger = logging.getLogger(__name__)

def log_prediction_result(disease_name: str, confidence: float):
    """
    Placeholder for logging model results or saving to a database.
    """
    logger.info(f"Predicted disease: {disease_name} with confidence: {confidence:.2f}")
