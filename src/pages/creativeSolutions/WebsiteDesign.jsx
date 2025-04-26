import React from 'react'
import { FaCode, FaMobileAlt, FaRocket, FaPaintBrush } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'

const services = [
  {
    icon: FaPaintBrush,
    title: 'Bespoke UI/UX Design',
    description:
      'We design stunning and functional interfaces tailored to your brand identity and audience needs. From wireframes to polished visuals, your users enjoy seamless journeys that convert.',
  },
  {
    icon: FaMobileAlt,
    title: 'Mobile-First Development',
    description:
      'Our websites adapt beautifully across all screen sizes, ensuring an exceptional experience whether your users visit from a phone, tablet, or desktop.',
  },
  {
    icon: FaCode,
    title: 'Full-Stack Engineering',
    description:
      'We build websites and web apps with robust frontends and scalable backends. Using the latest tech stacks, our builds are fast, secure, and easy to maintain.',
  },
  {
    icon: FaRocket,
    title: 'Performance & SEO Optimisation',
    description:
      'We optimise every site for speed, accessibility, and discoverability, using clean code, image compression, keyword strategy, and technical SEO best practices.',
  },
]

const portfolio = [
  {
    name: '1 Noble Healthcare',
    image: '/images/1noble.jpg',
    url: 'https://1noblehealthcare.com',
    description:
      'A modern healthcare site focused on supported living, with integrated contact forms, smooth scrolling, and a clean layout.',
  },
  {
    name: 'PathSync Recruitment',
    image: '/images/pathsync.jpg',
    url: 'https://pathsyncrecruitment.com',
    description:
      'A sleek, professional site for a niche tech recruitment agency with blog features, application forms, and responsive layouts.',
  },
  {
    name: 'Top 20 Everywhere',
    image: '/images/top20.jpg',
    url: 'https://top20everywhere.com',
    description:
      'A content-driven blog platform showcasing top 20 lists across travel, tech, and lifestyle categories with engaging visuals.',
  },
]

const WebsiteDesign = () => (
  <main className="bg-white text-black">
    {/* Hero Section */}
    <section className="grid p-4 lg:p-20 grid-cols-1 lg:grid-cols-2 gap-12 min-h-screen items-center">
      <div>
        <p className="uppercase text-sm text-accent-dark mb-4">Web Development</p>
        <h1 className="text-3xl lg:text-5xl font-bold mb-6">Custom Websites That Deliver Results</h1>
        <p className="text-lg text-gray-800">
          At Joro Services, we create high-performance websites that combine sleek design with solid engineering.
          Whether you're launching a startup or refreshing your brand, we bring your vision to life with websites that work, load fast, and rank well.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-block px-6 py-3 bg-accent-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition"
        >
          Start Your Project
        </Link>
      </div>
      <div>
        <img
          src="/images/web-development-hero.jpg"
          alt="Web development illustration"
          className="rounded-lg shadow-lg object-cover w-full h-[60vh]"
        />
      </div>
    </section>

    {/* Core Services */}
    <section className="py-20 px-4 lg:px-32 bg-gray-50">
      <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-12">Our Capabilities</h2>
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

    {/* Portfolio Showcase */}
    <section className="py-20 px-4 lg:px-32">
      <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-12">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolio.map((site, i) => (
          <a
            key={i}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
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
        Let’s Build Something Powerful Together
      </h2>
      <Link
        to="/contact"
        className="inline-block bg-white text-accent-dark font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
      >
        Get in Touch
      </Link>
    </section>

    <Footer />
  </main>
)

export default WebsiteDesign
