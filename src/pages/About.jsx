import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { ArrowRight, Palette, Code2, BarChart3, Shield, Award, ShieldCheck, FileCheck, Building2 } from 'lucide-react';
import Footer from '../component/Footer';
import SEO from '../component/SEO';
import pagesSEO from '../seo/pagesSEO';
import { organizationSchema, breadcrumbSchema, founderPersonSchema } from '../seo/schemas';
import Breadcrumb from '../component/Breadcrumb';

const values = [
  {
    title: 'Client-First Approach',
    description: 'We start every project by getting to know your business properly. What are you trying to achieve? We figure that out first, then build around it.',
  },
  {
    title: 'Technical Excellence',
    description: 'We keep up with what works in tech and use it properly. The things we build are solid, grow with you, and stay secure.',
  },
  {
    title: 'Transparency',
    description: 'You will always know what is going on with your project. No surprises, no radio silence. We keep you in the loop from day one.',
  },
  {
    title: 'Long-Term Partnerships',
    description: 'We do not just finish a project and disappear. Most of our clients stick with us because we keep looking after them long after launch.',
  },
];

const serviceAreas = [
  { icon: Palette, title: 'Creative Solutions', desc: 'Websites, branding, and UI/UX design that makes your business look as good as it is.', path: '/creative-solutions' },
  { icon: Code2, title: 'Development', desc: 'Web and mobile apps built with modern tools that won\'t fall apart as you grow.', path: '/development' },
  { icon: BarChart3, title: 'Digital Marketing', desc: 'SEO, PPC, social media, and content that actually brings in customers.', path: '/digital-marketing' },
  { icon: Shield, title: 'Technical Services', desc: 'IT support, cybersecurity, and cloud setup you can count on.', path: '/technical-services' },
];

const About = () => {
  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <SEO
        {...pagesSEO['/about']}
        dateModified="2026-03-20"
        jsonLd={[
          organizationSchema,
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
          ]),
          founderPersonSchema,
        ]}
      />

      {/* Hero */}
      <section id="hero" className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[
            { name: 'Home', path: '/' },
            { name: 'About' },
          ]} />
          <div className="max-w-3xl">
            <p className="text-accent-light font-semibold text-sm uppercase tracking-widest mb-4">About Us</p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">About Joro Services</h1>
            <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
              Big-company tech services at small-business prices. We are a UK-based team that helps businesses build, protect, and grow their online presence.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Story</p>
              <h2 className="text-3xl font-bold mb-8">Building technology that matters</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We started Joro Services because we saw too many smaller businesses getting stuck with bad tech or paying over the odds for it. We wanted to give growing companies access to the same quality of work that the big firms get, without the big firm price tag.
                </p>
                <p>
                  We are based in London and our team covers everything from software development and cloud infrastructure to cybersecurity, digital marketing, and design. We work with clients in healthcare, recruitment, social care, and e-commerce, and we focus on doing work that actually makes a difference to their day-to-day.
                </p>
                <p>
                  Whether we are building a patient portal for a healthcare provider, moving a recruitment platform to the cloud, or running a marketing campaign, we put the same care into every project.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6 text-gray-900">Quick Facts</h3>
              <ul className="space-y-4 text-gray-600">
                {[
                  'Registered in England & Wales (Companies House)',
                  'Offices: Kemp House, 152\u2013160 City Road, London EC1V 2NX',
                  'Serving 20+ clients across the UK and internationally',
                  'Specialists in healthcare, financial services, and recruitment',
                  'AWS Solutions Architect certified, GDPR compliant',
                  'Full service from planning through to ongoing support',
                ].map((fact, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Values</p>
            <h2 className="text-3xl font-bold">What drives us every day</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-100">
                <h3 className="text-lg font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials & Trust */}
      <section className="py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, label: 'AWS Solutions Architect Certified' },
              { icon: ShieldCheck, label: 'Professional Indemnity Insured' },
              { icon: FileCheck, label: 'GDPR Compliant' },
              { icon: Building2, label: 'Regulated Industry Experience' },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center gap-3 text-gray-700">
                  <Icon size={20} className="text-accent flex-shrink-0" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Services</p>
            <h2 className="text-3xl font-bold">What We Do</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {serviceAreas.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link key={idx} to={item.path} className="group bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:bg-primary hover:border-transparent hover:shadow-2xl transition-all duration-500">
                  <div className="w-10 h-10 bg-accent/10 group-hover:bg-accent/20 rounded-xl flex items-center justify-center mb-4 transition-colors">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <h3 className="text-base font-bold mb-2 text-gray-900 group-hover:text-white transition-colors">{item.title}</h3>
                  <p className="text-gray-500 group-hover:text-gray-400 text-sm transition-colors leading-relaxed">{item.desc}</p>
                  <div className="mt-3 flex items-center gap-1 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore <ArrowRight size={14} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-primary text-white py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-gray-400 mb-8">
            Drop us a line about what you are working on. We are always happy to chat and see if we can help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <Link
              to="/getintouch"
              className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
            >
              Get in Touch
              <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/447867374034"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-green-700 transition text-sm"
            >
              <FaWhatsapp />
              WhatsApp Us
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400 text-sm">
            <a href="tel:+4407867374034" className="flex items-center gap-2 hover:text-white transition-colors">
              <FaPhoneAlt size={12} /> 07867 374034
            </a>
            <a href="mailto:info@joroservices.org" className="flex items-center gap-2 hover:text-white transition-colors">
              <FaEnvelope size={12} /> info@joroservices.org
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
