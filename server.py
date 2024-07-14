from flask import Flask, request, jsonify
import firebase_admin
from firebase_admin import auth, credentials
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Initialize Firebase Admin SDK
cred = credentials.Certificate("game-ify-firebase-adminsdk-ejctv-8f6cdc4f32.json")
firebase_admin.initialize_app(cred)

@app.route("/api/login", methods=["POST"]) 
def login():
    id_token = request.json.get("idToken")
    try:
        # Verify the token with Firebase Admin SDK
        decoded_token = auth.verify_id_token(id_token)
        user_id = decoded_token["uid"]
        # Perform server-side actions (e.g., store user info in DB)
        return jsonify({"status": "success", "user_id": user_id})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 400

if __name__ == "__main__":
    app.run(debug=True)

