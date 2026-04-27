import React from 'react';

const services = [
  {
    title: 'Brand Identity',
    description:
      'Logo, colour, typography, and guidelines. A complete identity that you own and can hand to any printer or supplier.',
  },
  {
    title: 'UX/UI Design',
    description:
      'User research, wireframes, and interface design. We work in Figma and hand off production-ready files with a working prototype.',
  },
  {
    title: 'Responsive Web Design',
    description:
      'Custom websites built in React or Next.js. Fast on mobile, accessible by default, easy for you to update.',
  },
  {
    title: 'Digital Marketing & SEO',
    description:
      'Paid ads and organic search. Monthly reporting on the numbers that matter: leads, cost per lead, conversion rate.',
  },
  {
    title: 'Content & Copy',
    description:
      'Website copy, case studies, and supporting content. Written by humans, edited for clarity, structured for search.',
  },
];

const DesignCard = () => {
  return (
    <div className="bg-white text-gray-900 px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold">What we do</h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            Five services, delivered in-house. We design, write, build, and ship.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignCard;
