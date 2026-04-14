import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Palette, BarChart3, Shield, CheckCircle2 } from 'lucide-react';
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
  speakableSchema,
  orgLocalBusinessSchema,
  webDevServiceSchema,
  devopsServiceSchema,
  graphicDesignServiceSchema,
  digitalMarketingServiceSchema,
  itSupportServiceSchema,
  mobileAppServiceSchema,
  founderPersonSchema,
} from '../seo/schemas';

const serviceCategories = [
  {
    icon: Palette,
    title: 'Website Design & Branding',
    desc: 'We design and build websites, logos, and brand identities. You get a finished product, not a mockup.',
    path: '/creative-solutions',
  },
  {
    icon: Code2,
    title: 'Web & Mobile App Development',
    desc: 'We build web applications, mobile apps, and e-commerce stores with React, Next.js, and Flutter. Production-ready code.',
    path: '/development',
  },
  {
    icon: BarChart3,
    title: 'SEO & Digital Marketing',
    desc: 'We run your SEO, manage your Google Ads, and handle your social media. Monthly reporting, real results.',
    path: '/digital-marketing',
  },
  {
    icon: Shield,
    title: 'DevOps, Cloud & IT Support',
    desc: 'We set up your AWS infrastructure, manage your servers, run your CI/CD pipelines, and provide day-to-day IT support.',
    path: '/technical-services',
  },
];

const localServiceLinks = [
  { label: 'IT Support in Aldershot', path: '/it-support-aldershot', desc: 'From £30/user/month' },
  { label: 'Web Design in Aldershot', path: '/web-design-aldershot', desc: 'From £1,500' },
  { label: 'IT Support in Farnham', path: '/it-support-farnham', desc: '5 miles away' },
  { label: 'Web Design in Farnham', path: '/web-design-farnham', desc: 'Design-led builds' },
  { label: 'IT Support in Fleet', path: '/it-support-fleet', desc: '6 miles away' },
  { label: 'IT Support in Camberley', path: '/it-support-camberley', desc: '7 miles away' },
  { label: 'Web Design in Guildford', path: '/web-design-guildford', desc: 'Premium quality' },
];

const Homepage = () => (
  <div className="max-w-full overflow-x-hidden">
    <SEO
      {...pagesSEO['/']}
      dateModified="2026-03-20"
      jsonLd={[organizationSchema, localBusinessSchema, websiteSchema, homepageFaqSchema, speakableSchema({ url: '/' }), orgLocalBusinessSchema, webDevServiceSchema, devopsServiceSchema, graphicDesignServiceSchema, digitalMarketingServiceSchema, itSupportServiceSchema, mobileAppServiceSchema, founderPersonSchema]}
    />

    {/* Hero Section */}
    <section
      id="hero"
      className="relative bg-gradient-to-br from-primary via-[#0e1f38] to-secondary min-h-[92vh] w-full flex items-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(20,184,166,0.08),transparent_60%)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] rounded-full px-4 py-1.5 mb-8 text-sm text-gray-400">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            Trusted by 20+ businesses across the UK
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight text-white">
            We Build Websites,
            <br />
            <span className="text-accent">Run Infrastructure & Manage IT</span>
          </h1>
          <p className="text-lg text-gray-400 mb-10 max-w-xl leading-relaxed">
            Joro Services delivers web development, DevOps, cloud engineering, graphic design, and IT support for UK businesses. We do the work — websites, apps, servers, pipelines, marketing. One team handles everything so you don't have to manage five suppliers.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-3">
            <Link
              to="/getintouch"
              className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all duration-300 shadow-lg shadow-accent/20 text-sm"
            >
              Get Your Free Consultation
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] text-white font-medium px-7 py-3.5 rounded-xl hover:bg-white/[0.1] transition-all duration-300 text-sm"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Service Categories */}
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Services</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            IT Services We Deliver
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We build websites, develop apps, set up cloud infrastructure, manage IT support, and run digital marketing campaigns. These are services we deliver, not advice we give.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {serviceCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <Link
                key={idx}
                to={cat.path}
                className="group relative bg-gray-50 rounded-2xl p-7 hover:bg-primary hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent"
              >
                <div className="w-11 h-11 bg-accent/10 group-hover:bg-accent/20 rounded-xl flex items-center justify-center mb-5 transition-colors">
                  <Icon size={20} className="text-accent" />
                </div>
                <h3 className="text-base font-bold text-gray-900 group-hover:text-white mb-2 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-gray-500 group-hover:text-gray-400 text-sm leading-relaxed transition-colors">
                  {cat.desc}
                </p>
                <div className="mt-4 flex items-center gap-1 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
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
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-14">
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">What We Build</p>
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-gray-900">
              Real Work We've Delivered
            </h2>
          </div>
          <p className="text-gray-500 lg:text-right">
            Websites, web apps, mobile apps, cloud setups, and marketing campaigns — built and shipped for UK businesses.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white text-base font-bold mb-1">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                  {service.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-10 bg-gradient-to-r from-primary to-secondary rounded-2xl px-6 py-10 sm:p-10 lg:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white text-xl sm:text-2xl font-bold mb-3">
              One Team. Every IT Service You Need.
            </h3>
            <p className="text-gray-400 mb-6 text-sm sm:text-base leading-relaxed">
              Web development, DevOps, cloud infrastructure, graphic design, IT support, and digital marketing — all delivered by one team. No subcontractors. No middlemen.
            </p>
            <Link
              to="/getintouch"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white font-semibold px-6 py-3 rounded-xl hover:bg-accent-dark transition-all duration-300 text-sm"
            >
              Start Your Project
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Why Us */}
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Why Joro Services</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              We do the work. No outsourcing.
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              The people you speak to are the engineers and designers who do the work. We don't sell projects and hand them to freelancers. Every website, every deployment, every support ticket is handled by our team.
            </p>
            <ul className="space-y-4">
              {[
                'AWS Solutions Architect certified team',
                'GDPR-compliant processes and professional indemnity insured',
                'Fixed pricing with no hidden fees or hourly surprises',
                'Proven results across healthcare, financial services, and recruitment',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '20+', label: 'Clients Served' },
              { value: '35+', label: 'Projects Delivered' },
              { value: '26.6%', label: 'Avg Cloud Savings' },
              { value: '99%', label: 'Client Satisfaction' },
            ].map((stat, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center">
                <span className="text-3xl lg:text-4xl font-bold text-accent block mb-1">{stat.value}</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="bg-primary py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Testimonials</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            What Our Clients Say
          </h2>
        </div>
        <TestimonialGrid />
        <div className="mt-14">
          <ImpressionCard />
        </div>
      </div>
    </section>

    {/* Local Services Section - Internal Linking for SEO */}
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Local Coverage</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            IT Support &amp; Web Design Near You
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Based in Aldershot, we provide same-day on-site support across Hampshire and Surrey. Find the right service for your area.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {localServiceLinks.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="group bg-white rounded-xl p-5 border border-gray-100 hover:border-accent/30 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-gray-900 group-hover:text-accent transition-colors text-sm">
                {item.label}
              </h3>
              <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
            </Link>
          ))}
          <Link
            to="/services"
            className="group bg-accent/5 rounded-xl p-5 border border-accent/20 hover:bg-accent/10 transition-all flex items-center justify-center"
          >
            <span className="font-semibold text-accent text-sm flex items-center gap-2">
              View All Services
              <ArrowRight size={14} />
            </span>
          </Link>
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
