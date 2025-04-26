import React from 'react';
import { FaCircleDot } from 'react-icons/fa6';

const DevHeroSection = () => {
  return (
    <section className="grid p-4 justify-center grid-cols-1 lg:grid-cols-4 lg:items-center gap-4 min-h-screen bg-white">
      {/* Left Content */}
      <div className="flex pt-16 lg:col-span-2 flex-col">
        <p className="flex items-center gap-4 pb-4 text-xs">
          <FaCircleDot className="text-accent-dark" />
          <span className="text-accent-dark uppercase">Development</span>
        </p>
        <h1 className="text-3xl lg:text-5xl font-medium text-black">
          Build a Powerful Online Presence with Joro Services
        </h1>
        <p className="text-sm lg:text-base text-black w-full md:w-4/5 mt-4">
          Partner with us to create a performant, scalable website tailored to your brand. Our development expertise ensures fast loading times, seamless user experiences, and a platform that grows with your business.
        </p>
      </div>

      {/* Right Image */}
      <div
        className="bg-bgImage3 h-[50vh] lg:h-[80vh] lg:mt-12 lg:col-span-2 rounded-lg bg-cover bg-center bg-no-repeat"
        role="img"
        aria-label="Website development showcase"
      />
    </section>
  );
};

export default DevHeroSection;
