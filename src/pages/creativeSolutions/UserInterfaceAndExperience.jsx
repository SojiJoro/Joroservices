import React, { useState } from 'react'
import { FaUserCheck, FaDraftingCompass, FaMicroscope, FaLaptopCode, FaPlus, FaMinus } from 'react-icons/fa'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'
import SEO from '../../component/SEO'
import pagesSEO from '../../seo/pagesSEO'
import { serviceSchema, breadcrumbSchema, faqSchema } from '../../seo/schemas'

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
      'An intuitive admin interface with user analytics, activity tracking, and multi-role access \u2014 designed to streamline internal operations.',
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

const faqData = [
  {
    question: 'What is the difference between UI and UX design?',
    answer:
      'UX (user experience) focuses on how a product works — the flow, logic, and ease of use. UI (user interface) focuses on how it looks — layout, colours, typography. We handle both to ensure your product is beautiful and functional.',
  },
  {
    question: 'Do you conduct user testing?',
    answer:
      'Yes. We run usability tests, A/B tests, and heatmap analysis throughout the design process. Testing early and often means fewer costly changes after development.',
  },
  {
    question: 'Can you redesign an existing product?',
    answer:
      'Absolutely. We often audit existing apps and websites, identify UX pain points, and redesign the experience while preserving what already works well.',
  },
  {
    question: 'What tools do you use for design?',
    answer:
      'We primarily use Figma for collaborative design and prototyping, with Miro for workshops and user journey mapping. All deliverables include developer-ready specs and assets.',
  },
]

const UXUIExperience = () => {
  const [openFaq, setOpenFaq] = useState(null)

  return (
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
        faqSchema(faqData),
      ]}
    />

    {/* Hero Section */}
    <section id="hero" className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">UI/UX Design</p>
        <h1 className="text-3xl lg:text-4xl font-bold mb-6">Design That Feels As Good As It Looks</h1>
        <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
          From onboarding to checkout, we design thoughtful user experiences that feel effortless and intuitive. By blending empathy, data, and creativity, we create designs people love to use.
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

    {/* FAQ */}
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-100 rounded-2xl bg-white"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex justify-between items-center text-left p-5"
              >
                <span className="font-medium text-lg pr-4">{faq.question}</span>
                {openFaq === index ? (
                  <FaMinus className="text-accent flex-shrink-0" />
                ) : (
                  <FaPlus className="text-accent flex-shrink-0" />
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
    <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6">
          Let's Design Smarter, Smoother Experiences
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
}

export default UXUIExperience
