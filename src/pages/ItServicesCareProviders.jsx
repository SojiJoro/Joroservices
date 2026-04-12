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
    question: 'What IT services does Joro Services provide for care providers?',
    answer:
      'We provide web development, IT support, cloud hosting, scheduling system integration, and digital marketing specifically for UK care agencies and providers. We understand CQC requirements and GDPR obligations.',
  },
  {
    question: 'Do you understand CQC digital requirements?',
    answer:
      'Yes. We work with care providers who need to meet CQC digital standards. We can help with digital care records, secure data hosting, and technology infrastructure that meets regulatory requirements.',
  },
  {
    question: 'Can you integrate with care scheduling software?',
    answer:
      'Yes. We have experience integrating with care scheduling platforms and have built Corcada, our own scheduling tool for care agencies. We can connect your systems to reduce manual work.',
  },
  {
    question: 'How do you handle GDPR for care organisations?',
    answer:
      'All our infrastructure is GDPR compliant. We use encrypted hosting, secure access controls, and can advise on data handling procedures specific to the care sector.',
  },
  {
    question: 'What does a care provider website cost?',
    answer:
      'A professional website for a care provider typically starts from \u00a31,500. We can also build custom portals, scheduling integrations, and client-facing tools. Contact us for a free scoping call.',
  },
]

const careNeeds = [
  {
    title: 'CQC Digital Requirements',
    description:
      'The Care Quality Commission increasingly expects providers to use digital systems for care planning, record keeping, and incident reporting. Your technology needs to support compliance, not create extra paperwork.',
  },
  {
    title: 'Staff Scheduling Systems',
    description:
      'Care agencies juggle rotas, shift swaps, travel time, and last-minute changes every single day. Off-the-shelf tools rarely fit. You need scheduling that works with the reality of domiciliary and residential care.',
  },
  {
    title: 'Client Record Management',
    description:
      'Client records must be accurate, up to date, and accessible to the right people at the right time. Paper-based systems and scattered spreadsheets create risk. Digital records done properly reduce errors and save hours.',
  },
  {
    title: 'GDPR and Data Protection',
    description:
      'Care providers handle sensitive personal data every day — medical information, next of kin details, care plans. GDPR compliance is not optional, and a data breach in the care sector carries serious consequences.',
  },
]

const offerings = [
  {
    title: 'Websites for Care Providers',
    description:
      'Professional, mobile-friendly websites that reflect the quality of your care. Built to attract new clients, recruit staff, and meet accessibility standards. From brochure sites to custom portals.',
  },
  {
    title: 'Scheduling Integrations',
    description:
      'We integrate with existing care scheduling platforms or build custom solutions. Reduce manual rota work, automate shift notifications, and give your coordinators better visibility across the team.',
  },
  {
    title: 'IT Support and Maintenance',
    description:
      'Ongoing managed IT support designed for care organisations. Helpdesk access, device management, security patching, and proactive monitoring — so your team can focus on delivering care, not fixing computers.',
  },
  {
    title: 'Cloud Hosting and Infrastructure',
    description:
      'Secure, GDPR-compliant cloud hosting for your systems and data. We set up and manage your infrastructure on AWS or Azure, with encrypted storage, automated backups, and access controls built in.',
  },
]

const ItServicesCareProviders = () => {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <main className="bg-white text-gray-900">
      <SEO
        {...pagesSEO['/it-services-care-providers']}
        dateModified="2026-04-12"
        jsonLd={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'IT Services for Care Providers', path: '/it-services-care-providers' },
          ]),
          faqPageSchema(faqData),
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Care Sector IT</p>
          <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'IT Services for Care Providers' }]} />
          <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight max-w-3xl">
            IT Services for UK Care Providers
          </h1>
          <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-2xl">
            Web development, IT support, cloud hosting, and scheduling integrations built specifically for UK care agencies and care providers. We understand the sector, the regulations, and the day-to-day pressures your teams face.
          </p>
          <Link
            to="/getintouch"
            className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
          >
            Book a Free Scoping Call <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Why Care Providers Have Specific IT Needs */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 text-center">The Challenge</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            Why Care Providers Have Specific IT Needs
          </h2>
          <p className="text-center text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto">
            Generic IT solutions are not built for the care sector. Your organisation handles sensitive data, manages complex rotas, and must meet regulatory standards that most technology providers do not understand.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {careNeeds.map((need, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-md transition"
              >
                <h3 className="text-xl font-bold mb-3">{need.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{need.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Joro Services Offers Care Providers */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 text-center">Our Services</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            What Joro Services Offers Care Providers
          </h2>
          <p className="text-center text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto">
            We provide end-to-end technology services tailored to the needs of domiciliary care agencies, residential care homes, and supported living providers across the UK.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {offerings.map((offering, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-md transition"
              >
                <h3 className="text-xl font-bold mb-3">{offering.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{offering.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corcada Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Product</p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Corcada — Scheduling Built for Care Agencies
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We do not just integrate with other platforms — we have built our own. Corcada is a scheduling and workforce management tool designed specifically for domiciliary care agencies. It handles rota planning, shift allocation, staff availability, and real-time updates in one place.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              If you are currently managing schedules across spreadsheets, WhatsApp groups, and paper rotas, Corcada can replace all of that with a single system that your coordinators and carers can access from any device.
            </p>
            <a
              href="https://corcada.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
            >
              Visit Corcada <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-100">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center text-left p-5"
                >
                  <span className="font-medium text-lg pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-accent-dark flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    openFaq === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Sort Your Care Agency's IT?
          </h2>
          <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
            Book a free scoping call. We will look at your current setup, understand your challenges, and recommend the right technology for your care organisation.
          </p>
          <Link
            to="/getintouch"
            className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
          >
            Book Your Free Scoping Call <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default ItServicesCareProviders
