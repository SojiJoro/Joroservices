// src/components/TestimonialCard.jsx
import React from 'react';

const TestimonialCard = ({ data }) => {
  const { quote, name, role } = data;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg h-full flex flex-col justify-between">
      <p className="text-gray-800 text-base italic mb-4">&ldquo;{quote}&rdquo;</p>
      {name && (
        <div className="mt-auto pt-4 border-t border-gray-100">
          <p className="text-sm font-semibold text-gray-900">{name}</p>
          {role && <p className="text-xs text-gray-500">{role}</p>}
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;
