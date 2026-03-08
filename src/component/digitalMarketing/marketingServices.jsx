import React from 'react';

const services = [
  {
    title: 'Paid Advertising',
    description:
      'Attract leads and start real conversations through ad campaigns built around your target audience.',
  },
  {
    title: 'SEO',
    description:
      'Boost your search rankings and drive consistent website traffic with ongoing search engine optimization.',
  },
  {
    title: 'Social Media',
    description:
      'Build a loyal following with regular, quality social media posts that people actually engage with.',
  },
  {
    title: 'Content Marketing',
    description:
      'Get your name out there with useful content, including emails, blog posts, digital PR, and more.',
  },
];

const ServiceCards = () => {
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl border border-gray-100 p-6"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">
            Service
          </span>
          <h2 className="text-2xl font-semibold mt-2 text-gray-900">{service.title}</h2>
          <p className="text-gray-600 text-sm mt-3">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

const holisticBenefits = [
  {
    title: 'Tap into Expert Knowledge',
    description:
      'Get access to our team\'s experience, with a dedicated group of over 100 professionals ready to help.',
  },
  {
    title: 'We Get to Know Your Business',
    description:
      'We take the time to understand your goals, your vision, and what matters to you before we start any work.',
  },
  {
    title: 'Maximize Your Marketing Budget',
    description:
      'Save money by keeping all your marketing services with one team instead of juggling multiple agencies.',
  },
  {
    title: 'Save Time and Hassle',
    description:
      'Stop spending time managing multiple vendors. Work with one team that handles everything.',
  },
  {
    title: 'Get Results That Matter',
    description:
      'We focus on results you can actually measure, across every channel we manage for you.',
  },
  {
    title: 'One Strategy Across All Channels',
    description:
      'Our team covers every platform, so your messaging stays consistent and works together instead of in silos.',
  },
];

const HolisticBenefits = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-10">
          Get More From Your Marketing With a Retainer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {holisticBenefits.map((item, index) => (
            <div key={index}>
              <hr className="mb-4 w-full bg-gray-300" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MarketingServices = () => {
  return (
    <div className="bg-gray-50 rounded-t-3xl text-gray-900">
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Expertise</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            All Your Marketing, One Team
          </h2>
          <p className="mt-4 text-gray-600 text-sm max-w-2xl">
            Good design makes a strong first impression and keeps customers coming back.
            Our team creates visuals that help your business stand out while
            staying true to your brand.
          </p>

          <ServiceCards />
        </div>
      </section>

      <HolisticBenefits />
    </div>
  );
};

export default MarketingServices;
