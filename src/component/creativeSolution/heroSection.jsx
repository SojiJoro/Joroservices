import React from 'react'
import { FaCircleDot } from 'react-icons/fa6'
import { Typewriter } from 'react-simple-typewriter'

const HeroSection = () => {
  return (
    <section className="grid p-4 justify-center grid-cols-1 lg:grid-cols-4 lg:items-center gap-4 min-h-screen bg-white">
      {/* Left: Text */}
      <div className="flex pt-20 lg:pt-10 lg:col-span-2 flex-col">
        <p className="flex items-center gap-4 pb-4 text-xs">
          <FaCircleDot className="text-accent-dark" />
          <span className="text-accent-dark uppercase">Creative Solutions</span>
        </p>
        <h1 className="text-2xl h-28 lg:h-36 lg:text-5xl font-medium text-black">
          <Typewriter
            words={[
              'Design that resonates and converts',
              'Web experiences tailored to your brand',
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={40}
            deleteSpeed={30}
            delaySpeed={1500}
          />
        </h1>
        <p className="text-sm lg:text-base text-black pr-4 mt-4">
          At Joro Services, we combine creativity with strategic insight to build
          digital and print experiences that stand out. From engaging websites
          and seamless interfaces to eye-catching graphics, our work is designed
          to capture your audience and drive real results.
        </p>
      </div>

      {/* Right: Background image */}
      <div
        className="bg-bgImage8 h-[50vh] lg:h-[80vh] mt-12 lg:col-span-2 rounded-lg bg-cover bg-center bg-no-repeat"
        role="img"
        aria-label="Showcase of our creative work"
      />
    </section>
  )
}

export default HeroSection
