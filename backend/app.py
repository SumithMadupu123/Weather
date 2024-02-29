from flask import Flask, request, jsonify
from flask_cors import CORS
import cv2
import numpy as np
import tensorflow as tf

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

SIZE = 224
model = tf.keras.models.load_model('sam_model.h5')

@app.route('/text', methods=['POST'])
def index():
    try:
        image_file = request.files['image']
        image = cv2.imdecode(np.fromstring(image_file.read(), np.uint8), cv2.IMREAD_COLOR)
        image = cv2.resize(image, (SIZE, SIZE), interpolation=cv2.INTER_AREA)
        image = np.expand_dims(image, axis=0)
        
        predictions = model.predict(image)
        predicted_class = np.argmax(predictions)
        
        class_names = ['Cloudy', 'Sunny', 'Lightning', 'Rain', 'Snow']  
        predicted_class_name = class_names[predicted_class]
        
        return jsonify({'predicted_class': predicted_class_name}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
