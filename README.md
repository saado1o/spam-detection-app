# Spam Detection System (Cybersecurity Project PoC)

This project is a Proof of Concept (PoC) for a spam detection system using machine learning with Python Flask backend. The application leverages a TF-IDF vectorizer and an XGBoost classification model to analyze incoming text messages and classify them as **spam** or **not spam**.

---

## Features

- Pretrained TF-IDF vectorizer for feature extraction from raw text
- Trained XGBoost model for accurate spam classification
- Simple REST API built with Flask for easy integration
- Docker containerization for easy deployment
- Separate pickle files for vectorizer and model for modularity
- JSON API endpoint `/predict` for batch prediction of messages

---

## Project Structure

spam-detection-app/
│
├── app.py # Flask backend API and application logic
├── tfidf_vectorizer.pkl # Saved TF-IDF vectorizer model
├── model.pkl # Saved XGBoost model
├── requirements.txt # Python dependencies
├── Dockerfile # Docker configuration file
└── README.md # Project documentation (this file)

text

---

## Installation and Setup

### Prerequisites

- Python 3.8+
- Docker (optional, for containerization)
- Git

### Local Setup

1. Clone the repository:

git clone https://github.com/yourusername/spam-detection-app.git
cd spam-detection-app

text

2. Create and activate a virtual environment:

python -m venv venv
source venv/bin/activate # On Windows: venv\Scripts\activate

text

3. Install dependencies:

pip install -r requirements.txt

text

4. Run the Flask application:

python app.py

text

The app will start on `http://127.0.0.1:5000`.

---

## Docker Setup (Optional)

Build the Docker image:

docker build -t spam-detection-app .

text

Run the Docker container:

docker run -p 5000:5000 spam-detection-app

text

---

## Usage

### API Endpoint

- POST `/predict`  
- Request body JSON format:

{
"texts": [
"Free tickets for concert now available!",
"Are we still meeting tomorrow at 2PM?"
]
}

text

- Response format:

{
"predictions": [
"spam",
"not spam"
]
}

text

---

## Model and Vectorizer Files

- `tfidf_vectorizer.pkl`: Contains the fitted TF-IDF vectorizer for text feature extraction.
- `model.pkl`: Contains the trained XGBoost classification model.

Make sure these files are present in the root directory before running the app or building the Docker image.

---

## Contribution

Contributions and improvements are welcome! Feel free to open issues or submit pull requests.

---

## License

This project is licensed under the MIT License.

---

## Acknowledgments

- Based on Python, Flask, scikit-learn, and XGBoost libraries
- Containerized using Docker

---

*Developed as a prototype cybersecurity project for spam message detection.*
