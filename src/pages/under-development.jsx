import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEO from '../component/SEO';

const UnderDevelopment = () => {
  const navigate = useNavigate();

  return (
    <div id="hero" className="flex flex-col items-center justify-center min-h-screen bg-primary text-white text-center px-4">
      <SEO
        title="Page Not Found | Joro Services"
        description="The page you are looking for is under development. Return to Joro Services homepage for web development, digital marketing, and IT services."
      />
      <div className="max-w-md mx-auto">
        <div className="text-6xl font-bold text-accent/30 mb-6">404</div>
        <h1 className="text-3xl font-bold mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-400 mb-8 leading-relaxed">
          The page you are looking for is under development or does not exist. We are working hard to bring it to you soon.
        </p>
        <button
          className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-6 py-3 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20"
          onClick={() => navigate("/")}
        >
          <ArrowLeft size={18} />
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default UnderDevelopment;
