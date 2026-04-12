import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Footer from '../component/Footer'
import SEO from '../component/SEO'
import pagesSEO from '../seo/pagesSEO'
import { breadcrumbSchema, faqPageSchema } from '../seo/schemas'
import Breadcrumb from '../component/Breadcrumb'

const faqData = [
  {
    question: 'What does a fractional CTO do?',
    answer:
      'A fractional CTO provides senior technical leadership on a part-time basis. This includes setting technical strategy, making architecture decisions, overseeing development teams, evaluating vendors, and ensuring your technology supports your business goals.',
  },
  {
    question: 'Who needs a fractional CTO?',
    answer:
      'Startups that have raised funding and need technical leadership, SMBs whose technology has outgrown their current team, and non-technical founders who need a trusted technical partner to guide decisions.',
  },
  {
    question: 'How is Joro Services different from a solo fractional CTO?',
    answer:
      'Most fractional CTOs advise but do not build. Joro Services provides the strategic leadership AND the delivery team. We can architect your solution and then build it, manage your infrastructure, and support your developers.',
  },
  {
    question: 'How much does a fractional CTO cost?',
    answer:
      'Our fractional CTO service starts from £2,000 per month for one day per week of senior technical leadership. Pricing scales based on the level of involvement and whether delivery work is included.',
  },
  {
    question: 'Can I start with a one-off engagement?',
    answer:
      'Yes. We offer a one-off technical audit and strategy session for £1,500. This gives you an independent assessment of your technology, architecture, and team processes with clear recommendations.',
  },
]

const whoIsItFor = [
  {
    title: 'Funded Startups',
    description:
      'You have raised a seed or Series A round and need someone to set the technical direction, hire developers, and make sure your product is built on solid foundations.',
  },
  {
    title: 'Growing SMBs',
    description:
      'Your business is scaling and your technology needs to keep up. You need someone who can evaluate your current stack, plan the next phase, and manage the people building it.',
  },
  {
    title: 'Non-Technical Founders',
    description:
      'You have a great business idea but no technical co-founder. You need a trusted partner who can translate your vision into architecture, manage developers, and keep your project on track.',
  },
]

const valueAreas = [
  {
    title: 'Technical Strategy',
    description:
      'We define the technology roadmap that supports your business goals. No over-engineering, no hype-driven decisions — just practical choices that move you forward.',
  },
  {
    title: 'Architecture Decisions',
    description:
      'From choosing the right stack to designing scalable systems, we make the architecture decisions that save you from expensive rewrites later.',
  },
  {
    title: 'Team Leadership',
    description:
      'We manage your development team, run code reviews, set engineering standards, and make sure your developers are productive and building the right things.',
  },
  {
    title: 'Infrastructure Decisions',
    description:
      'Cloud architecture, CI/CD pipelines, monitoring, and security. We make sure your infrastructure is cost-effective, secure, and ready to scale when you are.',
  },
  {
    title: 'Vendor Selection',
    description:
      'We evaluate third-party tools, APIs, and service providers on your behalf. No more guessing whether a vendor is the right fit — we assess them technically and commercially.',
  },
]

const FractionalCTO = () => {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <main className="bg-white text-gray-900">
      <SEO
        {...pagesSEO['/fractional-cto']}
        dateModified="2026-04-12"
        jsonLd={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Fractional CTO', path: '/fractional-cto' },
          ]),
          faqPageSchema(faqData),
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Fractional CTO Services
          </p>
          <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Fractional CTO' }]} />
          <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            Fractional CTO Services{' '}
            <span className="text-accent-dark">for UK Businesses</span>
          </h1>
          <p className="text-lg text-white/80 leading-relaxed max-w-2xl mb-8">
            Senior technical leadership without the full-time cost. We set your technical strategy, make architecture decisions, lead your development team, and — unlike most fractional CTOs — we build and deliver too.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/getintouch"
              className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
            >
              Book a Free Discovery Call <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#faq"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-all text-sm"
            >
              Common Questions
            </a>
          </div>
        </div>
      </section>

      {/* What a Fractional CTO Does */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              What Does a Fractional CTO Actually Do?
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                A fractional CTO gives your business the same senior technical leadership that large companies have — but part-time and at a fraction of the cost. Instead of hiring a full-time CTO at £150k+ per year, you get experienced technical direction one or two days a week.
              </p>
              <p>
                This means someone in your corner who sets the technical roadmap, makes architecture decisions, evaluates tools and vendors, manages your development team, and ensures your technology is actually supporting your business — not holding it back.
              </p>
              <p>
                It is not consulting in the traditional sense. A fractional CTO is embedded in your business. They attend your standups, review your code, challenge your developers, and take ownership of technical outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is It For */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Who It Is For</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Is a Fractional CTO Right for You?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whoIsItFor.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Joro Services Is Different */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Why Joro Services</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              We Advise AND We Deliver
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                Most fractional CTOs are solo operators. They will review your architecture, write a strategy document, and give you a list of recommendations. Then they leave, and you are on your own to find someone to actually do the work.
              </p>
              <p>
                Joro Services is different. We provide the strategic leadership AND the delivery capability. When we design an architecture, we can build it. When we recommend infrastructure changes, we implement them. When we identify gaps in your development process, we fix them.
              </p>
              <p>
                This means no gap between advice and execution. No hiring another agency to interpret what the consultant said. One team that takes your technology from strategy through to working software.
              </p>
            </div>
            <div className="mt-8 bg-gray-50 rounded-2xl p-7 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">What this looks like in practice:</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-accent-dark mt-1 flex-shrink-0" />
                  <span>Architecture design — and then we build it</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-accent-dark mt-1 flex-shrink-0" />
                  <span>Infrastructure decisions — and then we set it up</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-accent-dark mt-1 flex-shrink-0" />
                  <span>Dev team management — and we can augment the team when needed</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-accent-dark mt-1 flex-shrink-0" />
                  <span>Vendor evaluation — and we handle the integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specific Value Areas */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">What You Get</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              The Value a Fractional CTO Brings
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {valueAreas.map((area, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-shadow hover:shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center text-left p-5 gap-4"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown size={20} className={`text-gray-400 flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <div className={`grid transition-all duration-300 ease-in-out ${openFaq === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Get Senior Technical Leadership Without the Full-Time Salary
          </h2>
          <p className="text-white/80 mb-8 text-lg max-w-2xl mx-auto">
            Book a free discovery call and we will discuss your technology challenges, your goals, and whether a fractional CTO is the right fit for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/getintouch"
              className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
            >
              Book Your Free Discovery Call <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+4407867374034"
              className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-accent-dark text-accent-dark font-semibold rounded-xl hover:bg-accent-dark hover:text-white transition-all text-sm"
            >
              Call 07867 374034
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default FractionalCTO
