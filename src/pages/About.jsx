import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../component/Footer';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

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

const About = () => {
  return (
    <main className="bg-white text-gray-900 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section id="hero" className="bg-gradient-to-r from-accent-dark to-blue-800 text-white py-20 px-6 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">About Joro Services</h1>
        <p className="text-lg lg:text-xl max-w-3xl mx-auto">
          A technology partner committed to helping businesses grow through innovative digital solutions.
        </p>
      </section>

      {/* Our Story */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Joro Services Ltd was founded with a clear mission: to provide small and medium-sized businesses with the same quality of technology services that large enterprises enjoy, but at a scale and price point that works for growing companies.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Based in London, our team brings together expertise across software development, cloud infrastructure, cybersecurity, digital marketing, and creative design. We work with clients across healthcare, recruitment, social care, and e-commerce to deliver solutions that make a real difference to their operations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether it is building a patient portal for a healthcare provider, migrating a recruitment platform to the cloud, or running a targeted digital marketing campaign, we approach every project with the same level of dedication and professionalism.
            </p>
          </div>
          <div className="bg-gradient-to-br from-accent/10 to-accent-dark/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Quick Facts</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>Registered in England & Wales</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>Office at Kemp House, 152&ndash;160 City Road, London EC1V 2NX</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>Serving clients across the UK and internationally</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>Specialists in healthcare, recruitment, and SME technology</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>End-to-end services from strategy to ongoing support</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-accent-dark">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/creative-solutions" className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition text-center">
            <h3 className="text-lg font-semibold mb-2 group-hover:text-accent-dark transition">Creative Solutions</h3>
            <p className="text-gray-600 text-sm">Website design, branding, and UI/UX that make your brand stand out.</p>
          </Link>
          <Link to="/development" className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition text-center">
            <h3 className="text-lg font-semibold mb-2 group-hover:text-accent-dark transition">Development</h3>
            <p className="text-gray-600 text-sm">Web and mobile applications built with modern, scalable technologies.</p>
          </Link>
          <Link to="/digital-marketing" className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition text-center">
            <h3 className="text-lg font-semibold mb-2 group-hover:text-accent-dark transition">Digital Marketing</h3>
            <p className="text-gray-600 text-sm">SEO, PPC, social media, and content strategies that drive real results.</p>
          </Link>
          <Link to="/technical-services" className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition text-center">
            <h3 className="text-lg font-semibold mb-2 group-hover:text-accent-dark transition">Technical Services</h3>
            <p className="text-gray-600 text-sm">IT support, cybersecurity, and cloud infrastructure you can rely on.</p>
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-gray-300 mb-8">
            Get in touch to discuss your project. We would love to hear about your goals and explore how we can help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              to="/getintouch"
              className="bg-accent text-white font-semibold px-8 py-3 rounded-xl hover:bg-accent-dark transition"
            >
              Get in Touch
            </Link>
            <a
              href="https://wa.me/447345019824"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-green-700 transition"
            >
              <FaWhatsapp />
              WhatsApp Us
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400 text-sm">
            <a href="tel:+4407345019824" className="flex items-center gap-2 hover:text-white">
              <FaPhoneAlt /> 07345 019824
            </a>
            <a href="mailto:info@joroservices.org" className="flex items-center gap-2 hover:text-white">
              <FaEnvelope /> info@joroservices.org
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
