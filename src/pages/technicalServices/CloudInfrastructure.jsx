import React, { useState, useEffect } from 'react'
import {
  FaCloud,
  FaPoundSign,
  FaShieldAlt,
  FaCogs,
  FaPlus,
  FaMinus,
  FaCheckCircle,
  FaExclamationCircle,
  FaAward,
  FaFileAlt,
  FaLock,
  FaBuilding,
  FaHandshake,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const stats = [
  { value: '26.6%', label: 'Average AWS cost reduction achieved' },
  { value: '33% \u2192 61%', label: 'Security score improvement delivered' },
  { value: 'AWS Certified', label: 'Solutions Architect certified' },
  { value: '100+', label: 'Infrastructure tickets resolved monthly' },
]

const services = [
  {
    icon: FaCloud,
    title: 'Move to AWS Without the Drama',
    description:
      'We plan and execute your migration \u2014 from legacy hosting, on-prem servers, or other cloud platforms to a properly architected AWS setup. No downtime surprises, no data loss.',
    proof:
      'Successfully migrated a financial services firm from WordPress hosting to a React/AWS architecture with zero client-facing downtime.',
    deliverables:
      'Architecture design, migration plan, execution, post-migration testing, DNS cutover.',
  },
  {
    icon: FaPoundSign,
    title: 'Cut Your AWS Bill \u2014 Guaranteed Savings or It\u2019s Free',
    description:
      'We audit your AWS account and find the waste: oversized instances, idle resources, missing Reserved Instance opportunities, storage bloat. Most clients save 20\u201330% within the first month.',
    proof:
      'Achieved 26.6% cost reduction for a client \u2014 exceeding their board-level savings target.',
    deliverables:
      'Full cost audit report, right-sizing recommendations, Reserved Instance strategy, S3 lifecycle policies, ongoing cost monitoring.',
  },
  {
    icon: FaShieldAlt,
    title: 'Lock Down Your Cloud Before Someone Else Gets In',
    description:
      'IAM policies, encryption, logging, monitoring, compliance checks \u2014 we make sure your AWS environment follows best practices, not just best guesses.',
    proof:
      'Improved a client\u2019s security posture score from 33% to 61% in 6 months.',
    deliverables:
      'Security audit, IAM review, CloudTrail/GuardDuty setup, compliance recommendations, security hardening implementation.',
  },
  {
    icon: FaCogs,
    title: 'Your AWS Managed For You \u2014 Monthly',
    description:
      'Don\u2019t just build it and forget it. We monitor performance, manage costs, apply patches, handle scaling, and give you a monthly report so you always know where you stand.',
    proof:
      'Currently managing production AWS infrastructure for a regulated financial services firm.',
    deliverables:
      '24/7 automated monitoring, monthly cost reports, performance optimisation, incident response, architecture reviews.',
  },
]

const pricingPlans = [
  {
    title: 'One-Off Projects',
    price: 'From \u00a31,500',
    items: [
      'Cloud migration',
      'Architecture design & review',
      'Security audit & hardening',
      'Cost optimisation implementation',
    ],
    note: 'Scope and price agreed upfront. No surprises.',
  },
  {
    title: 'Monthly Management',
    price: 'From \u00a3500/month',
    items: [
      'Ongoing monitoring & alerting',
      'Cost management & monthly reporting',
      'Security patching & updates',
      'Performance optimisation',
      'Incident response',
    ],
    note: 'Scales with your infrastructure size.',
    featured: true,
  },
  {
    title: 'AWS Cost Audit',
    price: 'Free',
    items: [
      'Full cost analysis of your AWS account',
      'Recommendations report with projected savings',
      'No obligation, no commitment',
      'Get your report in 48 hours',
    ],
    note: 'Book now and see where your money\u2019s going.',
  },
]

const steps = [
  {
    step: 1,
    title: 'Discovery Call (Free, 30 mins)',
    description:
      'We learn about your current setup, your goals, and your pain points. You learn about how we work and whether we\u2019re a good fit.',
  },
  {
    step: 2,
    title: 'Audit & Proposal',
    description:
      'We assess your infrastructure (or plan your migration) and deliver a clear proposal with scope, timeline, and fixed pricing.',
  },
  {
    step: 3,
    title: 'Implementation',
    description:
      'We do the work \u2014 migration, optimisation, security hardening \u2014 with regular updates and zero surprises.',
  },
  {
    step: 4,
    title: 'Ongoing Support (Optional)',
    description:
      'If you want ongoing management, we transition to a monthly retainer. If not, we hand over full documentation and you\u2019re good to go.',
  },
]

const trustSignals = [
  { icon: FaAward, label: 'AWS Solutions Architect Certified' },
  { icon: FaShieldAlt, label: 'Professional Indemnity Insured' },
  { icon: FaLock, label: 'GDPR Compliant' },
  { icon: FaBuilding, label: 'Experience in Regulated Industries' },
  { icon: FaHandshake, label: 'Enterprise Expertise. SMB Pricing.' },
]

const faqData = [
  {
    question: 'Which cloud platforms do you support?',
    answer:
      'We specialise in AWS, which is what we\u2019re certified in and use daily. We can advise on Azure and GCP at a high level, but our hands-on expertise is AWS.',
  },
  {
    question: 'How much does a cloud migration typically cost?',
    answer:
      'It depends on complexity. A simple website migration might be \u00a31,500\u2013\u00a33,000. A full infrastructure migration with databases, applications, and DR could be \u00a35,000\u2013\u00a315,000. We always quote fixed prices after the discovery call \u2014 no hourly billing surprises.',
  },
  {
    question: 'How much can I realistically save on my AWS bill?',
    answer:
      'Most SMBs we audit are overspending by 20\u201340%. Common culprits include oversized EC2 instances, unused Elastic IPs, S3 storage without lifecycle policies, and missing Reserved Instance commitments. Our best result so far is a 26.6% reduction.',
  },
  {
    question: 'Will there be downtime during migration?',
    answer:
      'We plan migrations to minimise or eliminate downtime. For most projects, the DNS cutover happens in minutes and users don\u2019t notice. We\u2019ll agree the maintenance window with you in advance.',
  },
  {
    question: 'Do I need to give you full access to my AWS account?',
    answer:
      'For the cost audit, we only need read-only access. For implementation work, we\u2019ll need appropriate permissions, but we follow the principle of least privilege and document everything.',
  },
  {
    question: 'Can you work with our existing development team?',
    answer:
      'Absolutely. We often work alongside in-house developers \u2014 we handle the infrastructure and DevOps side while they focus on application code.',
  },
  {
    question: 'What if I\u2019m not on AWS yet?',
    answer:
      'That\u2019s fine. We can assess your current setup and plan a migration from scratch \u2014 whether you\u2019re on traditional hosting, on-prem servers, or another cloud provider.',
  },
  {
    question: 'Do you offer support after the project is done?',
    answer:
      'Yes. You can move to our monthly management plan, or we hand over full documentation so your team can manage it independently. No lock-in.',
  },
]

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

const CloudInfrastructure = () => {
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    document.title =
      'AWS Cloud Services London | Migration, Cost Optimisation & Management | Joro Services'

    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'AWS-certified cloud services for SMBs. Cloud migration, cost optimisation (avg 26.6% savings), security hardening & ongoing management. Free AWS Cost Audit available.'
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
      {/* ============================================================ */}
      {/* SECTION 1 — HERO                                             */}
      {/* ============================================================ */}
      <section
        id="hero"
        className="px-4 pt-28 pb-16 lg:px-20 lg:pt-36 lg:pb-24"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase text-sm tracking-widest text-accent-dark mb-4 font-semibold">
            AWS Cloud Services &mdash; London
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Stop Overpaying for Cloud.
            <br className="hidden sm:block" /> Start Getting It Right.
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto mb-4">
            We help SMBs build, migrate, and optimise their AWS infrastructure
            &mdash; cutting costs, improving security, and keeping things running
            without the enterprise price tag.
          </p>
          <p className="text-base text-gray-500 max-w-2xl mx-auto mb-8">
            Led by an AWS Solutions Architect who manages cloud infrastructure
            for financial services firms daily.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/getintouch"
              className="inline-block px-8 py-3 bg-accent-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition text-center"
            >
              Get a Free AWS Cost Audit
            </Link>
            <a
              href="#pricing"
              className="inline-block px-8 py-3 border-2 border-accent-dark text-accent-dark font-semibold rounded-lg hover:bg-accent-dark hover:text-white transition text-center"
            >
              See Our Cloud Plans
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2 — STATS BANNER                                     */}
      {/* ============================================================ */}
      <section className="bg-primary text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <p className="text-3xl lg:text-4xl font-bold text-accent mb-2">
                {s.value}
              </p>
              <p className="text-sm text-gray-300">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3 — WHO THIS IS FOR                                  */}
      {/* ============================================================ */}
      <section className="py-20 px-4 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Is This You?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Already on AWS */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-accent-dark flex items-center gap-2">
                <FaExclamationCircle className="text-accent-dark" />
                You&rsquo;re already on AWS but&hellip;
              </h3>
              <ul className="space-y-3">
                {[
                  'Your bill keeps climbing and you don\u2019t know why',
                  'You set it up yourself (or a previous developer did) and it\u2019s a mess',
                  'You have no monitoring, no alerts, no idea if things are secure',
                  'You need to scale but don\u2019t know if your architecture can handle it',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="mt-1 text-accent-dark text-sm">&bull;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Not on cloud yet */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-accent-dark flex items-center gap-2">
                <FaCloud className="text-accent-dark" />
                You&rsquo;re NOT on the cloud yet but&hellip;
              </h3>
              <ul className="space-y-3">
                {[
                  'Your hosting is slow, expensive, or unreliable',
                  'You need to migrate but don\u2019t know where to start',
                  'You\u2019ve been quoted \u00a350k+ by big consultancies and need a realistic option',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="mt-1 text-accent-dark text-sm">&bull;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4 — WHAT WE DO (capability cards)                    */}
      {/* ============================================================ */}
      <section className="py-20 px-4 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            What We Do
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Real outcomes, not just buzzwords. Every service is backed by
            measurable results from live client work.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition"
              >
                <s.icon className="text-3xl text-accent-dark mb-4" />
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-gray-700 mb-4">{s.description}</p>
                <div className="bg-accent-dark/5 border-l-4 border-accent-dark rounded p-4 mb-4">
                  <p className="text-sm text-gray-800 italic">
                    &ldquo;{s.proof}&rdquo;
                  </p>
                </div>
                <p className="text-sm text-gray-500">
                  <span className="font-semibold text-gray-700">
                    What you get:{' '}
                  </span>
                  {s.deliverables}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 5 — AWS COST AUDIT (lead magnet)                     */}
      {/* ============================================================ */}
      <section className="py-20 px-4 lg:px-20 bg-accent-dark/5" id="cost-audit">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <FaFileAlt className="text-4xl text-accent-dark mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Free AWS Cost Audit
            </h2>
            <p className="text-xl text-gray-700">
              See Exactly Where You&rsquo;re Overspending
            </p>
          </div>

          <p className="text-gray-700 text-center mb-8 max-w-2xl mx-auto">
            In 48 hours, we&rsquo;ll analyse your AWS account and deliver a
            clear report showing:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
            {[
              'What you\u2019re spending and where',
              'Which resources are oversized, idle, or misconfigured',
              'Specific recommendations to cut your bill by 20\u201330%',
              'A prioritised action plan you can implement yourself \u2014 or hire us to do it',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <FaCheckCircle className="text-accent-dark mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-sm">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mb-8 italic">
            No obligation. No sales pitch. Just a clear, honest report.
          </p>

          {/* How It Works (mini) */}
          <div className="bg-white rounded-lg p-8 border border-gray-200 mb-10">
            <h3 className="text-lg font-bold mb-6 text-center">
              How the Audit Works
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'You give us read-only access to your AWS account (we provide the IAM policy)',
                'We run our audit (takes 48 hours)',
                'You get a PDF report with findings and recommendations',
                'If you want us to implement the changes, we\u2019ll quote it. If not, keep the report \u2014 it\u2019s yours.',
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent-dark text-white font-bold text-sm mb-3">
                    {i + 1}
                  </span>
                  <p className="text-sm text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/getintouch"
              className="inline-block px-8 py-3 bg-accent-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition"
            >
              Book Your Free AWS Cost Audit
            </Link>
            <p className="text-xs text-gray-500 mt-4">
              Read-only access only. We never modify your infrastructure without
              written approval. Professional indemnity insured.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 6 — PRICING                                          */}
      {/* ============================================================ */}
      <section className="py-20 px-4 lg:px-20" id="pricing">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            No hidden fees. No hourly billing surprises. Choose the engagement
            model that fits your needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, i) => (
              <div
                key={i}
                className={`rounded-lg p-8 border transition ${
                  plan.featured
                    ? 'border-accent-dark shadow-lg bg-white ring-2 ring-accent-dark'
                    : 'border-gray-200 shadow-sm bg-white hover:shadow-md'
                }`}
              >
                {plan.featured && (
                  <span className="inline-block bg-accent-dark text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                <p className="text-2xl font-bold text-accent-dark mb-6">
                  {plan.price}
                </p>
                <ul className="space-y-3 mb-6">
                  {plan.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-gray-700 text-sm"
                    >
                      <FaCheckCircle className="text-accent-dark mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-500 italic">{plan.note}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Every engagement starts with a conversation. We&rsquo;ll tell you
              honestly what you need &mdash; and what you don&rsquo;t.
            </p>
            <Link
              to="/getintouch"
              className="inline-block px-8 py-3 bg-accent-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition"
            >
              Let&rsquo;s Talk About Your Cloud
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 7 — HOW IT WORKS                                     */}
      {/* ============================================================ */}
      <section className="py-20 px-4 lg:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-dark text-white font-bold text-lg mb-4">
                  {s.step}
                </span>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-gray-700">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 8 — TRUST SIGNALS                                    */}
      {/* ============================================================ */}
      <section className="py-12 px-4 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {trustSignals.map((t, i) => (
            <div
              key={i}
              className="flex items-center gap-3 text-gray-600"
            >
              <t.icon className="text-xl text-accent-dark" />
              <span className="text-sm font-medium">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 9 — FAQ                                              */}
      {/* ============================================================ */}
      <section className="py-20 px-4 lg:px-20" id="faq">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
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
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 10 — BOTTOM CTA                                      */}
      {/* ============================================================ */}
      <section className="bg-primary text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4">
            Your Cloud Should Save You Money, Not Drain It
          </h2>
          <p className="text-gray-300 mb-4 text-lg">
            Start with a free AWS Cost Audit. In 48 hours, you&rsquo;ll know
            exactly where your money&rsquo;s going &mdash; and how to keep more
            of it.
          </p>
          <p className="text-gray-400 mb-8 text-sm">
            We&rsquo;re not a sales team handing you off to junior engineers.
            The person you speak to is the person who does the work &mdash; an
            AWS-certified SRE who manages production cloud infrastructure for
            regulated financial services firms every day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/getintouch"
              className="inline-block px-8 py-3 bg-accent-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition"
            >
              Book Your Free AWS Cost Audit
            </Link>
            <Link
              to="/getintouch"
              className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition"
            >
              Schedule a Discovery Call
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default CloudInfrastructure
