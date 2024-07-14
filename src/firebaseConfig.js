// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAl8efQVx4RYa7VOsaLUKBtzmqT6Bpczs8",
  authDomain: "game-ify.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "game-ify.appspot.com",
  messagingSenderId: "218942865253",
  appId: "1:218942865253:web:be83348c351bc8a3db2b8c",
  measurementId: "G-3HWJD2BFL4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then(async (result) => {
      const idToken = await result.user.getIdToken();
      console.log(idToken)
      fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idToken }),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log("Backend response:", data);
      });
    })
    .catch((error) => {
      console.error("Error during sign-in:", error);
    });
};

export { auth, signInWithGoogle };
