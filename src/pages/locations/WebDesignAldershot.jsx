import React, { useState } from 'react'
import { CheckCircle, ChevronDown, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'
import SEO from '../../component/SEO'
import { serviceSchema, breadcrumbSchema, locationBusinessSchema } from '../../seo/schemas'

const faqData = [
  {
    question: 'How much does a website cost for an Aldershot business?',
    answer: 'A standard business website starts from £1,500. That covers design, development, mobile responsiveness, basic SEO setup, and a content management system. More complex sites with custom features, e-commerce, or booking systems typically range from £3,000 to £10,000. We give you a fixed quote upfront so there are no surprises.',
  },
  {
    question: 'How long does it take to build a website?',
    answer: 'Most business websites take between four and six weeks from first conversation to launch. That includes design concepts, revisions, development, content loading, and testing. Larger projects with custom functionality can take eight to twelve weeks. We agree a timeline before we start and stick to it.',
  },
  {
    question: 'Will my website show up on Google?',
    answer: 'Every site we build includes on-page SEO fundamentals: proper heading structure, meta tags, fast loading speeds, mobile-first design, and clean code. We also set up Google Search Console and submit your sitemap. If you want ongoing SEO work to climb the rankings, we offer that as a separate service.',
  },
  {
    question: 'Can I update the website myself after it launches?',
    answer: 'Yes. We build sites with a content management system so you can update text, images, and blog posts yourself. We provide a walkthrough session after launch so you feel confident making changes. And if you ever get stuck, our support team is a phone call away.',
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

const WebDesignAldershot = () => {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <main className="bg-white text-gray-900">
      <SEO
        title="Web Design in Aldershot, Hampshire | Joro Services"
        description="Professional web design for Aldershot businesses. Mobile-first, SEO-friendly websites that turn visitors into customers. Prices from £1,500."
        keywords="web design Aldershot, website design Aldershot, web designer Aldershot, website builder Aldershot, business website Aldershot Hampshire"
        jsonLd={[
          serviceSchema({
            name: 'Web Design in Aldershot',
            description: 'Professional web design for Aldershot businesses. Mobile-first, SEO-friendly websites built to convert visitors into customers.',
            url: '/web-design-aldershot',
            category: 'Web Design',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Website Design', path: '/creative-solutions/website-design' },
            { name: 'Aldershot', path: '/web-design-aldershot' },
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
            Web Design in{' '}
            <span className="text-accent-dark">Aldershot, Hampshire</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Your website is often the first thing a potential customer sees. We build sites that look good, load fast, and actually bring in enquiries — designed and built right here in Aldershot.
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
              Websites Built for Aldershot Businesses, Not Templates
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                Walk down Wellington Street and you will see dozens of businesses that deserve a better online presence. Estate agents still running sites from 2015. Cafes with no mobile version. Tradespeople with nothing but a Facebook page. Aldershot has good businesses — many of them just need a website that does them justice.
              </p>
              <p>
                We design every site from scratch. No templates, no drag-and-drop builders, no cookie-cutter layouts. We start by understanding what your business does, who your customers are, and what you want the site to achieve. Then we design around that.
              </p>
              <p>
                Every site we deliver is mobile-first. Over sixty per cent of web traffic in the UK now comes from phones, so your site has to work properly on a small screen. We also build with speed in mind. A slow site loses visitors and hurts your Google rankings. Ours load in under two seconds.
              </p>
              <p>
                Because we are a full-service agency, your website connects to everything else — your SEO, your branding, your hosting. You do not need to coordinate three different suppliers. One team handles the lot, and if something needs changing six months down the line, you know exactly who to call.
              </p>
              <p>
                Prices start from £1,500 for a standard business website. We provide a fixed quote before any work begins, so you always know what you are paying.
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

      {/* What You Get */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-10">
            What You Get With Every Website
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { title: 'Custom Design', text: 'A bespoke design tailored to your brand, your audience, and your goals. Not a template with your logo dropped in.' },
              { title: 'Mobile-First Build', text: 'Designed for phones first, then scaled up. Your site will look sharp on every screen size, from a small handset to a widescreen monitor.' },
              { title: 'SEO Foundations', text: 'Proper heading structure, fast load times, meta descriptions, image optimisation, and a submitted sitemap. The basics done right from day one.' },
              { title: 'Content Management', text: 'A simple backend so you can update text, add blog posts, and swap images without needing a developer every time.' },
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
            Web Design in Aldershot — Common Questions
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
            Ready for a Website That Works as Hard as You Do?
          </h2>
          <p className="text-lg mb-8 text-white/80">
            Tell us about your business and we will put together a free, no-obligation quote.
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

export default WebDesignAldershot
