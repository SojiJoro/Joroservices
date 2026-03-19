import React, { useState } from 'react'
import { CheckCircle, ChevronDown, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'
import SEO from '../../component/SEO'
import { serviceSchema, breadcrumbSchema, locationBusinessSchema } from '../../seo/schemas'

const faqData = [
  {
    question: 'You are based in Aldershot — why should a Guildford business choose you?',
    answer: 'Because the quality of the work matters more than the postcode. We are fifteen miles from Guildford, which is close enough for face-to-face meetings but far enough that you are not paying Guildford agency prices. We also serve clients in Farnham, Woking, and Camberley, so we know the Surrey market well.',
  },
  {
    question: 'What types of websites do you build?',
    answer: 'Business brochure sites, e-commerce stores, booking platforms, membership portals, and custom web applications. We use React for most builds, which means fast, modern sites that scale well. If you are not sure what you need, we will help you work that out before quoting.',
  },
  {
    question: 'Do you offer website maintenance after launch?',
    answer: 'Yes. We offer monthly maintenance plans that cover security updates, performance monitoring, content changes, and backups. Most clients find it easier to have us handle the ongoing work rather than trying to manage it themselves. Plans start from £50 per month.',
  },
  {
    question: 'Can you help with SEO and marketing as well as web design?',
    answer: 'We can. We are a full-service agency, so we do SEO, content strategy, PPC advertising, and social media alongside web design. Having the same team handle your site and your marketing means everything is aligned — your website is built to support your SEO goals from day one.',
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

const WebDesignGuildford = () => {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <main className="bg-white text-gray-900">
      <SEO
        title="Web Design in Guildford, Surrey | Joro Services"
        description="Professional web design for Guildford businesses. Modern, mobile-first websites built by a Hampshire-based agency. From £1,500."
        keywords="web design Guildford, website design Guildford, web designer Guildford Surrey, Guildford website developer, business website Guildford"
        jsonLd={[
          serviceSchema({
            name: 'Web Design in Guildford',
            description: 'Professional web design for businesses in Guildford, Surrey. Modern, mobile-first websites built to convert visitors into customers.',
            url: '/web-design-guildford',
            category: 'Web Design',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Website Design', path: '/creative-solutions/website-design' },
            { name: 'Guildford', path: '/web-design-guildford' },
          ]),
          locationBusinessSchema({ town: 'Guildford', county: 'Surrey' }),
          faqSchema,
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-accent-dark" />
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Guildford, Surrey</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            Web Design in{' '}
            <span className="text-accent-dark">Guildford, Surrey</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Guildford is a competitive market. Your website needs to stand out, load fast, and convert visitors. We build sites that do all three — from our base in nearby Aldershot.
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
              Web Design for Businesses Competing in Guildford
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                Guildford is one of the wealthiest towns in the South East, and its business community reflects that. There are law firms, tech companies, high-end retailers, and professional services outfits all competing for the same local customers. In that environment, a poor website is a serious disadvantage.
              </p>
              <p>
                We build websites that are designed to compete. Not just in terms of looks — although they do look good — but in terms of performance. Page speed, mobile usability, search engine visibility, and conversion rates. These are the things that separate a website that generates enquiries from one that just sits there.
              </p>
              <p>
                Our team works from Aldershot, about fifteen miles from Guildford. We also serve businesses in Farnham, Woking, and Camberley. What that means for you is agency-quality work without agency-level overheads. Guildford-based design firms often charge a premium simply because of their location. We do not.
              </p>
              <p>
                We use React and modern front-end frameworks, which means your site will be fast, interactive, and easy to maintain. We also handle the hosting, so you are not stuck trying to manage a server. If something needs updating, you either do it through a simple content manager or you ask us.
              </p>
              <p>
                Prices start from £1,500. We will meet you in Guildford, talk through what you need, and give you a fixed quote before any work begins. No deposits lost, no scope creep, no nasty surprises at the end.
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

      {/* Why choose us */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-10">
            Why Guildford Businesses Work With Us
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { title: 'Agency Quality, Sensible Pricing', text: 'You get the same standard of work as a London or Guildford agency, but without the inflated overheads. Our prices reflect the work, not the postcode.' },
              { title: 'Built for Performance', text: 'Every site is optimised for speed, mobile, and search engines. We test on real devices and real connections, not just our office Wi-Fi.' },
              { title: 'Technical Depth', text: 'We are not just designers. We understand hosting, security, DNS, and server performance. Your website sits on solid foundations, not a house of cards.' },
              { title: 'Ongoing Relationship', text: 'We do not disappear after launch. Monthly maintenance, content updates, and performance tweaks keep your site working as well in year two as it did on day one.' },
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
            Web Design in Guildford — Common Questions
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
            Ready to Stand Out in Guildford?
          </h2>
          <p className="text-lg mb-8 text-white/80">
            Get in touch for a free quote. We will meet you in Guildford and talk through exactly what your business needs.
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

export default WebDesignGuildford
