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
          Managed IT Services Built for Growing Businesses
        </h2>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
          From proactive IT support and cybersecurity to AWS cloud management &mdash; enterprise-grade technical services at SMB prices. No junior handoffs, no hidden fees.
        </p>
      </div>
      <TechServices />
    </section>

    {/* Expertise Section */}
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Expertise</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Why UK Businesses Choose Joro
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            AWS Solutions Architect certified. GDPR compliant. Professional indemnity insured. We manage production infrastructure for regulated industries including financial services and healthcare.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'AWS Certified', desc: 'Solutions Architect certified engineers managing your cloud infrastructure with proven best practices.' },
            { title: 'GDPR Compliant', desc: 'Every service we deliver is aligned with UK data protection regulations. Your data stays safe and compliant.' },
            { title: 'Fully Insured', desc: 'Professional indemnity and public liability insurance so you can engage us with confidence.' },
            { title: 'Regulated Industries', desc: 'Trusted by healthcare, financial services, and recruitment firms with strict compliance requirements.' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-7 border border-gray-100">
              <h3 className="text-lg font-bold mb-3 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default TechnicalServices;
