import React, { useState } from 'react'
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
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'
import SEO from '../../component/SEO'
import pagesSEO from '../../seo/pagesSEO'
import { serviceSchema, breadcrumbSchema } from '../../seo/schemas'

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
      'We research your market, your competitors, and your ideal customer, then build campaigns structured for conversions, not just clicks. Every campaign has clear goals and tracking from the start.',
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
      'Search ads, display ads, shopping ads, and remarketing. We manage your Google Ads account daily, optimising bids, testing ad copy, and cutting wasted spend.',
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
    title: 'Reach Your Ideal Customer, Even If They\'ve Never Heard of You',
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
      'Monthly reports in plain English, not dashboards full of metrics you don\'t care about. We show you what we spent, what we got, what it cost per lead, and what we\'re changing next month.',
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
      'Your ad spend goes directly to Google/Meta/LinkedIn. We never mark up media costs.',
  },
  {
    title: 'Transparent Fees',
    description:
      'Our management fee is separate and transparent. You always know what you\'re paying us vs. what\'s going to ads.',
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
    price: '\u00a3400/month + ad spend',
    commitment: '3-month minimum',
    features: [
      '1 platform (Google Ads OR Social Ads)',
      'Campaign setup and management',
      'Monthly optimisation',
      'Monthly report',
    ],
    adSpend: 'Recommended ad spend: \u00a3500-1,500/month',
    bestFor: 'Testing paid ads for the first time',
  },
  {
    name: 'Growth',
    price: '\u00a3800/month + ad spend',
    commitment: '3-month minimum',
    features: [
      '2 platforms',
      'Advanced campaign structures',
      'A/B testing',
      'Remarketing campaigns',
      'Bi-weekly optimisation',
      'Monthly report + monthly call',
    ],
    adSpend: 'Recommended ad spend: \u00a31,500-5,000/month',
    bestFor: 'Businesses ready to scale lead generation',
    highlighted: true,
  },
  {
    name: 'Scale',
    price: '\u00a31,500/month + ad spend',
    commitment: '6-month minimum',
    features: [
      'All platforms',
      'Full-funnel campaign strategy',
      'Landing page optimisation recommendations',
      'Weekly optimisation',
      'Conversion rate optimisation',
      'Monthly report + fortnightly calls',
    ],
    adSpend: 'Recommended ad spend: \u00a35,000+/month',
    bestFor: 'Businesses with aggressive growth targets',
  },
]

const faqData = [
  {
    question: 'How much should I spend on ads?',
    answer:
      'It depends on your industry, competition, and goals. As a rough guide, most SMBs start with \u00a3500-1,500/month on Google Ads. We\'ll recommend a budget based on your market during the free audit.',
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
      'No. Our management fee is a flat monthly rate, not a percentage of your spend. This means we\'re incentivised to make your budget work harder, not to encourage you to spend more.',
  },
  {
    question: 'What if the ads aren\'t working?',
    answer:
      'We monitor campaigns closely and make adjustments weekly. If a campaign isn\'t performing after reasonable optimisation, we\'ll tell you honestly and recommend changes, including pausing if necessary. We\'d rather lose a fee than waste your money.',
  },
  {
    question: 'Do you create the ad graphics and copy?',
    answer:
      'Yes. Ad copy, basic graphics, and campaign creative are included in all plans. If you need premium video or complex design work, we\'ll scope that separately.',
  },
]

