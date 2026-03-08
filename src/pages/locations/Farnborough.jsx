import React, { useState } from 'react'
import { CheckCircle, ChevronDown, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'
import SEO from '../../component/SEO'
import { serviceSchema, breadcrumbSchema } from '../../seo/schemas'

const services = [
  {
    title: 'Web Development',
    description: 'High-performance websites and web applications for Farnborough businesses. Built with React, Next.js, and modern frameworks — optimised for speed, security, and search rankings.',
    link: '/development/web-development',
  },
  {
    title: 'Digital Marketing & SEO',
    description: 'Data-driven SEO, PPC campaigns, and social media marketing to help Farnborough businesses stand out in a competitive tech-driven market.',
    link: '/digital-marketing/seo-and-content-strategy',
  },
  {
    title: 'IT Support & Maintenance',
    description: 'Reliable IT support for Farnborough\'s defence, aerospace, and tech businesses. Helpdesk, infrastructure management, and proactive monitoring to minimise downtime.',
    link: '/technical-services/it-support-and-maintenance',
  },
  {
    title: 'Cybersecurity',
    description: 'Enterprise-grade security for Farnborough businesses handling sensitive data. Penetration testing, vulnerability assessments, GDPR compliance, and ongoing threat monitoring.',
    link: '/technical-services/cybersecurity',
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps for iOS and Android. From internal tools for aerospace firms to customer-facing apps for Farnborough startups.',
    link: '/development/mobile-app-development',
  },
  {
    title: 'Cloud Infrastructure',
    description: 'AWS, Azure, and Google Cloud solutions tailored to Farnborough\'s tech sector. Scalable architecture, migration support, and ongoing management.',
    link: '/technical-services/cloud-infrastructure',
  },
]

const faqData = [
  {
    question: 'What digital services does Joro Services offer in Farnborough?',
    answer: 'Joro Services provides web development, digital marketing and SEO, IT support and maintenance, cybersecurity, mobile app development, cloud infrastructure, and UI/UX design to businesses in Farnborough. We specialise in working with tech, defence, and aerospace sector clients alongside high-street businesses and startups.',
  },
  {
    question: 'Do you work with defence and aerospace companies near Farnborough Airport?',
    answer: 'Yes, we have experience working with businesses in the defence and aerospace sector around Farnborough. We understand the security requirements, compliance standards, and technical demands these organisations face, and we provide services that meet the rigorous standards expected in this industry.',
  },
  {
    question: 'How far is Joro Services from Farnborough?',
    answer: 'Joro Services is based in Aldershot, just 3 miles from Farnborough town centre. We can be on-site in Farnborough within minutes for face-to-face meetings, IT support visits, or any hands-on technical work your business requires.',
  },
  {
    question: 'Can you help a Farnborough startup build its digital presence from scratch?',
    answer: 'Absolutely. We work with startups at every stage — from building your first website and setting up cloud infrastructure to creating a digital marketing strategy that drives early traction. Farnborough\'s growing startup ecosystem means we understand the lean, fast-paced approach founders need.',
  },
  {
    question: 'Do you provide cybersecurity services for Farnborough tech companies?',
    answer: 'Yes. We offer penetration testing, security audits, vulnerability assessments, and ongoing monitoring designed for tech businesses handling sensitive data. With QinetiQ, BAE Systems, and other defence contractors operating nearby, we understand the elevated security expectations in the Farnborough area.',
  },
  {
    question: 'What does web design cost for a Farnborough business?',
    answer: 'A standard business website typically starts from around £1,500, while more complex web applications and e-commerce platforms range from £5,000 to £25,000+. We offer a free consultation to understand your requirements and provide a transparent, detailed quote with no hidden fees.',
  },
]

const farnboroughFaqSchema = {
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
  { name: 'Blackwater', distance: '2 miles' },
  { name: 'Aldershot', distance: '3 miles' },
  { name: 'Ash', distance: '3 miles' },
  { name: 'Yateley', distance: '3 miles' },
  { name: 'Fleet', distance: '4 miles' },
  { name: 'Sandhurst', distance: '4 miles' },
  { name: 'Camberley', distance: '5 miles' },
  { name: 'Farnham', distance: '6 miles' },
]

const Farnborough = () => {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <main className="bg-white text-gray-900">
      <SEO
        title="Web Development, IT Support & Digital Marketing in Farnborough | Joro Services"
        description="Joro Services provides web development, SEO, IT support, cybersecurity, and cloud solutions to businesses in Farnborough. Serving the defence, aerospace, and tech sectors near Farnborough Airport. Free consultation available."
        keywords="web development Farnborough, IT support Farnborough, digital marketing Farnborough, SEO Farnborough, web design Farnborough, cybersecurity Farnborough, mobile app development Farnborough, cloud services Farnborough, IT consultancy Farnborough"
        jsonLd={[
          serviceSchema({
            name: 'Digital Services in Farnborough',
            description: 'Full-service digital agency near Farnborough providing web development, digital marketing, IT support, cybersecurity, and cloud solutions for tech and defence sector businesses.',
            url: '/locations/farnborough',
            category: 'Digital Agency',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Locations', path: '/locations/farnborough' },
            { name: 'Farnborough', path: '/locations/farnborough' },
          ]),
          farnboroughFaqSchema,
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-accent-dark" />
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Farnborough, Hampshire</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            Web Development, IT Support &amp; Digital Marketing in{' '}
            <span className="text-accent-dark">Farnborough</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Farnborough is a hub for defence, aerospace, and technology — home to Farnborough Airport, QinetiQ, and a growing community of startups and tech firms. Joro Services delivers expert web development, IT support, cybersecurity, and digital marketing to businesses across this thriving tech corridor.
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

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 text-center">What We Offer</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">
            Our Services in Farnborough
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Whether you are a defence contractor near Farnborough Airport or a startup in the town centre, we provide the digital services you need to grow and stay secure.
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

      {/* Why Farnborough businesses choose us */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-10">
            Why Farnborough Businesses Choose Joro Services
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                title: 'Minutes Away, Not Miles',
                text: 'Based just 3 miles away in Aldershot, we can be at your Farnborough office in minutes. You get the responsiveness of a local IT partner with the technical depth of a specialist agency.',
              },
              {
                title: 'Built for Tech and Defence',
                text: 'Farnborough\'s economy revolves around aerospace, defence, and technology. We understand the security standards, compliance requirements, and technical expectations that businesses in these sectors demand.',
              },
              {
                title: 'Startup-Friendly Packages',
                text: 'Farnborough\'s startup scene is growing rapidly. We offer flexible, scalable service packages that let early-stage businesses access professional web development, cloud infrastructure, and marketing without enterprise-level budgets.',
              },
              {
                title: 'Security-First Approach',
                text: 'With defence contractors and data-sensitive tech firms operating in the area, security is not optional. Our cybersecurity expertise means your website, cloud infrastructure, and IT systems are built with protection at their core.',
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

      {/* Areas We Serve */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">
            Areas Near Farnborough We Serve
          </h2>
          <p className="text-center text-gray-600 mb-10">
            We provide on-site and remote services across the Farnborough area and wider Hampshire and Surrey region.
          </p>
          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
            {nearbyAreas.map((area, i) => (
              <div key={i} className="text-center p-4 bg-white rounded-2xl border border-gray-100">
                <p className="font-semibold">{area.name}</p>
                <p className="text-sm text-gray-500">{area.distance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-10">
            Frequently Asked Questions About Our Farnborough Services
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
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
            Ready to Grow Your Farnborough Business Online?
          </h2>
          <p className="text-lg mb-8 text-white/80">
            Get a free consultation and discover how our digital services can help your Farnborough business thrive.
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

export default Farnborough
