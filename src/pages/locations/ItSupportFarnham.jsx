import React, { useState } from 'react'
import { CheckCircle, ChevronDown, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'
import SEO from '../../component/SEO'
import { serviceSchema, breadcrumbSchema, locationBusinessSchema } from '../../seo/schemas'

const faqData = [
  {
    question: 'You are based in Aldershot — how quickly can you get to Farnham?',
    answer: 'Farnham is about five miles from our base in Aldershot. We can be on-site in under twenty minutes for urgent issues. For most problems, though, we connect remotely and resolve things within minutes. Our monitoring systems mean we often spot issues before your team does.',
  },
  {
    question: 'What size businesses do you support in Farnham?',
    answer: 'We work with businesses from five users up to around fifty. That includes professional services firms, retail businesses, creative agencies, and hospitality venues across Farnham. Our pricing scales per user, so you only pay for what you need.',
  },
  {
    question: 'Do you offer cybersecurity as part of IT support?',
    answer: 'Yes. Every IT support plan includes antivirus management, security patching, and firewall monitoring. For businesses that handle sensitive data — solicitors, accountants, healthcare providers — we offer enhanced security packages with endpoint detection, phishing simulation, and GDPR compliance support.',
  },
]

const faqSchema = {
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

const ItSupportFarnham = () => {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <main className="bg-white text-gray-900">
      <SEO
        title="IT Support in Farnham, Surrey | Joro Services"
        description="Reliable IT support for Farnham businesses. Helpdesk, monitoring, security updates, and on-site visits. Based nearby in Aldershot."
        keywords="IT support Farnham, managed IT Farnham, IT services Farnham Surrey, business IT support Farnham, computer support Farnham"
        jsonLd={[
          serviceSchema({
            name: 'IT Support in Farnham',
            description: 'Reliable IT support and maintenance for businesses in Farnham, Surrey. Helpdesk, monitoring, security updates, and on-site visits.',
            url: '/it-support-farnham',
            category: 'IT Support',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'IT Support', path: '/technical-services/it-support-and-maintenance' },
            { name: 'Farnham', path: '/it-support-farnham' },
          ]),
          locationBusinessSchema({ town: 'Farnham', county: 'Surrey' }),
          faqSchema,
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-accent-dark" />
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Farnham, Surrey</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            IT Support in{' '}
            <span className="text-accent-dark">Farnham, Surrey</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Dependable IT support for Farnham businesses, from a team based just five miles away in Aldershot. We handle the technology so you can focus on your work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/getintouch"
              className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
            >
              Get a Free IT Audit
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

      {/* Main Content */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Local IT Support for a Town That Runs on Small Business
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                Farnham has a thriving mix of independent businesses. Solicitors on Castle Street, design studios in the Maltings, restaurants along the Borough. What they share is a need for IT that simply works — and someone to call when it does not.
              </p>
              <p>
                We are based in Aldershot, just five miles down the road. That means we are close enough for same-day on-site visits but also set up for fast remote support. Our monitoring tools keep tabs on your network, servers, and workstations around the clock. When something flags up, we deal with it. Often before anyone in your office has even noticed.
              </p>
              <p>
                Farnham's professional services firms — law practices, financial advisers, consultancies — need IT that meets compliance standards. We handle data backups, encryption, access controls, and audit trails. You stay compliant without having to become an IT expert yourself.
              </p>
              <p>
                For retail and hospitality businesses, we look after EPOS systems, Wi-Fi networks, and the day-to-day tech that keeps the tills running. If your card machine stops working on a Saturday afternoon, you need someone who picks up the phone. That is us.
              </p>
              <p>
                We also support businesses across Guildford and Camberley, so if you have staff or premises in those areas, one provider covers the lot. No complicated multi-vendor setups.
              </p>
            </div>
            <div className="mt-8">
              <Link
                to="/technical-services/it-support-and-maintenance"
                className="text-accent-dark font-semibold hover:underline"
              >
                Learn more about our IT Support &amp; Maintenance services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Farnham businesses choose us */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-10">
            Why Farnham Businesses Work With Us
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { title: 'Five Miles Away', text: 'We are based in Aldershot, so on-site visits to Farnham happen quickly. No waiting days for an engineer to drive down from London.' },
              { title: 'Proactive, Not Reactive', text: 'Our 24/7 monitoring catches problems early. We fix things before they cause downtime, not after your staff have already lost half a day.' },
              { title: 'Plain-Speaking Support', text: 'We explain things in plain English. No acronyms, no upselling, no making simple things sound complicated to justify a bigger bill.' },
              { title: 'Flexible Contracts', text: 'Monthly rolling agreements. If you are not happy, you can leave. We keep you because the service is good, not because of a contract clause.' },
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

      {/* FAQ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-10">
            IT Support in Farnham — Common Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-100">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center text-left p-5"
                >
                  <span className="font-medium text-lg pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-accent-dark flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <div className={`grid transition-all duration-300 ${openFaq === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
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
            Need Reliable IT Support in Farnham?
          </h2>
          <p className="text-lg mb-8 text-white/80">
            We will audit your current setup for free and show you where things can be improved.
          </p>
          <Link
            to="/getintouch"
            className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
          >
            Book Your Free IT Audit
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default ItSupportFarnham
