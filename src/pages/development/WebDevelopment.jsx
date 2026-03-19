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
      'We build mobile-first layouts that look great on every screen size and device, optimised for performance and accessibility.',
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
    title: 'Built to Grow',
    description:
      'We use modern patterns with frameworks like Next.js, so your app is easy to maintain and ready for what comes next.',
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
      'Fully responsive, SEO-optimised corporate site with custom contact forms and a CMS for easy updates.',
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
    question: 'How much does a custom website cost in the UK?',
    answer:
      'It depends on how complex the site is, how many pages you need, and what features you want. A simple brochure website typically starts from \u00a31,500, while more complex web applications with custom functionality can range from \u00a35,000 to \u00a325,000+. We give you a detailed quote after a free consultation.',
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
      'Every website we build is mobile-first and works properly across all devices. We also build in on-page SEO from the start, including semantic HTML, meta tags, structured data, fast loading speeds, and accessible design. That comes as standard, not as an add-on.',
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
        <h1 className="text-3xl lg:text-4xl font-bold mb-6">Web Development in Aldershot, Hampshire</h1>
        <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
          We build websites and web applications for businesses in Aldershot, Farnborough, Guildford, and across Hampshire and Surrey. From marketing sites to full web applications, everything is built with React and Next.js — responsive, search-optimised, fast-loading, and straightforward to manage.
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

    {/* Why Hampshire Businesses Choose Us */}
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-6">
          Why Hampshire Businesses Choose Us
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 leading-relaxed mb-4">
            We're based in Aldershot and work with businesses across Hampshire and Surrey — from sole traders in Farnham to growing companies in Fleet and Camberley. That means we're local enough to meet face-to-face when it matters, and we understand the kinds of challenges that small and mid-sized businesses in this area actually deal with.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            A lot of agencies will sell you a template site and call it custom. We don't do that. Every website we build is coded from scratch or carefully configured to fit your business properly. You get a site that loads quickly, ranks well on Google, and doesn't fall apart the moment you try to update something.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We also stick around after launch. If something breaks or you need changes, you're not chasing an agency three counties away — you're talking to the same team that built it.
          </p>
        </div>
      </div>
    </section>

    {/* Related Services */}
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">
          Related Services
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Web development often goes hand-in-hand with these services.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/creative-solutions/website-design" className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-lg transition block">
            <h3 className="text-xl font-semibold text-accent mb-2">Website Design</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Need the design sorted before development? We handle UI and visual design so your site looks as good as it performs.
            </p>
          </Link>
          <Link to="/development/mobile-app-development" className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-lg transition block">
            <h3 className="text-xl font-semibold text-accent mb-2">Mobile App Development</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              If your business needs a mobile app alongside your website, we build cross-platform apps using React Native and Flutter.
            </p>
          </Link>
          <Link to="/digital-marketing/seo-and-content-strategy" className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-lg transition block">
            <h3 className="text-xl font-semibold text-accent mb-2">SEO & Content Strategy</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              A great website needs to be found. We offer ongoing SEO and content work to help your site rank for the right terms.
            </p>
          </Link>
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