const ppcFaqSchema = {
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

const PPCAndOnlineCampaigns = () => {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <main className="bg-white text-gray-900">
      <SEO
        {...pagesSEO['/digital-marketing/ppc-and-online-campaigns']}
        jsonLd={[
          serviceSchema({
            name: 'PPC and Online Campaigns',
            description: 'Professional PPC and online advertising management in Aldershot, Hampshire.',
            url: '/digital-marketing/ppc-and-online-campaigns',
            category: 'PPC Advertising',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Digital Marketing', path: '/digital-marketing' },
            { name: 'PPC & Online Campaigns', path: '/digital-marketing/ppc-and-online-campaigns' },
          ]),
          ppcFaqSchema,
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">PPC & Online Campaigns</p>
          <h1 className="text-3xl lg:text-4xl font-bold mb-6">
            PPC & Online Campaigns in Aldershot, Hampshire
          </h1>
          <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
            We run paid ad campaigns for businesses in Aldershot, Farnborough,
            Farnham, Fleet, Camberley, Guildford, and across Hampshire. Google
            Ads, LinkedIn Ads, Meta Ads — done right, paid advertising is the
            fastest way to get qualified leads. Done wrong, it's the fastest
            way to burn money. Our PPC specialists manage your campaigns with
            full transparency, clear reporting, and a focus on actual returns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              to="/getintouch"
              className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
            >
              Get a Free PPC Audit <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white hover:text-primary transition-all text-sm"
            >
              See Our PPC Plans
            </a>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-10">
            Sound Familiar?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {painPoints.map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-gray-100"
              >
                <span className="text-red-400 mt-1 text-lg">"</span>
                <p className="text-gray-600 italic">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section id="services" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCards.map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-lg transition"
              >
                <card.icon className="text-3xl text-accent mb-4" />
                <p className="text-xs uppercase tracking-wide text-accent font-semibold mb-1">
                  {card.label}
                </p>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">{card.description}</p>
                <ul className="space-y-2">
                  {card.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <FaCheckCircle className="text-accent mt-0.5 flex-shrink-0 text-xs" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Promise */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <FaHandshake className="text-4xl text-accent mx-auto mb-4" />
            <h2 className="text-2xl lg:text-3xl font-bold mb-3">
              Our Transparency Promise
            </h2>
            <p className="text-white/70">
              Your ad spend is YOUR money. Here's how we handle it:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {transparencyPromises.map((promise, i) => (
              <div
                key={i}
                className="bg-white/10 rounded-2xl p-5 backdrop-blur"
              >
                <FaCheckCircle className="text-accent mb-2" />
                <h3 className="font-semibold mb-1">{promise.title}</h3>
                <p className="text-sm text-gray-400">{promise.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">
            Pricing
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Flat management fees. No percentage of ad spend. Full transparency.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier, i) => (
              <div
                key={i}
                className={`rounded-2xl p-7 border-2 ${
                  tier.highlighted
                    ? 'border-accent shadow-lg relative'
                    : tier.isFree
                    ? 'border-accent/30 bg-accent/5'
                    : 'border-gray-100'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-lg font-bold mb-1">{tier.name}</h3>
                {tier.commitment && (
                  <p className="text-xs text-gray-500 mb-2">
                    {tier.commitment}
                  </p>
                )}
                <div className="text-xl font-bold text-accent mb-4">
                  {tier.price}
                </div>
                <ul className="space-y-2 mb-4">
                  {tier.features.map((feature, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <FaCheckCircle className="text-accent mt-0.5 flex-shrink-0 text-xs" />
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
                  className={`inline-block w-full text-center px-4 py-2.5 font-semibold rounded-xl transition text-sm ${
                    tier.highlighted
                      ? 'bg-accent text-white hover:bg-accent-dark'
                      : 'border-2 border-accent text-accent hover:bg-accent hover:text-white'
                  }`}
                >
                  {tier.isFree ? 'Get Free Audit' : 'Get Started'}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            Management fees are separate from ad spend. We never touch your ad
            budget. It goes directly to the platforms.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100"
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
                    <FaMinus className="text-accent flex-shrink-0" />
                  ) : (
                    <FaPlus className="text-accent flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why PPC Works */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
              Why PPC Works for Hampshire Businesses
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                When someone in Aldershot, Farnborough, or Farnham searches for a
                service you offer, a well-placed ad puts you right at the top of the
                results. Unlike SEO, which builds over months, PPC delivers
                visibility from day one.
              </p>
              <p>
                For local businesses across Hampshire, that's particularly valuable.
                You can target specific towns — Fleet, Camberley, Guildford — and
                only pay when someone actually clicks. No wasted spend on people
                outside your service area, no paying for impressions that don't
                convert.
              </p>
              <p>
                We manage campaigns for businesses across the county, and we know
                what works in this market. Local competition, typical cost-per-click
                rates, seasonal patterns — we factor all of that into your campaign
                strategy so your budget goes further.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            Related Services
          </h2>
          <p className="text-center text-gray-600 mb-10">
            PPC is most effective as part of a broader strategy. These services work well alongside paid campaigns.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/digital-marketing/seo-and-content-strategy" className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-md transition block">
              <h3 className="text-lg font-bold mb-2">SEO & Content Strategy</h3>
              <p className="text-gray-600 text-sm leading-relaxed">PPC gets you immediate traffic. SEO builds long-term organic visibility. Together, they cover both short and long-term growth.</p>
            </Link>
            <Link to="/digital-marketing/social-media-management" className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-md transition block">
              <h3 className="text-lg font-bold mb-2">Social Media Management</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Organic social media builds brand awareness, which improves your ad performance. People are more likely to click ads from brands they recognise.</p>
            </Link>
            <Link to="/development/web-development" className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-md transition block">
              <h3 className="text-lg font-bold mb-2">Web Development</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Ads drive traffic, but your website converts it. A fast, well-built site means better Quality Scores and lower cost per click.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Stop Wasting Ad Spend. Start Generating Leads.
          </h2>
          <p className="text-lg mb-8 text-white/80">
            Get a free PPC audit and find out if paid advertising is right for
            your business, and how much you should invest.
          </p>
          <Link
            to="/getintouch"
            className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
          >
            Get Your Free PPC Audit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default PPCAndOnlineCampaigns
