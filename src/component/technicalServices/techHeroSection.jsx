import React from 'react';
import { FaCircleDot } from 'react-icons/fa6';

const TechHeroSection = () => (
  <section id="hero" className="grid p-4 pt-16 justify-center grid-cols-1 lg:grid-cols-4 lg:items-center gap-4 min-h-[75vh] bg-[#f1f5f9]">
    <div className="flex lg:col-span-2 flex-col text-center lg:text-left">
      <p className="flex items-center justify-center lg:justify-start gap-4 pb-4 text-xs text-gray-700 font-semibold">
        <FaCircleDot className="text-yellow-500" />
        <span>Technical Services</span>
      </p>
      <h1 className="text-3xl lg:text-5xl font-[500] text-gray-900">
        Reliable IT & Infrastructure Support
      </h1>
      <p className="text-sm lg:text-base text-gray-700 w-full lg:w-4/5 mt-4">
        From cybersecurity to cloud management, we keep your business running smoothly and securely—so you can focus on growth.
      </p>
    </div>
    <div className="lg:col-span-2 rounded-lg bg-gradient-to-br from-accent/20 to-accent-dark/30 w-full h-[50vh] lg:h-[80vh] flex items-center justify-center">
      <p className="text-6xl opacity-30">🛡️</p>
    </div>
  </section>
);

export default TechHeroSection;
