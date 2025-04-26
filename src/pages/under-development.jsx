import React from "react";
import { useNavigate } from "react-router-dom";

const UnderDevelopment = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center p-6">
      <h1 className="text-3xl font-bold mb-4">
        🚧 This Page is Under Development 🚧
      </h1>
      <p className="text-lg opacity-80 mb-6">
        We're working hard to bring this feature soon. Stay tuned!
      </p>
      <button
        className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition duration-300"
        onClick={() => navigate("/")}
      >
        🔙 Back to Home
      </button>
    </div>
  );
};

export default UnderDevelopment;
