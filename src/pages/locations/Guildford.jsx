import React, { useState } from 'react'
import { FaCheckCircle, FaPlus, FaMinus, FaMapMarkerAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'
import SEO from '../../component/SEO'
import { serviceSchema, breadcrumbSchema } from '../../seo/schemas'

const services = [
  {
    title: 'Web Development',
    description: 'Bespoke websites and web applications for Guildford businesses. From professional services firms on the high street to gaming studios, we build fast, modern, SEO-optimised sites.',
    link: '/development/web-development',
  },
  {
    title: 'Digital Marketing & SEO',
    description: 'Local SEO, Google Ads, content marketing, and social media strategy tailored to Guildford\'s competitive business landscape and diverse professional community.',
    link: '/digital-marketing/seo-and-content-strategy',
  },
  {
    title: 'IT Support & Maintenance',
    description: 'Proactive IT support for Guildford businesses. Remote helpdesk, on-site visits, server management, and Microsoft 365 administration to keep your operations running.',
    link: '/technical-services/it-support-and-maintenance',
  },
  {
    title: 'Cybersecurity',
    description: 'Comprehensive security services for Guildford\'s professional services and tech firms. Penetration testing, compliance audits, data protection, and real-time threat monitoring.',
    link: '/technical-services/cybersecurity',
  },
  {
    title: 'Mobile App Development',
    description: 'Cross-platform iOS and Android applications. Whether you need a customer portal, booking system, or a full consumer app, we build mobile solutions that perform.',
    link: '/development/mobile-app-development',
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Cloud strategy, migration, and managed services on AWS, Azure, and Google Cloud. We help Guildford businesses modernise their infrastructure for scalability and resilience.',
    link: '/technical-services/cloud-infrastructure',
  },
]

const faqData = [
  {
    question: 'What services does Joro Services provide in Guildford?',
    answer: 'We provide web development, digital marketing and SEO, IT support and maintenance, cybersecurity, mobile app development, cloud infrastructure, and UI/UX design services to businesses in Guildford. We work with professional services firms, gaming studios, retailers, and organisations of all sizes across the town.',
  },
  {
    question: 'Do you work with gaming and creative studios in Guildford?',
    answer: 'Yes. Guildford is one of the UK\'s leading gaming industry hubs, home to studios like EA and Supermassive Games. We provide web development, cloud infrastructure, IT support, and marketing services tailored to the specific needs of creative and gaming companies.',
  },
  {
    question: 'Can you support businesses near the University of Surrey?',
    answer: 'Absolutely. We work with businesses, spin-outs, and startups connected to the University of Surrey and its Surrey Research Park. Whether you need a website for a new venture, IT infrastructure for a growing team, or marketing to attract your first customers, we can help.',
  },
  {
    question: 'How quickly can you provide on-site IT support in Guildford?',
    answer: 'We are based in Aldershot, approximately 15 miles from Guildford. For managed IT support clients, we schedule on-site visits within 24 hours for non-critical issues. Emergency situations are prioritised, and many problems can be resolved remotely within our standard response times of 1 hour during business hours.',
  },
  {
    question: 'Do you offer SEO services for Guildford high street businesses?',
    answer: 'Yes. Local SEO is essential for Guildford\'s busy high street and surrounding retail areas. We optimise your Google Business Profile, build local citations, manage reviews, and create content that helps your business appear prominently when local customers search for your products or services.',
  },
  {
    question: 'What does a website cost for a Guildford-based business?',
    answer: 'Website costs depend on scope and complexity. A professional business website starts from around £1,500, while bespoke web applications, e-commerce platforms, or sites with complex integrations typically range from £5,000 to £25,000+. We provide a free consultation and detailed quote before any work begins.',
  },
]

const guildfordFaqSchema = {
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

const nearbyAreas = [
  { name: 'Godalming', distance: '4 miles' },
  { name: 'Woking', distance: '9 miles' },
  { name: 'Cranleigh', distance: '9 miles' },
  { name: 'Farnham', distance: '10 miles' },
  { name: 'Camberley', distance: '12 miles' },
  { name: 'Dorking', distance: '13 miles' },
  { name: 'Leatherhead', distance: '14 miles' },
  { name: 'Aldershot', distance: '15 miles' },
]

const Guildford = () => {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <main className="bg-white text-black">
      <SEO
        title="Web Development, IT Support & Digital Marketing in Guildford | Joro Services"
        description="Joro Services provides web development, SEO, IT support, cybersecurity, and cloud solutions to businesses in Guildford, Surrey. Serving professional services, gaming studios, and the University of Surrey community. Free consultation available."
        keywords="web development Guildford, IT support Guildford, digital marketing Guildford, SEO Guildford, web design Guildford, cybersecurity Guildford, mobile app development Guildford, cloud services Guildford, IT consultancy Guildford"
        jsonLd={[
          serviceSchema({
            name: 'Digital Services in Guildford',
            description: 'Full-service digital agency serving Guildford with web development, digital marketing, IT support, cybersecurity, and cloud solutions for professional services, gaming, and tech businesses.',
            url: '/locations/guildford',
            category: 'Digital Agency',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Locations', path: '/locations/guildford' },
            { name: 'Guildford', path: '/locations/guildford' },
          ]),
          guildfordFaqSchema,
        ]}
      />

      {/* Hero */}
      <section className="px-4 lg:px-20 pt-28 pb-20 lg:pt-32 lg:pb-24 min-h-[70vh] flex items-center bg-gradient-to-br from-primary via-primary-dark to-secondary text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <FaMapMarkerAlt className="text-accent-dark" />
            <span className="text-accent-dark font-semibold uppercase text-sm tracking-wide">Guildford, Surrey</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            Web Development, IT Support &amp; Digital Marketing in{' '}
            <span className="text-accent-dark">Guildford</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Guildford is Surrey's county town and one of the South East's most vibrant business centres — home to a thriving high street, the University of Surrey, and the UK's largest cluster of gaming studios. Joro Services provides expert web development, IT support, and digital marketing to businesses across Guildford and the surrounding area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/getintouch"
              className="inline-block px-8 py-3 bg-accent-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition text-center"
            >
              Get a Free Consultation
            </Link>
            <a
              href="tel:+4407867374034"
              className="inline-block px-8 py-3 border-2 border-accent-dark text-accent-dark font-semibold rounded-lg hover:bg-accent-dark hover:text-white transition text-center"
            >
              Call 07867 374034
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-20 px-4 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">What We Offer</p>
            Our Services in Guildford
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Whether you are a law firm on the high street, a gaming studio on the Surrey Research Park, or a retailer looking to sell online, we have the digital expertise to help.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Link
                key={i}
                to={service.link}
                className="p-6 border border-gray-200 rounded-2xl hover:shadow-lg transition bg-white group"
              >
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent-dark transition">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Guildford businesses choose us */}
      <section className="py-16 lg:py-20 px-4 lg:px-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10">
            Why Guildford Businesses Choose Joro Services
          </h2>
          <div className="space-y-6">
            {[
              {
                title: 'We Understand Guildford\'s Diverse Economy',
                text: 'Guildford is not a one-industry town. From professional services and legal firms to gaming studios and university spin-outs, we adapt our approach to match the specific needs and audiences of each sector.',
              },
              {
                title: 'Technical and Creative Under One Roof',
                text: 'Most agencies offer either technical services or marketing. We deliver both — meaning your website, cloud infrastructure, SEO, and cybersecurity are all managed by one team that sees the full picture.',
              },
              {
                title: 'Competitive Without Compromising Quality',
                text: 'London agencies charge London rates. We deliver the same quality of work from nearby Hampshire, passing the savings on to Guildford businesses without sacrificing technical depth or creative standards.',
              },
              {
                title: 'Long-Term Partnership, Not Project-Based',
                text: 'We build lasting relationships with Guildford businesses. From your first website to ongoing IT support, SEO retainers, and infrastructure scaling, we grow with you as your digital needs evolve.',
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <FaCheckCircle className="text-accent-dark mt-1 flex-shrink-0 text-lg" />
                <div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-16 lg:py-20 px-4 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            Areas Near Guildford We Serve
          </h2>
          <p className="text-center text-gray-600 mb-10">
            We provide on-site and remote services across Guildford and the wider Surrey and Hampshire region.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {nearbyAreas.map((area, i) => (
              <div key={i} className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold">{area.name}</p>
                <p className="text-sm text-gray-500">{area.distance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20 px-4 lg:px-20 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10">
            Frequently Asked Questions About Our Guildford Services
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
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Grow Your Guildford Business Online?
          </h2>
          <p className="text-lg mb-8 text-white/80">
            Get a free consultation and see how we can help your Guildford business compete in the digital world.
          </p>
          <Link
            to="/getintouch"
            className="inline-block bg-white text-accent font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
          >
            Book Your Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default Guildford
