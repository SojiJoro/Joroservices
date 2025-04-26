import React from 'react'
import { FaMobileAlt, FaSearch, FaCogs, FaServer } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'

const services = [
  {
    icon: FaMobileAlt,
    title: 'Responsive Design',
    description:
      'We build mobile‑first layouts that adapt beautifully to every screen size and device — optimised for performance and accessibility.',
  },
  {
    icon: FaSearch,
    title: 'SEO & Performance Tuning',
    description:
      'From semantic HTML to lazy loading, we code with visibility in mind. Your site loads fast and ranks higher in search results.',
  },
  {
    icon: FaCogs,
    title: 'Custom Integrations',
    description:
      'Need a CMS? We integrate platforms like WordPress, Sanity, or Strapi to give you full control over your content.',
  },
  {
    icon: FaServer,
    title: 'Scalable Architecture',
    description:
      'We follow modern architecture patterns using frameworks like Next.js, ensuring your app is maintainable, scalable, and future‑ready.',
  },
]

const portfolio = [
  {
    name: 'Top 20 Everywhere (Next.js)',
    image: '/images/top20.jpg',
    description:
      'A blog-driven site with dynamic routing, category filters, and interactive animations built using Next.js 14.',
    url: 'https://top20everywhere.com',
  },
  {
    name: '1 Noble Healthcare Website',
    image: '/images/1noble.jpg',
    description:
      'Fully responsive, SEO‑optimised corporate site with custom contact forms and a CMS for easy updates.',
    url: 'https://1noblehealthcare.com',
  },
  {
    name: 'PathSync Recruitment',
    image: '/images/pathsync.jpg',
    description:
      'A clean and professional recruitment portal with blog pages, service filters, and job application forms.',
    url: 'https://pathsyncrecruitment.com',
  },
]

const WebDevelopment = () => (
  <main className="bg-white text-black">
    {/* Hero Section */}
    <section className="grid p-4 lg:p-20 grid-cols-1 lg:grid-cols-2 gap-12 min-h-screen items-center">
      <div>
        <p className="uppercase text-sm text-accent-dark mb-4">Web Development</p>
        <h1 className="text-3xl lg:text-5xl font-bold mb-6">Modern Web Apps Built for Speed and Scale</h1>
        <p className="text-lg text-gray-800">
          From sleek marketing sites to fully featured web applications, we develop responsive, search‑optimised digital products using frameworks like React and Next.js — clean code, fast loading, and easy to manage.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-block px-6 py-3 bg-accent-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition"
        >
          Request a Free Quote
        </Link>
      </div>
      <div>
        <img
          src="/images/web-development-hero.jpg"
          alt="Code editor and design mockup"
          className="rounded-lg shadow-lg object-cover w-full h-[60vh]"
        />
      </div>
    </section>

    {/* Services Section */}
    <section className="py-20 px-4 lg:px-32 bg-gray-50">
      <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-12">What We Do</h2>
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
      <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-12">Web Projects We've Delivered</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolio.map((site, i) => (
          <a
            key={i}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition block"
          >
            <img src={site.image} alt={site.name} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-accent-dark">{site.name}</h3>
              <p className="text-sm text-gray-700 mt-1">{site.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="bg-accent-dark text-white py-16 text-center">
      <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
        Ready to Launch Your Website or App?
      </h2>
      <Link
        to="/contact"
        className="inline-block bg-white text-accent-dark font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
      >
        Let’s Build Something
      </Link>
    </section>

    <Footer />
  </main>
)

export default WebDevelopment
