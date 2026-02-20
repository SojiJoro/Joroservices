import React, { useState, useEffect } from 'react'
import {
  FaHeadset,
  FaShieldAlt,
  FaClock,
  FaCloud,
  FaPlus,
  FaMinus,
  FaCheckCircle,
  FaCheck,
} from 'react-icons/fa'
import {
  AlertTriangle,
  ShieldOff,
  Wallet,
  ThumbsDown,
  ClipboardCheck,
  ListChecks,
  BarChart3,
  Award,
  FileCheck,
  Shield,
  Scale,
  Star,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'

// ─── SEO Hook ────────────────────────────────────────────────────────────────
function usePageSEO() {
  useEffect(() => {
    // Meta title
    document.title =
      'IT Support London | Managed IT Services for SMBs | Joro Services'

    // Meta description
    const setMeta = (name, content, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta(
      'description',
      'Outsourced IT support and managed IT services for London SMBs (5-50 employees). Proactive monitoring, security patching, helpdesk support, and cloud management from an AWS-certified engineer. Plans from \u00a340/user/month.'
    )
    setMeta(
      'keywords',
      'IT support London, managed IT services, outsourced IT, SMB IT support, IT maintenance, remote IT support, cloud management London, cybersecurity SMB'
    )

    // Open Graph
    setMeta(
      'og:title',
      'IT Support London | Managed IT Services for SMBs | Joro Services',
      'property'
    )
    setMeta(
      'og:description',
      'Outsourced IT support for London SMBs. Proactive monitoring, security patching, and fast helpdesk support from \u00a340/user/month.',
      'property'
    )
    setMeta('og:type', 'website', 'property')

    // Schema markup — LocalBusiness + Service
    const schemaId = 'it-support-schema'
    let script = document.getElementById(schemaId)
    if (!script) {
      script = document.createElement('script')
      script.id = schemaId
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LocalBusiness',
          name: 'Joro Services',
          description:
            'London-based IT consultancy providing managed IT support, cybersecurity, and cloud infrastructure services for SMBs.',
          url: 'https://www.joroservices.org',
          areaServed: { '@type': 'City', name: 'London' },
          priceRange: '\u00a3\u00a3',
        },
        {
          '@type': 'Service',
          name: 'IT Support & Maintenance',
          description:
            'Outsourced IT support and managed services for small and medium businesses in London. Includes proactive monitoring, security patching, helpdesk support, and cloud management.',
          provider: {
            '@type': 'LocalBusiness',
            name: 'Joro Services',
          },
          areaServed: { '@type': 'City', name: 'London' },
          offers: [
            {
              '@type': 'Offer',
              name: 'Essential',
              price: '40',
              priceCurrency: 'GBP',
              unitText: 'per user per month',
            },
            {
              '@type': 'Offer',
              name: 'Professional',
              price: '75',
              priceCurrency: 'GBP',
              unitText: 'per user per month',
            },
            {
              '@type': 'Offer',
              name: 'Premium',
              price: '120',
              priceCurrency: 'GBP',
              unitText: 'per user per month',
            },
          ],
        },
      ],
    })

    return () => {
      document.title =
        'Joro Services | Digital Marketing, Development & IT Solutions in London'
      const el = document.getElementById(schemaId)
      if (el) el.remove()
    }
  }, [])
}

// ─── Data ────────────────────────────────────────────────────────────────────

const painPoints = [
  {
    icon: AlertTriangle,
    text: 'Your team wastes hours on IT issues instead of doing their actual jobs',
  },
  {
    icon: ShieldOff,
    text: "You're not sure if your systems are secure or up to date",
  },
  {
    icon: Wallet,
    text: "You don't have budget for a full-time IT person, but you need reliable support",
  },
  {
    icon: ThumbsDown,
    text: "You've been burned by IT providers who overpromise and underdeliver",
  },
]

const services = [
  {
    icon: FaClock,
    title: 'Proactive Monitoring & Alerts',
    description:
      'We monitor your servers, workstations, and cloud environments during business hours with automated 24/7 alerting. Critical issues trigger immediate notifications \u2014 non-critical issues are resolved next business day.',
    metric: 'Issues caught before they affect your team',
  },
  {
    icon: FaShieldAlt,
    title: 'Security Patching & Hardening',
    description:
      "Automated OS and third-party patching, antivirus management, and security policy configuration. We don't just update \u2014 we harden.",
    metric:
      "Improved one client\u2019s Microsoft Secure Score from 33% to 61%",
  },
  {
    icon: FaCloud,
    title: 'Cloud & Infrastructure Management',
    description:
      'From AWS to Azure to on-prem servers, we manage your infrastructure for uptime, performance, and cost efficiency.',
    metric:
      '26.6% AWS cost reduction achieved for a financial services client',
  },
  {
    icon: FaHeadset,
    title: 'Helpdesk & Remote Support',
    description:
      'Submit a ticket via email or portal. We resolve issues remotely \u2014 fast. No jargon, no runaround.',
    metric: '100+ tickets resolved monthly | Average response: under 4 hours',
  },
]

