import React, { useState, useEffect } from 'react'
import {
  FaHeadset,
  FaShieldAlt,
  FaClock,
  FaTools,
  FaDesktop,
  FaCloudDownloadAlt,
  FaPlus,
  FaMinus,
  FaCheckCircle,
  FaUsersCog,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'

const serviceCards = [
  {
    icon: FaClock,
    title: 'Problems Fixed Before You Notice Them',
    label: '24/7 Monitoring & Response',
    description:
      'We monitor your servers, workstations, and cloud environments around the clock. When something looks off, we fix it — usually before you even know there was a problem.',
    items: [
      'Real-time server & endpoint monitoring',
      'Automated alerting and escalation',
      'Proactive issue resolution',
      'Monthly uptime and incident reports',
    ],
  },
  {
    icon: FaShieldAlt,
    title: 'Always Patched. Always Protected.',
    label: 'Security Patching & Updates',
    description:
      'Unpatched systems are the #1 way attackers get in. We handle all your OS and application updates on a managed schedule — no more "remind me later" on critical patches.',
    items: [
      'Automated OS and software patching',
      'Antivirus and endpoint protection updates',
      'Vulnerability scanning',
      'Patch compliance reporting',
    ],
  },
  {
    icon: FaTools,
    title: 'Your Infrastructure, Running Like Clockwork',
    label: 'Infrastructure Maintenance',
    description:
      'From on-premise hardware to cloud servers, we maintain your IT environment for maximum uptime and performance. Planned maintenance, not emergency firefighting.',
    items: [
      'Server health checks and optimisation',
      'Network performance monitoring',
      'Storage and capacity management',
      'Hardware lifecycle planning',
    ],
  },
  {
    icon: FaHeadset,
    title: 'Real People. Real Answers. Fast.',
    label: 'Helpdesk & Remote Support',
    description:
      'Your team calls, we answer. No ticket queues with 48-hour SLAs. Our helpdesk resolves most issues remotely within the hour — and we come on-site when needed.',
    items: [
      'Remote support via phone, chat, and screen share',
      'On-site visits when required',
      'User account and password management',
      'Software installation and troubleshooting',
    ],
  },
  {
    icon: FaUsersCog,
    title: 'New Starters and Leavers Handled in Hours, Not Days',
    label: 'User Onboarding & Offboarding',
    description:
      'New employee starting Monday? We\'ll have their laptop, email, permissions, and software ready. Someone leaving? We\'ll revoke access, back up their data, and wipe the device.',
    items: [
      'New starter setup (laptop, email, apps, permissions)',
      'Leaver process (access revocation, data backup, device wipe)',
      'Asset tracking and inventory',
      'Standard build images for fast deployment',
    ],
  },
  {
    icon: FaCloudDownloadAlt,
    title: 'If Something Goes Wrong, You\'re Back Up Fast',
    label: 'Backup & Disaster Recovery',
    description:
      'Hardware fails. People delete things. Ransomware happens. We set up automated backups with tested recovery procedures so you can get back to work — not back to square one.',
    items: [
      'Automated daily backups (cloud and local)',
      'Regular recovery testing',
      'Disaster recovery planning',
      'Business continuity documentation',
    ],
  },
]

const stats = [
  {
    value: '99.98%',
    label: 'Average uptime across managed clients',
  },
  {
    value: '<1 Hour',
    label: 'Average helpdesk response time',
  },
  {
    value: '500+',
    label: 'Endpoints under active management',
  },
  {
    value: '96%',
    label: 'First-contact resolution rate',
  },
]

const painPoints = [
  'Our IT guy left and nobody knows how anything works',
  'We\'re spending more time fixing IT problems than doing actual work',
  'We have no idea if our backups actually work',
  'Every new starter takes a week to get set up with IT',
  'We keep getting the same issues over and over and nobody fixes the root cause',
  'We\'re paying for break-fix IT support and it\'s costing us a fortune',
]

const pricingTiers = [
  {
    name: 'Pay-As-You-Go',
    price: 'From £75/hour',
    features: [
      'Remote and on-site support',
      'No monthly commitment',
      'Ideal for ad-hoc issues',
      'Billed in 15-minute increments',
    ],
    bestFor: 'We just need someone to call when things break',
  },
  {
    name: 'Managed IT Support',
    price: 'From £35/user/month',
    features: [
      '24/7 monitoring and alerting',
      'Unlimited remote helpdesk',
      'Patch management and updates',
      'User onboarding and offboarding',
      'Monthly reporting',
    ],
    bestFor: 'We want proactive IT that prevents problems',
    highlighted: true,
  },
  {
    name: 'Fully Managed IT',
    price: 'From £55/user/month',
    features: [
      'Everything in Managed, plus:',
      'On-site support visits',
      'Backup and disaster recovery',
      'Hardware procurement and lifecycle',
      'Quarterly IT strategy reviews',
      'Dedicated account manager',
    ],
    bestFor: 'Be our IT department — handle everything',
  },
]

const faqData = [
  {
    question: 'How quickly do you respond to support requests?',
    answer:
      'Our average response time is under 1 hour for remote support. For critical issues (server down, security breach), we respond immediately. On-site visits are typically scheduled within 4 hours for managed clients.',
  },
  {
    question: 'Do you support remote and hybrid teams?',
    answer:
      'Absolutely. Most of our clients have a mix of office, home, and hybrid workers. We support all of them equally through remote tools, VPN management, cloud services, and when needed, on-site visits.',
  },
  {
    question: 'What happens outside of business hours?',
    answer:
      'Our monitoring runs 24/7. If a critical issue is detected outside hours, our on-call team is alerted and responds immediately. For managed clients, this is included at no extra cost.',
  },
  {
    question: 'Can you take over from our current IT provider?',
    answer:
      'Yes — we do this regularly. We\'ll handle the transition, document everything, and make sure nothing falls through the cracks. We typically complete a full handover in 1-2 weeks with zero downtime.',
  },
  {
    question: 'Do we need to buy new hardware?',
    answer:
      'Not necessarily. We\'ll assess what you have and recommend replacements only where needed. We can procure hardware for you at trade prices if required, and we handle all the setup and configuration.',
  },
  {
    question: 'What size businesses do you support?',
    answer:
      'We specialise in small and medium businesses with 5-100 users. That\'s our sweet spot — big enough to need proper IT support, but not so big that you need a full internal IT team.',
  },
]

const assessmentItems = [
  'Full IT infrastructure audit',
  'Network performance and security review',
  'Backup and disaster recovery assessment',
  'User satisfaction survey',
  'Plain-English report with prioritised recommendations',
]

const ItSupportAndMaintenance = () => {
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    document.title =
      'IT Support London | Managed IT Services for SMBs | Joro Services'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Proactive IT support and managed services for small businesses. 99.98% uptime, under 1 hour response time, unlimited remote helpdesk. Free IT health check available.'
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
              IT Support & Maintenance
            </p>
            <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              Stop Firefighting IT Problems.{' '}
              <span className="text-accent-dark">
                Start Preventing Them.
              </span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Downtime costs money. Slow systems cost productivity. Bad IT
              support costs morale. We provide proactive, managed IT support
              that keeps your business running smoothly — so you can focus on
              what you actually do.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/getintouch"
                className="inline-block px-6 py-3 bg-accent-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition text-center"
              >
                Get a Free IT Health Check
              </Link>
              <a
                href="#services"
                className="inline-block px-6 py-3 border-2 border-accent-dark text-accent-dark font-semibold rounded-lg hover:bg-accent-dark hover:text-white transition text-center"
              >
                See What We Cover
              </a>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Support Dashboard
            </h3>
            <div className="flex items-center gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">68%</div>
                <p className="text-xs text-gray-500 mt-1">Before</p>
              </div>
              <div className="text-2xl text-gray-400">&rarr;</div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-dark">99.98%</div>
                <p className="text-xs text-gray-500 mt-1">After</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mb-4">System Uptime</p>
            <div className="space-y-3">
              {['24/7 Monitoring', 'Patch Management', 'Helpdesk', 'Backups', 'On-site Support'].map(
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
            The Reality for Small Businesses
          </h2>
          <p className="text-center text-gray-600 mb-10 text-lg">
            Most businesses we talk to have the same IT frustrations:
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
            Sound familiar? You're not alone — and fixing it is{' '}
            <strong>easier than you think</strong>.
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

      {/* Section 5: Free IT Health Check */}
      <section className="py-16 lg:py-20 px-4 lg:px-20 bg-accent-dark/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Free IT Health Check
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            Know Exactly Where Your IT Stands
          </p>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We'll audit your infrastructure, review your backups, check your
            network security, and give you a clear, prioritised action plan.
            No sales pitch — just an honest assessment of what's working and
            what needs attention.
          </p>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-left max-w-xl mx-auto">
            <h3 className="font-semibold text-lg mb-4">What's included:</h3>
            <ul className="space-y-3">
              {assessmentItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FaCheckCircle className="text-accent-dark mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/getintouch"
              className="mt-6 inline-block w-full text-center px-6 py-3 bg-accent-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition"
            >
              Book Your Free IT Health Check
            </Link>
            <p className="mt-3 text-xs text-gray-500 text-center">
              No obligation. No hard sell. Just a clear picture of your IT.
            </p>
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
            Straightforward pricing. No hidden fees.
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
            IT Support Doesn't Have to Be a Headache
          </h2>
          <p className="text-lg mb-8 text-white/80">
            Start with a free IT health check. We'll show you exactly where
            your infrastructure stands — and what to do about it.
          </p>
          <Link
            to="/getintouch"
            className="inline-block bg-white text-accent-dark font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
          >
            Book Your Free IT Health Check
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default ItSupportAndMaintenance
