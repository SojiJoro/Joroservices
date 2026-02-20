import React, { useState, useEffect } from 'react'
import {
  FaCalendarAlt,
  FaPenFancy,
  FaCommentDots,
  FaChartPie,
  FaCheckCircle,
  FaPlus,
  FaMinus,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from 'react-icons/fa'
import { FaXTwitter, FaTiktok } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'

const painPoints = [
  'You haven\'t posted in 3 months and your profiles look abandoned',
  'You post occasionally but it\'s random and inconsistent',
  'You\'re spending hours on social media with nothing to show for it',
  'You know your competitors are doing it better but you don\'t know how',
  'You\'ve thought about hiring someone but can\'t justify a full salary',
]

const serviceCards = [
  {
    icon: FaCalendarAlt,
    title: 'A Plan That Makes Sense for Your Business',
    label: 'Social Media Strategy',
    description:
      'We research your audience, your competitors, and your goals — then build a content strategy for the platforms that actually matter for your business. Not every business needs TikTok.',
    items: [
      'Platform audit',
      'Audience research',
      'Competitor analysis',
      'Content pillars',
      'Posting schedule',
      '3-month content strategy',
    ],
  },
  {
    icon: FaPenFancy,
    title: 'Professional Content, Posted Consistently',
    label: 'Content Creation & Scheduling',
    description:
      'Our team creates branded posts — graphics, copy, and captions — and schedules them across your platforms. You approve the content calendar each month, we handle the rest.',
    items: [
      'Branded post designs',
      'Copywriting',
      'Content calendar',
      'Scheduled publishing',
      'Hashtag strategy',
    ],
  },
  {
    icon: FaCommentDots,
    title: 'We Respond So You Don\'t Have To',
    label: 'Community Management',
    description:
      'Comments, messages, mentions — we monitor your profiles and engage with your audience in your brand voice. No more ignoring customer messages for days.',
    items: [
      'Daily monitoring',
      'Response to comments and DMs',
      'Review management',
      'Engagement with relevant accounts',
    ],
  },
  {
    icon: FaChartPie,
    title: 'Know What\'s Working',
    label: 'Monthly Reporting',
    description:
      'Every month you get a clear report showing follower growth, engagement rates, top-performing content, and recommendations for the next month. No vanity metrics — just what matters.',
    items: [
      'Monthly analytics report',
      'Performance insights',
      'Content recommendations',
      'Quarterly strategy review',
    ],
  },
]

const platforms = [
  {
    icon: FaLinkedinIn,
    name: 'LinkedIn',
    description: 'Best for B2B, professional services, recruitment',
    color: 'bg-blue-600',
  },
  {
    icon: FaInstagram,
    name: 'Instagram',
    description: 'Best for visual brands, retail, hospitality, lifestyle',
    color: 'bg-pink-500',
  },
  {
    icon: FaFacebookF,
    name: 'Facebook',
    description: 'Best for local businesses, community building, events',
    color: 'bg-blue-500',
  },
  {
    icon: FaXTwitter,
    name: 'X (Twitter)',
    description: 'Best for thought leadership, news, tech companies',
    color: 'bg-gray-800',
  },
  {
    icon: FaTiktok,
    name: 'TikTok',
    description: 'Best for consumer brands targeting younger demographics',
    color: 'bg-black',
  },
]

const pricingTiers = [
  {
    name: 'Social Media Review',
    price: 'Free',
    features: [
      'Audit of your current profiles',
      'Competitor comparison',
      'Top 5 recommendations',
      'Delivered within 5 business days',
    ],
    bestFor: 'Understanding your current social position',
    isFree: true,
  },
  {
    name: 'Essentials',
    price: 'From £400/month',
    commitment: '3-month minimum',
    features: [
      '2 platforms managed',
      '8 posts per month (2/week)',
      'Basic content creation (graphics + copy)',
      'Monthly report',
    ],
    bestFor: 'Businesses that need a consistent presence',
  },
  {
    name: 'Growth',
    price: 'From £800/month',
    commitment: '3-month minimum',
    features: [
      '3 platforms managed',
      '16 posts per month (4/week)',
      'Professional content creation (graphics, carousels, short video)',
      'Community management',
      'Monthly report with strategy recommendations',
    ],
    bestFor: 'Businesses ready to grow their social presence',
    highlighted: true,
  },
  {
    name: 'Premium',
    price: 'From £1,500/month',
    commitment: '6-month minimum',
    features: [
      'All platforms managed',
      '24+ posts per month (daily)',
      'Premium content creation (video, reels, stories)',
      'Full community management',
      'Influencer collaboration support',
      'Monthly report + monthly strategy call',
    ],
    bestFor: 'Brands that want social media to be a primary growth channel',
  },
]

const faqData = [
  {
    question: 'Which platforms should my business be on?',
    answer:
      'It depends on where your customers are. A B2B consultancy? LinkedIn. A local restaurant? Instagram and Google Business. We\'ll recommend the right platforms during our free review.',
  },
  {
    question: 'Do we need to provide photos/videos?',
    answer:
      'It helps, but it\'s not essential. We can create graphic-based content, use stock imagery, and repurpose existing material. If you can occasionally share behind-the-scenes photos or videos, that\'s a bonus.',
  },
  {
    question: 'Can we approve posts before they go live?',
    answer:
      'Absolutely. You\'ll receive the full content calendar for approval before anything is published. You always have final say.',
  },
  {
    question: 'How quickly will we see results?',
    answer:
      'Social media is a consistency game. Most clients see meaningful engagement improvements within 2-3 months. Follower growth and lead generation typically take 3-6 months of consistent effort.',
  },
  {
    question: 'What if we already have a brand identity?',
    answer:
      'Great — we\'ll work within your existing brand guidelines. If you don\'t have formal brand guidelines, we\'ll create a social media style guide as part of onboarding.',
  },
]

const SocialMediaManagement = () => {
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    document.title =
      'Social Media Management London | Content, Strategy & Reporting for SMBs | Joro Services'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Professional social media management for small businesses. Strategy, content creation, scheduling, and reporting. Free social media review available.'
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
              Social Media Management
            </p>
            <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              Social Media That Actually{' '}
              <span className="text-accent-dark">Grows Your Business</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              You don't need to go viral. You need consistent, professional
              social media that builds trust, attracts customers, and keeps your
              brand visible. Our social media specialists handle everything —
              strategy, content creation, scheduling, and reporting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/getintouch"
                className="inline-block px-6 py-3 bg-accent-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition text-center"
              >
                Get a Free Social Media Review
              </Link>
              <a
                href="#pricing"
                className="inline-block px-6 py-3 border-2 border-accent-dark text-accent-dark font-semibold rounded-lg hover:bg-accent-dark hover:text-white transition text-center"
              >
                See Our Plans
              </a>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-accent-dark rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">J</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Your Business</p>
                    <p className="text-[10px] text-gray-400">Sponsored</p>
                  </div>
                </div>
                <div className="bg-accent-dark/10 rounded-lg h-24 flex items-center justify-center mb-3">
                  <p className="text-accent-dark font-semibold text-sm">
                    Professional branded content
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span>142 likes</span>
                  <span>23 comments</span>
                  <span>8 shares</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-white rounded-lg p-2 border border-gray-100">
                  <p className="text-lg font-bold text-accent-dark">Mon</p>
                  <p className="text-[10px] text-gray-500">Blog post</p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-gray-100">
                  <p className="text-lg font-bold text-accent-dark">Wed</p>
                  <p className="text-[10px] text-gray-500">Carousel</p>
                </div>
                <div className="bg-white rounded-lg p-2 border border-gray-100">
                  <p className="text-lg font-bold text-accent-dark">Fri</p>
                  <p className="text-[10px] text-gray-500">Video</p>
                </div>
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

      {/* Section 4: Platforms */}
      <section className="py-16 lg:py-20 px-4 lg:px-20 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-10">
            Platforms We Manage
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {platforms.map((platform, i) => (
              <div
                key={i}
                className="bg-white/10 rounded-xl p-4 text-center backdrop-blur"
              >
                <div
                  className={`w-12 h-12 ${platform.color} rounded-full flex items-center justify-center mx-auto mb-3`}
                >
                  <platform.icon className="text-white text-xl" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{platform.name}</h3>
                <p className="text-xs text-gray-400">{platform.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-gray-400 text-sm">
            We'll recommend which platforms to focus on based on your business —
            not all of them.
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
            Simple plans. Scale when you're ready.
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
                  {tier.isFree ? 'Get Free Review' : 'Get Started'}
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
            Your Audience Is Already Scrolling. Show Up.
          </h2>
          <p className="text-lg mb-8 text-white/80">
            Start with a free social media review. We'll show you what's
            working, what's not, and what to do next.
          </p>
          <Link
            to="/getintouch"
            className="inline-block bg-white text-accent-dark font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
          >
            Get Your Free Social Media Review
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default SocialMediaManagement
