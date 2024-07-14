
// src/components/Login.jsx
import React from 'react';
import { signInWithGoogle } from '../firebaseConfig';

const Login = () => {
  const handleGoogleLogin = () => {
    // This is where you would integrate with Google OAuth
    console.log('Login with Google button clicked');
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <button onClick={signInWithGoogle} className="google-login-button">
        Login with Google
      </button>
    </div>
  );
};

export default Login;
