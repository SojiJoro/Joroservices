// src/pages/digitalMarketing/index.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../../component/digitalMarketing/heroSection';
import Footer from '../../component/Footer';

const DigitalMarketing = () => (
  <div className="bg-white text-black">
    {/* Hero */}
    <HeroSection />

    {/* Overview */}
    <section className="py-16 px-4 lg:px-20">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl lg:text-5xl font-bold">
          Holistic Digital Marketing Solutions
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          At JoroServices we combine creativity with analytics to build tailored marketing campaigns.
          From SEO and PPC to social media and content strategy, our data‑driven approach ensures
          your message reaches the right audience, drives engagement and grows your bottom line.
        </p>
      </div>

      {/* Sub‑page Links */}
      <ul className="max-w-3xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { label: 'SEO & Content Strategy', slug: 'seo-and-content-strategy' },
          { label: 'Social Media Management', slug: 'social-media-management' },
          { label: 'PPC & Online Campaigns', slug: 'ppc-and-online-campaigns' },
        ].map(({ label, slug }) => (
          <li key={slug} className="bg-gray-100 rounded-lg shadow p-6 text-center hover:shadow-lg transition">
            <Link
              to={`/digital-marketing/${slug}`}
              className="text-2xl font-semibold text-accent hover:underline"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </section>

    <Footer />
  </div>
);

export default DigitalMarketing;
