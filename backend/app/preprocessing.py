import tensorflow as tf

def preprocess_image(image_bytes: bytes):
    """
    Preprocesses raw image bytes to match EXACTLY what the model expects.

    The saved Keras model already includes internal normalization layers
    (true_divide and subtract) equivalent to MobileNetV2 preprocessing.
    
    This function handles:
        1. Decoding image bytes to a uint8 tensor
        2. Resizing to (224, 224) using bilinear interpolation
        3. Casting to float32
        4. Expanding the batch dimension
        
    Pixel values are kept in the [0, 255] range because the model
    internal layers will scale them to [-1, 1].
    """
    # 1. Decode raw bytes to a uint8 tensor
    img = tf.image.decode_image(image_bytes, channels=3, expand_animations=False)

    # 2. Resize to model input size
    img = tf.image.resize(img, (224, 224))

    # 3. Cast to float32 (Pixel range is [0.0, 255.0])
    img = tf.cast(img, tf.float32)

    # 4. Debug Stats before passing to model
    print(f"\n[PREPROCESS] ---- Tensor Stats ----")
    print(f"[PREPROCESS] Shape: {img.shape}")
    print(f"[PREPROCESS] Range: [{tf.reduce_min(img):.1f}, {tf.reduce_max(img):.1f}]")
    print(f"[PREPROCESS] Mean : {tf.reduce_mean(img):.4f}")
    print(f"[PREPROCESS] -----------------------\n")

    # 5. Add batch dimension: (224, 224, 3) -> (1, 224, 224, 3)
    img = tf.expand_dims(img, axis=0)

    return img
