import React from "react";
import { FaCircleDot } from "react-icons/fa6";

const DigitalHeroSection = () => {
  return (
    <section className="relative grid p-4 justify-center grid-cols-1 lg:grid-cols-5 w-full overflow-hidden min-h-screen lg:items-center gap-4">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          className="object-cover w-full h-full max-w-full"
          src="/vid1.mp4"
          muted
          loop
          autoPlay
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 pt-16 lg:pt-0 lg:col-span-3 flex flex-col">
        <p className="flex flex-row items-center gap-4 pb-4 text-xs">
          <FaCircleDot className="text-red-400" />
          <span>Development</span>
        </p>
        <h1 className="text-3xl lg:text-5xl font-[500] text-white">
          Build Your Digital Presence <br />
          with JoroServices
        </h1>
        <p className="text-sm lg:text-base text-gray-300 w-4/5 mt-4">
          Partnering with us means getting a website that truly represents your
          brand, highlights your strengths, and leaves a lasting impression on
          your visitors.
        </p>
      </div>

      {/* Bottom Right Image Section */}
      <div className="absolute bottom-0 right-0 z-20 h-[50vh] lg:w-[40vw] w-[90vw] lg:mt-12 rounded-lg bg-cover bg-center bg-no-repeat bg-bgImage3"></div>
    </section>
  );
};

export default DigitalHeroSection;
