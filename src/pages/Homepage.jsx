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
} from '../seo/schemas';

const serviceCategories = [
  {
    icon: Palette,
    title: 'Creative Solutions',
    desc: 'Website design, branding, and UI/UX that look great and actually get people to take action.',
    path: '/creative-solutions',
  },
  {
    icon: Code2,
    title: 'Development',
    desc: 'Web and mobile apps built with React, Next.js, and modern cloud tools. Made to grow with you.',
    path: '/development',
  },
  {
    icon: BarChart3,
    title: 'Digital Marketing',
    desc: 'SEO, PPC, and content that actually brings in leads and keeps your business growing.',
    path: '/digital-marketing',
  },
  {
    icon: Shield,
    title: 'Managed IT & Security',
    desc: 'AWS-certified cloud setup, round-the-clock IT support, and proper cybersecurity for your business.',
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
            Your Local Tech Partner
            <br />
            <span className="text-accent">in Aldershot, Hampshire</span>
          </h1>
          <p className="text-lg text-gray-400 mb-10 max-w-xl leading-relaxed">
            Based in Aldershot, covering the full stack from web design to cloud infrastructure. We're the only local agency that handles your website, IT support, cybersecurity, and marketing under one roof. No juggling suppliers. One team, one bill.
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
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Everything Your Business Needs, Tech-wise
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Apps, infrastructure, security, marketing. We handle it all so you can focus on running your business.
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
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Solutions</p>
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-gray-900">
              Solutions That Drive Growth
            </h2>
          </div>
          <p className="text-gray-500 lg:text-right">
            Web apps, mobile apps, cloud infrastructure, security. We build what you need and make sure it keeps working.
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
              One Partner. Every Technology Need.
            </h3>
            <p className="text-gray-400 mb-6 text-sm sm:text-base leading-relaxed">
              Stop dealing with five different agencies. We handle your cloud, your website, your marketing, and your IT. One team, one bill.
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
              Enterprise expertise. SMB pricing.
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              We bring the same quality of work that big companies get, but at prices that make sense for smaller businesses. The people you talk to are the people doing the work. No passing you off to juniors.
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

    {/* Insights Section */}
    <InsightsSection />

    {/* FAQ Section */}
    <FAQ />

    {/* Footer */}
    <Footer />
  </div>
);

export default Homepage;
