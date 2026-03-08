// src/pages/digitalMarketing/index.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../../component/digitalMarketing/heroSection';
import MarketingServices from '../../component/digitalMarketing/marketingServices';
import Footer from '../../component/Footer';
import SEO from '../../component/SEO';
import pagesSEO from '../../seo/pagesSEO';
import { serviceSchema, breadcrumbSchema } from '../../seo/schemas';

const DigitalMarketing = () => (
  <div className="bg-white text-gray-900">
    <SEO
      {...pagesSEO['/digital-marketing']}
      jsonLd={[
        serviceSchema({
          name: 'Digital Marketing',
          description: 'Results-driven digital marketing services including SEO, PPC, and social media management in Aldershot, Hampshire.',
          url: '/digital-marketing',
          category: 'Digital Marketing Services',
        }),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Digital Marketing', path: '/digital-marketing' },
        ]),
      ]}
    />
    {/* Hero */}
    <HeroSection />

    {/* Overview */}
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Solutions</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Holistic Digital Marketing Solutions
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            At JoroServices we combine creativity with analytics to build tailored marketing campaigns.
            From SEO and PPC to social media and content strategy, our data-driven approach ensures
            your message reaches the right audience, drives engagement and grows your bottom line.
          </p>
        </div>

        {/* Sub-page Links */}
        <ul className="max-w-3xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { label: 'SEO & Content Strategy', slug: 'seo-and-content-strategy' },
            { label: 'Social Media Management', slug: 'social-media-management' },
            { label: 'PPC & Online Campaigns', slug: 'ppc-and-online-campaigns' },
          ].map(({ label, slug }) => (
            <li key={slug} className="bg-white rounded-2xl border border-gray-100 p-6 text-center hover:shadow-lg transition">
              <Link
                to={`/digital-marketing/${slug}`}
                className="text-2xl font-semibold text-accent hover:underline"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* Marketing Services */}
    <MarketingServices />

    <Footer />
  </div>
);

export default DigitalMarketing;
