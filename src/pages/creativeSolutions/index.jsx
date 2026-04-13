import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Footer from '../../component/Footer';
import SEO from '../../component/SEO';
import pagesSEO from '../../seo/pagesSEO';
import { serviceSchema, breadcrumbSchema, graphicDesignServiceSchema, faqPageSchema } from '../../seo/schemas';

const creativeServices = [
  {
    title: 'Website Design',
    description: 'Good-looking websites that are easy to use and actually get people to take action.',
    slug: 'website-design',
  },
  {
    title: 'Graphic Design and Branding',
    description: 'Build a brand that looks the same everywhere, from your logo and fonts to your colours and marketing materials.',
    slug: 'graphic-design-and-branding',
  },
  {
    title: 'User Interface and Experience',
    description: 'Interfaces that make sense to your users so they stick around and come back.',
    slug: 'user-interface-and-experience',
  },
];

const creativeBenefits = [
  {
    title: 'A Look That Fits Your Brand',
    description: 'We help your brand show what it stands for through visuals that are clear and memorable.',
  },
  {
    title: 'Design That Gets Results',
    description: 'Every layout, button, and page element is set up to get your visitors to do what you need them to do.',
  },
  {
    title: 'Consistent Everywhere',
    description: 'From your logo to your website and everything in between, we make sure it all looks and feels like you.',
  },
  {
    title: 'Built Around Real Users',
    description: 'Our design work is based on how people actually use your product, not guesswork.',
  },
];

const creativeFaqData = [
  {
    question: 'What graphic design services does Joro Services provide?',
    answer: 'We provide brand identity design including logos, colour systems, and typography. We also produce marketing materials, social media assets, presentations, and any other visual content your business needs.',
  },
  {
    question: 'Can you help a new business with branding from scratch?',
    answer: 'Yes. We work with new businesses to create complete brand identities — logo, colour palette, typography, and brand guidelines — so you have a consistent, professional look from day one.',
  },
];

const CreativeSolutions = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="bg-white text-gray-900">
      <SEO
        {...pagesSEO['/creative-solutions']}
        jsonLd={[
          serviceSchema({
            name: 'Creative Solutions',
            description: 'Professional website design, graphic design, branding, and UI/UX services.',
            url: '/creative-solutions',
            category: 'Creative Design Services',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Creative Solutions', path: '/creative-solutions' },
          ]),
          graphicDesignServiceSchema,
          faqPageSchema(creativeFaqData),
        ]}
      />

      {/* Hero Section */}
      <section id="hero" className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent-light font-semibold text-sm uppercase tracking-widest mb-4">Creative Solutions</p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Design That Makes People Remember Your Brand
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
              We help businesses look their best online. Clean design, simple navigation, and the kind of experience that keeps people coming back.
            </p>
            <Link
              to="/getintouch"
              className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
            >
              Start a Project
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Services</p>
            <h2 className="text-3xl lg:text-4xl font-bold">What We Offer</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {creativeServices.map((service, index) => (
              <Link
                key={index}
                to={`/creative-solutions/${service.slug}`}
                className="group bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Benefits</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Why Creative Design Matters</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {creativeBenefits.map((item, index) => (
              <div key={index} className="border-l-4 border-accent pl-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-gray-50" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {creativeFaqData.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-shadow hover:shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center text-left p-5 gap-4"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown size={20} className={`text-gray-400 flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <div className={`grid transition-all duration-300 ease-in-out ${openFaq === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Want Your Brand to Stand Out?</h2>
          <p className="text-gray-400 mb-8">Let's create a look that makes you different from everyone else in your space.</p>
          <Link
            to="/getintouch"
            className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
          >
            Get in Touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CreativeSolutions;
