import React from 'react';

const services = [
  {
    title: 'Brand Identity & Strategy',
    description:
      'We create brand identities that look professional and consistent — logos, colour schemes, typography, and guidelines that work across print and digital.',
  },
  {
    title: 'UX/UI Design',
    description:
      'We research how your users actually behave, then design interfaces that are clear and easy to navigate. Less confusion, more completed actions.',
  },
  {
    title: 'Responsive Web Development',
    description:
      'We build websites using React and Next.js that work well on phones, tablets, and desktops. Fast loading, accessible, and easy to update.',
  },
  {
    title: 'Digital Marketing & SEO',
    description:
      'We run paid ad campaigns and improve your organic search rankings so the right people can find your business online.',
  },
  {
    title: 'Content Strategy & Creation',
    description:
      ‘We write copy, create visuals, and produce content that explains what you do clearly and gets people interested.’,
  },
];

const DesignCard = () => {
  return (
    <div className="min-h-screen bg-white text-black p-8 md:p-16">
      {/* Header Section */}
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold">Welcome to Joro Services</h1>
        <p className="mt-4 text-black text-base md:text-lg">
          We handle design, development, and marketing so everything works together. Whether you need a new brand identity, a website rebuild, or help getting found online, we can sort it out.
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
