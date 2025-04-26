import React from 'react'
import { FaPalette, FaPenNib, FaRegImage, FaBullhorn } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'

const services = [
  {
    icon: FaPenNib,
    title: 'Logo Design & Identity',
    description:
      'Your logo is the face of your business. We create timeless, versatile, and distinct logos that express your brand’s values and personality.',
  },
  {
    icon: FaPalette,
    title: 'Brand Guidelines',
    description:
      'We develop detailed brand guides covering logo use, colour systems, typography, and tone — giving you consistency across every platform.',
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
      'Soft, calming colours and an inclusive design system for a care service — built to communicate trust, empathy, and clarity.',
  },
  {
    name: 'Top 20 Everywhere Visual Direction',
    image: '/images/branding-top20.jpg',
    description:
      'An expressive, content-first brand using vibrant tones, playful typography, and flexible templates for a blog-centric experience.',
  },
]

const GraphicBranding = () => (
  <main className="bg-white text-black">
    {/* Hero Section */}
    <section className="grid p-4 lg:p-20 grid-cols-1 lg:grid-cols-2 gap-12 min-h-screen items-center">
      <div>
        <p className="uppercase text-sm text-accent-dark mb-4">Graphic Design & Branding</p>
        <h1 className="text-3xl lg:text-5xl font-bold mb-6">Make a Statement Without Saying a Word</h1>
        <p className="text-lg text-gray-800">
          Great design is more than visuals — it’s your first impression, your story, your voice. At Joro Services, we shape your brand identity with purposeful design that stands out, stays consistent, and connects with your audience.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-block px-6 py-3 bg-accent-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition"
        >
          Let’s Shape Your Brand
        </Link>
      </div>
      <div>
        <img
          src="/images/branding-hero.jpg"
          alt="Creative branding moodboard"
          className="rounded-lg shadow-lg object-cover w-full h-[60vh]"
        />
      </div>
    </section>

    {/* Services Section */}
    <section className="py-20 px-4 lg:px-32 bg-gray-50">
      <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-12">Our Design Capabilities</h2>
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
      <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-12">Recent Brand Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolio.map((project, i) => (
          <div
            key={i}
            className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <img src={project.image} alt={project.name} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-accent-dark">{project.name}</h3>
              <p className="text-sm text-gray-700 mt-1">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA Section */}
    <section className="bg-accent-dark text-white py-16 text-center">
      <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
        Branding Is More Than a Logo. It’s a Feeling.
      </h2>
      <Link
        to="/contact"
        className="inline-block bg-white text-accent-dark font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
      >
        Start Your Brand Journey
      </Link>
    </section>

    <Footer />
  </main>
)

export default GraphicBranding
