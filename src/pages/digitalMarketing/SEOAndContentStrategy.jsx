import React from 'react'
import { FaSearch, FaClipboardCheck, FaPenFancy, FaSitemap } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'

const services = [
  {
    icon: FaSearch,
    title: 'Keyword Research & Gap Analysis',
    description:
      'We identify high‑value keywords and content gaps your competitors missed — aligning your strategy with actual search demand.',
  },
  {
    icon: FaClipboardCheck,
    title: 'On‑Page & Technical SEO',
    description:
      'We optimise meta tags, structure content, improve site speed, and run detailed audits to ensure full search engine compliance.',
  },
  {
    icon: FaPenFancy,
    title: 'Content Strategy & Calendar',
    description:
      'We develop strategic content plans with blog topics, SEO-friendly headlines, and publishing schedules built to attract and convert.',
  },
  {
    icon: FaSitemap,
    title: 'Landing Pages & Evergreen Content',
    description:
      'From service pages to cornerstone guides, we write and structure content that performs today — and keeps delivering tomorrow.',
  },
]

const portfolio = [
  {
    name: 'Healthcare SEO Campaign',
    image: '/images/seo-healthcare.jpg',
    description:
      'Optimised key landing pages and implemented schema markup — increasing organic leads by 63% within three months.',
  },
  {
    name: 'Recruitment Blog Growth Strategy',
    image: '/images/seo-recruitment.jpg',
    description:
      'Created and executed a content calendar that grew blog traffic from 200 to over 3,000 monthly visits in six months.',
  },
  {
    name: 'Local SEO for Care Homes',
    image: '/images/seo-local.jpg',
    description:
      'Improved Google My Business visibility and local pack rankings, boosting calls and walk-in queries for supported living facilities.',
  },
]

const SEOAndContentStrategy = () => (
  <main className="bg-white text-black">
    {/* Hero Section */}
    <section className="grid p-4 lg:p-20 grid-cols-1 lg:grid-cols-2 gap-12 min-h-screen items-center">
      <div>
        <p className="uppercase text-sm text-accent-dark mb-4">SEO & Content</p>
        <h1 className="text-3xl lg:text-5xl font-bold mb-6">Be Found, Be Trusted, Be Remembered</h1>
        <p className="text-lg text-gray-800">
          We craft data‑driven SEO strategies and build content that your audience (and search engines) actually want. From research to results, every word is designed to earn clicks, trust, and rankings.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-block px-6 py-3 bg-accent-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition"
        >
          Let’s Grow Your Visibility
        </Link>
      </div>
      <div>
        <img
          src="/images/seo-hero.jpg"
          alt="SEO dashboard and content workflow"
          className="rounded-lg shadow-lg object-cover w-full h-[60vh]"
        />
      </div>
    </section>

    {/* Services Section */}
    <section className="py-20 px-4 lg:px-32 bg-gray-50">
      <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-12">What’s Included</h2>
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
      <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-12">Our SEO & Content Work</h2>
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
        Organic Growth Starts with Strategy
      </h2>
      <Link
        to="/contact"
        className="inline-block bg-white text-accent-dark font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
      >
        Book a Free SEO Audit
      </Link>
    </section>

    <Footer />
  </main>
)

export default SEOAndContentStrategy