const steps = [
  {
    number: '01',
    title: 'Free IT Health Check',
    description:
      "We audit your current setup \u2014 devices, security, cloud, backups \u2014 and give you an honest report of where you stand. No obligation.",
    icon: ClipboardCheck,
  },
  {
    number: '02',
    title: 'Choose Your Plan',
    description:
      'Pick a support tier that fits your team size and needs. We handle onboarding, installing monitoring agents, and configuring your systems.',
    icon: ListChecks,
  },
  {
    number: '03',
    title: 'Ongoing Support & Reporting',
    description:
      'You get proactive monitoring, fast support, and a monthly report showing what we did, what we patched, and where you stand on security.',
    icon: BarChart3,
  },
]

const pricingTiers = [
  {
    name: 'Essential',
    price: '40',
    description: 'The basics, covered.',
    features: [
      'Remote monitoring & automated alerting',
      'OS & third-party patching',
      'Email-based support (next business day response)',
      'Monthly security report',
    ],
    bestFor: 'Teams of 5\u201315 who need basics covered',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '75',
    description: 'Hands-on management.',
    features: [
      'Everything in Essential, plus:',
      'Endpoint security (antivirus/EDR)',
      'Microsoft 365 administration',
      'Same-day response SLA',
      'Quarterly IT review meeting',
    ],
    bestFor: 'Teams of 10\u201330 who need hands-on management',
    highlighted: true,
  },
  {
    name: 'Premium',
    price: '120',
    description: 'Full infrastructure partner.',
    features: [
      'Everything in Professional, plus:',
      'AWS/Azure cloud management',
      'Backup & disaster recovery',
      'Priority 2-hour response SLA',
      'Dedicated monthly strategy call',
    ],
    bestFor: 'Teams of 20\u201350 with cloud infrastructure',
    highlighted: false,
  },
]

const trustSignals = [
  { icon: Award, label: 'AWS Solutions Architect Certified' },
  { icon: FileCheck, label: 'ITIL Experienced' },
  { icon: Shield, label: 'Professional Indemnity Insured' },
  { icon: Scale, label: 'GDPR Compliant' },
  { icon: Star, label: 'Enterprise experience, SMB pricing' },
]

const faqData = [
  {
    question: 'What happens if something breaks outside business hours?',
    answer:
      "Our automated monitoring runs 24/7 and will alert us to critical issues immediately. For non-critical issues, we respond next business day. We're transparent about this \u2014 we don't pretend to have a 24/7 NOC.",
  },
  {
    question: 'Do you support both Mac and Windows?',
    answer:
      'Yes. We support Windows, macOS, and Linux environments.',
  },
  {
    question: 'Can you manage our Microsoft 365 tenant?',
    answer:
      'Absolutely. We handle user onboarding/offboarding, security policies, email configuration, and licence management.',
  },
  {
    question: "What's your average response time?",
    answer:
      'For our Professional and Premium plans, we aim for same-day or 2-hour response respectively. Essential plan is next business day.',
  },
  {
    question: 'Do we need to commit to a long contract?',
    answer:
      'We offer monthly rolling contracts after an initial 3-month period. No long lock-ins.',
  },
  {
    question: 'What size businesses do you work with?',
    answer:
      'We specialise in SMBs with 5\u201350 employees \u2014 big enough to need professional IT support, but not big enough to justify a full-time hire.',
  },
  {
    question: 'Are you insured?',
    answer:
      'Yes. We carry professional indemnity insurance and are fully GDPR compliant.',
  },
]

// ─── Component ───────────────────────────────────────────────────────────────

