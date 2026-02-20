import React from "react";

const services = [
  {
    title: "Paid Advertising",
    description:
      "We set up and manage ad campaigns on Google, Facebook, and LinkedIn to bring in enquiries from the right people.",
  },
  {
    title: "SEO",
    description:
      "We improve your search rankings so more people find your website when they search for what you offer.",
  },
  {
    title: "Social Media",
    description:
      "We manage your social media accounts — posting regularly, responding to comments, and growing your following.",
  },
  {
    title: "Content Marketing",
    description:
      "We write blog posts, email newsletters, and other content that helps your audience understand what you do.",
  },
];

const ServiceCards = () => {
  return (
    <div className="lg:mt-16 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  ">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md p-6 border border-gray-200"
        >
          <span className="text-xs font-medium text-pink-500 uppercase">
            Service
          </span>
          <h2 className="text-2xl font-semibold mt-2">{service.title}</h2>
          <p className="text-gray-600 text-sm mt-3">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

const holisticBenefits = [
  {
    title: "Access the Right Skills",
    description:
      "You get a dedicated team with experience across SEO, paid ads, design, and content — without hiring in-house.",
  },
  {
    title: "We Learn Your Business",
    description:
      "We take the time to understand how your business works, what your goals are, and what your customers care about.",
  },
  {
    title: "Get More from Your Budget",
    description:
      "Having everything under one roof means less duplication and better coordination across your marketing spend.",
  },
  {
    title: "Save Time and Hassle",
    description:
      "Avoid the overhead of managing multiple vendors by partnering with a single, full-service team.",
  },
  {
    title: "Get Results That Matter",
    description:
      "We’re results-driven and committed to helping you achieve measurable success across all channels.",
  },
  {
    title: "Consistent Across Channels",
    description:
      "Your messaging stays consistent whether someone finds you through Google, social media, or email.",
  },
];

const HolisticBenefits = () => {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-12">
      <div className="max-w-5xl mx-auto lg:pt-20 pt-8">
        <h2 className="text-2xl md:text-3xl font-normal text-gray-900 mb-10">
          Why a Marketing Retainer Makes Sense
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {holisticBenefits.map((item, index) => (
            <div key={index} className=" border-black">
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
    <div className="min-h-screen bg-gray-100 rounded-t-3xl text-gray-900 p-8 md:p-12">
      {/* Header Section */}
      <div className="max-w-2xl  lg:pt-12 pt-6">
        <h1 className="text-2xl md:text-4xl">
          Our Marketing Services
        </h1>
        <p className="mt-4 text-gray-600 text-sm">
          Good marketing is about being visible to the right people at the
          right time. We handle the strategy, the creative work, and the
          day-to-day management so you can focus on running your business.
        </p>
      </div>

      {/* Service Cards */}
      <ServiceCards />

      <HolisticBenefits />
    </div>
  );
};

export default MarketingServices;
