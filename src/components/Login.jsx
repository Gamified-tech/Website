import React from "react";
import { Link } from "react-router-dom";
import LoginHeader from "./LoginHeader";
import { signInWithGoogle } from "../firebaseConfig";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <LoginHeader />
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-6 mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <button
          onClick={signInWithGoogle}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 mb-4"
        >
          Sign in with Google
        </button>
        <div className="text-center">
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
