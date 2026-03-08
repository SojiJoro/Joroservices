import React, { useState } from 'react'
import { FaPalette, FaPenNib, FaRegImage, FaBullhorn, FaPlus, FaMinus } from 'react-icons/fa'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'
import SEO from '../../component/SEO'
import pagesSEO from '../../seo/pagesSEO'
import { serviceSchema, breadcrumbSchema, faqSchema } from '../../seo/schemas'

const services = [
  {
    icon: FaPenNib,
    title: 'Logo Design & Identity',
    description:
      'Your logo is the face of your business. We create timeless, versatile, and distinct logos that express your brand\u2019s values and personality.',
  },
  {
    icon: FaPalette,
    title: 'Brand Guidelines',
    description:
      'We develop detailed brand guides covering logo use, colour systems, typography, and tone \u2014 giving you consistency across every platform.',
  },
  {
    icon: FaBullhorn,
    title: 'Marketing & Promotional Design',
    description:
      'From social graphics to billboards, brochures to merchandise, we design visuals that speak boldly and clearly wherever your brand shows up.',
  },
  {
    icon: FaRegImage,
    title: 'Visual Storytelling',
    description:
      'We combine photography, illustration, layout, and typography to tell compelling stories that build emotional connection with your audience.',
  },
]

const portfolio = [
  {
    name: 'PathSync Recruitment Identity',
    image: '/images/branding-pathsync.jpg',
    description:
      'A modern and bold brand system with sharp typography, grid-based layouts, and category-specific colour cues for tech recruiting.',
  },
  {
    name: 'Clear Vital Social Care Branding',
    image: '/images/branding-clearvital.jpg',
    description:
      'Soft, calming colours and an inclusive design system for a care service \u2014 built to communicate trust, empathy, and clarity.',
  },
  {
    name: 'Save the Men',
    image: '/images/savethe-men.jpg',
    description:
      'An expressive, content-first brand using vibrant tones, playful typography, and flexible templates for a blog-centric experience.',
  },
]

const faqData = [
  {
    question: 'How long does a full brand identity project take?',
    answer:
      'A typical brand identity project — including logo design, colour palette, typography, and brand guidelines — takes 3–6 weeks depending on complexity and feedback rounds.',
  },
  {
    question: 'Do you design for print as well as digital?',
    answer:
      'Yes. We deliver assets optimised for both digital (social media, web, email) and print (business cards, brochures, signage). All files are provided in industry-standard formats.',
  },
  {
    question: 'Can you rebrand an existing business?',
    answer:
      'Absolutely. We work with established businesses to modernise their visual identity while retaining the brand equity they\'ve built. We handle everything from strategy to rollout.',
  },
  {
    question: 'What files do I receive at the end of the project?',
    answer:
      'You receive all logo variations (colour, mono, reversed), a comprehensive brand guidelines document, source files (AI/PSD/Figma), and optimised exports for web and print.',
  },
]

const GraphicBranding = () => {
  const [openFaq, setOpenFaq] = useState(null)

  return (
  <main className="bg-white text-gray-900">
    <SEO
      {...pagesSEO['/creative-solutions/graphic-design-and-branding']}
      jsonLd={[
        serviceSchema({
          name: 'Graphic Design and Branding',
          description: 'Expert graphic design and branding services in Aldershot, Hampshire.',
          url: '/creative-solutions/graphic-design-and-branding',
          category: 'Graphic Design',
        }),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Creative Solutions', path: '/creative-solutions' },
          { name: 'Graphic Design & Branding', path: '/creative-solutions/graphic-design-and-branding' },
        ]),
        faqSchema(faqData),
      ]}
    />

    {/* Hero Section */}
    <section id="hero" className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Graphic Design & Branding</p>
        <h1 className="text-3xl lg:text-4xl font-bold mb-6">Make a Statement Without Saying a Word</h1>
        <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
          Great design is more than visuals \u2014 it's your first impression, your story, your voice. At Joro Services, we shape your brand identity with purposeful design that stands out, stays consistent, and connects with your audience.
        </p>
        <Link
          to="/getintouch"
          className="mt-8 inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
        >
          Let's Shape Your Brand <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>

    {/* Services Section */}
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 text-center">What We Do</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">Our Design Capabilities</h2>
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

    {/* Portfolio Section */}
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 text-center">Our Work</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">Recent Brand Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map((project, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition"
            >
              <img src={project.image} alt={project.name} className="h-48 w-full object-cover" />
              <div className="p-7">
                <h3 className="text-xl font-semibold text-accent">{project.name}</h3>
                <p className="text-gray-600 leading-relaxed text-sm mt-2">{project.description}</p>
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
          Branding Is More Than a Logo. It's a Feeling.
        </h2>
        <Link
          to="/getintouch"
          className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
        >
          Start Your Brand Journey <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>

    <Footer />
  </main>
  )
}

export default GraphicBranding
