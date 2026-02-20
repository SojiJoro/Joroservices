// src/pages/Homepage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../component/Footer';
import ImpressionCard from '../component/impressionCard';
import { ServiceList } from './serviceData';
import InsightsSection from '../component/insightSection.jsx';
import FAQ from '../component/faq.jsx';

const Homepage = () => (
  <div className="max-w-full overflow-x-hidden">
    {/* Hero Section */}
    <div
      id="hero"
      className="relative bg-hero-bg bg-cover bg-center min-h-screen w-full flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex flex-col items-center justify-center text-white px-4 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
          Transform Your Digital Vision into Reality
        </h1>
        <p className="text-lg md:text-xl lg:text-xl mb-6">
          Custom technology solutions to empower your business for tomorrow's challenges
        </p>
        <Link
          to="/getintouch"
          className="inline-block bg-accent text-white font-semibold px-8 py-4 rounded-xl hover:bg-accent-dark transition"
        >
          Schedule Your Free Consultation
        </Link>
      </div>
    </div>

    {/* Core Services Section */}
    <section className="bg-[#f1f1f1] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl lg:text-5xl font-bold leading-tight text-slate-900 mb-12">
          Comprehensive Technology Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ServiceList.map((service, idx) => (
            <Link
              key={idx}
              to={service.link}
              className="relative group overflow-hidden rounded-3xl block"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-52 object-cover rounded-3xl group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/40 rounded-3xl flex items-end p-4">
                <h3 className="text-white text-lg font-semibold">
                  {service.title}
                </h3>
              </div>
            </Link>
          ))}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 bg-gradient-to-bl from-[#46868f] to-[#2b4d55] rounded-3xl p-12 text-center mx-auto">
            <h3 className="text-white text-3xl font-bold mb-4">
              Your Trusted Joro Services Partner
            </h3>
            <p className="text-white/80 mb-8 max-w-prose mx-auto">
              We collaborate closely with you to craft bespoke digital strategies,
              combining deep technical expertise with industry insights to accelerate growth and innovation.
            </p>
            <Link
              to="/getintouch"
              className="bg-accent text-white font-bold px-8 py-4 rounded-xl hover:bg-accent-dark transition"
            >
              Start Your Strategy Session
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-slate-900 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <ImpressionCard />
      </div>
    </section>

    {/* Insights Section */}
    <InsightsSection />

    {/* FAQ Section */}
    <FAQ />

    {/* Footer */}
    <Footer />
  </div>
);

export default Homepage;
