import React from 'react';

const TestimonialCard = ({ data }) => {
  const { quote, name, role } = data;

  return (
    <div className="bg-white/5 border border-white/10 p-7 rounded-xl h-full flex flex-col justify-between">
      <p className="text-gray-300 text-sm leading-relaxed">&ldquo;{quote}&rdquo;</p>
      {name && (
        <div className="mt-5 pt-5 border-t border-white/10">
          <p className="text-sm font-semibold text-white">{name}</p>
          {role && <p className="text-xs text-gray-500">{role}</p>}
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;
