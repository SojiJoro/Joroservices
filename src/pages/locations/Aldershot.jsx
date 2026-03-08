import React, { useState } from 'react'
import { CheckCircle, ChevronDown, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'
import SEO from '../../component/SEO'
import { serviceSchema, breadcrumbSchema } from '../../seo/schemas'

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built with React, Next.js, and modern technologies. SEO-optimised, mobile-first, and designed to convert.',
    link: '/development/web-development',
  },
  {
    title: 'Digital Marketing & SEO',
    description: 'Search engine optimisation, PPC advertising, social media management, and content strategy to grow your online presence in Aldershot and beyond.',
    link: '/digital-marketing/seo-and-content-strategy',
  },
  {
    title: 'IT Support & Maintenance',
    description: 'Proactive IT support, helpdesk services, security patching, and infrastructure maintenance. We keep Aldershot businesses running smoothly.',
    link: '/technical-services/it-support-and-maintenance',
  },
  {
    title: 'Cybersecurity',
    description: 'Penetration testing, security audits, GDPR compliance, and 24/7 monitoring to protect your business from cyber threats.',
    link: '/technical-services/cybersecurity',
  },
  {
    title: 'Mobile App Development',
    description: 'iOS and Android apps built with React Native and Flutter. From MVPs to full-featured applications for businesses of all sizes.',
    link: '/development/mobile-app-development',
  },
  {
    title: 'Cloud Infrastructure',
    description: 'AWS, Azure, and Google Cloud solutions. We design, migrate, and manage cloud infrastructure for scalability and cost efficiency.',
    link: '/technical-services/cloud-infrastructure',
  },
]

const faqData = [
  {
    question: 'What services does Joro Services offer in Aldershot?',
    answer: 'Joro Services provides web development, digital marketing (SEO, PPC, social media), IT support and maintenance, cybersecurity, mobile app development, cloud infrastructure, UI/UX design, and graphic design and branding. We are the only Aldershot-based agency combining all these services under one roof.',
  },
  {
    question: 'Where exactly are you based in Aldershot?',
    answer: 'Joro Services is based in Aldershot, Hampshire, with a registered office at Kemp House, 152-160 City Road, London EC1V 2NX. We serve businesses across Aldershot, Farnborough, Farnham, Camberley, Guildford, Fleet, and the wider Hampshire and Surrey area.',
  },
  {
    question: 'Do you offer on-site IT support in Aldershot?',
    answer: 'Yes, we provide both remote and on-site IT support for businesses in Aldershot and surrounding areas. Our team can visit your premises for hardware issues, network setup, and any hands-on technical work that requires physical presence.',
  },
  {
    question: 'How much does web design cost in Aldershot?',
    answer: 'Web design costs depend on the complexity and features required. A standard business website starts from around £1,500, while more complex web applications range from £5,000 to £25,000+. We offer a free consultation to discuss your requirements and provide a detailed quote.',
  },
  {
    question: 'Can you help my Aldershot business rank higher on Google?',
    answer: 'Absolutely. We specialise in local SEO for Aldershot and Hampshire businesses. Our approach includes technical SEO, content strategy, Google Business Profile optimisation, local citation building, and review management to improve your visibility in local search results.',
  },
  {
    question: 'Do you work with small businesses in Aldershot?',
    answer: 'Yes, we work with businesses of all sizes in Aldershot, from sole traders and startups to established SMEs and larger organisations. Our flexible service packages are designed to scale with your business needs and budget.',
  },
]

const aldershotFaqSchema = {
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
  { name: 'Farnborough', distance: '3 miles' },
  { name: 'Farnham', distance: '5 miles' },
  { name: 'Fleet', distance: '6 miles' },
  { name: 'Camberley', distance: '7 miles' },
  { name: 'Guildford', distance: '15 miles' },
  { name: 'Basingstoke', distance: '18 miles' },
  { name: 'Reading', distance: '22 miles' },
  { name: 'Woking', distance: '18 miles' },
]

const Aldershot = () => {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <main className="bg-white text-gray-900">
      <SEO
        title="Web Development, IT Support & Digital Marketing in Aldershot | Joro Services"
        description="Joro Services is Aldershot's only full-service digital agency. We provide web development, SEO, IT support, cybersecurity, mobile app development, and cloud solutions for local businesses. Free consultation available."
        keywords="web development Aldershot, IT support Aldershot, digital marketing Aldershot, SEO Aldershot, web design Aldershot, cybersecurity Aldershot, mobile app development Aldershot, cloud services Aldershot, IT consultancy Aldershot"
        jsonLd={[
          serviceSchema({
            name: 'Digital Services in Aldershot',
            description: 'Full-service digital agency in Aldershot providing web development, digital marketing, IT support, cybersecurity, and cloud solutions.',
            url: '/locations/aldershot',
            category: 'Digital Agency',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Locations', path: '/locations/aldershot' },
            { name: 'Aldershot', path: '/locations/aldershot' },
          ]),
          aldershotFaqSchema,
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-accent-dark" />
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Aldershot, Hampshire</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            Web Development, IT Support &amp; Digital Marketing in{' '}
            <span className="text-accent-dark">Aldershot</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Joro Services is the only Aldershot-based agency combining IT consultancy, web development, digital marketing, and creative solutions under one roof. We help local businesses grow online with expert technical services and results-driven marketing.
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
            Our Services in Aldershot
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            From building your website to managing your IT infrastructure, we deliver the full spectrum of digital services to Aldershot businesses.
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

      {/* Why Aldershot businesses choose us */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-10">
            Why Aldershot Businesses Choose Joro Services
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                title: 'Local Expertise, National Reach',
                text: 'Based in Aldershot, we understand the local business landscape. Whether you serve customers on the high street or across the UK, we tailor our approach to your market.',
              },
              {
                title: 'One Agency, Every Digital Service',
                text: 'No need to juggle multiple suppliers. We handle your website, SEO, IT support, cybersecurity, and cloud infrastructure — all under one roof, with one point of contact.',
              },
              {
                title: 'Transparent Pricing, No Lock-In',
                text: 'We believe in clear pricing and flexible contracts. You know exactly what you are paying for, and we earn your continued business through results, not lock-in clauses.',
              },
              {
                title: 'Technical Depth Others Cannot Match',
                text: 'Most web agencies cannot fix server performance issues. Most IT companies do not do marketing. We bridge both worlds — our technical infrastructure expertise directly improves your SEO and site performance.',
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
            Areas Near Aldershot We Serve
          </h2>
          <p className="text-center text-gray-600 mb-10">
            We provide on-site and remote services across Hampshire, Surrey, and the wider South East.
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
            Frequently Asked Questions About Our Aldershot Services
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
            Ready to Grow Your Aldershot Business Online?
          </h2>
          <p className="text-lg mb-8 text-white/80">
            Get a free consultation and discover how we can help your business thrive in the digital world.
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

export default Aldershot
