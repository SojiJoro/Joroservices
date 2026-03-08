import React, { useState } from 'react'
import { CheckCircle, ChevronDown, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'
import SEO from '../../component/SEO'
import { serviceSchema, breadcrumbSchema } from '../../seo/schemas'

const services = [
  {
    title: 'Web Development',
    description: 'Professional websites and web applications for Camberley businesses. Clean, responsive design paired with robust development — built to reflect the quality your clients expect.',
    link: '/development/web-development',
  },
  {
    title: 'Digital Marketing & SEO',
    description: 'Local SEO, Google Ads, and strategic content marketing to help Camberley businesses attract more customers. We target the Surrey Heath area and beyond.',
    link: '/digital-marketing/seo-and-content-strategy',
  },
  {
    title: 'IT Support & Maintenance',
    description: 'Proactive IT support for Camberley offices. Helpdesk, device management, network monitoring, Microsoft 365 administration, and on-site troubleshooting when needed.',
    link: '/technical-services/it-support-and-maintenance',
  },
  {
    title: 'Cybersecurity',
    description: 'Comprehensive security services for Camberley businesses. Penetration testing, Cyber Essentials certification support, GDPR compliance, and ongoing threat monitoring.',
    link: '/technical-services/cybersecurity',
  },
  {
    title: 'Mobile App Development',
    description: 'iOS and Android app development for Camberley businesses and startups. We handle the full lifecycle from concept and design through to launch and ongoing maintenance.',
    link: '/development/mobile-app-development',
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Cloud strategy and management on AWS, Azure, and Google Cloud. We help Camberley organisations migrate, optimise, and secure their cloud environments.',
    link: '/technical-services/cloud-infrastructure',
  },
]

const faqData = [
  {
    question: 'What digital services does Joro Services offer in Camberley?',
    answer: 'We provide web development, digital marketing and SEO, IT support, cybersecurity, mobile app development, cloud infrastructure, and UI/UX design services to businesses in Camberley and across the Surrey Heath area. We work with businesses of all sizes, from independent professionals to larger organisations.',
  },
  {
    question: 'Why is Camberley a good location for business IT services?',
    answer: 'Camberley sits at the heart of the Surrey Heath business community, with excellent transport links via the M3 and direct trains to London Waterloo. The town has a strong base of professional services firms, retail businesses, and growing enterprises that benefit from having a local digital partner who understands the area.',
  },
  {
    question: 'Do you provide IT support to businesses near the Royal Military Academy Sandhurst?',
    answer: 'Yes. We serve businesses across Camberley, Sandhurst, Frimley, and the surrounding area. Whether your office is near the town centre, the Watchmoor Park business area, or closer to Sandhurst, we provide both remote and on-site IT support.',
  },
  {
    question: 'Can you help Camberley retailers with e-commerce websites?',
    answer: 'Absolutely. Camberley has a strong retail community, and we help local retailers expand online with custom e-commerce websites. We build on platforms like Shopify and WooCommerce, or create fully bespoke solutions, with integrated payment processing, stock management, and SEO optimisation.',
  },
  {
    question: 'How much does IT support cost for a small business in Camberley?',
    answer: 'IT support costs depend on the number of users and the level of service required. Our managed IT support packages for small businesses typically start from around £30-50 per user per month. We offer a free consultation to assess your needs and provide a tailored quote.',
  },
  {
    question: 'Do you offer cybersecurity services for Camberley professional services firms?',
    answer: 'Yes. Camberley is home to many accountancy practices, solicitors, financial advisers, and consultancies that handle sensitive client data. We provide cybersecurity services including Cyber Essentials certification, GDPR compliance audits, staff security awareness training, and ongoing threat monitoring to keep your practice protected.',
  },
]

const camberleyFaqSchema = {
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
  { name: 'Frimley', distance: '1 mile' },
  { name: 'Sandhurst', distance: '2 miles' },
  { name: 'Bagshot', distance: '3 miles' },
  { name: 'Lightwater', distance: '3 miles' },
  { name: 'Yateley', distance: '4 miles' },
  { name: 'Farnborough', distance: '5 miles' },
  { name: 'Aldershot', distance: '7 miles' },
  { name: 'Bracknell', distance: '7 miles' },
]

const Camberley = () => {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <main className="bg-white text-gray-900">
      <SEO
        title="Web Development, IT Support & Digital Marketing in Camberley | Joro Services"
        description="Joro Services provides expert web development, SEO, IT support, cybersecurity, and cloud solutions to businesses in Camberley and Surrey Heath. Trusted by professional services firms and local businesses. Free consultation available."
        keywords="web development Camberley, IT support Camberley, digital marketing Camberley, SEO Camberley, web design Camberley, cybersecurity Camberley, mobile app development Camberley, cloud services Camberley, IT consultancy Camberley, digital agency Surrey Heath"
        jsonLd={[
          serviceSchema({
            name: 'Digital Services in Camberley',
            description: 'Full-service digital agency providing web development, digital marketing, IT support, cybersecurity, and cloud solutions to businesses in Camberley, Surrey.',
            url: '/locations/camberley',
            category: 'Digital Agency',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Locations', path: '/locations/camberley' },
            { name: 'Camberley', path: '/locations/camberley' },
          ]),
          camberleyFaqSchema,
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-accent-dark" />
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Camberley, Surrey</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            Web Development, IT Support &amp; Digital Marketing in{' '}
            <span className="text-accent-dark">Camberley</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Camberley is an affluent Surrey town with a strong professional services community, thriving retail sector, and growing business hub around the Surrey Heath area. Joro Services provides web development, IT support, cybersecurity, and digital marketing to help Camberley businesses build a powerful online presence and streamline their technology.
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
            Our Services in Camberley
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            From professional websites for established firms to IT infrastructure for growing teams, we deliver the full range of digital services to Camberley businesses.
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

      {/* Why Camberley businesses choose us */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-10">
            Why Camberley Businesses Choose Joro Services
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                title: 'We Understand the Surrey Heath Market',
                text: 'Camberley is the commercial heart of Surrey Heath, with a business community that values quality and professionalism. We deliver digital services that reflect those standards — polished websites, reliable IT systems, and marketing strategies that generate results.',
              },
              {
                title: 'Close Enough for a Same-Day Visit',
                text: 'Based just 7 miles away in Aldershot, we can be at your Camberley office the same day for on-site IT support, project kick-off meetings, or technical consultations. You get the responsiveness of a local provider with the capabilities of a full-service agency.',
              },
              {
                title: 'Everything Digital, Under One Roof',
                text: 'Rather than coordinating between a web designer in London, an IT company in Reading, and a marketing freelancer, Camberley businesses work with us as a single partner for web development, SEO, IT support, cybersecurity, and cloud services.',
              },
              {
                title: 'Trusted by Professional Services Firms',
                text: 'We understand the specific needs of accountants, solicitors, financial advisers, and consultancies — from GDPR-compliant data handling and secure client portals to professional branding and local search visibility.',
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
            Areas Near Camberley We Serve
          </h2>
          <p className="text-center text-gray-600 mb-10">
            We provide on-site and remote services across Surrey Heath, Hampshire, and Berkshire.
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
            Frequently Asked Questions About Our Camberley Services
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
            Ready to Strengthen Your Camberley Business Online?
          </h2>
          <p className="text-lg mb-8 text-white/80">
            Book a free consultation and discover how our digital services can help your business stand out in Surrey Heath and beyond.
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

export default Camberley
