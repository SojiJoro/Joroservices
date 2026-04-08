import React, { useState } from 'react'
import {
  FaSearch,
  FaCogs,
  FaPenFancy,
  FaChartLine,
  FaCheckCircle,
  FaPlus,
  FaMinus,
} from 'react-icons/fa'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'
import SEO from '../../component/SEO'
import pagesSEO from '../../seo/pagesSEO'
import { serviceSchema, breadcrumbSchema } from '../../seo/schemas'
import Breadcrumb from '../../component/Breadcrumb'

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
      'We audit your website\'s current SEO performance, including rankings, technical issues, content gaps, and backlink profile. Then we build a strategy that fits your business and your market.',
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
      'Site speed, mobile responsiveness, Core Web Vitals, structured data, and crawlability. This is the technical foundation that determines whether Google even considers ranking you.',
    items: [
      'Site speed optimisation',
      'Mobile audit',
      'Schema markup',
      'Sitemap and robots.txt configuration',
      'Core Web Vitals improvements',
    ],
    note: 'This is where Joro\'s technical infrastructure expertise adds genuine value. Site performance is an infrastructure problem.',
  },
  {
    icon: FaPenFancy,
    title: 'Content That Ranks and Converts',
    label: 'Content Strategy & Creation',
    description:
      'Keyword-targeted blog posts, landing pages, and website copy created by specialist content writers who understand both SEO and your industry. Not AI-generated fluff. Real content for real readers.',
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
      'No. Anyone who guarantees specific Google rankings is not being straight with you. What we guarantee is a clear strategy, quality content, technical best practices, and transparent reporting. The results follow from doing the right things consistently.',
  },
  {
    question: 'Who writes the content?',
    answer:
      'Our specialist content writers. Real people who research your industry and write for human readers first, search engines second. We don\'t use AI-generated content.',
  },
  {
    question: 'Can you work with our existing website?',
    answer:
      'Yes. We work with WordPress, React, Webflow, Shopify, and most other platforms. If there are technical limitations we can\'t work around, we\'ll tell you upfront.',
  },
  {
    question: 'What do we need to provide?',
    answer:
      'Access to Google Analytics, Google Search Console, and your website CMS. Beyond that, we handle everything, though we\'ll occasionally need your input on industry-specific topics.',
  },
  {
    question: 'How is Joro different from a pure SEO agency?',
    answer:
      'We combine technical infrastructure expertise with SEO strategy. Site speed, server configuration, and Core Web Vitals are infrastructure problems that affect your rankings. Most SEO agencies can\'t fix them. We can.',
  },
]

