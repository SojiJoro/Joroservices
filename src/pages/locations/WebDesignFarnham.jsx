import React, { useState } from 'react'
import { CheckCircle, ChevronDown, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'
import SEO from '../../component/SEO'
import { serviceSchema, breadcrumbSchema, locationBusinessSchema } from '../../seo/schemas'

const faqData = [
  {
    question: 'Do you work with Farnham businesses specifically or just anyone?',
    answer: 'We are based in Aldershot, five miles from Farnham, so local businesses are our bread and butter. We also work with clients across Guildford, Fleet, and the wider Surrey and Hampshire area. Being local means we can meet in person easily, which makes the design process smoother.',
  },
  {
    question: 'I already have a website but it looks outdated — can you redesign it?',
    answer: 'Yes. We do plenty of redesigns. We will review your current site, keep what works, and rebuild the rest. We can usually preserve your existing domain, email setup, and any SEO value you have built up. Most redesigns take four to six weeks.',
  },
  {
    question: 'Do you build e-commerce websites for Farnham shops?',
    answer: 'We do. Whether you are a Farnham boutique wanting to sell online for the first time or an established shop needing a better online store, we build e-commerce sites with proper product management, payment processing, and stock control. Prices depend on the number of products and features, but typically start around £3,500.',
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

const WebDesignFarnham = () => {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <main className="bg-white text-gray-900">
      <SEO
        title="Web Design in Farnham, Surrey | Joro Services"
        description="Custom web design for Farnham businesses. Responsive, search-optimised websites built by a local team based in nearby Aldershot."
        keywords="web design Farnham, website design Farnham, web designer Farnham Surrey, Farnham website developer, business website Farnham"
        jsonLd={[
          serviceSchema({
            name: 'Web Design in Farnham',
            description: 'Custom web design for businesses in Farnham, Surrey. Responsive, search-optimised websites built by a local team.',
            url: '/web-design-farnham',
            category: 'Web Design',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Website Design', path: '/creative-solutions/website-design' },
            { name: 'Farnham', path: '/web-design-farnham' },
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
            Web Design in{' '}
            <span className="text-accent-dark">Farnham, Surrey</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Farnham is full of creative, independent businesses. Your website should reflect that — not look like every other template on the internet. We build custom sites from our studio in nearby Aldershot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/getintouch"
              className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
            >
              Get a Free Quote
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
              A Website That Matches the Quality of Your Business
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                Farnham has a reputation. Good food, good shops, a creative community built around the UCA campus and the Maltings. Businesses here tend to care about how they present themselves. Your website should meet that same standard.
              </p>
              <p>
                We have worked with businesses across Farnham, Aldershot, Guildford, and Fleet. What we have learnt is that every town has its own character, and a good website reflects that. A Farnham boutique needs something different from a Fleet accountancy firm. We do not use the same formula twice.
              </p>
              <p>
                Our process starts with a conversation. We want to know what your business actually does, who you are trying to reach, and what success looks like for you. Some clients want more phone calls. Others want online bookings. A few want to sell products. The design follows the goal, not the other way around.
              </p>
              <p>
                We handle everything in-house: design, development, copywriting support, and SEO setup. Your site goes live optimised for Google, built for mobile, and fast enough to keep visitors from bouncing. After launch, we are still around for updates, tweaks, and ongoing support.
              </p>
              <p>
                Being based in Aldershot means we are genuinely local. Face-to-face meetings are easy. If you want to sit down over a coffee and look at design concepts together, that is how we prefer to work too.
              </p>
            </div>
            <div className="mt-8">
              <Link
                to="/creative-solutions/website-design"
                className="text-accent-dark font-semibold hover:underline"
              >
                See our full Website Design service →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-10">
            Why Farnham Businesses Choose Us
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { title: 'Genuinely Local', text: 'Based in Aldershot, we know Farnham well. We understand the local market and can meet you at your premises or ours whenever you need.' },
              { title: 'Design-Led, Not Template-Led', text: 'Every site is designed from a blank canvas. Your business is unique, so your website should be too.' },
              { title: 'Full Service Under One Roof', text: 'We handle design, development, hosting, SEO, and ongoing maintenance. One team, one point of contact, no finger-pointing between suppliers.' },
              { title: 'Honest, Fixed Pricing', text: 'We quote a price and stick to it. No hourly rates that spiral, no surprise invoices at the end of a project.' },
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
            Web Design in Farnham — Common Questions
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
          <p className="text-center text-gray-600 mb-10">We also provide web design and IT support across Hampshire and Surrey.</p>
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'Web Design in Aldershot', path: '/web-design-aldershot', desc: 'Custom websites from £1,500, mobile-first' },
              { label: 'Web Design in Guildford', path: '/web-design-guildford', desc: 'London quality at lower cost for Surrey businesses' },
              { label: 'IT Support in Farnham', path: '/it-support-farnham', desc: 'Professional services and hospitality IT' },
              { label: 'IT Support in Aldershot', path: '/it-support-aldershot', desc: 'Same-day on-site visits from £30/user/month' },
              { label: 'IT Support in Fleet', path: '/it-support-fleet', desc: 'Cloud migration and remote working support' },
              { label: 'IT Support in Camberley', path: '/it-support-camberley', desc: 'Proactive IT for Watchmoor Park and Surrey Heath' },
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
            Let Us Build Something Your Business Deserves
          </h2>
          <p className="text-lg mb-8 text-white/80">
            Drop us a message and we will get back to you with ideas and a free quote within 24 hours.
          </p>
          <Link
            to="/getintouch"
            className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default WebDesignFarnham
