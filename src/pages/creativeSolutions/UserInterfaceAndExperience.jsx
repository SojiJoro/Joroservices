import React, { useState } from 'react'
import {
  FaUserCheck,
  FaDraftingCompass,
  FaMicroscope,
  FaLaptopCode,
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

const painPoints = [
  'Your website or app looks fine but nobody seems to complete the forms or checkout',
  'Customers keep asking how to do things that should be obvious',
  'Your bounce rate is high and you don\'t know why people leave',
  'Your app was built by developers without any design input and it shows',
  'You\'re losing customers to competitors with a better online experience',
]

const serviceCards = [
  {
    icon: FaUserCheck,
    title: 'Know What Your Users Actually Need',
    label: 'User Research & Personas',
    description:
      'We talk to your users, run surveys, and dig into analytics to figure out what they actually need. Then we use that to guide every design choice.',
    items: [
      'User interviews and surveys',
      'Analytics review',
      'Persona development',
      'Journey mapping',
      'Competitor UX analysis',
    ],
  },
  {
    icon: FaDraftingCompass,
    title: 'See It Before You Build It',
    label: 'Wireframing & Prototyping',
    description:
      'We sketch out how everything works and build clickable prototypes so you can see it and give feedback before any real development starts.',
    items: [
      'Low and high-fidelity wireframes',
      'Clickable prototypes',
      'User flow diagrams',
      'Interactive demos',
      'Stakeholder review sessions',
    ],
  },
  {
    icon: FaMicroscope,
    title: 'Test Early, Fix Before Launch',
    label: 'Usability Testing',
    description:
      'We test early and often, using A/B tests, heatmaps, and real user sessions to validate designs and improve usability.',
    items: [
      'A/B testing',
      'Heatmap analysis',
      'Session recordings',
      'Real user testing sessions',
      'Conversion rate analysis',
    ],
  },
  {
    icon: FaLaptopCode,
    title: 'Clean Handoff, Built Right First Time',
    label: 'Design-to-Development Handoff',
    description:
      'We hand off clean, detailed designs with all the assets and notes your developers need to build it right the first time.',
    items: [
      'Figma design files',
      'Component specifications',
      'Asset exports',
      'Developer documentation',
      'Design system setup',
    ],
  },
]

const portfolio = [
  {
    name: 'Joro Services Admin Dashboard',
    image: '/images/ux-dashboard.jpg',
    description:
      'A simple admin dashboard with user stats, activity logs, and role-based access. Built to make day-to-day operations easier.',
  },
  {
    name: 'Healthcare Referral Portal UX',
    image: '/images/ux-healthcare.jpg',
    description:
      'A clean, accessible flow for patients and staff with easy navigation, clear buttons, and forms that work on any device.',
  },
  {
    name: 'Mobile Job App UI',
    image: '/images/ux-jobapp.jpg',
    description:
      'A job search app with swipeable cards, saved jobs, and quick-apply. Designed so you can do everything with one thumb.',
  },
]

const pricingTiers = [
  {
    name: 'UX Audit',
    price: 'Free',
    features: [
      'Review of your current site or app',
      'Top usability issues identified',
      'Quick-win recommendations',
      'No obligation',
    ],
    bestFor: 'Understanding what\'s stopping your users from converting',
    isFree: true,
  },
  {
    name: 'UX Review & Recommendations',
    price: 'From \u00a3750',
    features: [
      'Full usability audit',
      'Heatmap and analytics review',
      'Detailed report with prioritised fixes',
      '1-hour walkthrough call',
    ],
    bestFor: 'Businesses with an existing product that needs improvement',
  },
  {
    name: 'Full UX/UI Design',
    price: 'From \u00a33,000',
    features: [
      'Everything in UX Review, plus:',
      'User research and personas',
      'Wireframes and prototypes',
      'Full visual design',
      'Developer handoff files',
    ],
    bestFor: 'New products or major redesigns',
    highlighted: true,
  },
  {
    name: 'Ongoing UX Support',
    price: 'From \u00a3500/month',
    features: [
      'Dedicated design hours each month',
      'Continuous testing and iteration',
      'New feature design',
      'Design system maintenance',
      'Priority turnaround',
    ],
    bestFor: 'Products that need continuous UX improvement',
  },
]

const faqData = [
  {
    question: 'What\'s the difference between UI and UX design?',
    answer:
      'UX (user experience) is about how something works. It covers the flow, the logic, and whether people can actually complete tasks without getting stuck. UI (user interface) is about how it looks and feels, the buttons, colours, typography, and layout. You need both. A good-looking app that\'s confusing to use won\'t keep customers, and a well-structured app that looks outdated won\'t attract them in the first place.',
  },
  {
    question: 'Do I need UX design for a simple website?',
    answer:
      'Even a straightforward business website benefits from thinking about UX. It doesn\'t have to be a big formal process, but considering things like where your call-to-action sits, how easy it is to find your phone number, and whether the contact form is too long can make a real difference to how many enquiries you get. We bake this thinking into every project as standard.',
  },
  {
    question: 'How do you test whether a design works?',
    answer:
      'We use a mix of methods depending on the project. For websites, we look at heatmaps and session recordings to see where people click and where they drop off. For apps, we build clickable prototypes and test them with real users before writing any code. We also run A/B tests on things like button placement and page layouts to see what actually performs better.',
  },
  {
    question: 'Can you improve the UX of an existing product?',
    answer:
      'Yes, and it\'s one of the most effective things you can do. We\'ll audit your current site or app, identify where users are struggling or leaving, and make targeted improvements. Sometimes small changes, like simplifying a checkout flow or reorganising a navigation menu, can have a big impact on conversions and customer satisfaction.',
  },
]

const uiuxFaqSchema = {
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

const UXUIExperience = () => {
  const [openFaq, setOpenFaq] = useState(null)

  return (
  <main className="bg-white text-gray-900">
    <SEO
      {...pagesSEO['/creative-solutions/user-interface-and-experience']}
      jsonLd={[
        serviceSchema({
          name: 'UI/UX Design',
          description: 'User interface and user experience design services in Aldershot, Hampshire.',
          url: '/creative-solutions/user-interface-and-experience',
          category: 'UI/UX Design',
        }),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Creative Solutions', path: '/creative-solutions' },
          { name: 'UI/UX Design', path: '/creative-solutions/user-interface-and-experience' },
        ]),
        uiuxFaqSchema,
      ]}
    />

    {/* Hero Section */}
    <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">UI/UX Design</p>
        <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight max-w-3xl">UI/UX Design in Aldershot, Hampshire</h1>
        <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-2xl">
          We design digital products for businesses in Aldershot, Farnborough, Fleet, Guildford, and across Hampshire. Every screen, every interaction, every step of the user journey gets proper attention. We design around how real people use things, not how we think they should.
        </p>
        <Link
          to="/getintouch"
          className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
        >
          Book a Free UX Audit <ArrowRight className="w-4 h-4" />
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
          Research + Design + Development Under One Roof
        </h2>
        <p className="text-white/70 text-lg leading-relaxed max-w-3xl mx-auto">
          Good UX isn't just for big tech companies. We keep the process simple. You'll get wireframes and prototypes you can click through and give feedback on before any code gets written. That means fewer surprises, fewer revisions, and a better end result. And because we handle development too, your designs get built exactly as intended.
        </p>
      </div>
    </section>

    {/* Portfolio / Case Studies */}
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 text-center">Case Studies</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">UX in Action</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition">
              <img src={item.image} alt={item.name} className="h-48 w-full object-cover" loading="lazy" decoding="async" />
              <div className="p-7">
                <h3 className="text-xl font-semibold text-accent">{item.name}</h3>
                <p className="text-gray-600 leading-relaxed text-sm mt-2">{item.description}</p>
              </div>
            </div>
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
          Clear pricing based on what you need. No vague day rates.
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
                {tier.isFree ? 'Get Free Audit' : 'Get Started'}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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

    {/* Why Local Businesses Choose Us */}
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
            Why Local Businesses Choose Us
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Good UX isn't just for big tech companies. Local businesses in Aldershot, Farnborough, Camberley, and Guildford benefit just as much from well-designed digital products. If your customers are booking appointments, filling in forms, or buying online, the experience matters.
            </p>
            <p>
              We're based in Aldershot, so we understand the local market. We've worked with Hampshire businesses across healthcare, recruitment, and professional services, designing interfaces that their customers actually enjoy using.
            </p>
            <p>
              We keep the process simple. You'll get wireframes and prototypes you can click through and give feedback on before any code gets written. That means fewer surprises, fewer revisions, and a better end result.
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
          UI/UX design works best alongside these services.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/creative-solutions/website-design" className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-md transition block">
            <h3 className="text-lg font-bold mb-2">Website Design</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Full website design services, from layout to launch.</p>
          </Link>
          <Link to="/development/web-development" className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-md transition block">
            <h3 className="text-lg font-bold mb-2">Web Development</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Custom web apps and sites built with React, Next.js, and modern tools.</p>
          </Link>
          <Link to="/development/mobile-app-development" className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-md transition block">
            <h3 className="text-lg font-bold mb-2">Mobile App Development</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Native and cross-platform apps with UX design built in from the start.</p>
          </Link>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">
          Your Users Are Struggling. Let's Fix That.
        </h2>
        <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
          Start with a free UX audit. We'll show you where users are dropping off and what to fix first.
        </p>
        <Link
          to="/getintouch"
          className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
        >
          Get Your Free UX Audit <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>

    <Footer />
  </main>
  )
}

export default UXUIExperience
