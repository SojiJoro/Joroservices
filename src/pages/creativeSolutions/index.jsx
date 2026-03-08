import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Footer from '../../component/Footer';
import SEO from '../../component/SEO';
import pagesSEO from '../../seo/pagesSEO';
import { serviceSchema, breadcrumbSchema } from '../../seo/schemas';

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
    description: 'We help your brand visually communicate its mission, values, and edge — beautifully and clearly.',
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
  <main className="bg-white text-gray-900">
    <SEO
      {...pagesSEO['/creative-solutions']}
      jsonLd={[
        serviceSchema({
          name: 'Creative Solutions',
          description: 'Professional website design, graphic design, branding, and UI/UX services.',
          url: '/creative-solutions',
          category: 'Creative Design Services',
        }),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Creative Solutions', path: '/creative-solutions' },
        ]),
      ]}
    />

    {/* Hero Section */}
    <section id="hero" className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-accent-light font-semibold text-sm uppercase tracking-widest mb-4">Creative Solutions</p>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Make Your Brand Unforgettable with World-Class Design
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
            We help businesses tell better stories through striking design, clean UI, and intuitive UX — so your customers remember and return.
          </p>
          <Link
            to="/getintouch"
            className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
          >
            Start a Project
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>

    {/* Services Grid */}
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Services</p>
          <h2 className="text-3xl lg:text-4xl font-bold">What We Offer</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {creativeServices.map((service, index) => (
            <Link
              key={index}
              to={`/creative-solutions/${service.slug}`}
              className="group bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-accent transition-colors">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">{service.description}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
                Learn more <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Benefits Section */}
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Benefits</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Why Creative Design Matters</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {creativeBenefits.map((item, index) => (
            <div key={index} className="border-l-4 border-accent pl-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Make a Lasting Impression?</h2>
        <p className="text-gray-400 mb-8">Let us craft a visual identity that sets you apart from the competition.</p>
        <Link
          to="/getintouch"
          className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
        >
          Get in Touch
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>

    <Footer />
  </main>
);

export default CreativeSolutions;
