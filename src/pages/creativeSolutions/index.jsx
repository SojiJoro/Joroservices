import React from 'react';
import { Link } from 'react-router-dom';
import { FaCircleDot } from 'react-icons/fa6';
import Footer from '../../component/Footer';

const creativeServices = [
  {
    title: 'Website Design',
    description: 'Custom-crafted websites that balance aesthetics with usability, built to impress and convert.',
    slug: 'website-design',
  },
  {
    title: 'Graphic Design and Branding',
    description: 'Create a consistent brand identity with logos, typography, colours, and marketing visuals.',
    slug: 'graphic-design-and-branding',
  },
  {
    title: 'User Interface and Experience',
    description: 'Intuitive interfaces designed for smooth user journeys and higher engagement across platforms.',
    slug: 'user-interface-and-experience',
  },
];

const creativeBenefits = [
  {
    title: 'Tailored Visual Identity',
    description: 'We help your brand visually communicate its mission, values, and edge—beautifully and clearly.',
  },
  {
    title: 'High-Conversion Design',
    description: 'Every layout, element, and CTA is optimised to move your audience toward action.',
  },
  {
    title: 'Unified Brand Consistency',
    description: 'From your logo to your website and beyond, we make sure your brand speaks with one voice.',
  },
  {
    title: 'User-Centric Approach',
    description: 'Our UI/UX solutions are grounded in real user behaviour, ensuring seamless experiences.',
  },
];

const CreativeSolutions = () => (
  <main className="bg-white text-black">
    {/* Hero Section */}
    <section className="relative grid p-4 justify-center grid-cols-1 lg:grid-cols-5 w-full overflow-hidden min-h-screen lg:items-center gap-4">
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
          <span>Creative Solutions</span>
        </p>
        <h1 className="text-3xl lg:text-5xl font-[600] text-white">
          Make Your Brand Unforgettable <br />
          with World-Class Design
        </h1>
        <p className="text-sm lg:text-base text-gray-300 w-4/5 mt-4">
          We help businesses tell better stories through striking design, clean UI, and intuitive UX—so your customers remember and return.
        </p>
      </div>

      {/* Image section */}
      <div className="absolute bottom-0 right-0 z-20 h-[50vh] lg:w-[40vw] w-[90vw] lg:mt-12 rounded-lg bg-cover bg-center bg-no-repeat bg-bgImage3"></div>
    </section>

    {/* Services Grid */}
    <section className="py-20 px-4 lg:px-32 bg-gray-50">
      <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-12">
        What We Offer
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {creativeServices.map((service, index) => (
          <div key={index} className="p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-accent">{service.title}</h3>
            <p className="text-sm text-gray-700 mb-4">{service.description}</p>
            <Link
              to={`/creative-solutions/${service.slug}`}
              className="text-sm font-semibold text-blue-700 hover:underline"
            >
              Learn more →
            </Link>
          </div>
        ))}
      </div>
    </section>

    {/* Creative Benefits Section */}
    <section className="px-4 md:px-8 lg:px-16 py-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
          Why Creative Design Matters
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {creativeBenefits.map((item, index) => (
            <div key={index} className="border-l-4 border-accent pl-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-accent-dark text-white py-16 text-center">
      <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
        Ready to Make a Lasting Impression?
      </h2>
      <Link
        to="/contact"
        className="inline-block bg-white text-accent-dark font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
      >
        Let’s Talk Design
      </Link>
    </section>

    <Footer />
  </main>
);

export default CreativeSolutions;
