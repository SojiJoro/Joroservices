import React from 'react';
import { Link } from 'react-router-dom';

const stats = [
  { label: 'Clients served', value: '20+' },
  { label: 'Projects delivered', value: '35+' },
  { label: 'In-house team', value: '8' },
];

const ImpressionCard = () => {
  return (
    <div className="bg-secondary rounded-xl p-10 lg:p-14">
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-16">
        <div className="flex-1">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            UK businesses we have helped with tech and design.
          </h3>
          <Link
            to="/getintouch"
            className="inline-block bg-accent text-white font-semibold px-7 py-3 rounded-lg hover:bg-accent-dark transition-colors text-sm"
          >
            Talk to us
          </Link>
        </div>
        <div className="flex gap-10 lg:gap-14">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-4xl lg:text-5xl font-bold text-white">{stat.value}</span>
              <span className="text-xs text-white/70 uppercase tracking-wide mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpressionCard;
