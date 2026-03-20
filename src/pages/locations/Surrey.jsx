import React, { useState } from 'react'
import { CheckCircle, ChevronDown, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'
import SEO from '../../component/SEO'
import { serviceSchema, breadcrumbSchema, locationBusinessSchema } from '../../seo/schemas'
import Breadcrumb from '../../component/Breadcrumb'

const services = [
  {
    title: 'Web Development',
    description: 'Websites, online shops, and web applications for Surrey businesses. We build with modern frameworks and focus on speed, accessibility, and getting you found on Google.',
    link: '/development/web-development',
  },
  {
    title: 'SEO & Digital Marketing',
    description: 'Local and national SEO, PPC advertising, social media marketing, and content planning to help Surrey businesses bring in more customers and stay ahead of competitors.',
    link: '/digital-marketing',
  },
  {
    title: 'IT Support & Managed Services',
    description: 'Remote and on-site IT support across Surrey. Helpdesk, server management, network admin, Microsoft 365, and ongoing monitoring for businesses of all sizes.',
    link: '/technical-services/it-support-and-maintenance',
  },
  {
    title: 'Cybersecurity',
    description: 'Keep your Surrey business safe with penetration testing, vulnerability assessments, Cyber Essentials certification, GDPR compliance, and security awareness training.',
    link: '/technical-services/cybersecurity',
  },
  {
    title: 'Mobile App Development',
    description: 'iOS and Android apps for Surrey businesses. Whether you need internal tools for your team or a customer-facing product, we take care of the whole process from start to finish.',
    link: '/development/mobile-app-development',
  },
  {
    title: 'Cloud Infrastructure',
    description: 'AWS, Azure, and Google Cloud consulting, migration, and ongoing management for Surrey organisations that want to update their systems, grow, and cut IT costs.',
    link: '/technical-services/cloud-infrastructure',
  },
]

const faqData = [
  {
    question: 'Do you provide digital services across all of Surrey?',
    answer: 'Yes. We serve businesses throughout Surrey including Guildford, Woking, Camberley, Farnham, Godalming, Cranleigh, Dorking, Epsom, Leatherhead, Reigate, Redhill, Staines, Weybridge, and Esher. We provide both remote support and on-site visits across the county.',
  },
  {
    question: 'What makes Surrey a strong location for business technology services?',
    answer: 'Surrey sits along the M3 and A3 corridors, creating a tech-rich belt between London and Hampshire. The county has major employers, a well-educated workforce, busy professional services firms, and a strong startup scene. All of that creates real demand for reliable, expert digital services.',
  },
  {
    question: 'Can you help Surrey businesses compete with London agencies?',
    answer: 'Absolutely. Many Surrey businesses feel they need a London agency for quality work, but end up paying London prices without the local attention. We deliver the same calibre of web development, design, and marketing at competitive rates, with the added benefit of being local enough for face-to-face meetings and rapid on-site support.',
  },
  {
    question: 'Do you work with businesses in the Surrey tech corridor?',
    answer: 'Yes. The M3 and A3 corridors running through Surrey are home to a dense cluster of technology companies, SaaS providers, and digital businesses. We work with these organisations on web platforms, cloud infrastructure, cybersecurity, and IT support, understanding the pace and technical standards the sector requires.',
  },
  {
    question: 'How do you support Surrey professional services firms?',
    answer: 'Surrey has a high concentration of law firms, accountancy practices, wealth managers, and consultancies. We support these businesses with professional website design, local SEO, GDPR-compliant IT infrastructure, secure client portals, and ongoing IT maintenance. The goal is to make sure their technology is as polished and reliable as the services they provide.',
  },
  {
    question: 'What is your response time for IT issues in Surrey?',
    answer: 'For managed IT support clients, we aim to respond remotely within 1 hour during business hours, with critical issues prioritised within 15-30 minutes. For on-site visits across Surrey, we typically schedule within 24 hours for non-emergency issues, with same-day availability for urgent situations in nearby towns.',
  },
]

const surreyFaqSchema = {
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

const surreyTowns = [
  'Guildford', 'Woking', 'Camberley', 'Farnham', 'Godalming',
  'Cranleigh', 'Dorking', 'Epsom', 'Leatherhead', 'Reigate',
  'Redhill', 'Staines', 'Weybridge', 'Esher',
]

const Surrey = () => {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <main className="bg-white text-gray-900">
      <SEO
        title="Web Development, IT Support & Digital Marketing in Surrey | Joro Services"
        description="Joro Services delivers expert web development, IT support, SEO, cybersecurity, and digital marketing to businesses across Surrey. From Guildford to Woking, Camberley to Epsom. Free consultation available."
        keywords="web development Surrey, IT support Surrey, digital marketing Surrey, SEO Surrey, web design Surrey, cybersecurity Surrey, IT services Surrey, digital agency Surrey, IT consultancy Surrey, cloud services Surrey"
        dateModified="2026-03-20"
        jsonLd={[
          serviceSchema({
            name: 'Digital Services in Surrey',
            description: 'Full-service digital agency serving Surrey with web development, digital marketing, IT support, cybersecurity, and cloud solutions.',
            url: '/locations/surrey',
            category: 'Digital Agency',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Locations', path: '/locations/surrey' },
            { name: 'Surrey', path: '/locations/surrey' },
          ]),
          locationBusinessSchema({ town: 'Surrey', county: 'Surrey' }),
          surreyFaqSchema,
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Locations', path: '/locations/surrey' }, { name: 'Surrey' }]} />
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-accent-dark" />
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Surrey, UK</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            Digital Services for Businesses Across{' '}
            <span className="text-accent-dark">Surrey</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Surrey is one of England's most commercially active counties, with a busy tech corridor along the M3 and A3, a strong professional services sector, and thousands of businesses within easy reach of London. Joro Services provides web development, IT support, digital marketing, and cybersecurity to businesses across the county.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/getintouch"
              className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
            >
              Get a Free Consultation
            </Link>
            <a
              href="tel:+4407867374034"
              className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-accent-dark text-accent-dark font-semibold rounded-xl hover:bg-accent-dark hover:text-white transition-all text-sm"
            >
              Call 07867 374034
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 text-center">What We Offer</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">
            Our Services Across Surrey
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Whether you are a tech company in Guildford, a retailer in Epsom, a financial firm in Weybridge, or a startup in Woking, we have the expertise to support your digital growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Link
                key={i}
                to={service.link}
                className="p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition group"
              >
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent-dark transition">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Surrey businesses choose us */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-10">
            Why Surrey Businesses Trust Joro Services
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                title: 'London Quality Without London Prices',
                text: 'Surrey businesses deserve the same quality of digital services as central London firms, without the inflated agency fees. We deliver high-quality web development, IT infrastructure, and marketing at rates that make sense for businesses outside the capital.',
              },
              {
                title: 'One Partner for Everything Digital',
                text: 'Surrey businesses no longer need to juggle separate providers for web design, SEO, IT support, and cybersecurity. We manage your whole online presence with one team that understands how it all connects. Server performance affects your search rankings, and security practices protect your reputation. We handle both.',
              },
              {
                title: 'Deep Roots in the Surrey and Hampshire Region',
                text: 'Based in Aldershot on the Surrey-Hampshire border, we genuinely understand the local business landscape. We know the competition, the pressures, and the opportunities Surrey businesses deal with, and we shape our work to fit.',
              },
              {
                title: 'Built for the Surrey Business Community',
                text: 'From tech startups in the M3 corridor to established professional services firms in Guildford and wealth management companies in Weybridge, we work across the diverse sectors that make up Surrey\'s economy. Our flexible service packages adapt to businesses at every stage of growth.',
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-accent-dark mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Towns We Serve */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">
            Surrey Towns We Serve
          </h2>
          <p className="text-center text-gray-600 mb-10">
            We provide on-site and remote digital services to businesses across Surrey.
          </p>
          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3">
            {surreyTowns.map((town, i) => (
              <div key={i} className="text-center p-3 bg-white rounded-2xl border border-gray-100">
                <p className="font-medium text-sm">{town}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-10">
            Frequently Asked Questions About Our Surrey Services
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-100">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center text-left p-5"
                >
                  <span className="font-medium text-lg pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-accent-dark flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${openFaq === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Let Us Help Your Surrey Business Thrive Online
          </h2>
          <p className="text-lg mb-8 text-white/80">
            Book a free consultation and find out how we can support your digital goals across Surrey.
          </p>
          <Link
            to="/getintouch"
            className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
          >
            Book Your Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default Surrey
