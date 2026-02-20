import React, { useState, useEffect } from 'react'
import {
  FaMobileAlt,
  FaSearch,
  FaCogs,
  FaServer,
  FaCode,
  FaRocket,
  FaPlus,
  FaMinus,
  FaCheckCircle,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'

const serviceCards = [
  {
    icon: FaMobileAlt,
    title: 'Websites That Look Great on Every Device',
    label: 'Responsive Design',
    description:
      'We build mobile-first layouts that adapt beautifully to every screen size. No pinching, zooming, or horizontal scrolling — just clean, usable design from phone to desktop.',
    items: [
      'Mobile-first responsive development',
      'Cross-browser testing (Chrome, Safari, Firefox, Edge)',
      'Touch-friendly navigation and interactions',
      'Performance optimisation for mobile networks',
    ],
  },
  {
    icon: FaSearch,
    title: 'Built to Be Found',
    label: 'SEO & Performance',
    description:
      'A beautiful site that nobody can find is a waste of money. We code with search visibility baked in — semantic HTML, fast loading, structured data, and all the technical SEO basics handled.',
    items: [
      'Semantic HTML and structured data',
      'Page speed optimisation (Core Web Vitals)',
      'Image compression and lazy loading',
      'Meta tags, sitemaps, and robots.txt',
    ],
  },
  {
    icon: FaCogs,
    title: 'Content You Can Actually Update Yourself',
    label: 'CMS Integration',
    description:
      'We integrate content management systems so you can update text, images, and blog posts without calling a developer every time. Your site, your control.',
    items: [
      'WordPress, Sanity, or Strapi integration',
      'Custom content models',
      'Media management',
      'Training on how to use your CMS',
    ],
  },
  {
    icon: FaServer,
    title: 'Architecture That Grows With You',
    label: 'Scalable Architecture',
    description:
      'We use modern frameworks and clean architecture patterns so your site can handle growth — more pages, more traffic, more features — without needing a rebuild.',
    items: [
      'React / Next.js framework',
      'Component-based architecture',
      'API-first design',
      'Hosting setup and deployment (Vercel, AWS, Netlify)',
    ],
  },
  {
    icon: FaCode,
    title: 'Custom Features, Not Cookie-Cutter Templates',
    label: 'Custom Development',
    description:
      'Need something a template can\'t do? Contact forms, booking systems, client portals, calculators — we build custom functionality tailored to how your business actually works.',
    items: [
      'Custom forms and workflows',
      'Third-party API integrations',
      'User authentication and dashboards',
      'E-commerce and payment integration',
    ],
  },
  {
    icon: FaRocket,
    title: 'Launch Day Is Just the Beginning',
    label: 'Ongoing Support & Maintenance',
    description:
      'Websites need maintenance. We offer ongoing support plans to keep your site secure, updated, and performing well — so you\'re not left on your own after launch.',
    items: [
      'Security updates and patching',
      'Content updates and changes',
      'Performance monitoring',
      'Monthly reporting',
    ],
  },
]

const stats = [
  {
    value: '50+',
    label: 'Websites built and launched',
  },
  {
    value: '<2s',
    label: 'Average page load time',
  },
  {
    value: '100%',
    label: 'Mobile responsive builds',
  },
  {
    value: '4.9/5',
    label: 'Average client satisfaction',
  },
]

const painPoints = [
  'Our website looks outdated and we\'re embarrassed to send people to it',
  'We paid someone to build it years ago and now nobody can update it',
  'It looks fine on desktop but terrible on mobile',
  'We\'re not showing up on Google at all',
  'We need a website but the quotes we\'re getting are ridiculous',
  'Our current site is slow and visitors leave before it loads',
]

const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We learn about your business, goals, audience, and what you need the site to do.',
  },
  {
    step: '02',
    title: 'Design',
    description: 'We create wireframes and visual designs for your approval before writing a single line of code.',
  },
  {
    step: '03',
    title: 'Build',
    description: 'We develop your site using modern frameworks, with regular check-ins so you see progress throughout.',
  },
  {
    step: '04',
    title: 'Launch',
    description: 'We handle hosting setup, domain connection, SSL, and go-live — plus training on how to manage your site.',
  },
]

