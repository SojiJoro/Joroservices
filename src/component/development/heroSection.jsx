import React from 'react';
import { Link } from 'react-router-dom';

const DevHeroSection = () => {
  return (
    <section className="bg-primary text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight max-w-3xl">
          Web and mobile apps built to scale.
        </h1>
        <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
          We build web applications, mobile apps, and APIs using React, Next.js, and cloud technologies. Whether you need an MVP or a full platform.
        </p>
        <Link
          to="/getintouch"
          className="mt-8 inline-flex items-center bg-accent text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-accent-dark transition-colors text-sm"
        >
          Talk to us
        </Link>
      </div>
    </section>
  );
};

export default DevHeroSection;
