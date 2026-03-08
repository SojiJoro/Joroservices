import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Palette, BarChart3, Shield } from 'lucide-react';
import Footer from '../component/Footer';
import TestimonialGrid from '../component/TestimonialGrid';
import ImpressionCard from '../component/impressionCard';
import { ServiceList } from './serviceData';
import InsightsSection from '../component/insightSection.jsx';
import FAQ from '../component/faq.jsx';
import SEO from '../component/SEO';
import pagesSEO from '../seo/pagesSEO';
import {
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
  homepageFaqSchema,
} from '../seo/schemas';

const serviceCategories = [
  {
    icon: Palette,
    title: 'Creative Solutions',
    desc: 'Website design, branding, and UI/UX that elevate your digital presence.',
    path: '/creative-solutions',
  },
  {
    icon: Code2,
    title: 'Development',
    desc: 'Web and mobile applications built with modern, scalable technologies.',
    path: '/development',
  },
  {
    icon: BarChart3,
    title: 'Digital Marketing',
    desc: 'SEO, PPC, and content strategies that drive measurable growth.',
    path: '/digital-marketing',
  },
  {
    icon: Shield,
    title: 'Technical Services',
    desc: 'IT support, cybersecurity, and cloud infrastructure you can rely on.',
    path: '/technical-services',
  },
];

const Homepage = () => (
  <div className="max-w-full overflow-x-hidden">
    <SEO
      {...pagesSEO['/']}
      jsonLd={[organizationSchema, localBusinessSchema, websiteSchema, homepageFaqSchema]}
    />

    {/* Hero Section */}
    <div
      id="hero"
      className="relative bg-hero-bg bg-cover bg-center min-h-[90vh] w-full"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary" />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] text-white px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2 mb-8 text-sm font-medium text-gray-300">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Trusted by 20+ businesses across the UK
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight text-balance">
            Transform Your Digital
            <span className="text-accent-light"> Vision </span>
            into Reality
          </h1>
          <p className="text-lg lg:text-xl mb-10 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Custom technology solutions to empower your business for tomorrow's challenges. From design to deployment, we deliver excellence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/getintouch"
              className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-8 py-4 rounded-xl hover:bg-accent-dark transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30"
            >
              Schedule Your Free Consultation
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl border border-white/10 hover:bg-white/20 transition-all duration-300"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/* Service Categories */}
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Comprehensive Technology Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From scalable applications to secure infrastructure, we deliver end-to-end solutions designed for lasting impact.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <Link
                key={idx}
                to={cat.path}
                className="group relative bg-gray-50 rounded-2xl p-8 hover:bg-primary hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent"
              >
                <div className="w-12 h-12 bg-accent/10 group-hover:bg-accent/20 rounded-xl flex items-center justify-center mb-5 transition-colors">
                  <Icon size={24} className="text-accent" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-400 text-sm leading-relaxed transition-colors">
                  {cat.desc}
                </p>
                <div className="mt-5 flex items-center gap-1 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight size={14} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>

    {/* Portfolio / Services Grid */}
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Solutions</p>
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight text-gray-900 text-balance">
              Solutions That Drive Growth
            </h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            From scalable web and mobile applications to secure cloud infrastructure and data analytics,
            we deliver end-to-end solutions designed for lasting impact and growth.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ServiceList.map((service, idx) => (
            <Link
              key={idx}
              to={`/services/${service.id}`}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] block"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-lg font-bold mb-1">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 bg-gradient-to-r from-primary to-secondary rounded-2xl px-6 py-12 sm:p-12 lg:p-14 text-center">
          <h3 className="text-white text-2xl lg:text-3xl font-bold mb-4">
            Your Trusted Technology Partner
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            We collaborate closely with you to craft bespoke digital strategies,
            combining deep technical expertise with industry insights to accelerate growth.
          </p>
          <Link
            to="/getintouch"
            className="inline-flex items-center justify-center gap-2 bg-accent text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-accent-dark transition-all duration-300 shadow-lg shadow-accent/20 text-sm sm:text-base"
          >
            Start Your Strategy Session
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="bg-primary py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Testimonials</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white text-balance">
            Hear from Our Clients
          </h2>
        </div>
        <TestimonialGrid />
        <div className="mt-16">
          <ImpressionCard />
        </div>
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
