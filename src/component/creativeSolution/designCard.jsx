import React from 'react';

const services = [
  {
    title: 'Brand Identity & Strategy',
    description:
      'We craft cohesive brand identities that resonate with your audience. From logo creation to a complete visual language, we ensure every touchpoint reflects your story.',
  },
  {
    title: 'UX/UI Design',
    description:
      'Our UX research and interface designs focus on clarity and engagement. We streamline user journeys, reducing friction and increasing satisfaction.',
  },
  {
    title: 'Responsive Web Development',
    description:
      'Using the latest front-end frameworks, we build fast, accessible websites that adapt seamlessly across devices, delivering performance and reliability.',
  },
  {
    title: 'Digital Marketing & SEO',
    description:
      'From targeted ad campaigns to organic search optimisation, we develop data-driven strategies that boost visibility and drive qualified traffic.',
  },
  {
    title: 'Content Strategy & Creation',
    description:
      'We help you tell your brand’s story with compelling copy, engaging visuals, and multimedia content that connects and converts.',
  },
];

const DesignCard = () => {
  return (
    <div className="min-h-screen bg-white text-black p-8 md:p-16">
      {/* Header Section */}
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold">Welcome to Joro Services</h1>
        <p className="mt-4 text-black text-base md:text-lg">
          At Joro Services, we blend creativity, technology, and strategy to deliver tailored digital experiences that captivate your audience and drive growth. From strategic branding to seamless web development and targeted marketing, we support your vision at every step.
        </p>
      </div>

      {/* Service Cards */}
      <div className="lg:mt-16 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 border border-accent-dark hover:shadow-xl transition"
          >
            <span className="text-sm font-medium text-accent-dark uppercase">
              Service
            </span>
            <h2 className="text-2xl font-semibold mt-2 text-black">{service.title}</h2>
            <p className="text-black text-sm mt-3">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignCard;
