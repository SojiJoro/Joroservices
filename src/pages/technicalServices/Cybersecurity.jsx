import React, { useState, useEffect } from 'react'
import {
  FaShieldAlt,
  FaEnvelopeOpenText,
  FaLaptop,
  FaDatabase,
  FaUsers,
  FaPlus,
  FaMinus,
  FaCheckCircle,
  FaAws,
  FaCertificate,
  FaLock,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'

const serviceCards = [
  {
    icon: FaShieldAlt,
    title: 'Find Out Where You\'re Exposed',
    label: 'Security Assessment & Audit',
    description:
      'We assess your entire IT environment — endpoints, email, cloud, passwords, permissions — and give you a clear report showing what\'s at risk and what to fix first. No jargon, just priorities.',
    items: [
      'Microsoft Secure Score review',
      'Vulnerability scan',
      'Permissions audit',
      'Plain-English report with prioritised recommendations',
    ],
    note: 'This is included in our Free Security Health Check.',
  },
  {
    icon: FaEnvelopeOpenText,
    title: 'Stop Phishing Before It Starts',
    label: 'Email & Identity Security',
    description:
      'Email is the #1 attack vector for SMBs. We configure MFA, conditional access, anti-phishing policies, and email authentication (SPF, DKIM, DMARC) so attackers can\'t impersonate you or trick your team.',
    items: [
      'MFA rollout',
      'Conditional access policies',
      'Email security configuration',
      'DMARC/SPF/DKIM setup',
      'Anti-phishing policies',
    ],
  },
  {
    icon: FaLaptop,
    title: 'Every Device Secured. Every Update Applied.',
    label: 'Endpoint Protection & Patching',
    description:
      'We deploy endpoint protection (antivirus/EDR) across all your devices and ensure OS and application patches are applied automatically. No more "remind me later" on updates.',
    items: [
      'EDR/antivirus deployment (Microsoft Defender for Business or SentinelOne)',
      'Automated patch management',
      'Device compliance monitoring',
    ],
  },
  {
    icon: FaDatabase,
    title: 'If the Worst Happens, You\'re Covered',
    label: 'Backup & Ransomware Recovery',
    description:
      'Ransomware doesn\'t care how small your business is. We set up automated backups with tested recovery procedures so you can get back online without paying a ransom.',
    items: [
      'Automated backup configuration',
      'Recovery testing',
      'Ransomware response plan',
      'Business continuity documentation',
    ],
  },
  {
    icon: FaUsers,
    title: 'Your Team Is Your Biggest Vulnerability — And Your Best Defence',
    label: 'Security Awareness Training',
    description:
      'We provide practical security awareness training for your staff — not death-by-PowerPoint compliance exercises, but real scenarios they\'ll actually remember. Phishing simulations included.',
    items: [
      'Staff training sessions (remote or in-person)',
      'Phishing simulation campaigns',
      'Security policy templates',
      'Ongoing awareness programme',
    ],
  },
]

const stats = [
  {
    value: '33% → 61%',
    label: 'Microsoft Secure Score improvement delivered',
  },
  {
    value: '0 Breaches',
    label: 'Across all managed clients',
  },
  {
    value: 'AWS Certified',
    label: 'Solutions Architect — security is infrastructure',
  },
  {
    value: 'GDPR Compliant',
    label: 'All services aligned with UK data protection',
  },
]

const painPoints = [
  'We think we\'re secure but we\'ve never actually checked',
  'We don\'t have MFA on everything — or anything',
  'Our passwords are weak and shared on sticky notes or spreadsheets',
  'We haven\'t patched our systems in months',
  'We have no idea what happens if we get hit by ransomware',
  'We know we need to do something but it feels overwhelming and expensive',
]

const pricingTiers = [
  {
    name: 'One-Off Security Audit',
    price: 'From £750',
    features: [
      'Full security assessment and vulnerability scan',
      'Detailed report with prioritised recommendations',
      '1-hour walkthrough call to explain findings',
    ],
    bestFor: 'I want to know where I stand',
  },
  {
    name: 'Security Implementation',
    price: 'From £1,500',
    features: [
      'Everything in the audit, plus:',
      'MFA rollout and configuration',
      'Email security hardening',
      'Endpoint protection deployment',
      'Patch management setup',
    ],
    bestFor: 'I know I need to fix things — do it for me',
    highlighted: true,
  },
  {
    name: 'Ongoing Security Management',
    price: 'From £300/month',
    features: [
      'Continuous monitoring and alerting',
      'Monthly security reports',
      'Patch management',
      'Phishing simulations (quarterly)',
      'Incident response',
      'Annual security review',
    ],
    bestFor: 'Keep me secure on an ongoing basis',
  },
]

const faqData = [
  {
    question: 'We\'re a small business — are we really a target?',
    answer:
      'Yes. 43% of cyberattacks target small businesses (UK Government Cyber Security Breaches Survey). Attackers target SMBs specifically because they tend to have weaker defences than enterprises.',
  },
  {
    question: 'We use Microsoft 365 — aren\'t we already protected?',
    answer:
      'M365 has excellent security features, but most of them aren\'t turned on by default. MFA, conditional access, anti-phishing policies, email authentication — these all need to be configured. That\'s what we do.',
  },
  {
    question: 'What\'s a Microsoft Secure Score?',
    answer:
      'It\'s Microsoft\'s own measurement of your security posture, scored as a percentage. Most SMBs we see score between 20-40%. We\'ve improved clients from 33% to 61% — and continue pushing higher.',
  },
  {
    question: 'How long does a security implementation take?',
    answer:
      'For a typical SMB (5-30 users), we can complete a full security hardening project in 1-2 weeks without disrupting your team\'s work.',
  },
  {
    question: 'Will security changes annoy my team?',
    answer:
      'MFA adds a few seconds to login. Beyond that, most security improvements are invisible to your team. We always balance security with usability — locking everything down so tightly that nobody can work defeats the purpose.',
  },
  {
    question: 'Do you help with GDPR compliance?',
    answer:
      'We help with the technical side of GDPR — data protection, access controls, encryption, breach notification readiness. For legal compliance advice, we recommend working with a data protection solicitor alongside our technical work.',
  },
]

const healthCheckItems = [
  'Microsoft Secure Score review and analysis',
  'Email authentication check (SPF, DKIM, DMARC)',
  'MFA status across all accounts',
  'Endpoint protection coverage assessment',
  'Plain-English report with top 5 priorities',
]

const Cybersecurity = () => {
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    document.title =
      'Cybersecurity for Small Business London | Security Audit & Management | Joro Services'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Practical cybersecurity for SMBs. Free security health check, M365 hardening, endpoint protection, and ongoing management. We improved client security scores from 33% to 61%.'
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
              Cybersecurity
            </p>
            <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              Most SMBs Don't Get Hacked by Geniuses.{' '}
              <span className="text-accent-dark">
                They Get Hacked by Basics.
              </span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Weak passwords, unpatched systems, no MFA, admin accounts
              everywhere — these are the real threats to your business. We fix
              the basics first, then build from there. Practical cybersecurity
              for small businesses, not enterprise theatre.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/getintouch"
                className="inline-block px-6 py-3 bg-accent-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition text-center"
              >
                Get a Free Security Health Check
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
              Security Scorecard
            </h3>
            <div className="flex items-center gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">33%</div>
                <p className="text-xs text-gray-500 mt-1">Before</p>
              </div>
              <div className="text-2xl text-gray-400">→</div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-dark">61%</div>
                <p className="text-xs text-gray-500 mt-1">After</p>
              </div>
            </div>
            <div className="space-y-3">
              {['MFA', 'Patching', 'Backup', 'Email Security', 'Staff Training'].map(
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
            The Reality for SMBs
          </h2>
          <p className="text-center text-gray-600 mb-10 text-lg">
            Most small businesses we talk to have the same problems:
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
            <strong>simpler than you think</strong>.
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
                {card.note && (
                  <p className="mt-4 text-xs text-accent-dark font-medium bg-accent-dark/10 p-2 rounded">
                    {card.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Free Security Health Check */}
      <section className="py-16 lg:py-20 px-4 lg:px-20 bg-accent-dark/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Free Security Health Check
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            Know Where You Stand in 48 Hours
          </p>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We'll review your Microsoft 365 Secure Score, check your email
            security configuration, assess your endpoint protection status, and
            give you a prioritised action plan. Takes us 48 hours. Costs you
            nothing.
          </p>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-left max-w-xl mx-auto">
            <h3 className="font-semibold text-lg mb-4">What's included:</h3>
            <ul className="space-y-3">
              {healthCheckItems.map((item, i) => (
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
              Book Your Free Security Health Check
            </Link>
            <p className="mt-3 text-xs text-gray-500 text-center">
              We only need read-only access to your M365 tenant. We never make
              changes without written approval.
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
            Cybersecurity Doesn't Have to Be Complicated or Expensive
          </h2>
          <p className="text-lg mb-8 text-white/80">
            Start with a free health check. In 48 hours, you'll know exactly
            where your business is exposed — and what to do about it.
          </p>
          <Link
            to="/getintouch"
            className="inline-block bg-white text-accent-dark font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
          >
            Book Your Free Security Health Check
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default Cybersecurity