const pricingTiers = [
  {
    name: 'Starter Website',
    price: 'From £1,500',
    features: [
      'Up to 5 pages',
      'Mobile responsive design',
      'Contact form',
      'Basic SEO setup',
      'CMS for easy updates',
    ],
    bestFor: 'New businesses that need a professional online presence',
  },
  {
    name: 'Business Website',
    price: 'From £3,500',
    features: [
      'Up to 15 pages',
      'Custom design and branding',
      'Blog / news section',
      'Advanced SEO and analytics',
      'Third-party integrations',
      'Content migration',
    ],
    bestFor: 'Established businesses that need more functionality',
    highlighted: true,
  },
  {
    name: 'Web Application',
    price: 'From £7,500',
    features: [
      'Custom web application',
      'User authentication and roles',
      'Database and API development',
      'Admin dashboard',
      'Ongoing support plan',
      'Scalable cloud hosting',
    ],
    bestFor: 'Businesses that need custom software, not just a website',
  },
]

const faqData = [
  {
    question: 'How long does it take to build a website?',
    answer:
      'A typical 5-page business website takes 3-4 weeks from kickoff to launch. Larger sites with custom features take 6-10 weeks. We\'ll give you a clear timeline before we start.',
  },
  {
    question: 'Will I be able to update the website myself?',
    answer:
      'Yes. Every site we build comes with a CMS (content management system) so you can update text, images, and blog posts without any technical knowledge. We provide training as part of the project.',
  },
  {
    question: 'Do you design the website too, or just build it?',
    answer:
      'Both. We handle the full process — design, development, content setup, and launch. You get wireframes and visual designs to approve before we start building.',
  },
  {
    question: 'What about hosting and domains?',
    answer:
      'We set up hosting (typically Vercel or AWS) and connect your domain as part of the project. Hosting costs are separate and typically £10-30/month depending on traffic and requirements.',
  },
  {
    question: 'Can you redesign our existing website?',
    answer:
      'Absolutely. We can either redesign your current site or build a completely new one and migrate your content. We\'ll recommend the best approach based on what you have.',
  },
  {
    question: 'What technologies do you use?',
    answer:
      'We primarily use React and Next.js for modern, fast websites. For CMS, we use WordPress, Sanity, or Strapi depending on your needs. Everything is hosted on reliable cloud platforms.',
  },
]

const portfolioItems = [
  {
    name: 'Save the Men',
    url: 'https://save-the-men.com',
    description: 'Blog-driven site with dynamic routing, category filters, and interactive animations built using Next.js.',
  },
  {
    name: '1 Noble Healthcare',
    url: 'https://1noblehealthcare.com',
    description: 'Fully responsive, SEO-optimised corporate site with custom contact forms and CMS integration.',
  },
  {
    name: 'PathSync Recruitment',
    url: 'https://pathsyncrecruitment.com',
    description: 'Professional recruitment portal with blog pages, service filters, and application forms.',
  },
]

