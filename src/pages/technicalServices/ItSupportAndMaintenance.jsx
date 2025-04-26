import React from 'react'
import { FaHeadset, FaShieldAlt, FaClock, FaTools } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'

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

const ItSupportAndMaintenance = () => (
  <main className="bg-white text-black">
    {/* Hero Section */}
    <section className="grid p-4 lg:p-20 grid-cols-1 lg:grid-cols-2 gap-12 min-h-screen items-center">
      <div>
        <p className="uppercase text-sm text-accent-dark mb-4">IT Support Services</p>
        <h1 className="text-3xl lg:text-5xl font-bold mb-6">Reliable IT Support That Keeps You Online</h1>
        <p className="text-lg text-gray-800">
          Downtime costs money. Our proactive IT support and maintenance services keep your systems running smoothly, securely, and always up to date. From on-prem setups to remote teams, we've got your back.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-block px-6 py-3 bg-accent-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition"
        >
          Get Support Now
        </Link>
      </div>
      <div>
        <img
          src="/images/it-hero.jpg"
          alt="IT technician working on systems"
          className="rounded-lg shadow-lg object-cover w-full h-[60vh]"
        />
      </div>
    </section>

    {/* Services Section */}
    <section className="py-20 px-4 lg:px-32 bg-gray-50">
      <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-12">What We Cover</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <div key={i} className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white">
            <s.icon className="text-4xl text-accent-dark mb-4" />
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-gray-700">{s.description}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Portfolio Section */}
    <section className="py-20 px-4 lg:px-32">
      <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-12">Where We've Made a Difference</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolio.map((item, i) => (
          <div key={i} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <img src={item.image} alt={item.name} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-accent-dark">{item.name}</h3>
              <p className="text-sm text-gray-700 mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA Section */}
    <section className="bg-accent-dark text-white py-16 text-center">
      <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
        Need Support That’s Always One Step Ahead?
      </h2>
      <Link
        to="/contact"
        className="inline-block bg-white text-accent-dark font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
      >
        Contact the Team
      </Link>
    </section>

    <Footer />
  </main>
)

export default ItSupportAndMaintenance
