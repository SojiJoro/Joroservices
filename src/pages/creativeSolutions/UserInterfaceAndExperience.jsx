import React, { useState, useEffect } from 'react'
import {
  FaUserCheck,
  FaDraftingCompass,
  FaMicroscope,
  FaLaptopCode,
  FaSitemap,
  FaMagic,
  FaPlus,
  FaMinus,
  FaCheckCircle,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'

const serviceCards = [
  {
    icon: FaUserCheck,
    title: 'Design Based on Real Users, Not Guesswork',
    label: 'User Research & Personas',
    description:
      'We uncover what your users actually need through interviews, surveys, and analytics. The result: clear user personas and journey maps that guide every design decision.',
    items: [
      'User interviews and surveys',
      'Competitor analysis',
      'User persona creation',
      'Journey mapping',
    ],
  },
  {
    icon: FaSitemap,
    title: 'Map the Flow Before You Build',
    label: 'Information Architecture',
    description:
      'We structure your content and navigation so users find what they need intuitively. No confusing menus, no dead ends — just clear paths to the actions that matter.',
    items: [
      'Site mapping and content hierarchy',
      'Navigation design',
      'Content audit and organisation',
      'Card sorting workshops',
    ],
  },
  {
    icon: FaDraftingCompass,
    title: 'See It Before You Build It',
    label: 'Wireframing & Prototyping',
    description:
      'Interactive prototypes you can click through and test before any code is written. Catch problems early, iterate cheaply, and go into development with confidence.',
    items: [
      'Low-fidelity wireframes',
      'High-fidelity interactive prototypes',
      'User flow diagrams',
      'Stakeholder review sessions',
    ],
  },
  {
    icon: FaMagic,
    title: 'Interfaces People Actually Enjoy Using',
    label: 'UI Design',
    description:
      'We create clean, modern interfaces with consistent design systems. Every button, form, and interaction is designed for clarity, accessibility, and visual appeal.',
    items: [
      'Visual design and branding alignment',
      'Design system and component library',
      'Responsive design (mobile, tablet, desktop)',
      'Accessibility compliance (WCAG 2.1)',
    ],
  },
  {
    icon: FaMicroscope,
    title: 'Test Early. Test Often. Get It Right.',
    label: 'Usability Testing',
    description:
      'We test designs with real users before and after launch. Heatmaps, session recordings, A/B tests, and user feedback sessions — data-driven design improvements, not opinions.',
    items: [
      'Moderated user testing sessions',
      'A/B testing setup',
      'Heatmap and session recording analysis',
      'Post-launch feedback collection',
    ],
  },
  {
    icon: FaLaptopCode,
    title: 'Smooth Handoff. No Lost Details.',
    label: 'Design-to-Dev Handoff',
    description:
      'We deliver pixel-perfect designs with clear specs, responsive breakpoints, and organised assets. Your developers get everything they need to build exactly what was designed.',
    items: [
      'Figma design files with specifications',
      'Asset export and icon sets',
      'Responsive breakpoint documentation',
      'Developer walkthrough session',
    ],
  },
]

const stats = [
  {
    value: '30+',
    label: 'UX projects delivered',
  },
  {
    value: '40%',
    label: 'Average increase in conversion rates',
  },
  {
    value: 'WCAG 2.1',
    label: 'Accessibility standard on all designs',
  },
  {
    value: 'Figma',
    label: 'Primary design tool for collaboration',
  },
]

const painPoints = [
  'Users sign up but never come back — we don\'t know why',
  'Our app works but people say it\'s confusing to use',
  'We designed it ourselves and it looks... DIY',
  'Our conversion rate is terrible and we don\'t know what to fix',
  'The developers built it but nobody thought about the user experience',
  'We keep adding features but the product is getting harder to use, not easier',
]

const processSteps = [
  {
    step: '01',
    title: 'Research',
    description: 'Understand your users, business goals, and competitive landscape through interviews, data, and analysis.',
  },
  {
    step: '02',
    title: 'Wireframe',
    description: 'Map user flows and create wireframes to validate structure and navigation before visual design begins.',
  },
  {
    step: '03',
    title: 'Design',
    description: 'Create high-fidelity designs and interactive prototypes that look and feel like the real product.',
  },
  {
    step: '04',
    title: 'Test & Iterate',
    description: 'Test with real users, gather feedback, and refine until the experience is intuitive and effective.',
  },
]

const pricingTiers = [
  {
    name: 'UX Audit',
    price: 'From £1,000',
    features: [
      'Expert review of existing product',
      'Heatmap and analytics analysis',
      'Prioritised list of UX issues',
      'Recommendations with mockups',
      'Presentation and walkthrough',
    ],
    bestFor: 'Understanding what\'s wrong with your current UX',
  },
  {
    name: 'Full UX/UI Design',
    price: 'From £4,000',
    features: [
      'User research and personas',
      'Information architecture',
      'Wireframes and user flows',
      'High-fidelity UI design',
      'Interactive prototype',
      'Design system / component library',
    ],
    bestFor: 'New products or complete redesigns',
    highlighted: true,
  },
  {
    name: 'Ongoing UX Support',
    price: 'From £1,500/month',
    features: [
      'Continuous UX improvements',
      'A/B testing and analysis',
      'New feature design',
      'Usability testing sessions',
      'Monthly UX recommendations',
    ],
    bestFor: 'Products that need ongoing design support',
  },
]

const faqData = [
  {
    question: 'What\'s the difference between UI and UX design?',
    answer:
      'UX (User Experience) is about how a product works — the flows, structure, and logic. UI (User Interface) is about how it looks — the colours, typography, and visual design. We do both, because great products need both.',
  },
  {
    question: 'Do you work with existing development teams?',
    answer:
      'Yes — we frequently collaborate with in-house or agency development teams. We deliver designs in Figma with clear specs, assets, and documentation. We also offer developer walkthrough sessions to ensure nothing gets lost in translation.',
  },
  {
    question: 'How do you measure UX success?',
    answer:
      'We track metrics that matter for your product: conversion rates, task completion rates, time-on-task, error rates, and user satisfaction scores. We set benchmarks before the redesign and measure improvements after.',
  },
  {
    question: 'Can you redesign our existing product?',
    answer:
      'Absolutely. We start with a UX audit to identify the biggest issues, then create a prioritised redesign plan. We can redesign incrementally (section by section) or do a complete overhaul depending on your timeline and budget.',
  },
  {
    question: 'What tools do you use?',
    answer:
      'Figma for design and prototyping, Hotjar for heatmaps and recordings, Google Analytics for data analysis, and Maze for usability testing. We deliver everything in formats your team can use.',
  },
  {
    question: 'How long does a UX/UI project take?',
    answer:
      'A UX audit takes about 1 week. A full UX/UI design project typically takes 4-8 weeks depending on complexity. We provide a detailed timeline during the scoping phase.',
  },
]

const UXUIExperience = () => {
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    document.title =
      'UI/UX Design London | User Experience & Interface Design | Joro Services'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Professional UI/UX design for web and mobile products. User research, wireframing, prototyping, and usability testing. From £1,000 for UX audit. Free consultation available.'
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
              UI/UX Design
            </p>
            <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              If Users Can't Figure It Out,{' '}
              <span className="text-accent-dark">
                It Doesn't Matter How Good It Looks.
              </span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We design digital products that feel effortless. From user
              research to interactive prototypes, we create experiences
              that people love to use — and that actually achieve your
              business goals. Design backed by data, not just opinions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/getintouch"
                className="inline-block px-6 py-3 bg-accent-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition text-center"
              >
                Book a Free UX Consultation
              </Link>
              <a
                href="#services"
                className="inline-block px-6 py-3 border-2 border-accent-dark text-accent-dark font-semibold rounded-lg hover:bg-accent-dark hover:text-white transition text-center"
              >
                See What We Do
              </a>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              UX Impact
            </h3>
            <div className="flex items-center gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">1.2%</div>
                <p className="text-xs text-gray-500 mt-1">Before</p>
              </div>
              <div className="text-2xl text-gray-400">&rarr;</div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-dark">4.8%</div>
                <p className="text-xs text-gray-500 mt-1">After</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mb-4">Average Conversion Rate Improvement</p>
            <div className="space-y-3">
              {['User Research', 'Wireframing', 'UI Design', 'Prototyping', 'Usability Testing'].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3">
                    <FaCheckCircle className="text-accent-dark flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                )
              )}
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
            These are the UX problems we hear most:
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
            Good UX design fixes all of this — and it{' '}
            <strong>pays for itself in conversions</strong>.
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

      {/* Section 5: Our Process */}
      <section className="py-16 lg:py-20 px-4 lg:px-20 bg-accent-dark/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Our Design Process
          </h2>
          <p className="text-gray-600 mb-12 text-lg">
            Research-driven design in four clear phases.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-left">
                <div className="text-2xl font-bold text-accent-dark mb-2">{step.step}</div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
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
            Clear pricing. No hidden fees.
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
            Great Products Start With Great Design
          </h2>
          <p className="text-lg mb-8 text-white/80">
            Book a free UX consultation. We'll review your current product,
            identify the biggest opportunities, and show you what great UX
            could look like.
          </p>
          <Link
            to="/getintouch"
            className="inline-block bg-white text-accent-dark font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
          >
            Book a Free UX Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default UXUIExperience
