import React from 'react'
import { FaCode, FaMobileAlt, FaRocket, FaPaintBrush } from 'react-icons/fa'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'
import SEO from '../../component/SEO'
import pagesSEO from '../../seo/pagesSEO'
import { serviceSchema, breadcrumbSchema } from '../../seo/schemas'

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
    name: 'save the men',
    image: '/images/savethemen.jpg',
    url: 'https://save-the-men.com',
    description:
      'A platform to help men going through abuse.',
  },
]

const WebsiteDesign = () => (
  <main className="bg-white text-gray-900">
    <SEO
      {...pagesSEO['/creative-solutions/website-design']}
      jsonLd={[
        serviceSchema({
          name: 'Website Design',
          description: 'Professional, responsive website design services in Aldershot and Hampshire.',
          url: '/creative-solutions/website-design',
          category: 'Website Design',
        }),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Creative Solutions', path: '/creative-solutions' },
          { name: 'Website Design', path: '/creative-solutions/website-design' },
        ]),
      ]}
    />

    {/* Hero Section */}
    <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Web Development</p>
        <h1 className="text-3xl lg:text-4xl font-bold mb-6">Custom Websites That Deliver Results</h1>
        <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
          At Joro Services, we create high-performance websites that combine sleek design with solid engineering.
          Whether you're launching a startup or refreshing your brand, we bring your vision to life with websites that work, load fast, and rank well.
        </p>
        <Link
          to="/getintouch"
          className="mt-8 inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
        >
          Start Your Project <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>

    {/* Core Services */}
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 text-center">What We Do</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">Our Capabilities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 p-7">
              <s.icon className="text-4xl text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Portfolio Showcase */}
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 text-center">Our Work</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map((site, i) => (
            <a
              key={i}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition"
            >
              <img src={site.image} alt={site.name} className="h-48 w-full object-cover" />
              <div className="p-7">
                <h3 className="text-xl font-semibold text-accent">{site.name}</h3>
                <p className="text-gray-600 leading-relaxed text-sm mt-2">{site.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6">
          Let's Build Something Powerful Together
        </h2>
        <Link
          to="/getintouch"
          className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
        >
          Get in Touch <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>

    <Footer />
  </main>
)

export default WebsiteDesign
