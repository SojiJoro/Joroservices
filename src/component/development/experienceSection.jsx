import React from 'react';

const metrics = [
  { desc: 'Years in business', fig: '4' },
  { desc: 'Projects shipped', fig: '35+' },
  { desc: 'Active clients', fig: '20+' },
  { desc: 'In-house team', fig: '8' },
];

const ExperienceSection = () => (
  <section className="py-20 lg:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 max-w-2xl">
        Where we are at
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m, i) => (
          <div
            key={i}
            className="bg-gray-50 rounded-xl border border-gray-100 p-6"
          >
            <span className="text-3xl lg:text-4xl font-bold text-gray-900 block mb-2">{m.fig}</span>
            <p className="text-xs text-gray-500 uppercase tracking-wider">{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
