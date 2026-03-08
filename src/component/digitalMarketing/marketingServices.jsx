import React from 'react';

const services = [
  {
    title: 'Paid Advertising',
    description:
      'Attract leads and spark conversations through strategic ad campaigns tailored to your target audience.',
  },
  {
    title: 'SEO',
    description:
      'Boost your search rankings and drive consistent website traffic with ongoing search engine optimization.',
  },
  {
    title: 'Social Media',
    description:
      'Foster brand loyalty and grow your community with compelling and consistent social media engagement.',
  },
  {
    title: 'Content Marketing',
    description:
      'Strengthen brand awareness by delivering valuable content through emails, blog posts, digital PR, and more.',
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
      'Leverage our extensive in-house expertise with access to a dedicated team of over 100 professionals.',
  },
  {
    title: 'Seamlessly Align with Your Business',
    description:
      'We fully embed ourselves in your business, gaining a deep understanding of your goals, vision, and preferences.',
  },
  {
    title: 'Maximize Your Marketing Budget',
    description:
      'Save money by centralizing all your outsourced marketing services under one streamlined solution.',
  },
  {
    title: 'Save Time and Hassle',
    description:
      'Avoid the overhead of managing multiple vendors by partnering with a single, full-service team.',
  },
  {
    title: 'Get Results That Matter',
    description:
      'We\'re results-driven and committed to helping you achieve measurable success across all channels.',
  },
  {
    title: 'Unified Omnichannel Strategy',
    description:
      'With our integrated team covering every platform, we deliver a consistent and effective omnichannel approach.',
  },
];

const HolisticBenefits = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-10">
          Elevate Your Marketing Strategy with a Holistic Retainer Approach
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
            Your One-Stop Hub for Marketing Excellence
          </h2>
          <p className="mt-4 text-gray-600 text-sm max-w-2xl">
            Eye-catching design is key to making a powerful first impression and
            building long-term customer connections. Our team crafts distinctive
            visuals that help your business stand out, capturing attention while
            staying true to your brand's voice and objectives.
          </p>

          <ServiceCards />
        </div>
      </section>

      <HolisticBenefits />
    </div>
  );
};

export default MarketingServices;
