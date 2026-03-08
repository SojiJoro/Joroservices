import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const DevHeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Software Development</p>
        <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
          Web &amp; Mobile Apps
          <br className="hidden sm:block" />
          <span className="text-accent">Built to Scale</span>
        </h1>
        <p className="text-lg text-white/80 max-w-2xl mt-4 leading-relaxed">
          We build web applications, mobile apps, and APIs using React, Next.js, and cloud technologies. Fast, secure, and built to grow with you. Whether you need an MVP or a full platform.
        </p>
        <Link
          to="/getintouch"
          className="mt-8 inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
        >
          Request a Free Quote <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default DevHeroSection;
