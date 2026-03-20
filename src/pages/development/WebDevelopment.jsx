import React, { useState } from 'react'
import {
  FaMobileAlt,
  FaSearch,
  FaCogs,
  FaServer,
  FaPlus,
  FaMinus,
  FaCheckCircle,
} from 'react-icons/fa'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'
import SEO from '../../component/SEO'
import pagesSEO from '../../seo/pagesSEO'
import { serviceSchema, breadcrumbSchema } from '../../seo/schemas'
import Breadcrumb from '../../component/Breadcrumb'

const painPoints = [
  'Your website looks outdated and doesn\'t reflect your business anymore',
  'Your site is slow, clunky, or doesn\'t work properly on mobile',
  'You paid someone to build it years ago and now nobody can update it',
  'You need a website but don\'t know where to start or who to trust',
  'Your current site isn\'t bringing in any leads or enquiries',
]

const serviceCards = [
  {
    icon: FaMobileAlt,
    title: 'Looks Great on Every Device',
    label: 'Responsive Design',
    description:
      'We build mobile-first layouts that look great on every screen size and device, optimised for performance and accessibility.',
    items: [
      'Mobile-first layouts',
      'Cross-browser testing',
      'Touch-friendly navigation',
      'Accessibility compliance',
      'Responsive images and media',
    ],
  },
  {
    icon: FaSearch,
    title: 'Built to Be Found on Google',
    label: 'SEO & Performance Tuning',
    description:
      'From semantic HTML to lazy loading, we code with visibility in mind. Your site loads fast and ranks higher in search results.',
    items: [
      'Semantic HTML structure',
      'Meta tags and structured data',
      'Lazy loading and image optimisation',
      'Core Web Vitals improvements',
      'Google Search Console setup',
    ],
  },
  {
    icon: FaCogs,
    title: 'Update Your Own Content Without Calling Us',
    label: 'Custom Integrations',
    description:
      'Need a CMS? We integrate platforms like WordPress, Sanity, or Strapi to give you full control over your content.',
    items: [
      'WordPress custom themes',
      'Headless CMS integration',
      'Contact forms and lead capture',
      'Third-party API connections',
      'Analytics and tracking setup',
    ],
  },
  {
    icon: FaServer,
    title: 'Won\'t Fall Apart as You Grow',
    label: 'Built to Grow',
    description:
      'We use modern patterns with frameworks like Next.js, so your app is easy to maintain and ready for what comes next.',
    items: [
      'React and Next.js architecture',
      'Component-based development',
      'Clean, documented codebase',
      'Easy to extend and maintain',
      'Performance monitoring',
    ],
  },
]

const portfolio = [
  {
    name: 'Save the Men Website',
    image: '/images/savethemen.jpg',
    description:
      'A blog-driven site with dynamic routing, category filters, and interactive animations built using Next.js 14.',
    url: 'https://save-the-men.com',
  },
  {
    name: '1 Noble Healthcare Website',
    image: '/images/1noble.jpg',
    description:
      'Fully responsive, SEO-optimised corporate site with custom contact forms and a CMS for easy updates.',
    url: 'https://1noblehealthcare.com',
  },
  {
    name: 'PathSync Recruitment',
    image: '/images/pathsync.jpg',
    description:
      'A clean and professional recruitment portal with blog pages, service filters, and job application forms.',
    url: 'https://pathsyncrecruitment.com',
  },
]

const pricingTiers = [
  {
    name: 'Free Consultation',
    price: 'Free',
    features: [
      'Review of your current website (if you have one)',
      'Discussion of your goals and requirements',
      'Ballpark estimate and recommended approach',
      'No obligation',
    ],
    bestFor: 'Understanding what you need and what it\'ll cost',
    isFree: true,
  },
  {
    name: 'Brochure Website',
    price: 'From \u00a31,500',
    features: [
      'Up to 8 pages',
      'Mobile-first responsive design',
      'On-page SEO setup',
      'Contact forms',
      'CMS for content updates',
    ],
    bestFor: 'Businesses that need a professional online presence',
  },
  {
    name: 'Business Website',
    price: 'From \u00a35,000',
    features: [
      'Everything in Brochure, plus:',
      'Custom functionality',
      'Blog or content section',
      'Third-party integrations',
      'Advanced SEO and analytics',
    ],
    bestFor: 'Businesses ready for a site that actively generates leads',
    highlighted: true,
  },
  {
    name: 'Web Application',
    price: 'From \u00a310,000',
    features: [
      'Everything in Business, plus:',
      'User authentication and dashboards',
      'Database integration',
      'Custom backend logic',
      'API development',
    ],
    bestFor: 'Businesses needing custom software solutions',
  },
]

const faqData = [
  {
    question: 'How much does a custom website cost in the UK?',
    answer:
      'It depends on how complex the site is, how many pages you need, and what features you want. A simple brochure website typically starts from \u00a31,500, while more complex web applications with custom functionality can range from \u00a35,000 to \u00a325,000+. We give you a detailed quote after a free consultation.',
  },
  {
    question: 'How long does it take to build a custom website?',
    answer:
      'A standard business website typically takes 4-8 weeks from design to launch. Larger web applications with custom features may take 8-16 weeks. We provide a clear timeline at the start of every project and keep you updated throughout the development process.',
  },
  {
    question: 'Do you build websites using WordPress or custom code?',
    answer:
      'We work with both. For content-heavy sites that need frequent updates, WordPress with a custom theme is often ideal. For web applications requiring complex functionality, performance, or scalability, we use React, Next.js, and Node.js. We recommend the best approach based on your business needs.',
  },
  {
    question: 'Will my website be mobile-friendly and SEO-optimised?',
    answer:
      'Every website we build is mobile-first and works properly across all devices. We also build in on-page SEO from the start, including semantic HTML, meta tags, structured data, fast loading speeds, and accessible design. That comes as standard, not as an add-on.',
  },
  {
    question: 'Can you redesign my existing website?',
    answer:
      'Yes, website redesigns are one of our most requested services. We can modernise your existing site\'s design, improve performance, fix SEO issues, and add new functionality while preserving your existing content and search rankings where possible.',
  },
]