const seoFaqSchema = {
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

const SEOAndContentStrategy = () => {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <main className="bg-white text-gray-900">
      <SEO
        {...pagesSEO['/digital-marketing/seo-and-content-strategy']}
        dateModified="2026-04-08"
        jsonLd={[
          serviceSchema({
            name: 'SEO and Content Strategy',
            description: 'Professional SEO and content strategy services in Aldershot, Hampshire. Get found on Google.',
            url: '/digital-marketing/seo-and-content-strategy',
            category: 'SEO Services',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Digital Marketing', path: '/digital-marketing' },
            { name: 'SEO & Content Strategy', path: '/digital-marketing/seo-and-content-strategy' },
          ]),
          seoFaqSchema,
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            SEO & Content Strategy
          </p>
          <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Digital Marketing', path: '/digital-marketing' }, { name: 'SEO & Content Strategy' }]} />
          <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight max-w-3xl">
            SEO & Content Strategy in Aldershot, Hampshire
          </h1>
          <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-2xl">
            We help businesses across Aldershot, Farnborough, Farnham, Fleet,
            Camberley, Guildford, and the wider Hampshire area get found on
            Google. Our SEO specialists handle keyword research, content
            strategy, technical optimisation, and ongoing performance tracking
            — so when your customers are searching, they find you, not your
            competitors.
          </p>
          <Link
            to="/getintouch"
            className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
          >
            Get a Free SEO Audit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10">
            Sound Familiar?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {painPoints.map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white rounded-2xl border border-gray-100 p-7"
              >
                <span className="text-red-400 mt-1 text-lg">"</span>
                <p className="text-gray-600 leading-relaxed italic">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section id="services" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 text-center">Our Services</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCards.map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-md transition"
              >
                <card.icon className="text-3xl text-accent mb-4" />
                <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-1">
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
                {card.note && (
                  <p className="mt-4 text-xs text-accent font-medium bg-accent/10 p-2 rounded">
                    {card.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiator */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary via-primary-dark to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6 max-w-3xl mx-auto">
            Technical + Content Under One Roof
          </h2>
          <p className="text-white/70 text-lg leading-relaxed max-w-3xl mx-auto">
            Most SEO agencies are great at content but terrible at technical
            infrastructure. Most IT companies don't touch marketing. We bridge
            the gap. Our technical team handles site performance and
            infrastructure, and our SEO specialists handle strategy and content. You
            get the full picture from one provider.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 text-center">Pricing</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            Transparent Pricing
          </h2>
          <p className="text-center text-gray-600 leading-relaxed mb-12">
            Transparent pricing. No lock-in beyond the minimum.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier, i) => (
              <div
                key={i}
                className={`rounded-2xl p-7 border ${
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
                <ul className="space-y-2 mb-6">
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
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-100 rounded-2xl bg-white"
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
        </div>
      </section>

      {/* Why Local SEO Matters */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
              Why Local SEO Matters for Hampshire Businesses
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Most people searching for services in Aldershot, Farnborough, or
                anywhere in Hampshire start with Google. If your business doesn't
                appear in those results, you're handing customers to whoever does.
              </p>
              <p>
                Local SEO is particularly important for businesses serving specific
                areas. Whether you're a tradesperson covering Fleet and Camberley, a
                professional services firm in Farnham, or a retailer in Guildford,
                your potential customers are searching with local intent — "near me"
                searches, town names, and service-plus-location queries.
              </p>
              <p>
                We understand the Hampshire market because we're based here. We know
                which directories matter locally, how to optimise your Google Business
                Profile for the areas you serve, and how to create content that ranks
                for the searches your customers are actually making.
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
            SEO works best as part of a wider digital strategy. These services complement your organic search efforts.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/development/web-development" className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-md transition block">
              <h3 className="text-lg font-bold mb-2">Web Development</h3>
              <p className="text-gray-600 text-sm leading-relaxed">A fast, well-built website is the foundation of good SEO. We build sites that Google and your customers both appreciate.</p>
            </Link>
            <Link to="/digital-marketing/social-media-management" className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-md transition block">
              <h3 className="text-lg font-bold mb-2">Social Media Management</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Social signals support your SEO efforts. Consistent social media activity drives traffic and builds brand awareness.</p>
            </Link>
            <Link to="/digital-marketing/ppc-and-online-campaigns" className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-md transition block">
              <h3 className="text-lg font-bold mb-2">PPC & Online Campaigns</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Need leads while your SEO builds momentum? Paid ads deliver immediate visibility alongside your organic strategy.</p>
            </Link>
            <Link to="/creative-solutions/website-design" className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-md transition block">
              <h3 className="text-lg font-bold mb-2">Website Design</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Great SEO brings visitors. Great design converts them. We design sites that look good and perform well in search.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Local Service Areas */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            SEO Services Across Hampshire &amp; Surrey
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { label: 'Aldershot', path: '/locations/aldershot' },
              { label: 'Farnborough', path: '/locations/farnborough' },
              { label: 'Farnham', path: '/it-support-farnham' },
              { label: 'Fleet', path: '/it-support-fleet' },
              { label: 'Camberley', path: '/locations/camberley' },
              { label: 'Guildford', path: '/locations/guildford' },
              { label: 'Hampshire', path: '/locations/hampshire' },
              { label: 'Surrey', path: '/locations/surrey' },
            ].map((area, i) => (
              <Link key={i} to={area.path} className="text-center p-3 bg-white rounded-xl border border-gray-100 hover:border-accent/30 hover:shadow-sm transition-all">
                <span className="text-sm font-medium text-gray-700 hover:text-accent">{area.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Your Customers Are Searching. Make Sure They Find You.
          </h2>
          <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
            Start with a free SEO audit. We'll show you exactly where you stand
            and what it'll take to rank.
          </p>
          <Link
            to="/getintouch"
            className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
          >
            Get Your Free SEO Audit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default SEOAndContentStrategy
