import React, { useState, useEffect } from 'react'
import {
  FaSearch,
  FaCogs,
  FaPenFancy,
  FaChartLine,
  FaCheckCircle,
  FaPlus,
  FaMinus,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'

const painPoints = [
  'You have a website but it\'s invisible on Google',
  'You\'ve tried blogging but it\'s not driving any traffic',
  'You don\'t know which keywords to target or where to start',
  'You\'ve been burned by an SEO agency that promised page 1 and delivered nothing',
  'You know you need SEO but don\'t have time to learn it',
]

const serviceCards = [
  {
    icon: FaSearch,
    title: 'Know Exactly Where You Stand',
    label: 'SEO Audit & Strategy',
    description:
      'We audit your website\'s current SEO performance — rankings, technical issues, content gaps, backlink profile — and build a strategy tailored to your business and your market.',
    items: [
      'Technical SEO audit',
      'Keyword research',
      'Competitor analysis',
      'Content gap analysis',
      '6-month SEO roadmap',
    ],
  },
  {
    icon: FaCogs,
    title: 'Fix What Google Can\'t See',
    label: 'Technical SEO',
    description:
      'Site speed, mobile responsiveness, Core Web Vitals, structured data, crawlability — the technical foundation that determines whether Google even considers ranking you.',
    items: [
      'Site speed optimisation',
      'Mobile audit',
      'Schema markup',
      'Sitemap and robots.txt configuration',
      'Core Web Vitals improvements',
    ],
    note: 'This is where Joro\'s technical infrastructure expertise adds genuine value — site performance is an infrastructure problem.',
  },
  {
    icon: FaPenFancy,
    title: 'Content That Ranks and Converts',
    label: 'Content Strategy & Creation',
    description:
      'Keyword-targeted blog posts, landing pages, and website copy created by specialist content writers who understand both SEO and your industry. Not AI-generated fluff — real content for real readers.',
    items: [
      'Monthly content calendar',
      'Keyword-targeted articles',
      'Landing page copy',
      'Meta descriptions and title tags',
      'Internal linking strategy',
    ],
  },
  {
    icon: FaChartLine,
    title: 'SEO Is a Marathon, Not a Sprint',
    label: 'Ongoing SEO Management',
    description:
      'Monthly optimisation, performance tracking, and strategy adjustments based on real data. You get a clear monthly report showing what we did, what moved, and what\'s next.',
    items: [
      'Monthly ranking reports',
      'Google Analytics/Search Console monitoring',
      'Ongoing content optimisation',
      'Quarterly strategy reviews',
    ],
  },
]

const pricingTiers = [
  {
    name: 'SEO Audit',
    price: 'Free',
    features: [
      'Technical SEO health check',
      'Top 10 keyword opportunities identified',
      'Competitor snapshot',
      'Delivered within 5 business days',
    ],
    bestFor: 'Understanding your current SEO position',
    isFree: true,
  },
  {
    name: 'SEO Starter',
    price: 'From £500/month',
    commitment: '3-month minimum',
    features: [
      'Keyword research and strategy',
      '2 SEO-optimised articles per month',
      'Technical SEO fixes',
      'Monthly performance report',
    ],
    bestFor: 'Businesses just starting with SEO',
  },
  {
    name: 'SEO Growth',
    price: 'From £1,000/month',
    commitment: '6-month minimum',
    features: [
      'Everything in Starter, plus:',
      '4 SEO-optimised articles per month',
      'Landing page optimisation',
      'Backlink strategy',
      'Quarterly strategy review call',
    ],
    bestFor: 'Businesses ready to invest seriously in organic growth',
    highlighted: true,
  },
  {
    name: 'SEO Enterprise',
    price: 'From £2,000/month',
    commitment: '6-month minimum',
    features: [
      'Everything in Growth, plus:',
      '8+ content pieces per month',
      'Full content calendar management',
      'Dedicated SEO strategist',
      'Monthly strategy call',
    ],
    bestFor: 'Businesses in competitive markets',
  },
]

const faqData = [
  {
    question: 'How long until we see results?',
    answer:
      'SEO is a long-term investment. Most clients see meaningful ranking improvements within 3-6 months, with compounding results over time. Anyone promising page 1 in 30 days is lying.',
  },
  {
    question: 'Do you guarantee rankings?',
    answer:
      'No. Anyone who guarantees specific Google rankings is being dishonest. What we guarantee is a clear strategy, quality content, technical best practices, and transparent reporting. The results follow from doing the right things consistently.',
  },
  {
    question: 'Who writes the content?',
    answer:
      'Our specialist content writers — real people who research your industry and write for human readers first, search engines second. We don\'t use AI-generated content.',
  },
  {
    question: 'Can you work with our existing website?',
    answer:
      'Yes. We work with WordPress, React, Webflow, Shopify, and most other platforms. If there are technical limitations we can\'t work around, we\'ll tell you upfront.',
  },
  {
    question: 'What do we need to provide?',
    answer:
      'Access to Google Analytics, Google Search Console, and your website CMS. Beyond that, we handle everything — though we\'ll occasionally need your input on industry-specific topics.',
  },
  {
    question: 'How is Joro different from a pure SEO agency?',
    answer:
      'We combine technical infrastructure expertise with SEO strategy. Site speed, server configuration, Core Web Vitals — these are infrastructure problems that affect your rankings. Most SEO agencies can\'t fix them. We can.',
  },
]

const SEOAndContentStrategy = () => {
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    document.title =
      'SEO Services London | Content Strategy & Technical SEO for SMBs | Joro Services'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Get found on Google. SEO audit, content strategy, technical optimisation, and monthly management for small businesses. Free SEO audit available.'
      )
    }
    return () => {
      document.title =
        'Joro Services | Digital Marketing, Development & IT Solutions in London'
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Joro Services Ltd offers tailored digital marketing, web development, mobile app development, UI/UX design, cloud infrastructure, cybersecurity, and IT support services for businesses across the UK.'
        )
      }
    }
  }, [])

  return (
    <main className="bg-white text-black">
      {/* Section 1: Hero */}
      <section
        id="hero"
        className="px-4 lg:px-20 py-16 lg:py-24 min-h-[80vh] flex items-center"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase text-sm text-accent-dark mb-4 font-semibold tracking-wide">
              SEO & Content Strategy
            </p>
            <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              Get Found on Google —{' '}
              <span className="text-accent-dark">Without the Guesswork</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              You built a great business. Now let people find it. Our SEO
              specialists handle keyword research, content strategy, technical
              optimisation, and ongoing performance tracking — so you show up
              when your customers are searching.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/getintouch"
                className="inline-block px-6 py-3 bg-accent-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition text-center"
              >
                Get a Free SEO Audit
              </Link>
              <a
                href="#pricing"
                className="inline-block px-6 py-3 border-2 border-accent-dark text-accent-dark font-semibold rounded-lg hover:bg-accent-dark hover:text-white transition text-center"
              >
                See Our SEO Plans
              </a>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <div className="space-y-4">
              <div className="flex items-center gap-3 bg-white rounded-lg p-3 border border-gray-100">
                <div className="w-8 h-8 bg-accent-dark/10 rounded flex items-center justify-center">
                  <span className="text-accent-dark font-bold text-sm">1</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">Your Business Name</p>
                  <p className="text-xs text-accent-dark">
                    www.yourbusiness.co.uk
                  </p>
                  <p className="text-xs text-gray-500">
                    #1 result for your target keywords
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-lg p-3 border border-gray-100 opacity-50">
                <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-gray-400 font-bold text-sm">2</span>
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-400">
                    Competitor A
                  </p>
                  <p className="text-xs text-gray-400">www.competitor-a.co.uk</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-lg p-3 border border-gray-100 opacity-30">
                <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-gray-400 font-bold text-sm">3</span>
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-400">
                    Competitor B
                  </p>
                  <p className="text-xs text-gray-400">www.competitor-b.co.uk</p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <FaChartLine className="text-accent-dark" />
              <span className="text-sm text-gray-600">
                Organic traffic trending upward
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Pain Points */}
      <section className="py-16 lg:py-20 px-4 lg:px-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10">
            Sound Familiar?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {painPoints.map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200 shadow-sm"
              >
                <span className="text-red-400 mt-1 text-lg">"</span>
                <p className="text-gray-700 italic">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Service Cards */}
      <section id="services" className="py-16 lg:py-20 px-4 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCards.map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition"
              >
                <card.icon className="text-3xl text-accent-dark mb-4" />
                <p className="text-xs uppercase tracking-wide text-accent-dark font-semibold mb-1">
                  {card.label}
                </p>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{card.description}</p>
                <ul className="space-y-2">
                  {card.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <FaCheckCircle className="text-accent-dark mt-0.5 flex-shrink-0 text-xs" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {card.note && (
                  <p className="mt-4 text-xs text-accent-dark font-medium bg-accent-dark/10 p-2 rounded">
                    {card.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Differentiator */}
      <section className="py-16 lg:py-20 px-4 lg:px-20 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">
            Technical + Content Under One Roof
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Most SEO agencies are great at content but terrible at technical
            infrastructure. Most IT companies don't touch marketing. We bridge
            the gap — our technical team handles site performance and
            infrastructure, our SEO specialists handle strategy and content. You
            get the full picture from one provider.
          </p>
        </div>
      </section>

      {/* Section 5: Pricing */}
      <section id="pricing" className="py-16 lg:py-20 px-4 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            Pricing
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Transparent pricing. No lock-in beyond the minimum.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier, i) => (
              <div
                key={i}
                className={`rounded-xl p-6 border-2 ${
                  tier.highlighted
                    ? 'border-accent-dark shadow-lg relative'
                    : tier.isFree
                    ? 'border-accent-dark/30 bg-accent-dark/5'
                    : 'border-gray-200'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-dark text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-lg font-bold mb-1">{tier.name}</h3>
                {tier.commitment && (
                  <p className="text-xs text-gray-500 mb-2">
                    {tier.commitment}
                  </p>
                )}
                <div className="text-xl font-bold text-accent-dark mb-4">
                  {tier.price}
                </div>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <FaCheckCircle className="text-accent-dark mt-0.5 flex-shrink-0 text-xs" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-500 italic mb-4">
                  Best for: "{tier.bestFor}"
                </p>
                <Link
                  to="/getintouch"
                  className={`inline-block w-full text-center px-4 py-2.5 font-semibold rounded-lg transition text-sm ${
                    tier.highlighted
                      ? 'bg-accent-dark text-white hover:bg-opacity-90'
                      : 'border-2 border-accent-dark text-accent-dark hover:bg-accent-dark hover:text-white'
                  }`}
                >
                  {tier.isFree ? 'Get Free Audit' : 'Get Started'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: FAQ */}
      <section className="py-16 lg:py-20 px-4 lg:px-20 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg bg-white"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="w-full flex justify-between items-center text-left p-5"
                >
                  <span className="font-medium text-lg pr-4">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <FaMinus className="text-accent-dark flex-shrink-0" />
                  ) : (
                    <FaPlus className="text-accent-dark flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Bottom CTA */}
      <section className="bg-accent-dark text-white py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Your Customers Are Searching. Make Sure They Find You.
          </h2>
          <p className="text-lg mb-8 text-white/80">
            Start with a free SEO audit. We'll show you exactly where you stand
            and what it'll take to rank.
          </p>
          <Link
            to="/getintouch"
            className="inline-block bg-white text-accent-dark font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
          >
            Get Your Free SEO Audit
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default SEOAndContentStrategy
