import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Code2, BarChart3, Shield } from 'lucide-react';
import Footer from '../component/Footer';
import { ServiceList } from './serviceData';
import SEO from '../component/SEO';
import pagesSEO from '../seo/pagesSEO';
import { organizationSchema, breadcrumbSchema } from '../seo/schemas';
import Breadcrumb from '../component/Breadcrumb';

const categories = [
  { icon: Palette, title: 'Creative Solutions', desc: 'Design, branding, and UI/UX', path: '/creative-solutions' },
  { icon: Code2, title: 'Development', desc: 'Web and mobile applications', path: '/development' },
  { icon: BarChart3, title: 'Digital Marketing', desc: 'SEO, PPC, and strategy', path: '/digital-marketing' },
  { icon: Shield, title: 'Technical Services', desc: 'IT support and security', path: '/technical-services' },
];

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

    {/* Hero */}
    <section id="hero" className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Home', path: '/' },
          { name: 'Services' },
        ]} />
        <div className="max-w-3xl">
          <p className="text-accent-light font-semibold text-sm uppercase tracking-widest mb-4">Our Expertise</p>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            What We Do Best
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            From web development and cloud infrastructure to digital marketing and IT support, here is everything we can help you with.
          </p>
        </div>
      </div>
    </section>

    {/* Categories */}
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Service Areas</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Browse by Category</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <Link key={i} to={cat.path} className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-accent/20 hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={20} className="text-accent" />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">{cat.title}</h3>
                <p className="text-xs text-gray-500">{cat.desc}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>

    {/* Services Grid */}
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">All Services</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">What We Deliver</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ServiceList.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-6">
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.summary}</p>
                <span className="inline-flex items-center gap-1 text-accent text-sm font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  View details <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Find Us Locally */}
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Local Services</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Find Us Near You</h2>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { label: 'IT Support in Aldershot', path: '/it-support-aldershot', desc: 'From £30/user/month' },
            { label: 'Web Design in Aldershot', path: '/web-design-aldershot', desc: 'From £1,500' },
            { label: 'IT Support in Farnham', path: '/it-support-farnham', desc: '5 miles away' },
            { label: 'Web Design in Farnham', path: '/web-design-farnham', desc: 'Design-led builds' },
            { label: 'IT Support in Fleet', path: '/it-support-fleet', desc: '6 miles away' },
            { label: 'IT Support in Camberley', path: '/it-support-camberley', desc: '7 miles away' },
            { label: 'Web Design in Guildford', path: '/web-design-guildford', desc: 'Surrey businesses' },
          ].map((item, i) => (
            <Link key={i} to={item.path} className="group p-5 bg-white rounded-xl border border-gray-100 hover:border-accent/30 hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 group-hover:text-accent transition-colors text-sm">{item.label}</h3>
              <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            We serve businesses across{' '}
            <Link to="/locations/hampshire" className="text-accent hover:text-accent-dark">Hampshire</Link>,{' '}
            <Link to="/locations/surrey" className="text-accent hover:text-accent-dark">Surrey</Link>, and the wider UK.
          </p>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">Not sure where to start?</h2>
        <p className="text-gray-400 mb-8">Book a free consultation and we will work out the right solution for your business together.</p>
        <Link
          to="/getintouch"
          className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
        >
          Book a Consultation
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>

    <Footer />
  </div>
);

export default Services;
