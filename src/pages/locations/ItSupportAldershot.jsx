import React, { useState } from 'react'
import { CheckCircle, ChevronDown, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'
import SEO from '../../component/SEO'
import { serviceSchema, breadcrumbSchema, locationBusinessSchema } from '../../seo/schemas'

const faqData = [
  {
    question: 'What does your IT support package for Aldershot businesses include?',
    answer: 'Our managed IT support covers 24/7 monitoring, helpdesk access during business hours, security patching, antivirus management, backup verification, and on-site visits when needed. We also handle software updates, user account management, and vendor liaison. Plans start from £30 per user per month.',
  },
  {
    question: 'How quickly can you respond to IT issues in Aldershot?',
    answer: 'Because we are based in Aldershot, we can usually be on-site within an hour for urgent issues. For remote support, our average response time is under 15 minutes during business hours. Critical issues are escalated immediately, and we offer out-of-hours emergency cover on our premium plans.',
  },
  {
    question: 'Can you take over from our current IT provider?',
    answer: 'Yes, and we make the handover straightforward. We audit your existing setup, document everything, and manage the transition so there is no disruption to your team. We handle the communication with your outgoing provider and ensure all credentials, licences, and contracts are properly transferred.',
  },
  {
    question: 'Do you support Microsoft 365 and cloud-based systems?',
    answer: 'Absolutely. We manage Microsoft 365 environments including Exchange Online, SharePoint, Teams, and OneDrive. We also support Google Workspace, AWS, and Azure. Whether you are fully cloud-based or running a hybrid setup, we look after the lot.',
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

const ItSupportAldershot = () => {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <main className="bg-white text-gray-900">
      <SEO
        title="IT Support in Aldershot, Hampshire | Joro Services"
        description="Managed IT support for businesses in Aldershot. 24/7 monitoring, helpdesk, security patching, and on-site visits. From £30 per user per month."
        keywords="IT support Aldershot, managed IT services Aldershot, IT helpdesk Aldershot, computer support Aldershot, business IT support Hampshire"
        jsonLd={[
          serviceSchema({
            name: 'IT Support in Aldershot',
            description: 'Managed IT support and maintenance for businesses in Aldershot, Hampshire. 24/7 monitoring, helpdesk, security patching, and on-site visits.',
            url: '/it-support-aldershot',
            category: 'IT Support',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'IT Support', path: '/technical-services/it-support-and-maintenance' },
            { name: 'Aldershot', path: '/it-support-aldershot' },
          ]),
          locationBusinessSchema({ town: 'Aldershot', county: 'Hampshire' }),
          faqSchema,
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-accent-dark" />
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Aldershot, Hampshire</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            IT Support in{' '}
            <span className="text-accent-dark">Aldershot, Hampshire</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Managed IT support from a team that is actually based in Aldershot. We keep your systems running, your data safe, and your staff productive — without the jargon or the runaround.
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
              IT Support That Actually Works for Your Business
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                Most Aldershot businesses we speak to have the same story. They are paying for IT support, but when something breaks, they wait hours for a response. Or they get passed between different technicians who do not know their setup. It wastes time and costs money.
              </p>
              <p>
                We do things differently. Every client gets a dedicated point of contact who knows their systems inside out. When you call, you speak to someone who already understands your network, your software, and how your team works. No ticket queues. No call centres.
              </p>
              <p>
                Our monitoring catches problems before they affect your staff. We patch servers, update software, and check backups every single day. If something does go wrong, we are usually already on it before you notice. And because we are based right here in Aldershot, on-site visits happen the same day — not next week.
              </p>
              <p>
                We work with businesses from two-person offices to teams of fifty. The service scales with you. You are not locked into a contract that does not fit, and you are not paying for things you do not need. We quote per user, starting from £30 a month, and that covers everything from helpdesk calls to security updates.
              </p>
              <p>
                If your current IT is more headache than help, have a chat with us. We will run a free audit of your setup and tell you exactly where the gaps are — no obligation attached.
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

      {/* What's Included */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-10">
            What Is Included in Our IT Support
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { title: '24/7 System Monitoring', text: 'We watch your servers, workstations, and network round the clock. If something looks off, we fix it before it becomes a problem for your team.' },
              { title: 'Helpdesk &amp; Remote Support', text: 'Your staff can reach us by phone, email, or live chat. Most issues are resolved remotely within minutes, not hours.' },
              { title: 'Security Patching &amp; Updates', text: 'We keep your operating systems, applications, and firmware up to date. No more ignoring those update prompts and hoping for the best.' },
              { title: 'On-Site Visits', text: 'Hardware failures, network cabling, new equipment setup — we come to you in Aldershot, usually the same day you call.' },
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
            IT Support in Aldershot — Common Questions
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

      {/* Related Services Nearby */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">
            Our Services in Nearby Towns
          </h2>
          <p className="text-center text-gray-600 mb-10">We also provide IT support and web design across Hampshire and Surrey.</p>
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'IT Support in Farnham', path: '/it-support-farnham', desc: 'Professional services and hospitality IT, 5 miles away' },
              { label: 'IT Support in Fleet', path: '/it-support-fleet', desc: 'Cloud migration and remote working support, 6 miles away' },
              { label: 'IT Support in Camberley', path: '/it-support-camberley', desc: 'Proactive IT for Watchmoor Park and Surrey Heath' },
              { label: 'Web Design in Aldershot', path: '/web-design-aldershot', desc: 'Custom websites from £1,500, mobile-first, no templates' },
              { label: 'Web Design in Farnham', path: '/web-design-farnham', desc: 'Design-led websites for creative businesses' },
              { label: 'Web Design in Guildford', path: '/web-design-guildford', desc: 'London quality at lower cost for Surrey businesses' },
            ].map((item, i) => (
              <Link key={i} to={item.path} className="group p-5 bg-white rounded-xl border border-gray-100 hover:border-accent/30 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 group-hover:text-accent transition-colors">{item.label}</h3>
                <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Fed Up With Unreliable IT Support?
          </h2>
          <p className="text-lg mb-8 text-white/80">
            Book a free IT audit and we will show you exactly where your current setup is letting you down.
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

export default ItSupportAldershot
