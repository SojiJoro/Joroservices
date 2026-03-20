import React, { useState } from 'react'
import { CheckCircle, ChevronDown, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'
import SEO from '../../component/SEO'
import { serviceSchema, breadcrumbSchema, locationBusinessSchema } from '../../seo/schemas'

const faqData = [
  {
    question: 'Do you provide IT support across the whole Camberley area?',
    answer: 'Yes. We cover Camberley, Frimley, Sandhurst, and Farnborough. Our base in Aldershot is about seven miles away, so we can be on-site quickly. We also support businesses along the A331 corridor, which is handy if you have staff or premises across multiple locations in the area.',
  },
  {
    question: 'We are a small business with only a few computers — is IT support worth it?',
    answer: 'It depends on how much downtime costs you. If your internet goes down for a day or a ransomware attack locks your files, what does that mean for your revenue? Our plans start from £30 per user per month. For a five-person office, that is less than what most businesses spend on coffee. And it covers monitoring, helpdesk, security, and on-site visits.',
  },
  {
    question: 'Can you manage our server and network infrastructure?',
    answer: 'Absolutely. We manage on-premise servers, network switches, firewalls, wireless access points, and VPN connections. We also handle cloud servers on AWS and Azure. Whether you run everything locally or in the cloud, we keep it maintained, patched, and performing properly.',
  },
  {
    question: 'What industries do you support in Camberley?',
    answer: 'We work across sectors. In Camberley and the surrounding area, we support professional services firms, construction companies, dental and healthcare practices, retail businesses, and small manufacturers. Each has different needs, and we tailor the service accordingly rather than offering a one-size-fits-all package.',
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

const ItSupportCamberley = () => {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <main className="bg-white text-gray-900">
      <SEO
        title="IT Support in Camberley, Surrey | Joro Services"
        description="IT support and maintenance for Camberley businesses. Remote and on-site support from a local team based in nearby Aldershot."
        keywords="IT support Camberley, managed IT Camberley Surrey, IT services Camberley, business IT support Camberley, computer support Camberley Frimley"
        jsonLd={[
          serviceSchema({
            name: 'IT Support in Camberley',
            description: 'IT support and maintenance for businesses in Camberley, Surrey. Remote and on-site support from a local team.',
            url: '/it-support-camberley',
            category: 'IT Support',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'IT Support', path: '/technical-services/it-support-and-maintenance' },
            { name: 'Camberley', path: '/it-support-camberley' },
          ]),
          locationBusinessSchema({ town: 'Camberley', county: 'Surrey' }),
          faqSchema,
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-accent-dark" />
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Camberley, Surrey</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            IT Support in{' '}
            <span className="text-accent-dark">Camberley, Surrey</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Straightforward IT support for Camberley businesses. We keep your systems secure, your staff productive, and your costs predictable. Based seven miles away in Aldershot.
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
              Proper IT Support, Not Just a Helpdesk Number
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                Camberley has a solid commercial base. Between the town centre, the Watchmoor Park business estate, and the surrounding areas of Frimley and Sandhurst, there are hundreds of businesses that depend on their IT every single day. When it stops working, everything stops.
              </p>
              <p>
                The problem with a lot of IT support providers is that they are reactive. You ring when something breaks, wait on hold, explain the issue to someone who has never seen your setup, and then wait some more. We think that is a poor way to run things.
              </p>
              <p>
                Our approach is to know your systems before something goes wrong. We document your network, your hardware, your software licences, and your user accounts. When you call, we already know your environment. That means faster fixes and fewer repeat problems.
              </p>
              <p>
                We also do the preventative work that most businesses neglect. Security patches applied on schedule. Backups tested regularly, not just assumed to be working. Antivirus kept current. Hard drives monitored for early signs of failure. It is not glamorous work, but it is the difference between a minor inconvenience and a week of downtime.
              </p>
              <p>
                Our base in Aldershot is seven miles from Camberley, so we are close enough for same-day on-site visits. We also cover Farnborough and Frimley, which is useful if your business operates across more than one site in the area.
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

      {/* Why choose us */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-10">
            What Makes Our IT Support Different
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { title: 'We Know Your Setup', text: 'Every client gets a documented IT profile. When you call, we already know your network, your equipment, and your software. No repeating yourself to a new technician each time.' },
              { title: 'Prevention Over Cure', text: 'Monitoring, patching, backup checks, and hardware health tracking. We stop problems before they stop your business.' },
              { title: 'Local and Accessible', text: 'Seven miles from Camberley, covering Frimley, Sandhurst, and Farnborough. On-site when you need us, remote when that is quicker.' },
              { title: 'Predictable Monthly Cost', text: 'Per-user pricing with no hidden extras. You know exactly what you are paying each month, and that covers everything.' },
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
            IT Support in Camberley — Common Questions
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
              { label: 'IT Support in Aldershot', path: '/it-support-aldershot', desc: 'Same-day on-site visits from £30/user/month' },
              { label: 'IT Support in Farnham', path: '/it-support-farnham', desc: 'Professional services and hospitality IT' },
              { label: 'IT Support in Fleet', path: '/it-support-fleet', desc: 'Cloud migration and remote working support' },
              { label: 'Web Design in Aldershot', path: '/web-design-aldershot', desc: 'Custom websites from £1,500, mobile-first' },
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
            Tired of IT That Lets You Down?
          </h2>
          <p className="text-lg mb-8 text-white/80">
            Let us audit your current setup and show you what proper IT support looks like. Free, no strings attached.
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

export default ItSupportCamberley
