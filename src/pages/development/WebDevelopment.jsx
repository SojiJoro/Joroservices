import React, { useState } from 'react'
import { FaMobileAlt, FaSearch, FaCogs, FaServer, FaPlus, FaMinus } from 'react-icons/fa'
import { ArrowRight } from 'lucide-react'
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
      'We build mobile\u2011first layouts that adapt beautifully to every screen size and device \u2014 optimised for performance and accessibility.',
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
      'We follow modern architecture patterns using frameworks like Next.js, ensuring your app is maintainable, scalable, and future\u2011ready.',
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
      'Fully responsive, SEO\u2011optimised corporate site with custom contact forms and a CMS for easy updates.',
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
      'The cost of a bespoke website depends on the complexity, number of pages, and features required. A simple brochure website typically starts from \u00a31,500, while more complex web applications with custom functionality can range from \u00a35,000 to \u00a325,000+. We provide a detailed quote after understanding your specific requirements during a free consultation.',
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
      'Every website we build is mobile-first and fully responsive across all devices. We also implement on-page SEO best practices including semantic HTML, meta tags, structured data, fast loading speeds, and accessible design as standard \u2014 not as an add-on.',
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
  <main className="bg-white text-gray-900">
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
    <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Web Development</p>
        <h1 className="text-3xl lg:text-4xl font-bold mb-6">Modern Web Apps Built for Speed and Scale</h1>
        <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
          From sleek marketing sites to fully featured web applications, we develop responsive, search\u2011optimised digital products using frameworks like React and Next.js \u2014 clean code, fast loading, and easy to manage.
        </p>
        <Link
          to="/getintouch"
          className="mt-8 inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
        >
          Request a Free Quote <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>

    {/* Services Section */}
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 text-center">Our Expertise</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">What We Do</h2>
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
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">Web Projects We've Delivered</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map((site, i) => (
            <a
              key={i}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition block"
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

    {/* FAQ Section */}
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-10">
          Frequently Asked Questions About Web Development
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

    {/* CTA */}
    <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6">
          Ready to Launch Your Website or App?
        </h2>
        <Link
          to="/getintouch"
          className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
        >
          Let's Build Something <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>

    <Footer />
  </main>
  )
}

export default WebDevelopment
