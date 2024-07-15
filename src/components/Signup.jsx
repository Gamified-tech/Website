// src/components/Signup.jsx
import React from "react";
import LoginHeader from "./LoginHeader";

const Signup = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <LoginHeader />
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-6 mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        {/* Signup form or content goes here */}
      </div>
    </div>
  );
};

export default Signup;