const ItSupportAndMaintenance = () => {
  usePageSEO()
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <main className="bg-white text-black">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="grid p-4 lg:p-20 grid-cols-1 lg:grid-cols-2 gap-12 min-h-screen items-center"
      >
        <div>
          <p className="uppercase text-sm text-accent-dark mb-4">
            Managed IT Services for London SMBs
          </p>
          <h1 className="text-3xl lg:text-5xl font-bold mb-6">
            Your Outsourced IT Department &mdash; Without the Overhead
          </h1>
          <p className="text-lg text-gray-800 mb-2">
            We help London SMBs (5&ndash;50 employees) stay secure, patched,
            and productive. Proactive monitoring, fast support, and real
            infrastructure expertise &mdash; from an AWS-certified engineer who
            manages enterprise systems daily.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href="#pricing"
              className="inline-block px-6 py-3 bg-accent-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition"
            >
              See Our Plans &amp; Pricing
            </a>
            <Link
              to="/getintouch"
              className="inline-block px-6 py-3 border-2 border-accent-dark text-accent-dark font-semibold rounded-lg hover:bg-accent-dark hover:text-white transition"
            >
              Book a Free IT Health Check
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-gray-50 rounded-2xl shadow-lg p-8 w-full max-w-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-gray-600">
                All systems operational
              </span>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-100">
                <span className="text-sm text-gray-700">Average response time</span>
                <span className="text-lg font-bold text-accent-dark">
                  &lt; 4 hrs
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-100">
                <span className="text-sm text-gray-700">Uptime maintained</span>
                <span className="text-lg font-bold text-accent-dark">99.9%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-100">
                <span className="text-sm text-gray-700">Tickets resolved / month</span>
                <span className="text-lg font-bold text-accent-dark">100+</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-100">
                <span className="text-sm text-gray-700">Client cost savings</span>
                <span className="text-lg font-bold text-accent-dark">26.6%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Problem ──────────────────────────────────────────────── */}
      <section className="py-16 px-4 lg:px-32 bg-gray-50">
        <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-4">
          Sound Familiar?
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Most small businesses deal with these IT headaches every week.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {painPoints.map((p, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-white border border-gray-200"
            >
              <p.icon className="w-8 h-8 text-accent-dark mb-4" />
              <p className="text-sm text-gray-800 font-medium">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── What You Get ─────────────────────────────────────────────── */}
      <section className="py-20 px-4 lg:px-32">
        <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-4">
          What You Get
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Specific services with real outcomes &mdash; not vague promises.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white hover:shadow-lg transition flex flex-col"
            >
              <s.icon className="text-4xl text-accent-dark mb-4" />
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-gray-700 flex-1">{s.description}</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs font-semibold text-accent-dark uppercase tracking-wide">
                  {s.metric}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────────────── */}
      <section className="py-20 px-4 lg:px-32 bg-gray-50">
        <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-4">
          How It Works
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Getting started is straightforward. Three steps, no surprises.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative p-8 bg-white rounded-xl border border-gray-200 shadow-sm"
            >
              <span className="text-5xl font-bold text-gray-100 absolute top-4 right-6 select-none">
                {step.number}
              </span>
              <step.icon className="w-10 h-10 text-accent-dark mb-4" />
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-sm text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────────────── */}
      <section id="pricing" className="py-20 px-4 lg:px-32">
        <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-4">
          Plans &amp; Pricing
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Transparent pricing. No hidden fees. Scale up or down as your team
          changes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier, i) => (
            <div
              key={i}
              className={`rounded-xl border p-8 flex flex-col ${
                tier.highlighted
                  ? 'border-accent-dark shadow-lg ring-2 ring-accent-dark relative'
                  : 'border-gray-200 shadow-sm'
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-dark text-white text-xs font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mb-1">{tier.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{tier.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">&pound;{tier.price}</span>
                <span className="text-gray-500 text-sm">/user/month</span>
              </div>
              <p className="text-xs text-gray-400 mb-4">From price — varies by scope</p>
              <ul className="space-y-3 flex-1">
                {tier.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                    <FaCheck className="text-accent-dark mt-0.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-gray-500 italic">
                Best for: {tier.bestFor}
              </p>
              <Link
                to="/getintouch"
                className={`mt-6 block text-center py-3 px-6 rounded-lg font-semibold transition ${
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
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Not sure which plan fits? Book a free IT health check and we&rsquo;ll
            recommend the right level.
          </p>
          <Link
            to="/getintouch"
            className="inline-block px-6 py-3 bg-accent-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition"
          >
            Book Free Health Check
          </Link>
        </div>
      </section>

      {/* ── Trust Signals ────────────────────────────────────────────── */}
      <section className="py-12 px-4 lg:px-32 bg-gray-50 border-y border-gray-200">
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {trustSignals.map((t, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-gray-700"
            >
              <t.icon className="w-5 h-5 text-accent-dark flex-shrink-0" />
              <span className="text-sm font-medium">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 lg:px-32" id="faq">
        <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="font-medium text-lg">{faq.question}</span>
                {openFaq === index ? (
                  <FaMinus className="text-accent-dark flex-shrink-0 ml-4" />
                ) : (
                  <FaPlus className="text-accent-dark flex-shrink-0 ml-4" />
                )}
              </button>
              {openFaq === index && (
                <p className="mt-3 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────────── */}
      <section className="bg-accent-dark text-white py-16 text-center px-4">
        <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
          Let&rsquo;s Start With a Free IT Health Check
        </h2>
        <p className="text-white/80 max-w-xl mx-auto mb-8">
          No obligation. We&rsquo;ll assess your setup and tell you honestly
          what needs attention &mdash; and what doesn&rsquo;t.
        </p>
        <Link
          to="/getintouch"
          className="inline-block bg-white text-accent-dark font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
        >
          Book Your Free Health Check
        </Link>
      </section>

      <Footer />
    </main>
  )
}

export default ItSupportAndMaintenance
