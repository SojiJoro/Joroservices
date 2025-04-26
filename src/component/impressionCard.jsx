// src/components/impressionCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHandshake } from 'react-icons/fa';

const stats = [
  { label: 'Brands Onboarded', value: '1K+' },
  { label: 'Engineers Engaged', value: '500+' },
  { label: 'Projects Delivered', value: '1K+' },
];

const ImpressionCard = () => {
  return (
    <div className="w-full max-w-lg mx-auto bg-gradient-to-r from-accent to-accent-dark text-white rounded-3xl p-8 shadow-2xl flex flex-col items-center space-y-8">
      {/* Icon */}
      <FaHandshake className="text-5xl" />

      {/* Tagline */}
      <h3 className="text-center text-xl sm:text-2xl font-semibold">
        Our collaborative expertise turns challenges into opportunities.
      </h3>

      {/* Statistics */}
      <div className="flex flex-wrap justify-center gap-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl font-bold">{stat.value}</span>
            <span className="text-sm sm:text-base uppercase">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <Link to="/getintouch">
        <button className="mt-4 bg-white text-accent-dark font-semibold px-8 py-3 rounded-full hover:opacity-90 transition">
          Request a Consultation
        </button>
      </Link>
    </div>
  );
};

export default ImpressionCard;
