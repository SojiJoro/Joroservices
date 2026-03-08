import React, { useState } from 'react'
import { FaHeadset, FaShieldAlt, FaClock, FaTools, FaPlus, FaMinus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'
import SEO from '../../component/SEO'
import pagesSEO from '../../seo/pagesSEO'
import { serviceSchema, breadcrumbSchema } from '../../seo/schemas'

const services = [
  {
    icon: FaClock,
    title: '24/7 Monitoring & Response',
    description:
      'We proactively monitor your servers, workstations, and cloud environments around the clock — resolving issues before they escalate.',
  },
  {
    icon: FaShieldAlt,
    title: 'Security Patching & Updates',
    description:
      'We keep your systems secure and up to date with automated patch cycles, antivirus updates, and vulnerability scans.',
  },
  {
    icon: FaTools,
    title: 'Infrastructure Maintenance',
    description:
      'From on-premise hardware to cloud servers, we maintain your IT environment for uptime, performance, and future scaling.',
  },
  {
    icon: FaHeadset,
    title: 'Helpdesk & Remote Support',
    description:
      'Our team resolves user issues quickly through remote access, live chat, or on‑site visits. No ticket is too small or too technical.',
  },
]

const portfolio = [
  {
    name: 'Healthcare IT Support Contract',
    image: '/images/it-healthcare.jpg',
    description:
      'Provided full support for care home IT infrastructure, including user account management, PC refreshes, and printer maintenance.',
  },
  {
    name: 'Remote Staff Support & Automation',
    image: '/images/it-remote.jpg',
    description:
      'Enabled a distributed team with VPN setup, Slack integration, and zero-downtime deployment of security patches.',
  },
  {
    name: 'Infrastructure Uptime Improvement',
    image: '/images/it-uptime.jpg',
    description:
      'Achieved 99.98% uptime for a financial services firm by implementing load balancing, proactive monitoring, and automated backups.',
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
      'IT support costs depend on the number of users, devices, and level of service required. Our plans typically start from £30 per user per month for basic support, with comprehensive managed services from £50 per user per month. Contact us for a tailored quote based on your specific needs.',
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
  <main className="bg-white text-black">
    <SEO
      {...pagesSEO['/technical-services/it-support-and-maintenance']}
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
    <section id="hero" className="grid p-4 pt-28 pb-20 lg:p-20 lg:pt-32 lg:pb-20 grid-cols-1 lg:grid-cols-2 gap-12 min-h-screen items-center">
      <div>
        <p className="uppercase text-sm text-accent mb-4">IT Support Services</p>
        <h1 className="text-3xl lg:text-5xl font-bold mb-6">Reliable IT Support That Keeps You Online</h1>
        <p className="text-lg text-gray-800">
          Downtime costs money. Our proactive IT support and maintenance services keep your systems running smoothly, securely, and always up to date. From on-prem setups to remote teams, we've got your back.
        </p>
        <Link
          to="/getintouch"
          className="mt-6 inline-block px-6 py-3 bg-accent-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition"
        >
          Get Support Now
        </Link>
      </div>
      <div className="rounded-lg shadow-lg bg-gradient-to-br from-accent/20 to-accent-dark/30 w-full h-[60vh] flex items-center justify-center">
        <p className="text-6xl opacity-30">💻</p>
      </div>
    </section>

    {/* Services Section */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 text-center">Our Services</p>
      <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-12">What We Cover</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <div key={i} className="p-6 border border-gray-100 rounded-2xl shadow-sm bg-white">
            <s.icon className="text-4xl text-accent-dark mb-4" />
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-gray-700">{s.description}</p>
          </div>
        ))}
      </div>
      </div>
    </section>

    {/* Portfolio Section */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 text-center">Case Studies</p>
      <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-12">Where We've Made a Difference</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolio.map((item, i) => (
          <div key={i} className="bg-white rounded-2xl overflow-hidden shadow border border-gray-100 hover:shadow-lg transition">
            <img src={item.image} alt={item.name} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-accent">{item.name}</h3>
              <p className="text-sm text-gray-700 mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-16 lg:py-20 px-4 lg:px-20 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10">
          Frequently Asked Questions About IT Support
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg bg-white"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex justify-between items-center text-left p-5"
              >
                <span className="font-medium text-lg pr-4">{faq.question}</span>
                {openFaq === index ? (
                  <FaMinus className="text-accent-dark flex-shrink-0" />
                ) : (
                  <FaPlus className="text-accent-dark flex-shrink-0" />
                )}
              </button>
              {openFaq === index && (
                <div className="px-5 pb-5">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-16 text-center">
      <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
        Need Support That's Always One Step Ahead?
      </h2>
      <Link
        to="/getintouch"
        className="inline-block bg-white text-accent font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
      >
        Contact the Team
      </Link>
    </section>

    <Footer />
  </main>
  )
}

export default ItSupportAndMaintenance
