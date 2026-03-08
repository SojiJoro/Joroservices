// src/pages/technicalServices/index.jsx
import React from 'react';
import Footer from '../../component/Footer';
import TechHeroSection from '../../component/technicalServices/techHeroSection';
import TechServices    from '../../component/technicalServices/techServices';
import SEO from '../../component/SEO';
import pagesSEO from '../../seo/pagesSEO';
import { serviceSchema, breadcrumbSchema } from '../../seo/schemas';

const TechnicalServices = () => (
  <div className="bg-white text-gray-900">
    <SEO
      {...pagesSEO['/technical-services']}
      jsonLd={[
        serviceSchema({
          name: 'Technical Services',
          description: 'Professional IT support, cybersecurity, and cloud infrastructure services in Aldershot, Hampshire.',
          url: '/technical-services',
          category: 'IT and Technical Services',
        }),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Technical Services', path: '/technical-services' },
        ]),
      ]}
    />
    {/* Hero */}
    <TechHeroSection />

    {/* Overview */}
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">What We Do</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
          Expert Technical Services
        </h2>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
          Cybersecurity, IT support, cloud infrastructure management and more — ensuring your systems run smoothly and securely.
        </p>
      </div>
      <TechServices />
    </section>

    {/* Expertise Section */}
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Expertise</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
          Our Technical Expertise
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Comprehensive IT services that ensure your systems are secure, reliable, and high-performing.
        </p>
      </div>
    </section>

    <Footer />
  </div>
);

export default TechnicalServices;
