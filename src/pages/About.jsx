import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { ArrowRight, Palette, Code2, BarChart3, Shield } from 'lucide-react';
import Footer from '../component/Footer';
import SEO from '../component/SEO';
import pagesSEO from '../seo/pagesSEO';
import { organizationSchema, breadcrumbSchema } from '../seo/schemas';

const values = [
  {
    title: 'Client-First Approach',
    description: 'Every solution we build starts with understanding your business goals. We listen, plan, and deliver with your success as our measure.',
  },
  {
    title: 'Technical Excellence',
    description: 'Our team stays current with the latest technologies and best practices to ensure we deliver robust, scalable, and secure solutions.',
  },
  {
    title: 'Transparency',
    description: 'We believe in open communication at every stage. From project scoping to delivery, you will always know where things stand.',
  },
  {
    title: 'Long-Term Partnerships',
    description: 'We do not just deliver projects and walk away. We build lasting relationships with our clients, providing ongoing support and guidance.',
  },
];

const serviceAreas = [
  { icon: Palette, title: 'Creative Solutions', desc: 'Website design, branding, and UI/UX that make your brand stand out.', path: '/creative-solutions' },
  { icon: Code2, title: 'Development', desc: 'Web and mobile applications built with modern, scalable technologies.', path: '/development' },
  { icon: BarChart3, title: 'Digital Marketing', desc: 'SEO, PPC, social media, and content strategies that drive real results.', path: '/digital-marketing' },
  { icon: Shield, title: 'Technical Services', desc: 'IT support, cybersecurity, and cloud infrastructure you can rely on.', path: '/technical-services' },
];

const About = () => {
  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <SEO
        {...pagesSEO['/about']}
        jsonLd={[
          organizationSchema,
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
          ]),
        ]}
      />

      {/* Hero */}
      <section id="hero" className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent-light font-semibold text-sm uppercase tracking-widest mb-4">About Us</p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">About Joro Services</h1>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              A technology partner committed to helping businesses grow through innovative digital solutions.
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
                  Joro Services Ltd was founded with a clear mission: to provide small and medium-sized businesses with the same quality of technology services that large enterprises enjoy, but at a scale and price point that works for growing companies.
                </p>
                <p>
                  Based in London, our team brings together expertise across software development, cloud infrastructure, cybersecurity, digital marketing, and creative design. We work with clients across healthcare, recruitment, social care, and e-commerce to deliver solutions that make a real difference.
                </p>
                <p>
                  Whether it is building a patient portal for a healthcare provider, migrating a recruitment platform to the cloud, or running a targeted digital marketing campaign, we approach every project with the same level of dedication and professionalism.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6 text-gray-900">Quick Facts</h3>
              <ul className="space-y-4 text-gray-600">
                {[
                  'Registered in England & Wales',
                  'Office at Kemp House, 152\u2013160 City Road, London EC1V 2NX',
                  'Serving clients across the UK and internationally',
                  'Specialists in healthcare, recruitment, and SME technology',
                  'End-to-end services from strategy to ongoing support',
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
            Get in touch to discuss your project. We would love to hear about your goals and explore how we can help.
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
