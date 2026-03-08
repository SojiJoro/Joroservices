import React, { useState } from 'react'
import { CheckCircle, ChevronDown, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'
import SEO from '../../component/SEO'
import { serviceSchema, breadcrumbSchema } from '../../seo/schemas'

const services = [
  {
    title: 'Web Development',
    description: 'Websites, online shops, and web applications for Hampshire businesses. We use modern frameworks and make sure everything loads fast, stays secure, and ranks well.',
    link: '/development/web-development',
  },
  {
    title: 'SEO & Digital Marketing',
    description: 'Local and national SEO, Google Ads, social media marketing, and content planning to help Hampshire businesses bring in more customers online.',
    link: '/digital-marketing',
  },
  {
    title: 'IT Support & Managed Services',
    description: 'Remote and on-site IT support across Hampshire. Helpdesk, server management, Microsoft 365 admin, and ongoing monitoring to catch problems early.',
    link: '/technical-services/it-support-and-maintenance',
  },
  {
    title: 'Cybersecurity',
    description: 'Keep your Hampshire business protected with penetration testing, vulnerability assessments, security audits, and GDPR compliance support.',
    link: '/technical-services/cybersecurity',
  },
  {
    title: 'Mobile App Development',
    description: 'iOS and Android apps for Hampshire businesses. Whether you need a staff management tool or a customer-facing app, we can build it.',
    link: '/development/mobile-app-development',
  },
  {
    title: 'Cloud Infrastructure',
    description: 'AWS, Azure, and Google Cloud consulting, migration, and management for Hampshire organisations that want to bring their IT up to date.',
    link: '/technical-services/cloud-infrastructure',
  },
]

const faqData = [
  {
    question: 'Do you provide IT services across all of Hampshire?',
    answer: 'Yes, we serve businesses throughout Hampshire including Aldershot, Farnborough, Farnham, Basingstoke, Winchester, Eastleigh, Southampton, Portsmouth, and Andover. We provide both remote support and on-site visits across the county.',
  },
  {
    question: 'What makes Joro Services different from other Hampshire digital agencies?',
    answer: 'We are the only agency in Hampshire that does IT consultancy, web development, digital marketing, and creative work all in one place. That means one partner for everything digital, instead of dealing with multiple suppliers.',
  },
  {
    question: 'Can you help Hampshire businesses with local SEO?',
    answer: 'Yes, local SEO is one of our main strengths. We optimise your Google Business Profile, build local citations, create location-specific content, and manage your reviews to help Hampshire businesses show up higher in local search results and Google Maps.',
  },
  {
    question: 'Do you work with public sector organisations in Hampshire?',
    answer: 'Yes, we work with both private and public sector organisations. Our SIC codes cover IT consultancy (62020) and other IT service activities (62090). We understand the procurement requirements and compliance standards that public sector organisations require.',
  },
  {
    question: 'How quickly can you respond to IT issues in Hampshire?',
    answer: 'For managed IT support clients, we aim to respond within 1 hour during business hours, with critical issues prioritised within 15-30 minutes. For on-site visits across Hampshire, we typically schedule within 24 hours for non-emergency issues.',
  },
]

const hampshireFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

const hampshireTowns = [
  'Aldershot', 'Farnborough', 'Farnham', 'Fleet', 'Basingstoke',
  'Winchester', 'Andover', 'Eastleigh', 'Petersfield', 'Liss',
  'Bordon', 'Liphook', 'Yateley', 'Hook', 'Odiham',
  'Whitchurch',
]

const Hampshire = () => {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <main className="bg-white text-gray-900">
      <SEO
        title="Web Development, IT Support & Digital Marketing in Hampshire | Joro Services"
        description="Joro Services delivers expert web development, IT support, SEO, cybersecurity, and digital marketing to businesses across Hampshire. Based in Aldershot, serving the entire county. Free consultation available."
        keywords="web development Hampshire, IT support Hampshire, digital marketing Hampshire, SEO Hampshire, web design Hampshire, cybersecurity Hampshire, IT services Hampshire, digital agency Hampshire, IT consultancy Hampshire"
        jsonLd={[
          serviceSchema({
            name: 'Digital Services in Hampshire',
            description: 'Full-service digital agency serving Hampshire with web development, digital marketing, IT support, cybersecurity, and cloud solutions.',
            url: '/locations/hampshire',
            category: 'Digital Agency',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Locations', path: '/locations/hampshire' },
            { name: 'Hampshire', path: '/locations/hampshire' },
          ]),
          hampshireFaqSchema,
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-accent-dark" />
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Hampshire, UK</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            Digital Services for Businesses Across{' '}
            <span className="text-accent-dark">Hampshire</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl leading-relaxed">
            From Aldershot to Winchester and Basingstoke to Portsmouth, Joro Services provides web development, IT support, digital marketing, and cybersecurity to businesses across Hampshire. We pair local knowledge with real technical skill to help Hampshire businesses compete online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/getintouch"
              className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
            >
              Get a Free Consultation
            </Link>
            <a
              href="tel:+4407867374034"
              className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-accent-dark text-accent-dark font-semibold rounded-xl hover:bg-accent-dark hover:text-white transition-all text-sm"
            >
              Call 07867 374034
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 text-center">What We Offer</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">
            Our Services Across Hampshire
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Whether you are a startup in Basingstoke, a retailer in Winchester, or a professional services firm in Farnborough, we have the expertise to help your business grow.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Link
                key={i}
                to={service.link}
                className="p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition group"
              >
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent-dark transition">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hampshire businesses choose us */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-10">
            Why Hampshire Businesses Trust Joro Services
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                title: 'Hampshire-Based, UK-Wide Capability',
                text: 'We are based in Aldershot, Hampshire, giving us local presence for on-site visits and face-to-face meetings. Our team also works remotely with clients across the UK and internationally.',
              },
              {
                title: 'One Team for Everything Digital',
                text: 'Hampshire businesses no longer need to hire separate agencies for web design, SEO, IT support, and cybersecurity. We handle all of it with a single team that understands how everything fits together.',
              },
              {
                title: 'Public and Private Sector Experience',
                text: 'We work with Hampshire-based businesses, charities, healthcare providers, and public sector organisations. We understand procurement processes, data compliance, and the specific needs of different sectors.',
              },
              {
                title: 'Focused on What Actually Matters',
                text: 'Every project starts with clear goals. Whether it is increasing organic traffic, reducing IT downtime, or launching a new application, we stay focused on getting you real, measurable results.',
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-accent-dark mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Towns We Serve */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">
            Hampshire Towns We Serve
          </h2>
          <p className="text-center text-gray-600 mb-10">
            We provide on-site and remote digital services to businesses across Hampshire.
          </p>
          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3">
            {hampshireTowns.map((town, i) => (
              <div key={i} className="text-center p-3 bg-white rounded-2xl border border-gray-100">
                <p className="font-medium text-sm">{town}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-10">
            Frequently Asked Questions About Our Hampshire Services
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-100">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center text-left p-5"
                >
                  <span className="font-medium text-lg pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-accent-dark flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${openFaq === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Let Us Help Your Hampshire Business Grow
          </h2>
          <p className="text-lg mb-8 text-white/80">
            Book a free consultation and find out how we can support your digital goals.
          </p>
          <Link
            to="/getintouch"
            className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
          >
            Book Your Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default Hampshire
