import React, { useState, useEffect } from 'react'
import {
  FaDatabase,
  FaShieldAlt,
  FaExchangeAlt,
  FaHdd,
  FaChartBar,
  FaClock,
  FaBroom,
  FaCheckCircle,
  FaPlus,
  FaMinus,
  FaServer,
  FaChartLine,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'

const infraServices = [
  {
    icon: FaDatabase,
    title: 'Databases That Don\'t Keep You Up at Night',
    label: 'Database Administration & Optimisation',
    description:
      'We set up, manage, and optimise your databases — whether that\'s AWS RDS, DynamoDB, PostgreSQL, MySQL, or SQL Server. Performance tuning, query optimisation, and monitoring so your applications run fast.',
    items: [
      'Database setup/migration',
      'Performance tuning',
      'Query optimisation',
      'Monitoring & alerting',
      'Scaling recommendations',
    ],
  },
  {
    icon: FaShieldAlt,
    title: 'Automated Backups. Tested Recovery. Peace of Mind.',
    label: 'Backup & Disaster Recovery',
    description:
      'We configure automated backups with defined retention policies and — critically — we test the recovery process regularly. A backup you\'ve never tested is just a hope.',
    items: [
      'Automated backup configuration',
      'Retention policy design',
      'Recovery testing (quarterly)',
      'Disaster recovery documentation',
      'Cross-region replication (AWS)',
    ],
    proof: 'We manage backup and DR infrastructure for a regulated financial services firm.',
  },
  {
    icon: FaExchangeAlt,
    title: 'Move Your Data Without Losing It',
    label: 'Data Migration',
    description:
      'Migrating databases between platforms, from on-prem to cloud, or between cloud providers. We plan the migration, execute it with minimal downtime, and validate every record.',
    items: [
      'Migration assessment',
      'Schema mapping',
      'Data validation',
      'Execution with rollback plan',
      'Post-migration testing',
    ],
  },
  {
    icon: FaHdd,
    title: 'Stop Paying to Store Data You Don\'t Need',
    label: 'Data Storage Optimisation',
    description:
      'S3 lifecycle policies, archive strategies, storage class optimisation — we make sure you\'re not paying hot-storage prices for data nobody\'s accessed in two years.',
    items: [
      'Storage audit',
      'Lifecycle policy implementation',
      'Archive strategy',
      'Cost reduction report',
    ],
    proof: 'Storage optimisation was part of how we achieved 26.6% AWS cost reduction for a client.',
  },
]

const insightServices = [
  {
    icon: FaChartBar,
    title: 'See Your Business at a Glance',
    label: 'Analytics Dashboards',
    description:
      'Custom dashboards that pull data from your systems and show you the metrics that matter — revenue, operations, customer data, whatever drives your decisions. Built in tools you can actually use.',
    items: [
      'Requirements gathering',
      'Data source connection',
      'Dashboard design & build',
      'Training on how to use it',
      'Ongoing updates',
    ],
    note: 'Tools: Google Data Studio (Looker Studio), Metabase, Grafana, or Excel/Power BI depending on your team\'s comfort level.',
  },
  {
    icon: FaClock,
    title: 'Reports That Build Themselves',
    label: 'Reporting & Automation',
    description:
      'Stop spending hours pulling data into spreadsheets every week. We automate your regular reports so they\'re generated, formatted, and delivered to the right people on schedule.',
    items: [
      'Report automation setup',
      'Scheduled delivery',
      'Data validation rules',
      'Template design',
    ],
  },
  {
    icon: FaBroom,
    title: 'Fix the Mess Before You Analyse It',
    label: 'Data Cleanup & Structuring',
    description:
      'Duplicates, missing fields, inconsistent formats, data spread across 15 spreadsheets — we clean it up, structure it properly, and put it somewhere sensible so you can actually use it.',
    items: [
      'Data audit',
      'Deduplication',
      'Standardisation',
      'Migration to a proper database or structured storage',
    ],
  },
]

const pricingTiers = [
  {
    name: 'Data Assessment',
    price: 'Free',
    features: [
      '30-minute call to understand your data challenges',
      'High-level recommendations',
      'No obligation',
    ],
    bestFor: 'Understanding where to start',
    isFree: true,
  },
  {
    name: 'One-Off Projects',
    price: 'From £1,000',
    features: [
      'Database migration',
      'Backup & DR setup',
      'Dashboard build',
      'Data cleanup & structuring',
      'Scoped and quoted after assessment',
    ],
    bestFor: 'Specific data projects with clear scope',
    highlighted: true,
  },
  {
    name: 'Ongoing Management',
    price: 'From £400/month',
    features: [
      'Database monitoring & maintenance',
      'Backup management & recovery testing',
      'Dashboard updates & new report builds',
      'Storage optimisation',
      'Monthly data health report',
    ],
    bestFor: 'Keeping your data infrastructure healthy long-term',
  },
]

const faqData = [
  {
    question: 'What databases do you work with?',
    answer:
      'AWS RDS (PostgreSQL, MySQL, SQL Server), DynamoDB, MongoDB, and standard on-prem SQL Server and PostgreSQL installations. If you\'re using something else, we can likely help — just ask.',
  },
  {
    question: 'Can you build dashboards from our existing spreadsheets?',
    answer:
      'Yes. We often start by connecting to data that lives in spreadsheets, then gradually move it into a proper database as the business grows. You don\'t need to overhaul everything on day one.',
  },
  {
    question: 'How long does a dashboard project take?',
    answer:
      'A straightforward dashboard pulling from 1-2 data sources typically takes 1-2 weeks. More complex projects with multiple data sources and custom calculations can take 3-4 weeks.',
  },
  {
    question: 'Do you provide training?',
    answer:
      'Yes. Every dashboard or reporting project includes training so your team can use it independently. We also provide documentation.',
  },
  {
    question: 'What if we just need our data cleaned up?',
    answer:
      'That\'s a common starting point. We\'ll assess the state of your data, propose a cleanup plan, and give you a fixed quote. Often this leads naturally into a dashboard or reporting project once the data is usable.',
  },
]

const DataManagement = () => {
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    document.title =
      'Data Management Services London | Database Admin, Analytics & Backup | Joro Services'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Database administration, automated backups, data migration, and analytics dashboards for SMBs. Built on real AWS infrastructure experience. Free data assessment available.'
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

  const renderServiceCard = (card, i) => (
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
      {card.proof && (
        <p className="mt-4 text-xs text-accent-dark font-medium bg-accent-dark/10 p-2 rounded italic">
          {card.proof}
        </p>
      )}
      {card.note && (
        <p className="mt-4 text-xs text-gray-500 bg-gray-50 p-2 rounded">
          {card.note}
        </p>
      )}
    </div>
  )

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
              Data Management
            </p>
            <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              Your Data Is Your Business.{' '}
              <span className="text-accent-dark">
                Let's Make Sure It's Safe, Organised, and Useful.
              </span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              From database administration and automated backups to analytics
              dashboards that show you what's actually happening in your business
              — we help SMBs get control of their data. Built on real cloud
              infrastructure experience and a Master's in Data Analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/getintouch"
                className="inline-block px-6 py-3 bg-accent-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition text-center"
              >
                Book a Free Data Assessment
              </Link>
              <a
                href="#services"
                className="inline-block px-6 py-3 border-2 border-accent-dark text-accent-dark font-semibold rounded-lg hover:bg-accent-dark hover:text-white transition text-center"
              >
                See Our Data Services
              </a>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 bg-red-50 rounded-lg p-4 text-center border border-red-100">
                <FaHdd className="text-2xl text-red-400 mx-auto mb-2" />
                <p className="text-xs text-red-600 font-medium">Messy Data</p>
                <p className="text-[10px] text-gray-500 mt-1">
                  Spreadsheets everywhere
                </p>
              </div>
              <div className="text-2xl text-gray-400">→</div>
              <div className="flex-1 bg-accent-dark/10 rounded-lg p-4 text-center border border-accent-dark/20">
                <FaChartLine className="text-2xl text-accent-dark mx-auto mb-2" />
                <p className="text-xs text-accent-dark font-medium">
                  Clear Insights
                </p>
                <p className="text-[10px] text-gray-500 mt-1">
                  Dashboards & reports
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {['Database Admin', 'Backups & DR', 'Migration', 'Dashboards'].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 bg-white rounded-lg p-2 border border-gray-100"
                  >
                    <FaCheckCircle className="text-accent-dark text-xs flex-shrink-0" />
                    <span className="text-xs text-gray-700">{item}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Two Sides of Data Management */}
      <section className="bg-slate-900 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">
            Two Sides of Data Management
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
              <FaServer className="text-3xl text-accent mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-2">Data Infrastructure</h3>
              <p className="text-sm text-gray-300 italic">
                "Keep It Safe, Keep It Running"
              </p>
              <p className="text-sm text-gray-400 mt-2">
                The plumbing — your databases, backups, migrations, and storage.
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
              <FaChartBar className="text-3xl text-accent mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-2">Data Insights</h3>
              <p className="text-sm text-gray-300 italic">
                "Turn It Into Decisions"
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Dashboards, reports, and analytics that tell you what's happening
                in your business.
              </p>
            </div>
          </div>
          <p className="mt-8 text-gray-300">
            Most SMBs need both. <strong className="text-white">We handle both.</strong>
          </p>
        </div>
      </section>

      {/* Section 3: Data Infrastructure Services */}
      <section id="services" className="py-16 lg:py-20 px-4 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <FaServer className="text-2xl text-accent-dark" />
            <h2 className="text-3xl lg:text-4xl font-bold">
              Data Infrastructure
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {infraServices.map(renderServiceCard)}
          </div>
        </div>
      </section>

      {/* Section 4: Data Insights Services */}
      <section className="py-16 lg:py-20 px-4 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <FaChartBar className="text-2xl text-accent-dark" />
            <h2 className="text-3xl lg:text-4xl font-bold">Data Insights</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insightServices.map(renderServiceCard)}
          </div>
        </div>
      </section>

      {/* Section 5: Pricing */}
      <section className="py-16 lg:py-20 px-4 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            Pricing
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Clear pricing. No surprises.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <div
                  className={`text-2xl font-bold mb-4 ${
                    tier.isFree ? 'text-accent-dark' : 'text-accent-dark'
                  }`}
                >
                  {tier.price}
                </div>
                <ul className="space-y-3 mb-6">
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
                <p className="text-sm text-gray-500 italic mb-4">
                  Best for: "{tier.bestFor}"
                </p>
                <Link
                  to="/getintouch"
                  className={`inline-block w-full text-center px-6 py-3 font-semibold rounded-lg transition ${
                    tier.highlighted
                      ? 'bg-accent-dark text-white hover:bg-opacity-90'
                      : 'border-2 border-accent-dark text-accent-dark hover:bg-accent-dark hover:text-white'
                  }`}
                >
                  {tier.isFree ? 'Book Free Assessment' : 'Get Started'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: FAQ */}
      <section className="py-16 lg:py-20 px-4 lg:px-20">
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
            Your Data Should Work For You, Not Against You
          </h2>
          <p className="text-lg mb-8 text-white/80">
            Book a free data assessment. We'll help you figure out what you need
            — and what you don't.
          </p>
          <Link
            to="/getintouch"
            className="inline-block bg-white text-accent-dark font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
          >
            Book a Free Data Assessment
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default DataManagement