const webDevFaqSchema = {
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

const WebDevelopment = () => {
  const [openFaq, setOpenFaq] = useState(null)

  return (
  <main className="bg-white text-gray-900">
    <SEO
      {...pagesSEO['/development/web-development']}
      dateModified="2026-03-20"
      jsonLd={[
        serviceSchema({
          name: 'Web Development',
          description: 'Custom web development services in Aldershot and Hampshire using React, Next.js, and modern technologies.',
          url: '/development/web-development',
          category: 'Web Development',
        }),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Development', path: '/development' },
          { name: 'Web Development', path: '/development/web-development' },
        ]),
        webDevFaqSchema,
      ]}
    />

    {/* Hero Section */}
    <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Web Development</p>
        <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Development', path: '/development' }, { name: 'Web Development' }]} />
        <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight max-w-3xl">Web Development in Aldershot, Hampshire</h1>
        <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-2xl">
          We build websites and web applications for businesses in Aldershot, Farnborough, Guildford, and across Hampshire and Surrey. From marketing sites to full web applications, everything is built with React and Next.js — responsive, search-optimised, fast-loading, and straightforward to manage.
        </p>
        <Link
          to="/getintouch"
          className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
        >
          Request a Free Quote <ArrowRight className="w-4 h-4" />
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
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">What We Do</h2>
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
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Differentiator */}
    <section className="py-20 lg:py-28 bg-gradient-to-br from-primary via-primary-dark to-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6 max-w-3xl mx-auto">
          Design + Development + Infrastructure Under One Roof
        </h2>
        <p className="text-white/70 text-lg leading-relaxed max-w-3xl mx-auto">
          A lot of agencies will sell you a template site and call it custom. We don't do that. Every website we build is coded from scratch or carefully configured to fit your business properly. You get a site that loads quickly, ranks well on Google, and doesn't fall apart the moment you try to update something. And because we handle hosting and infrastructure too, your site stays fast and secure long after launch.
        </p>
      </div>
    </section>

    {/* Portfolio Section */}
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 text-center">Our Work</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">Web Projects We've Delivered</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map((site, i) => (
            <a
              key={i}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition block"
            >
              <img src={site.image} alt={site.name} className="h-48 w-full object-cover" loading="lazy" decoding="async" />
              <div className="p-7">
                <h3 className="text-xl font-semibold text-accent">{site.name}</h3>
                <p className="text-gray-600 leading-relaxed text-sm mt-2">{site.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* Pricing */}
    <section id="pricing" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 text-center">Pricing</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
          Transparent Pricing
        </h2>
        <p className="text-center text-gray-600 leading-relaxed mb-12">
          Clear pricing. No hidden fees. No hourly billing surprises.
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
                {tier.isFree ? 'Book Free Consultation' : 'Get Started'}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-100 rounded-2xl bg-white"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex justify-between items-center text-left p-5"
              >
                <span className="font-medium text-lg pr-4">{faq.question}</span>
                {openFaq === index ? (
                  <FaMinus className="text-accent flex-shrink-0" />
                ) : (
                  <FaPlus className="text-accent flex-shrink-0" />
                )}
              </button>
              {openFaq === index && (
                <div className="px-5 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Hampshire Businesses Choose Us */}
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
            Why Hampshire Businesses Choose Us
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              We're based in Aldershot and work with businesses across Hampshire and Surrey — from sole traders in Farnham to growing companies in Fleet and Camberley. That means we're local enough to meet face-to-face when it matters, and we understand the kinds of challenges that small and mid-sized businesses in this area actually deal with.
            </p>
            <p>
              A lot of agencies will sell you a template site and call it custom. We don't do that. Every website we build is coded from scratch or carefully configured to fit your business properly. You get a site that loads quickly, ranks well on Google, and doesn't fall apart the moment you try to update something.
            </p>
            <p>
              We also stick around after launch. If something breaks or you need changes, you're not chasing an agency three counties away — you're talking to the same team that built it.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Related Services */}
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
          Related Services
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Web development often goes hand-in-hand with these services.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/creative-solutions/website-design" className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-md transition block">
            <h3 className="text-lg font-bold mb-2">Website Design</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Need the design sorted before development? We handle UI and visual design so your site looks as good as it performs.
            </p>
          </Link>
          <Link to="/development/mobile-app-development" className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-md transition block">
            <h3 className="text-lg font-bold mb-2">Mobile App Development</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              If your business needs a mobile app alongside your website, we build cross-platform apps using React Native and Flutter.
            </p>
          </Link>
          <Link to="/digital-marketing/seo-and-content-strategy" className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-md transition block">
            <h3 className="text-lg font-bold mb-2">SEO & Content Strategy</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              A great website needs to be found. We offer ongoing SEO and content work to help your site rank for the right terms.
            </p>
          </Link>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">
          Your Website Should Be Your Best Salesperson. Is It?
        </h2>
        <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
          Start with a free consultation. We'll look at what you've got, talk about what you need, and give you an honest recommendation.
        </p>
        <Link
          to="/getintouch"
          className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
        >
          Get Your Free Consultation <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>

    <Footer />
  </main>
  )
}

export default WebDevelopment
