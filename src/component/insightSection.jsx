import React from 'react';
import { insightData } from '../data';

const InsightsSection = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Insights</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Latest Insights for Your Business
          </h2>
          <p className="text-gray-600 max-w-2xl text-lg">
            Articles, guides, and lessons from our work with real clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insightData.map((data, i) => (
            <article
              key={i}
              className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={data.image}
                  alt={data.title}
                  className="h-52 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-6">
                {data.category && (
                  <span className="inline-block bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                    {data.category}
                  </span>
                )}
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">
                  {data.title}
                </h3>
                {data.summary && (
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {data.summary}
                  </p>
                )}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-xs">
                    {data.author.initials}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{data.author.name}</p>
                    <p className="text-xs text-gray-500">{data.date}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
