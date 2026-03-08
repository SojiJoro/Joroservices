import React, { useState } from 'react'
import { FaMobileAlt, FaSearch, FaCogs, FaServer, FaPlus, FaMinus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'
import SEO from '../../component/SEO'
import pagesSEO from '../../seo/pagesSEO'
import { serviceSchema, breadcrumbSchema } from '../../seo/schemas'

const services = [
  {
    icon: FaMobileAlt,
    title: 'Responsive Design',
    description:
      'We build mobile‑first layouts that adapt beautifully to every screen size and device — optimised for performance and accessibility.',
  },
  {
    icon: FaSearch,
    title: 'SEO & Performance Tuning',
    description:
      'From semantic HTML to lazy loading, we code with visibility in mind. Your site loads fast and ranks higher in search results.',
  },
  {
    icon: FaCogs,
    title: 'Custom Integrations',
    description:
      'Need a CMS? We integrate platforms like WordPress, Sanity, or Strapi to give you full control over your content.',
  },
  {
    icon: FaServer,
    title: 'Scalable Architecture',
    description:
      'We follow modern architecture patterns using frameworks like Next.js, ensuring your app is maintainable, scalable, and future‑ready.',
  },
]

const portfolio = [
  {
    name: 'Save the Men Website',
    image: '/images/savethemen.jpg',
    description:
      'A blog-driven site with dynamic routing, category filters, and interactive animations built using Next.js 14.',
    url: 'https://save-the-men.com',
  },
  {
    name: '1 Noble Healthcare Website',
    image: '/images/1noble.jpg',
    description:
      'Fully responsive, SEO‑optimised corporate site with custom contact forms and a CMS for easy updates.',
    url: 'https://1noblehealthcare.com',
  },
  {
    name: 'PathSync Recruitment',
    image: '/images/pathsync.jpg',
    description:
      'A clean and professional recruitment portal with blog pages, service filters, and job application forms.',
    url: 'https://pathsyncrecruitment.com',
  },
]

const faqData = [
  {
    question: 'How much does a bespoke website cost in the UK?',
    answer:
      'The cost of a bespoke website depends on the complexity, number of pages, and features required. A simple brochure website typically starts from £1,500, while more complex web applications with custom functionality can range from £5,000 to £25,000+. We provide a detailed quote after understanding your specific requirements during a free consultation.',
  },
  {
    question: 'How long does it take to build a custom website?',
    answer:
      'A standard business website typically takes 4-8 weeks from design to launch. Larger web applications with custom features may take 8-16 weeks. We provide a clear timeline at the start of every project and keep you updated throughout the development process.',
  },
  {
    question: 'Do you build websites using WordPress or custom code?',
    answer:
      'We work with both. For content-heavy sites that need frequent updates, WordPress with a custom theme is often ideal. For web applications requiring complex functionality, performance, or scalability, we use React, Next.js, and Node.js. We recommend the best approach based on your business needs.',
  },
  {
    question: 'Will my website be mobile-friendly and SEO-optimised?',
    answer:
      'Every website we build is mobile-first and fully responsive across all devices. We also implement on-page SEO best practices including semantic HTML, meta tags, structured data, fast loading speeds, and accessible design as standard — not as an add-on.',
  },
  {
    question: 'Can you redesign my existing website?',
    answer:
      'Yes, website redesigns are one of our most requested services. We can modernise your existing site\'s design, improve performance, fix SEO issues, and add new functionality while preserving your existing content and search rankings where possible.',
  },
]

const webDevFaqSchema = {
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

const WebDevelopment = () => {
  const [openFaq, setOpenFaq] = useState(null)

  return (
  <main className="bg-white text-black">
    <SEO
      {...pagesSEO['/development/web-development']}
      jsonLd={[
        serviceSchema({
          name: 'Web Development',
          description: 'Custom web development services in Aldershot and Hampshire using React, Next.js, and modern technologies.',
          url: '/development/web-development',
          category: 'Web Development',
        }),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Development', path: '/development' },
          { name: 'Web Development', path: '/development/web-development' },
        ]),
        webDevFaqSchema,
      ]}
    />
    {/* Hero Section */}
    <section id="hero" className="grid p-4 pt-28 pb-20 lg:p-20 lg:pt-32 lg:pb-20 grid-cols-1 lg:grid-cols-2 gap-12 min-h-screen items-center">
      <div>
        <p className="uppercase text-sm text-accent mb-4">Web Development</p>
        <h1 className="text-3xl lg:text-5xl font-bold mb-6">Modern Web Apps Built for Speed and Scale</h1>
        <p className="text-lg text-gray-800">
          From sleek marketing sites to fully featured web applications, we develop responsive, search‑optimised digital products using frameworks like React and Next.js — clean code, fast loading, and easy to manage.
        </p>
        <Link
          to="/getintouch"
          className="mt-6 inline-block px-6 py-3 bg-accent-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition"
        >
          Request a Free Quote
        </Link>
      </div>
      <div>
        <img
          src="/images/web-development-hero.jpg"
          alt="Code editor and design mockup"
          className="rounded-lg shadow-lg object-cover w-full h-[60vh]"
        />
      </div>
    </section>

    {/* Services Section */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 text-center">Our Expertise</p>
      <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-12">What We Do</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <div key={i} className="p-6 border border-gray-100 rounded-2xl shadow-sm bg-white">
            <s.icon className="text-4xl text-accent-dark mb-4" />
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-gray-700">{s.description}</p>
          </div>
        ))}
      </div>
      </div>
    </section>

    {/* Portfolio Section */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 text-center">Our Work</p>
      <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-12">Web Projects We've Delivered</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolio.map((site, i) => (
          <a
            key={i}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl overflow-hidden shadow border border-gray-100 hover:shadow-lg transition block"
          >
            <img src={site.image} alt={site.name} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-accent">{site.name}</h3>
              <p className="text-sm text-gray-700 mt-1">{site.description}</p>
            </div>
          </a>
        ))}
      </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-16 lg:py-20 px-4 lg:px-20 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10">
          Frequently Asked Questions About Web Development
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg bg-white"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex justify-between items-center text-left p-5"
              >
                <span className="font-medium text-lg pr-4">{faq.question}</span>
                {openFaq === index ? (
                  <FaMinus className="text-accent-dark flex-shrink-0" />
                ) : (
                  <FaPlus className="text-accent-dark flex-shrink-0" />
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

    {/* CTA */}
    <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-16 text-center">
      <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
        Ready to Launch Your Website or App?
      </h2>
      <Link
        to="/getintouch"
        className="inline-block bg-white text-accent font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
      >
        Let's Build Something
      </Link>
    </section>

    <Footer />
  </main>
  )
}

export default WebDevelopment
