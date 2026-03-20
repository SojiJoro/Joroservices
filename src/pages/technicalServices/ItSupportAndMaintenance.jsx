import React, { useState } from 'react'
import {
  FaHeadset,
  FaShieldAlt,
  FaClock,
  FaTools,
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
  'Your IT only gets attention when something breaks',
  'You\'re paying someone who takes days to respond to a simple issue',
  'Your team wastes hours on tech problems instead of doing their actual jobs',
  'You have no idea if your systems are secure or properly backed up',
  'You need IT support but can\'t justify hiring someone full-time',
]

const serviceCards = [
  {
    icon: FaClock,
    title: 'We Catch Problems Before You Even Notice',
    label: '24/7 Monitoring & Response',
    description:
      'We proactively monitor your servers, workstations, and cloud environments around the clock, resolving issues before they escalate.',
    items: [
      'Server and workstation monitoring',
      'Cloud environment monitoring',
      'Automated alerting',
      'Proactive issue resolution',
      'Uptime reporting',
    ],
  },
  {
    icon: FaShieldAlt,
    title: 'Always Patched, Always Protected',
    label: 'Security Patching & Updates',
    description:
      'We keep your systems secure and up to date with automated patch cycles, antivirus updates, and vulnerability scans.',
    items: [
      'Automated OS patching',
      'Application updates',
      'Antivirus management',
      'Vulnerability scanning',
      'Compliance reporting',
    ],
  },
  {
    icon: FaTools,
    title: 'Everything Running, Nothing Forgotten',
    label: 'Infrastructure Maintenance',
    description:
      'From on-premise hardware to cloud servers, we maintain your IT environment for uptime, performance, and future scaling.',
    items: [
      'Hardware health monitoring',
      'Cloud server maintenance',
      'Backup verification',
      'Performance optimisation',
      'Capacity planning',
    ],
  },
  {
    icon: FaHeadset,
    title: 'Call Us, We\'ll Actually Answer',
    label: 'Helpdesk & Remote Support',
    description:
      'Our team resolves user issues quickly through remote access, live chat, or on-site visits. No ticket is too small or too technical.',
    items: [
      'Remote support',
      'On-site visits when needed',
      'User account management',
      'Software troubleshooting',
      'New starter and leaver setup',
    ],
  },
]

const portfolio = [
  {
    name: 'Healthcare IT Support Contract',
    description:
      'Provided full support for care home IT infrastructure, including user account management, PC refreshes, and printer maintenance.',
  },
  {
    name: 'Remote Staff Support & Automation',
    description:
      'Enabled a distributed team with VPN setup, Slack integration, and zero-downtime deployment of security patches.',
  },
  {
    name: 'Infrastructure Uptime Improvement',
    description:
      'Achieved 99.98% uptime for a financial services firm by implementing load balancing, proactive monitoring, and automated backups.',
  },
]

const pricingTiers = [
  {
    name: 'IT Health Check',
    price: 'Free',
    features: [
      'Review of your current IT setup',
      'Security and backup assessment',
      'Top recommendations',
      'No obligation',
    ],
    bestFor: 'Understanding where your IT stands right now',
    isFree: true,
  },
  {
    name: 'Essential Support',
    price: 'From \u00a330/user/month',
    features: [
      'Remote helpdesk support',
      'Basic monitoring',
      'Security patching',
      'Email support',
      'Business hours coverage',
    ],
    bestFor: 'Small businesses that need reliable basic support',
  },
  {
    name: 'Managed IT',
    price: 'From \u00a350/user/month',
    features: [
      'Everything in Essential, plus:',
      '24/7 monitoring and alerting',
      'Backup management and testing',
      'On-site support when needed',
      'Monthly IT health report',
      'Quarterly review meetings',
    ],
    bestFor: 'Businesses that want their IT fully managed',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Everything in Managed, plus:',
      'Dedicated account manager',
      'Infrastructure planning',
      'Compliance support',
      'Priority response SLAs',
    ],
    bestFor: 'Larger businesses with complex IT needs',
  },
]

const faqData = [
  {
    question: 'What does managed IT support include?',
    answer:
      'Managed IT support from Joro Services includes 24/7 system monitoring, helpdesk support, security patching, software updates, backup management, and proactive maintenance. We act as your dedicated IT team, handling everything from day-to-day user issues to strategic infrastructure planning.',
  },
  {
    question: 'How quickly do you respond to IT support requests?',
    answer:
      'We aim to respond to all support requests within 1 hour during business hours. Critical issues affecting business operations are prioritised and typically addressed within 15-30 minutes. We provide remote support for most issues and on-site visits when needed.',
  },
  {
    question: 'Do you offer IT support for small businesses in Hampshire?',
    answer:
      'Yes, we specialise in IT support for small and medium-sized businesses across Hampshire, including Aldershot, Farnborough, Farnham, Camberley, and Guildford. Our flexible support plans are designed to scale with your business, whether you have 5 or 500 employees.',
  },
  {
    question: 'Can you support remote and hybrid teams?',
    answer:
      'Absolutely. We set up and manage remote working infrastructure including VPN access, cloud-based collaboration tools, secure file sharing, and remote desktop solutions. We also provide remote helpdesk support so your team gets help wherever they are working.',
  },
  {
    question: 'How much does IT support cost per month?',
    answer:
      'It depends on how many users and devices you have and what level of support you need. Our plans start from \u00a330 per user per month for basic support, with full managed services from \u00a350 per user per month. Get in touch and we will give you a quote based on your setup.',
  },
]

