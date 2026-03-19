import React, { useState } from 'react'
import { CheckCircle, ChevronDown, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'
import SEO from '../../component/SEO'
import { serviceSchema, breadcrumbSchema, locationBusinessSchema } from '../../seo/schemas'

const faqData = [
  {
    question: 'How far is your office from Fleet?',
    answer: 'We are based in Aldershot, about six miles from Fleet. On-site visits typically take under twenty minutes to arrange. We also cover Farnborough and Basingstoke, so if your business has staff or offices across the area, one provider handles everything.',
  },
  {
    question: 'What happens when something breaks outside office hours?',
    answer: 'Our standard plans include monitoring around the clock. If a server goes down at midnight, we get an alert and start working on it immediately. For hands-on out-of-hours support, we offer premium plans with emergency callout cover. Most overnight issues are resolved remotely before your team arrives in the morning.',
  },
  {
    question: 'Can you help us move to the cloud?',
    answer: 'Yes. We have migrated dozens of businesses from on-premise servers to cloud platforms like Microsoft 365, Azure, and AWS. We plan the migration carefully, move data in stages, and make sure everything works before switching off the old systems. We also manage your cloud environment ongoing so you are not left to figure it out alone.',
  },
  {
    question: 'Do you provide new hardware and software procurement?',
    answer: 'We do. We source laptops, desktops, monitors, networking equipment, and software licences at trade prices. We configure everything before delivery so your staff can start working straight away. We also handle warranty claims and vendor communication if something goes wrong.',
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

const ItSupportFleet = () => {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <main className="bg-white text-gray-900">
      <SEO
        title="IT Support in Fleet, Hampshire | Joro Services"
        description="Managed IT support for Fleet businesses. Proactive monitoring, helpdesk, and on-site visits from a local team based in Aldershot."
        keywords="IT support Fleet, managed IT Fleet Hampshire, IT services Fleet, business IT support Fleet, computer support Fleet"
        jsonLd={[
          serviceSchema({
            name: 'IT Support in Fleet',
            description: 'Managed IT support for businesses in Fleet, Hampshire. Proactive monitoring, helpdesk, and on-site visits from a local team.',
            url: '/it-support-fleet',
            category: 'IT Support',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'IT Support', path: '/technical-services/it-support-and-maintenance' },
            { name: 'Fleet', path: '/it-support-fleet' },
          ]),
          locationBusinessSchema({ town: 'Fleet', county: 'Hampshire' }),
          faqSchema,
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-accent-dark" />
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Fleet, Hampshire</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            IT Support in{' '}
            <span className="text-accent-dark">Fleet, Hampshire</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Proactive IT support for Fleet businesses. We monitor, maintain, and fix your technology so your team stays productive. Based just six miles away in Aldershot.
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
              IT That Keeps Up With Fleet's Growing Businesses
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                Fleet has changed a lot in recent years. New businesses have moved into the town centre, and established ones are growing. What has not always kept up is the IT. We speak to businesses in Fleet that are still running on the same setup they had five years ago — and wondering why things keep going wrong.
              </p>
              <p>
                Good IT support is not about waiting for something to break and then scrambling to fix it. It is about preventing problems in the first place. Our monitoring picks up warning signs — a hard drive filling up, a backup that did not complete, a security patch that was missed — and we deal with them before they become your problem.
              </p>
              <p>
                Fleet sits between Aldershot, Farnborough, and Basingstoke, and plenty of businesses here have staff working across multiple locations or from home. We set up and manage remote working environments, VPNs, cloud storage, and collaboration tools so your team can work from anywhere without the usual headaches.
              </p>
              <p>
                We price per user, starting from £30 a month. That includes helpdesk access, monitoring, patching, and on-site visits when you need them. No hidden charges, no per-incident fees. If your printer jams or your email stops working, you call us and we sort it. Simple as that.
              </p>
              <p>
                If you are in Fleet and your current IT setup is more trouble than it is worth, let us take a look. The audit is free and there is no obligation to sign up.
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

      {/* What We Cover */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-10">
            What Our Fleet IT Support Covers
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { title: 'Proactive Monitoring', text: 'We watch your systems 24/7 and fix issues before they affect your staff. Downtime costs money — we keep it to an absolute minimum.' },
              { title: 'Remote Working Setup', text: 'VPNs, cloud storage, Microsoft 365, and collaboration tools configured properly. Your team works from home or on the move without problems.' },
              { title: 'Hardware Procurement', text: 'We source laptops, desktops, and networking equipment at trade prices, pre-configured and ready to use on delivery.' },
              { title: 'On-Site Support', text: 'When remote is not enough, we are in Fleet within twenty minutes. Same-day visits for urgent issues, scheduled appointments for planned work.' },
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
            IT Support in Fleet — Common Questions
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
            Your IT Should Help Your Business, Not Hold It Back
          </h2>
          <p className="text-lg mb-8 text-white/80">
            Get a free audit of your current setup. We will tell you what is working, what is not, and what it would cost to fix.
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

export default ItSupportFleet
