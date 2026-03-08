// src/pages/digitalMarketing/index.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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
            { label: 'SEO & Content Strategy', slug: 'seo-and-content-strategy', desc: 'Rank higher and attract organic traffic with data-driven content.' },
            { label: 'Social Media Management', slug: 'social-media-management', desc: 'Build engaged communities across the platforms that matter.' },
            { label: 'PPC & Online Campaigns', slug: 'ppc-and-online-campaigns', desc: 'Targeted ads that deliver measurable ROI from day one.' },
          ].map(({ label, slug, desc }) => (
            <li key={slug}>
              <Link
                to={`/digital-marketing/${slug}`}
                className="group block bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-accent transition-colors mb-2">{label}</h3>
                <p className="text-sm text-gray-600 mb-3">{desc}</p>
                <span className="inline-flex items-center gap-1 text-accent text-sm font-medium">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* Marketing Services */}
    <MarketingServices />

    {/* CTA */}
    <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Grow Your Business Online?</h2>
        <p className="text-white/80 mb-8">
          Get a free marketing audit and discover where your biggest growth opportunities are. No obligation, no jargon — just actionable insights.
        </p>
        <Link
          to="/getintouch"
          className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
        >
          Get a Free Marketing Audit <ArrowRight size={16} />
        </Link>
      </div>
    </section>

    <Footer />
  </div>
);

export default DigitalMarketing;
