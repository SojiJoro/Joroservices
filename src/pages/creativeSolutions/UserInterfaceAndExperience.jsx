import React from 'react'
import { FaUserCheck, FaDraftingCompass, FaMicroscope, FaLaptopCode } from 'react-icons/fa'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'
import SEO from '../../component/SEO'
import pagesSEO from '../../seo/pagesSEO'
import { serviceSchema, breadcrumbSchema } from '../../seo/schemas'

const services = [
  {
    icon: FaUserCheck,
    title: 'User Research & Personas',
    description:
      'We talk to your users, run surveys, and dig into analytics to figure out what they actually need. Then we use that to guide every design choice.',
  },
  {
    icon: FaDraftingCompass,
    title: 'Wireframing & Prototyping',
    description:
      'We sketch out how everything works and build clickable prototypes so you can see it and give feedback before any real development starts.',
  },
  {
    icon: FaMicroscope,
    title: 'Usability Testing',
    description:
      'We test early and often, using A/B tests, heatmaps, and real user sessions to validate designs and improve usability.',
  },
  {
    icon: FaLaptopCode,
    title: 'Design-to-Development Handoff',
    description:
      'We hand off clean, detailed designs with all the assets and notes your developers need to build it right the first time.',
  },
]

const portfolio = [
  {
    name: 'Joro Services Admin Dashboard',
    image: '/images/ux-dashboard.jpg',
    description:
      'A simple admin dashboard with user stats, activity logs, and role-based access. Built to make day-to-day operations easier.',
  },
  {
    name: 'Healthcare Referral Portal UX',
    image: '/images/ux-healthcare.jpg',
    description:
      'A clean, accessible flow for patients and staff with easy navigation, clear buttons, and forms that work on any device.',
  },
  {
    name: 'Mobile Job App UI',
    image: '/images/ux-jobapp.jpg',
    description:
      'A job search app with swipeable cards, saved jobs, and quick-apply. Designed so you can do everything with one thumb.',
  },
]

const UXUIExperience = () => (
  <main className="bg-white text-gray-900">
    <SEO
      {...pagesSEO['/creative-solutions/user-interface-and-experience']}
      jsonLd={[
        serviceSchema({
          name: 'UI/UX Design',
          description: 'User interface and user experience design services in Aldershot, Hampshire.',
          url: '/creative-solutions/user-interface-and-experience',
          category: 'UI/UX Design',
        }),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Creative Solutions', path: '/creative-solutions' },
          { name: 'UI/UX Design', path: '/creative-solutions/user-interface-and-experience' },
        ]),
      ]}
    />

    {/* Hero Section */}
    <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">UI/UX Design</p>
        <h1 className="text-3xl lg:text-4xl font-bold mb-6">Design That Feels As Good As It Looks</h1>
        <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
          We design every step of the user journey, from signing up to checking out, so it feels easy and natural. We pay attention to how real people use things, and we design around that.
        </p>
        <Link
          to="/getintouch"
          className="mt-8 inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
        >
          Book a UX Consultation <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>

    {/* UX/UI Services Section */}
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 text-center">Our Services</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">What We Offer</h2>
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

    {/* UX Case Studies / Projects */}
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 text-center">Case Studies</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">UX in Action</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition">
              <img src={item.image} alt={item.name} className="h-48 w-full object-cover" />
              <div className="p-7">
                <h3 className="text-xl font-semibold text-accent">{item.name}</h3>
                <p className="text-gray-600 leading-relaxed text-sm mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6">
          Ready to Make Your Product Easier to Use?
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

export default UXUIExperience
