import React, { useState, useEffect } from 'react'
import {
  FaBullseye,
  FaGoogle,
  FaChartLine,
  FaCheckCircle,
  FaPlus,
  FaMinus,
  FaHandshake,
  FaShareAlt,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'

const painPoints = [
  'You\'ve tried Google Ads and wasted hundreds with nothing to show',
  'You\'re boosting posts on social media with no strategy behind it',
  'You don\'t know if your ad spend is actually generating customers',
  'Your current agency sends reports you don\'t understand',
  'You want leads now, not in 6 months',
]

const serviceCards = [
  {
    icon: FaBullseye,
    title: 'Built to Convert From Day One',
    label: 'PPC Strategy & Setup',
    description:
      'We research your market, your competitors, and your ideal customer — then build campaigns structured for conversions, not just clicks. Every campaign has clear goals and tracking from the start.',
    items: [
      'Keyword research',
      'Competitor analysis',
      'Campaign structure',
      'Ad copy',
      'Landing page recommendations',
      'Conversion tracking setup',
    ],
  },
  {
    icon: FaGoogle,
    title: 'Show Up When They\'re Searching for What You Sell',
    label: 'Google Ads Management',
    description:
      'Search ads, display ads, shopping ads, remarketing — we manage your Google Ads account daily, optimising bids, testing ad copy, and cutting wasted spend.',
    items: [
      'Campaign management',
      'Bid optimisation',
      'A/B testing',
      'Negative keyword management',
      'Quality score improvement',
      'Weekly monitoring',
    ],
  },
  {
    icon: FaShareAlt,
    title: 'Reach Your Ideal Customer — Even If They\'ve Never Heard of You',
    label: 'Social Media Advertising',
    description:
      'LinkedIn Ads for B2B, Meta (Facebook/Instagram) Ads for B2C, or both. We build targeted campaigns that reach the right people based on demographics, interests, job titles, and behaviour.',
    items: [
      'Audience targeting',
      'Ad creative',
      'Campaign management',
      'Retargeting setup',
      'Platform-specific optimisation',
    ],
  },
  {
    icon: FaChartLine,
    title: 'You\'ll Always Know Where Your Money Goes',
    label: 'Reporting & Optimisation',
    description:
      'Monthly reports in plain English — not dashboards full of metrics you don\'t care about. We show you: what we spent, what we got, what it cost per lead, and what we\'re changing next month.',
    items: [
      'Monthly ROI report',
      'Cost-per-lead tracking',
      'Campaign performance analysis',
      'Optimisation recommendations',
      'Quarterly strategy review',
    ],
  },
]

const transparencyPromises = [
  {
    title: 'You Own Your Accounts',
    description:
      'We manage them, you own them. If we part ways, you keep everything.',
  },
  {
    title: 'No Markup on Ad Spend',
    description:
      'Your ad spend goes directly to Google/Meta/LinkedIn — we never mark up media costs.',
  },
  {
    title: 'Transparent Fees',
    description:
      'Our management fee is separate and transparent — you always know what you\'re paying us vs. what\'s going to ads.',
  },
  {
    title: 'Full Reporting',
    description:
      'Monthly reports show every pound spent and every lead generated.',
  },
  {
    title: 'No Long Lock-ins',
    description:
      '3-month minimum, then monthly rolling. No long-term contracts.',
  },
]

const pricingTiers = [
  {
    name: 'PPC Audit',
    price: 'Free',
    features: [
      'Review of existing campaigns (if any)',
      'Competitor ad landscape analysis',
      'Recommended budget and expected results',
      'Delivered within 5 business days',
    ],
    bestFor: 'Understanding if PPC is right for your business',
    isFree: true,
  },
  {
    name: 'Starter',
    price: '£400/month + ad spend',
    commitment: '3-month minimum',
    features: [
      '1 platform (Google Ads OR Social Ads)',
      'Campaign setup and management',
      'Monthly optimisation',
      'Monthly report',
    ],
    adSpend: 'Recommended ad spend: £500-1,500/month',
    bestFor: 'Testing paid ads for the first time',
  },
  {
    name: 'Growth',
    price: '£800/month + ad spend',
    commitment: '3-month minimum',
    features: [
      '2 platforms',
      'Advanced campaign structures',
      'A/B testing',
      'Remarketing campaigns',
      'Bi-weekly optimisation',
      'Monthly report + monthly call',
    ],
    adSpend: 'Recommended ad spend: £1,500-5,000/month',
    bestFor: 'Businesses ready to scale lead generation',
    highlighted: true,
  },
  {
    name: 'Scale',
    price: '£1,500/month + ad spend',
    commitment: '6-month minimum',
    features: [
      'All platforms',
      'Full-funnel campaign strategy',
      'Landing page optimisation recommendations',
      'Weekly optimisation',
      'Conversion rate optimisation',
      'Monthly report + fortnightly calls',
    ],
    adSpend: 'Recommended ad spend: £5,000+/month',
    bestFor: 'Businesses with aggressive growth targets',
  },
]

const faqData = [
  {
    question: 'How much should I spend on ads?',
    answer:
      'It depends on your industry, competition, and goals. As a rough guide, most SMBs start with £500-1,500/month on Google Ads. We\'ll recommend a budget based on your market during the free audit.',
  },
  {
    question: 'How quickly will I see results?',
    answer:
      'Unlike SEO, PPC can generate leads from day one. However, campaigns typically need 2-4 weeks of data before we can optimise effectively. Most clients see strong, consistent results within 6-8 weeks.',
  },
  {
    question: 'Who owns the ad accounts?',
    answer:
      'You do. Always. We set up campaigns in your accounts and you retain full ownership and access. If we ever stop working together, you keep everything.',
  },
  {
    question: 'Do you charge a percentage of ad spend?',
    answer:
      'No. Our management fee is a flat monthly rate, not a percentage of your spend. This means we\'re incentivised to make your budget work harder — not to encourage you to spend more.',
  },
  {
    question: 'What if the ads aren\'t working?',
    answer:
      'We monitor campaigns closely and make adjustments weekly. If a campaign isn\'t performing after reasonable optimisation, we\'ll tell you honestly and recommend changes — including pausing if necessary. We\'d rather lose a fee than waste your money.',
  },
  {
    question: 'Do you create the ad graphics and copy?',
    answer:
      'Yes. Ad copy, basic graphics, and campaign creative are included in all plans. If you need premium video or complex design work, we\'ll scope that separately.',
  },
]

const PPCAndOnlineCampaigns = () => {
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    document.title =
      'PPC Management London | Google Ads & Social Advertising for SMBs | Joro Services'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Transparent PPC management for small businesses. Google Ads, LinkedIn Ads, Meta Ads. No markup on ad spend. Free PPC audit available.'
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
              PPC & Online Campaigns
            </p>
            <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              Paid Ads That{' '}
              <span className="text-accent-dark">Pay for Themselves</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Google Ads, LinkedIn Ads, Meta Ads — done right, paid advertising
              is the fastest way to get qualified leads. Done wrong, it's the
              fastest way to burn money. Our PPC specialists manage your
              campaigns with full transparency, clear reporting, and a focus on
              ROI — not vanity clicks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/getintouch"
                className="inline-block px-6 py-3 bg-accent-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition text-center"
              >
                Get a Free PPC Audit
              </Link>
              <a
                href="#pricing"
                className="inline-block px-6 py-3 border-2 border-accent-dark text-accent-dark font-semibold rounded-lg hover:bg-accent-dark hover:text-white transition text-center"
              >
                See Our PPC Plans
              </a>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide">
              Your Ad ROI
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-white rounded-lg p-4 border border-gray-100">
                <div>
                  <p className="text-sm font-semibold text-gray-700">
                    Ad Spend
                  </p>
                  <p className="text-xs text-gray-500">Goes directly to platforms</p>
                </div>
                <p className="text-lg font-bold text-gray-700">£1,000</p>
              </div>
              <div className="text-center text-gray-400">↓</div>
              <div className="flex items-center justify-between bg-white rounded-lg p-4 border border-gray-100">
                <div>
                  <p className="text-sm font-semibold text-gray-700">Clicks</p>
                  <p className="text-xs text-gray-500">Qualified visitors</p>
                </div>
                <p className="text-lg font-bold text-accent-dark">320</p>
              </div>
              <div className="text-center text-gray-400">↓</div>
              <div className="flex items-center justify-between bg-white rounded-lg p-4 border border-gray-100">
                <div>
                  <p className="text-sm font-semibold text-gray-700">Leads</p>
                  <p className="text-xs text-gray-500">Real enquiries</p>
                </div>
                <p className="text-lg font-bold text-accent-dark">28</p>
              </div>
              <div className="text-center text-gray-400">↓</div>
              <div className="flex items-center justify-between bg-accent-dark/10 rounded-lg p-4 border border-accent-dark/20">
                <div>
                  <p className="text-sm font-semibold text-accent-dark">
                    Customers
                  </p>
                  <p className="text-xs text-gray-500">Paying clients</p>
                </div>
                <p className="text-lg font-bold text-accent-dark">8</p>
              </div>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Transparency Promise */}
      <section className="py-16 lg:py-20 px-4 lg:px-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <FaHandshake className="text-4xl text-accent mx-auto mb-4" />
            <h2 className="text-2xl lg:text-3xl font-bold mb-3">
              Our Transparency Promise
            </h2>
            <p className="text-gray-300">
              Your ad spend is YOUR money. Here's how we handle it:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {transparencyPromises.map((promise, i) => (
              <div
                key={i}
                className="bg-white/10 rounded-xl p-5 backdrop-blur"
              >
                <FaCheckCircle className="text-accent mb-2" />
                <h3 className="font-semibold mb-1">{promise.title}</h3>
                <p className="text-sm text-gray-400">{promise.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Pricing */}
      <section id="pricing" className="py-16 lg:py-20 px-4 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            Pricing
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Flat management fees. No percentage of ad spend. Full transparency.
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
                <ul className="space-y-2 mb-4">
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
                {tier.adSpend && (
                  <p className="text-xs text-gray-500 mb-3 bg-gray-50 p-2 rounded">
                    {tier.adSpend}
                  </p>
                )}
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
          <p className="text-center text-sm text-gray-500 mt-6">
            Management fees are separate from ad spend. We never touch your ad
            budget — it goes directly to the platforms.
          </p>
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
            Stop Wasting Ad Spend. Start Generating Leads.
          </h2>
          <p className="text-lg mb-8 text-white/80">
            Get a free PPC audit and find out if paid advertising is right for
            your business — and how much you should invest.
          </p>
          <Link
            to="/getintouch"
            className="inline-block bg-white text-accent-dark font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
          >
            Get Your Free PPC Audit
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default PPCAndOnlineCampaigns
