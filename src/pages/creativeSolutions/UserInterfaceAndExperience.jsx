import React from 'react'
import { FaUserCheck, FaDraftingCompass, FaMicroscope, FaLaptopCode } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'

const services = [
  {
    icon: FaUserCheck,
    title: 'User Research & Personas',
    description:
      'We uncover user needs and behaviours through interviews, surveys, and analytics. The result: clear user personas that guide design decisions.',
  },
  {
    icon: FaDraftingCompass,
    title: 'Wireframing & Prototyping',
    description:
      'We map out user flows and craft interactive wireframes, allowing you to visualise functionality early and gather feedback before build.',
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
      'We create pixel-perfect designs with clear guidelines, assets, and dev-friendly documentation for a smooth implementation process.',
  },
]

const portfolio = [
  {
    name: 'Joro Services Admin Dashboard',
    image: '/images/ux-dashboard.jpg',
    description:
      'An intuitive admin interface with user analytics, activity tracking, and multi-role access — designed to streamline internal operations.',
  },
  {
    name: 'Healthcare Referral Portal UX',
    image: '/images/ux-healthcare.jpg',
    description:
      'A simplified user flow for patients and staff with accessibility-first navigation, clear CTAs, and responsive forms.',
  },
  {
    name: 'Mobile Job App UI',
    image: '/images/ux-jobapp.jpg',
    description:
      'Designed a job search mobile app with swipeable cards, saved jobs, and quick-apply features optimised for thumb-first navigation.',
  },
]

const UXUIExperience = () => (
  <main className="bg-white text-black">
    {/* Hero Section */}
    <section className="grid p-4 lg:p-20 grid-cols-1 lg:grid-cols-2 gap-12 min-h-screen items-center">
      <div>
        <p className="uppercase text-sm text-accent-dark mb-4">UI/UX Design</p>
        <h1 className="text-3xl lg:text-5xl font-bold mb-6">Design That Feels As Good As It Looks</h1>
        <p className="text-lg text-gray-800">
          From onboarding to checkout, we design thoughtful user experiences that feel effortless and intuitive. By blending empathy, data, and creativity, we create designs people love to use.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-block px-6 py-3 bg-accent-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition"
        >
          Book a UX Consultation
        </Link>
      </div>
      <div>
        <img
          src="/images/ux-hero.jpg"
          alt="UI/UX design mockups"
          className="rounded-lg shadow-lg object-cover w-full h-[60vh]"
        />
      </div>
    </section>

    {/* UX/UI Services Section */}
    <section className="py-20 px-4 lg:px-32 bg-gray-50">
      <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-12">What We Offer</h2>
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

    {/* UX Case Studies / Projects */}
    <section className="py-20 px-4 lg:px-32">
      <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-12">UX in Action</h2>
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
        Let’s Design Smarter, Smoother Experiences
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

export default UXUIExperience