const WebDevelopment = () => {
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    document.title =
      'Web Development London | Custom Websites for SMBs | Joro Services'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Custom web development for small businesses. Responsive, fast, SEO-optimised websites built with React and Next.js. From £1,500. Free consultation available.'
      )
    }
    return () => {
      document.title =
        'Joro Services | Digital Marketing, Development & IT Solutions in London'
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Joro Services Ltd offers tailored digital marketing, web development, mobile app development, UI/UX design, cloud infrastructure, cybersecurity, and IT support services for businesses across the UK.'
        )
      }
    }
  }, [])

  return (
    <main className="bg-white text-black">
      {/* Section 1: Hero */}
      <section
        id="hero"
        className="px-4 lg:px-20 py-16 lg:py-24 min-h-[80vh] flex items-center"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase text-sm text-accent-dark mb-4 font-semibold tracking-wide">
              Web Development
            </p>
            <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              Your Website Should Be Your Best Salesperson.{' '}
              <span className="text-accent-dark">
                Not Your Biggest Headache.
              </span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We build modern, responsive websites and web applications that load
              fast, rank well, and actually convert visitors into customers.
              Clean code, honest pricing, no template nonsense.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/getintouch"
                className="inline-block px-6 py-3 bg-accent-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition text-center"
              >
                Get a Free Quote
              </Link>
              <a
                href="#services"
                className="inline-block px-6 py-3 border-2 border-accent-dark text-accent-dark font-semibold rounded-lg hover:bg-accent-dark hover:text-white transition text-center"
              >
                See What We Build
              </a>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              What You Get
            </h3>
            <div className="space-y-3 mb-6">
              {[
                { label: 'Performance', value: '95+', sub: 'Lighthouse score' },
                { label: 'Mobile', value: '100%', sub: 'Responsive' },
                { label: 'SEO', value: 'Built-in', sub: 'From day one' },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between bg-white rounded-lg p-3 border border-gray-100">
                  <div>
                    <span className="font-medium text-gray-800">{item.label}</span>
                    <p className="text-xs text-gray-500">{item.sub}</p>
                  </div>
                  <span className="text-lg font-bold text-accent-dark">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              {['React / Next.js', 'CMS Integration', 'Custom Features'].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3">
                    <FaCheckCircle className="text-accent-dark flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Stats Banner */}
      <section className="bg-slate-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-accent mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Pain Points */}
      <section className="py-16 lg:py-20 px-4 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            Sound Familiar?
          </h2>
          <p className="text-center text-gray-600 mb-10 text-lg">
            Most businesses we talk to have the same frustrations:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {painPoints.map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-100"
              >
                <span className="text-red-400 mt-1 text-lg">"</span>
                <p className="text-gray-700 italic">{point}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-lg text-gray-700">
            We fix all of this. And it costs{' '}
            <strong>less than you think</strong>.
          </p>
        </div>
      </section>

      {/* Section 4: Service Cards */}
      <section id="services" className="py-16 lg:py-20 px-4 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition"
              >
                <card.icon className="text-3xl text-accent-dark mb-4" />
                <p className="text-xs uppercase tracking-wide text-accent-dark font-semibold mb-1">
                  {card.label}
                </p>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{card.description}</p>
                <ul className="space-y-2">
                  {card.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                      <FaCheckCircle className="text-accent-dark mt-0.5 flex-shrink-0 text-xs" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Our Process */}
      <section className="py-16 lg:py-20 px-4 lg:px-20 bg-accent-dark/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            How We Work
          </h2>
          <p className="text-gray-600 mb-12 text-lg">
            A clear, four-step process with no surprises.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-left">
                <div className="text-2xl font-bold text-accent-dark mb-2">{step.step}</div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Portfolio */}
      <section className="py-16 lg:py-20 px-4 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Recent Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition block"
              >
                <h3 className="text-lg font-bold text-accent-dark mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
                <span className="text-accent-dark text-sm font-medium mt-3 inline-block">
                  Visit site &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Pricing */}
      <section className="py-16 lg:py-20 px-4 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            Pricing
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Transparent pricing. No hidden costs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, i) => (
              <div
                key={i}
                className={`rounded-xl p-6 border-2 ${
                  tier.highlighted
                    ? 'border-accent-dark shadow-lg relative'
                    : 'border-gray-200'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-dark text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <div className="text-2xl font-bold text-accent-dark mb-4">
                  {tier.price}
                </div>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                      <FaCheckCircle className="text-accent-dark mt-0.5 flex-shrink-0 text-xs" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-500 italic">
                  Best for: "{tier.bestFor}"
                </p>
                <Link
                  to="/getintouch"
                  className={`mt-4 inline-block w-full text-center px-6 py-3 font-semibold rounded-lg transition ${
                    tier.highlighted
                      ? 'bg-accent-dark text-white hover:bg-opacity-90'
                      : 'border-2 border-accent-dark text-accent-dark hover:bg-accent-dark hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="py-16 lg:py-20 px-4 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg bg-white"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="w-full flex justify-between items-center text-left p-5"
                >
                  <span className="font-medium text-lg pr-4">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <FaMinus className="text-accent-dark flex-shrink-0" />
                  ) : (
                    <FaPlus className="text-accent-dark flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Bottom CTA */}
      <section className="bg-accent-dark text-white py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Get a Website That Actually Works?
          </h2>
          <p className="text-lg mb-8 text-white/80">
            Book a free consultation. We'll discuss what you need, give you
            honest advice, and provide a clear quote — no obligation.
          </p>
          <Link
            to="/getintouch"
            className="inline-block bg-white text-accent-dark font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default WebDevelopment