const itFaqSchema = {
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

const ItSupportAndMaintenance = () => {
  const [openFaq, setOpenFaq] = useState(null)

  return (
  <main className="bg-white text-gray-900">
    <SEO
      {...pagesSEO['/technical-services/it-support-and-maintenance']}
      dateModified="2026-03-20"
      jsonLd={[
        serviceSchema({
          name: 'IT Support and Maintenance',
          description: 'Reliable IT support and maintenance services in Aldershot, Hampshire.',
          url: '/technical-services/it-support-and-maintenance',
          category: 'IT Support',
        }),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Technical Services', path: '/technical-services' },
          { name: 'IT Support & Maintenance', path: '/technical-services/it-support-and-maintenance' },
        ]),
        itFaqSchema,
      ]}
    />

    {/* Hero Section */}
    <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">IT Support Services</p>
        <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Technical Services', path: '/technical-services' }, { name: 'IT Support & Maintenance' }]} />
        <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight max-w-3xl">IT Support & Maintenance in Aldershot, Hampshire</h1>
        <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-2xl">
          Downtime costs money. We provide proactive IT support and maintenance for businesses in Aldershot, Farnborough, Farnham, Fleet, Camberley, Guildford, and across Hampshire and Surrey. Whether you're running on-prem kit or managing remote teams, we keep your systems running properly, patched, and looked after.
        </p>
        <Link
          to="/getintouch"
          className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
        >
          Get a Free IT Health Check <ArrowRight className="w-4 h-4" />
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
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">What We Cover</h2>
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
          IT Support + Cybersecurity + Cloud Under One Roof
        </h2>
        <p className="text-white/70 text-lg leading-relaxed max-w-3xl mx-auto">
          Most IT support companies sell you a contract and then wait for things to break. We work differently. We monitor your systems, apply patches before they become urgent, and actually pick up the phone when you ring. And because we handle cybersecurity and cloud infrastructure too, you get complete coverage from one team that knows your business inside out.
        </p>
      </div>
    </section>

    {/* Portfolio Section */}
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 text-center">Case Studies</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">Where We've Made a Difference</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition">
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
          Per-user pricing. No hidden fees. Scale up or down as your team changes.
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
                {tier.isFree ? 'Get Free Health Check' : 'Get Started'}
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

    {/* Why Hampshire Businesses Trust Our IT Support */}
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
            Why Hampshire Businesses Trust Our IT Support
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Most IT support companies sell you a contract and then wait for things to break. We work differently. We monitor your systems, apply patches before they become urgent, and actually pick up the phone when you ring. Businesses across Aldershot, Farnborough, and the wider Hampshire area rely on us because we treat their IT as if it were our own.
            </p>
            <p>
              We understand the challenges local businesses face: tight budgets, small teams wearing multiple hats, and the pressure to keep everything running without a dedicated IT department. That is exactly the gap we fill. Whether you are a professional services firm in Fleet, a care provider in Camberley, or a growing business in Guildford, we give you the IT support you need without the overhead of hiring in-house.
            </p>
            <p>
              Our team is local, responsive, and straightforward. No confusing jargon in reports, no upselling you things you do not need. Just reliable IT support that keeps your business running.
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
          IT support works best alongside these services.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/technical-services/cybersecurity" className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-md transition block">
            <h3 className="text-lg font-bold mb-2">Cybersecurity</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Protect your business from phishing, ransomware, and data breaches with proper security measures.</p>
          </Link>
          <Link to="/technical-services/cloud-infrastructure" className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-md transition block">
            <h3 className="text-lg font-bold mb-2">Cloud Infrastructure</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Move to the cloud or optimise your existing AWS setup. We handle the infrastructure so you don't have to.</p>
          </Link>
          <Link to="/development/data-management" className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-md transition block">
            <h3 className="text-lg font-bold mb-2">Data Management</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Get your databases, backups, and reporting sorted. We help you make your data safe and useful.</p>
          </Link>
        </div>
      </div>
    </section>

    {/* Local Service Areas */}
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
          IT Support Across Hampshire &amp; Surrey
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {[
            { label: 'Aldershot', path: '/it-support-aldershot' },
            { label: 'Farnborough', path: '/locations/farnborough' },
            { label: 'Farnham', path: '/it-support-farnham' },
            { label: 'Fleet', path: '/it-support-fleet' },
            { label: 'Camberley', path: '/it-support-camberley' },
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

    {/* CTA Section */}
    <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">
          Your IT Should Just Work. Let Us Make Sure It Does.
        </h2>
        <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
          Start with a free IT health check. We'll review your setup and tell you exactly what needs attention — no sales pitch, just honest advice.
        </p>
        <Link
          to="/getintouch"
          className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
        >
          Get Your Free IT Health Check <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>

    <Footer />
  </main>
  )
}

export default ItSupportAndMaintenance
