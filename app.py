import pickle
from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

# Load TF-IDF vectorizer and XGBoost model once at startup
with open('model/tfidf_vectorizer.pkl', 'rb') as f_vec:
    tfidf_vectorizer = pickle.load(f_vec)

with open('model/model.pkl', 'rb') as f_model:
    model = pickle.load(f_model)

@app.route('/')
def home():
    # Serve the main HTML page (if you have one)
    return render_template('index.html')  # Ensure index.html exists in 'templates' folder

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json(force=True)
        texts = data.get('texts', [])
        if not texts:
            return jsonify({'error': 'No input texts provided'}), 400

        # Transform raw texts to model input features
        features = tfidf_vectorizer.transform(texts)

        # Model prediction
        preds = model.predict(features)

        # Map predictions to labels
        labels = ['spam' if p == 1 else 'not spam' for p in preds]

        return jsonify({'predictions': labels})

    except Exception as e:
        # Return error info as JSON
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
