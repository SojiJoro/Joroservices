import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const TechHeroSection = () => (
  <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white pt-28 pb-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Managed IT Services</p>
      <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
        IT Support, Cybersecurity &amp; Cloud
        <br className="hidden sm:block" />
        <span className="text-accent">That Just Works</span>
      </h1>
      <p className="text-lg text-white/80 max-w-2xl mt-4 leading-relaxed">
        Proactive managed IT services for UK businesses. We handle your infrastructure, security, and cloud so you can focus on growth. AWS-certified. GDPR-compliant. No long-term lock-in.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <Link
          to="/getintouch"
          className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
        >
          Get a Free IT Assessment <ArrowRight size={16} />
        </Link>
        <Link
          to="/technical-services/cybersecurity"
          className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-all text-sm"
        >
          Free Security Health Check
        </Link>
      </div>
    </div>
  </section>
);

export default TechHeroSection;
