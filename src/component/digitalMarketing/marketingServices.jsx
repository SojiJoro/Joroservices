import React from "react";

const services = [
  {
    title: "Paid Advertising",
    description:
      "Attract leads and spark conversations through strategic ad campaigns tailored to your target audience.",
  },
  {
    title: "SEO",
    description:
      "Boost your search rankings and drive consistent website traffic with ongoing search engine optimization.",
  },
  {
    title: "Social Media",
    description:
      "Foster brand loyalty and grow your community with compelling and consistent social media engagement.",
  },
  {
    title: "Content Marketing",
    description:
      "Strengthen brand awareness by delivering valuable content through emails, blog posts, digital PR, and more.",
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
    title: "Tap into Expert Knowledge",
    description:
      "Leverage our extensive in-house expertise with access to a dedicated team of over 100 professionals.",
  },
  {
    title: "Seamlessly Align with Your Business",
    description:
      "We fully embed ourselves in your business, gaining a deep understanding of your goals, vision, and preferences.",
  },
  {
    title: "Maximize Your Marketing Budget",
    description:
      "Save money by centralizing all your outsourced marketing services under one streamlined solution.",
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
    title: "Unified Omnichannel Strategy",
    description:
      "With our integrated team covering every platform, we deliver a consistent and effective omnichannel approach.",
  },
];

const HolisticBenefits = () => {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-12">
      <div className="max-w-5xl mx-auto lg:pt-20 pt-8">
        <h2 className="text-2xl md:text-3xl font-normal text-gray-900 mb-10">
          Elevate Your Marketing Strategy with a Holistic Retainer Approach
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
          Your One-Stop Hub for Marketing Excellence
        </h1>
        <p className="mt-4 text-gray-600 text-sm">
          Eye-catching design is key to making a powerful first impression and
          building long-term customer connections. Our team crafts distinctive
          visuals that help your business stand out, capturing attention while
          staying true to your brand’s voice and objectives.
        </p>
      </div>

      {/* Service Cards */}
      <ServiceCards />

      <HolisticBenefits />
    </div>
  );
};

export default MarketingServices;
