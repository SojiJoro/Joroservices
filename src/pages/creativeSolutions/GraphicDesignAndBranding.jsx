import React from 'react'
import { FaPalette, FaPenNib, FaRegImage, FaBullhorn } from 'react-icons/fa'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'
import SEO from '../../component/SEO'
import pagesSEO from '../../seo/pagesSEO'
import { serviceSchema, breadcrumbSchema } from '../../seo/schemas'

const services = [
  {
    icon: FaPenNib,
    title: 'Logo Design & Identity',
    description:
      'Your logo is the first thing people see. We design logos that are clear, memorable, and actually represent what your business is about.',
  },
  {
    icon: FaPalette,
    title: 'Brand Guidelines',
    description:
      'We put together brand guides that cover your logo, colours, fonts, and voice, so everything looks and sounds like you no matter where it shows up.',
  },
  {
    icon: FaBullhorn,
    title: 'Marketing & Promotional Design',
    description:
      'Social posts, flyers, brochures, merch. Whatever you need, we design it so your brand looks sharp and gets noticed.',
  },
  {
    icon: FaRegImage,
    title: 'Visual Storytelling',
    description:
      'We use photos, illustrations, and smart layouts to tell your story in a way that actually makes people feel something.',
  },
]

const portfolio = [
  {
    name: 'PathSync Recruitment Identity',
    image: '/images/branding-pathsync.jpg',
    description:
      'A bold brand with clean fonts, structured layouts, and colour-coded sections to help a tech recruitment agency stand out.',
  },
  {
    name: 'Clear Vital Social Care Branding',
    image: '/images/branding-clearvital.jpg',
    description:
      'Warm, calming colours and a friendly design system for a care service. The goal was to feel trustworthy and approachable from the first glance.',
  },
  {
    name: 'Save the Men',
    image: '/images/savethe-men.jpg',
    description:
      'A bold, content-focused brand with bright colours, fun fonts, and flexible templates built around blog and article content.',
  },
]

const GraphicBranding = () => (
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
      ]}
    />

    {/* Hero Section */}
    <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Graphic Design & Branding</p>
        <h1 className="text-3xl lg:text-4xl font-bold mb-6">Make a Statement Without Saying a Word</h1>
        <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
          Your design is the first thing people notice. It tells them who you are before you say a word. We help you build a brand that looks great, stays consistent, and actually connects with the people you want to reach.
        </p>
        <Link
          to="/getintouch"
          className="mt-8 inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
        >
          Start Your Brand Project <ArrowRight className="w-4 h-4" />
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

    {/* CTA Section */}
    <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6">
          Your Brand Is More Than a Logo
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

export default GraphicBranding
