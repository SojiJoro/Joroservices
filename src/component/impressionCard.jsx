import React from 'react';
import { Link } from 'react-router-dom';

const stats = [
  { label: 'Clients Served', value: '20+' },
  { label: 'Team Members', value: '8+' },
  { label: 'Projects Delivered', value: '35+' },
];

const ImpressionCard = () => {
  return (
    <div className="bg-gradient-to-r from-accent to-accent-dark rounded-2xl p-10 lg:p-14">
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        <div className="flex-1 text-center lg:text-left">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
            We have helped 20+ businesses solve their tech problems and grow.
          </h3>
          <Link
            to="/getintouch"
            className="inline-block mt-4 bg-white text-accent-dark font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            Request a Consultation
          </Link>
        </div>
        <div className="flex gap-10 lg:gap-14">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <span className="text-4xl lg:text-5xl font-bold text-white">{stat.value}</span>
              <span className="text-sm text-white/80 uppercase tracking-wide mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpressionCard;
