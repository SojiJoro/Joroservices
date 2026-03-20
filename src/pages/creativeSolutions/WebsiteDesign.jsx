import React, { useState } from 'react'
import { FaCode, FaMobileAlt, FaRocket, FaPaintBrush, FaPlus, FaMinus } from 'react-icons/fa'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'
import SEO from '../../component/SEO'
import pagesSEO from '../../seo/pagesSEO'
import { serviceSchema, breadcrumbSchema } from '../../seo/schemas'
import Breadcrumb from '../../component/Breadcrumb'

const services = [
  {
    icon: FaPaintBrush,
    title: 'Custom UI/UX Design',
    description:
      'We design interfaces that look great and work well for your audience. From early sketches to finished designs, we make sure visitors can find what they need and take action.',
  },
  {
    icon: FaMobileAlt,
    title: 'Mobile-First Development',
    description:
      'Our websites look and work great on any screen size. Whether someone visits from a phone, tablet, or desktop, everything just works.',
  },
  {
    icon: FaCode,
    title: 'Full-Stack Engineering',
    description:
      'We build both the front and back end of websites and web apps. We use modern tools to make sure everything runs fast, stays secure, and is easy to update.',
  },
  {
    icon: FaRocket,
    title: 'Performance & SEO',
    description:
      'We make every site fast and easy to find on Google. That means clean code, compressed images, smart keyword use, and proper technical SEO.',
  },
]

const portfolio = [
  {
    name: '1 Noble Healthcare',
    image: '/images/1noble.jpg',
    url: 'https://1noblehealthcare.com',
    description:
      'A clean, modern healthcare site for supported living services, with easy-to-use contact forms and a straightforward layout.',
  },
  {
    name: 'PathSync Recruitment',
    image: '/images/pathsync.jpg',
    url: 'https://pathsyncrecruitment.com',
    description:
      'A professional site for a tech recruitment agency, complete with a blog, application forms, and a layout that works on any device.',
  },
  {
    name: 'save the men',
    image: '/images/savethemen.jpg',
    url: 'https://save-the-men.com',
    description:
      'A platform to help men going through abuse.',
  },
]

const faqData = [
  {
    question: 'How much does a website cost?',
    answer:
      'It depends on the size and complexity of the project. A straightforward brochure site with a handful of pages typically starts from around \u00a31,500. If you need something more involved, like e-commerce, booking systems, or custom features, costs can range from \u00a34,000 to \u00a315,000+. We always provide a clear quote after an initial chat so there are no surprises.',
  },
  {
    question: 'How long does a website take to build?',
    answer:
      'Most standard business websites take between 4 and 8 weeks from first conversation to launch. That includes design, development, content, and testing. Larger projects with custom functionality can take longer, but we set a realistic timeline at the start and stick to it.',
  },
  {
    question: 'Do you design WordPress sites?',
    answer:
      'Yes, we do. WordPress is a solid choice for businesses that want to update their own content regularly. We build custom WordPress themes rather than using off-the-shelf templates, so your site still looks and feels unique. For projects that need more flexibility or performance, we also work with React and Next.js.',
  },
  {
    question: 'Will my site work on mobile?',
    answer:
      'Every site we build is designed mobile-first. That means we start with the mobile layout and scale up, rather than trying to squeeze a desktop design onto a small screen. We test across devices and browsers before launch to make sure everything works properly.',
  },
]

const websiteDesignFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

const WebsiteDesign = () => {
  const [openFaq, setOpenFaq] = useState(null)

  return (
  <main className="bg-white text-gray-900">
    <SEO
      {...pagesSEO['/creative-solutions/website-design']}
      dateModified="2026-03-20"
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
        websiteDesignFaqSchema,
      ]}
    />

    {/* Hero Section */}
    <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Web Design</p>
        <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Creative Solutions', path: '/creative-solutions' }, { name: 'Website Design' }]} />
        <h1 className="text-3xl lg:text-4xl font-bold mb-6">Website Design in Aldershot, Hampshire</h1>
        <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
          We design websites for businesses in Aldershot, Farnborough, Camberley, Guildford, and across Hampshire. Whether you're starting from scratch or need a redesign, we'll build you a site that loads fast, ranks well on Google, and actually brings in customers. No templates. No filler pages. Just a site that does its job.
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
              <img src={site.image} alt={site.name} className="h-48 w-full object-cover" loading="lazy" decoding="async" />
              <div className="p-7">
                <h3 className="text-xl font-semibold text-accent">{site.name}</h3>
                <p className="text-gray-600 leading-relaxed text-sm mt-2">{site.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* Related Services */}
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-10">Related Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Link to="/creative-solutions/graphic-design-and-branding" className="block bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-accent mb-2">Graphic Design & Branding</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Need a logo or brand identity to go with your new site? We can help with that too.</p>
          </Link>
          <Link to="/development/web-development" className="block bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-accent mb-2">Web Development</h3>
            <p className="text-gray-600 text-sm leading-relaxed">For complex web apps and custom functionality beyond standard website design.</p>
          </Link>
          <Link to="/digital-marketing/seo-and-content-strategy" className="block bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-accent mb-2">SEO & Content Strategy</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Get your new website found on Google with ongoing SEO and content work.</p>
          </Link>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-10">
          Frequently Asked Questions About Website Design
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100"
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
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Local Businesses Choose Us */}
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8">Why Local Businesses Choose Us</h2>
        <div className="prose prose-lg text-gray-600 mx-auto">
          <p>
            We're based in Aldershot and most of our clients are within a short drive. That matters because we can meet face to face, understand your local market, and build a site that speaks to the people you actually serve.
          </p>
          <p>
            Businesses in Farnborough, Farnham, Fleet, Camberley, and Guildford come to us because we keep things straightforward. No long contracts. No jargon-filled proposals. Just honest conversations about what your website needs to do and a clear plan to get it done.
          </p>
          <p>
            We've built sites for healthcare providers, recruitment agencies, charities, and small businesses across Hampshire. Every project gets the same level of attention, whether it's a five-page brochure site or a full web application.
          </p>
        </div>
      </div>
    </section>

    {/* Local Service Areas */}
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
          Website Design Across Hampshire &amp; Surrey
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {[
            { label: 'Aldershot', path: '/web-design-aldershot' },
            { label: 'Farnborough', path: '/locations/farnborough' },
            { label: 'Farnham', path: '/web-design-farnham' },
            { label: 'Fleet', path: '/locations/fleet' },
            { label: 'Camberley', path: '/locations/camberley' },
            { label: 'Guildford', path: '/web-design-guildford' },
            { label: 'Hampshire', path: '/locations/hampshire' },
            { label: 'Surrey', path: '/locations/surrey' },
          ].map((area, i) => (
            <Link key={i} to={area.path} className="text-center p-3 bg-white rounded-xl border border-gray-100 hover:border-accent/30 hover:shadow-sm transition-all">
              <span className="text-sm font-medium text-gray-700 hover:text-accent">{area.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6">
          Ready to Get Your Website Built?
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

export default WebsiteDesign
