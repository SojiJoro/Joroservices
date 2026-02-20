import React, { useState, useEffect } from 'react'
import {
  FaPaintBrush,
  FaMobileAlt,
  FaCode,
  FaRocket,
  FaLayerGroup,
  FaSyncAlt,
  FaPlus,
  FaMinus,
  FaCheckCircle,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'

const serviceCards = [
  {
    icon: FaPaintBrush,
    title: 'Designs That Reflect Your Brand, Not a Template',
    label: 'Bespoke UI/UX Design',
    description:
      'We design custom interfaces tailored to your brand and audience. No templates, no cookie-cutter layouts — just purposeful design that looks great and converts visitors into customers.',
    items: [
      'Custom wireframes and visual designs',
      'Brand-aligned colour schemes and typography',
      'User journey mapping',
      'Design approval before any code is written',
    ],
  },
  {
    icon: FaMobileAlt,
    title: 'Looks Perfect on Every Screen',
    label: 'Mobile-First Development',
    description:
      'Over 60% of web traffic is mobile. We design and build mobile-first, then scale up to tablet and desktop — so your site looks stunning on every device your customers use.',
    items: [
      'Mobile-first responsive layouts',
      'Touch-friendly interactions',
      'Cross-device testing',
      'Optimised images for fast mobile loading',
    ],
  },
  {
    icon: FaCode,
    title: 'Clean Code That\'s Easy to Maintain',
    label: 'Full-Stack Engineering',
    description:
      'We build with modern frameworks and clean architecture — fast frontends, scalable backends, and code that future developers can actually understand and work with.',
    items: [
      'React / Next.js development',
      'Server-side rendering for SEO',
      'API development and integration',
      'Database design and setup',
    ],
  },
  {
    icon: FaRocket,
    title: 'Fast Loading. High Ranking. Accessible.',
    label: 'Performance & SEO',
    description:
      'Speed and visibility aren\'t afterthoughts — they\'re built into every site from day one. We optimise for Core Web Vitals, search rankings, and accessibility standards.',
    items: [
      'Core Web Vitals optimisation',
      'Technical SEO setup',
      'WCAG accessibility compliance',
      'Performance monitoring',
    ],
  },
  {
    icon: FaLayerGroup,
    title: 'Content You Can Update Without Calling Us',
    label: 'CMS & Content Management',
    description:
      'Your website should be easy to update. We integrate content management systems so you can change text, swap images, and publish blog posts independently.',
    items: [
      'WordPress, Sanity, or Strapi CMS',
      'Custom content models',
      'Media library setup',
      'Team training included',
    ],
  },
  {
    icon: FaSyncAlt,
    title: 'We Don\'t Disappear After Launch',
    label: 'Ongoing Maintenance',
    description:
      'Websites need ongoing care — security updates, content changes, performance monitoring. We offer maintenance plans so your site stays healthy long after launch.',
    items: [
      'Monthly security updates',
      'Content changes and additions',
      'Uptime and performance monitoring',
      'Regular backups',
    ],
  },
]

const stats = [
  {
    value: '50+',
    label: 'Websites designed and launched',
  },
  {
    value: '95+',
    label: 'Average Lighthouse performance score',
  },
  {
    value: '100%',
    label: 'Fully responsive builds',
  },
  {
    value: '3 Weeks',
    label: 'Average project turnaround',
  },
]

const painPoints = [
  'Our website looks like it was built in 2015 — because it was',
  'We paid a designer but the site doesn\'t convert any leads',
  'It looks fine on desktop but awful on mobile',
  'We can\'t update anything ourselves — every change costs £50',
  'Our site takes forever to load and people bounce before it finishes',
  'We need a website but the agencies we\'ve spoken to want £20k',
]

const portfolioItems = [
  {
    name: '1 Noble Healthcare',
    url: 'https://1noblehealthcare.com',
    description: 'Modern healthcare site with integrated contact forms, smooth scrolling, and CMS for easy updates.',
  },
  {
    name: 'PathSync Recruitment',
    url: 'https://pathsyncrecruitment.com',
    description: 'Professional recruitment portal with blog features, application forms, and responsive design.',
  },
  {
    name: 'Save the Men',
    url: 'https://save-the-men.com',
    description: 'Content-driven platform with dynamic routing, category filters, and interactive animations.',
  },
]

const pricingTiers = [
  {
    name: 'Starter Website',
    price: 'From £1,500',
    features: [
      'Up to 5 pages',
      'Mobile responsive design',
      'Contact form',
      'Basic SEO setup',
      'CMS for easy updates',
    ],
    bestFor: 'New businesses that need a professional online presence',
  },
  {
    name: 'Business Website',
    price: 'From £3,500',
    features: [
      'Up to 15 pages',
      'Custom design and branding',
      'Blog / news section',
      'Advanced SEO and analytics',
      'Third-party integrations',
      'Content migration',
    ],
    bestFor: 'Established businesses that need more functionality',
    highlighted: true,
  },
  {
    name: 'E-Commerce / Custom',
    price: 'From £6,000',
    features: [
      'Online store or custom application',
      'Payment gateway integration',
      'User accounts and dashboards',
      'Admin panel',
      'Ongoing support plan',
    ],
    bestFor: 'Businesses that need to sell online or need custom features',
  },
]

const faqData = [
  {
    question: 'How long does it take to design and build a website?',
    answer:
      'A standard 5-page business website takes about 3 weeks. Larger sites with custom features take 6-10 weeks. We provide a clear timeline before starting and stick to it.',
  },
  {
    question: 'Do you design and develop, or just design?',
    answer:
      'Both. We handle the full process from concept to launch — wireframes, visual design, development, content setup, hosting, and go-live. One team, one point of contact.',
  },
  {
    question: 'Can you redesign our existing website?',
    answer:
      'Absolutely. We can either refresh your current design or build a completely new site and migrate your content. We\'ll recommend the best approach based on what you have.',
  },
  {
    question: 'Will I be able to update content myself?',
    answer:
      'Yes. Every website we build comes with a CMS so you can update text, images, and blog posts without any technical knowledge. We include training as part of the project.',
  },
  {
    question: 'What about hosting and domain setup?',
    answer:
      'We handle hosting setup (typically Vercel or AWS) and domain configuration as part of the project. Hosting is typically £10-30/month depending on traffic.',
  },
  {
    question: 'Do your websites work well on mobile?',
    answer:
      'Always. We design mobile-first and test on real devices. Over 60% of web traffic is mobile — a desktop-only approach would be negligent.',
  },
]

const WebsiteDesign = () => {
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    document.title =
      'Website Design London | Custom Web Design for SMBs | Joro Services'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Custom website design and development for small businesses. Mobile-first, SEO-optimised, CMS-powered. From £1,500. Free consultation available.'
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
              Website Design
            </p>
            <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              A Beautiful Website Means Nothing{' '}
              <span className="text-accent-dark">
                If It Doesn't Convert.
              </span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We create high-performance websites that combine stunning design
              with solid engineering. Mobile-first, SEO-optimised, and built
              so you can actually update it yourself. Design that works as hard
              as you do.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/getintouch"
                className="inline-block px-6 py-3 bg-accent-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition text-center"
              >
                Get a Free Quote
              </Link>
              <a
                href="#services"
                className="inline-block px-6 py-3 border-2 border-accent-dark text-accent-dark font-semibold rounded-lg hover:bg-accent-dark hover:text-white transition text-center"
              >
                See Our Capabilities
              </a>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Every Site Includes
            </h3>
            <div className="space-y-3 mb-6">
              {[
                { label: 'Custom Design', sub: 'No templates' },
                { label: 'Mobile Responsive', sub: 'Looks great everywhere' },
                { label: 'SEO Optimised', sub: 'Built to rank' },
                { label: 'CMS Included', sub: 'Update it yourself' },
                { label: 'Training', sub: 'We show you how' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 bg-white rounded-lg p-3 border border-gray-100">
                  <FaCheckCircle className="text-accent-dark flex-shrink-0" />
                  <div>
                    <span className="font-medium text-gray-800">{item.label}</span>
                    <p className="text-xs text-gray-500">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Stats Banner */}
      <section className="bg-slate-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-accent mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Pain Points */}
      <section className="py-16 lg:py-20 px-4 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            Sound Familiar?
          </h2>
          <p className="text-center text-gray-600 mb-10 text-lg">
            These are the frustrations we hear most:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {painPoints.map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-100"
              >
                <span className="text-red-400 mt-1 text-lg">"</span>
                <p className="text-gray-700 italic">{point}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-lg text-gray-700">
            We solve all of this — with designs that look great{' '}
            <strong>and actually work</strong>.
          </p>
        </div>
      </section>

      {/* Section 4: Service Cards */}
      <section id="services" className="py-16 lg:py-20 px-4 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
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

      {/* Section 5: Portfolio */}
      <section className="py-16 lg:py-20 px-4 lg:px-20 bg-accent-dark/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Recent Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition block"
              >
                <h3 className="text-lg font-bold text-accent-dark mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
                <span className="text-accent-dark text-sm font-medium mt-3 inline-block">
                  Visit site &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Pricing */}
      <section className="py-16 lg:py-20 px-4 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            Pricing
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Honest pricing. No hidden fees.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, i) => (
              <div
                key={i}
                className={`rounded-xl p-6 border-2 ${
                  tier.highlighted
                    ? 'border-accent-dark shadow-lg relative'
                    : 'border-gray-200'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-dark text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <div className="text-2xl font-bold text-accent-dark mb-4">
                  {tier.price}
                </div>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                      <FaCheckCircle className="text-accent-dark mt-0.5 flex-shrink-0 text-xs" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-500 italic">
                  Best for: "{tier.bestFor}"
                </p>
                <Link
                  to="/getintouch"
                  className={`mt-4 inline-block w-full text-center px-6 py-3 font-semibold rounded-lg transition ${
                    tier.highlighted
                      ? 'bg-accent-dark text-white hover:bg-opacity-90'
                      : 'border-2 border-accent-dark text-accent-dark hover:bg-accent-dark hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: FAQ */}
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

      {/* Section 8: Bottom CTA */}
      <section className="bg-accent-dark text-white py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready for a Website You're Actually Proud Of?
          </h2>
          <p className="text-lg mb-8 text-white/80">
            Book a free consultation. We'll discuss your goals, show you
            relevant examples, and give you an honest quote.
          </p>
          <Link
            to="/getintouch"
            className="inline-block bg-white text-accent-dark font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default WebsiteDesign
