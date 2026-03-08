import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../component/Footer';
import { ServiceList } from './serviceData';
import SEO from '../component/SEO';
import pagesSEO from '../seo/pagesSEO';
import { organizationSchema, breadcrumbSchema } from '../seo/schemas';

const Services = () => (
  <div className="bg-white min-h-screen">
    <SEO
      {...pagesSEO['/services']}
      jsonLd={[
        organizationSchema,
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ]),
      ]}
    />

    {/* Hero Banner */}
    <section id="hero" className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white pt-28 pb-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-accent-light font-semibold text-sm uppercase tracking-widest mb-4">Our Expertise</p>
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">
          Our Expertise, Your Advantage
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Explore our digital solutions, crafted to solve complex challenges and accelerate growth.
        </p>
      </div>
    </section>

    {/* Services Grid */}
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ServiceList.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">{service.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Services;
