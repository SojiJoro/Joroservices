// src/components/TestimonialCard.jsx
import React from 'react';

const TestimonialCard = ({ data }) => {
  const { quote } = data;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg h-full flex items-center justify-center">
      <p className="text-gray-800 text-base italic">“{quote}”</p>
    </div>
  );
};

export default TestimonialCard;
