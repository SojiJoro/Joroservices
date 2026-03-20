import React, { useState } from 'react'
import {
  FaPalette,
  FaPenNib,
  FaRegImage,
  FaBullhorn,
  FaPlus,
  FaMinus,
  FaCheckCircle,
} from 'react-icons/fa'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'
import SEO from '../../component/SEO'
import pagesSEO from '../../seo/pagesSEO'
import { serviceSchema, breadcrumbSchema } from '../../seo/schemas'

const painPoints = [
  'Your logo was made in Word and it shows',
  'Your branding is inconsistent — different colours, fonts, and styles everywhere',
  'You\'re using stock templates that look like everyone else\'s',
  'You know your business has outgrown its current look but don\'t know where to start',
  'You need professional marketing materials but can\'t justify a full-time designer',
]

const serviceCards = [
  {
    icon: FaPenNib,
    title: 'A Logo People Actually Remember',
    label: 'Logo Design & Identity',
    description:
      'Your logo is the first thing people see. We design logos that are clear, memorable, and actually represent what your business is about.',
    items: [
      'Custom logo concepts',
      'Multiple revision rounds',
      'Vector files for all uses',
      'Colour and mono versions',
      'Social media profile versions',
    ],
  },
  {
    icon: FaPalette,
    title: 'Look the Same Everywhere',
    label: 'Brand Guidelines',
    description:
      'We put together brand guides that cover your logo, colours, fonts, and voice, so everything looks and sounds like you no matter where it shows up.',
    items: [
      'Logo usage rules',
      'Colour palette with codes',
      'Typography selection',
      'Tone of voice guide',
      'Do\'s and don\'ts reference',
    ],
  },
  {
    icon: FaBullhorn,
    title: 'Marketing Materials That Get Noticed',
    label: 'Marketing & Promotional Design',
    description:
      'Social posts, flyers, brochures, merch. Whatever you need, we design it so your brand looks sharp and gets noticed.',
    items: [
      'Social media graphics and templates',
      'Brochures and flyers',
      'Business cards and stationery',
      'Exhibition and event materials',
      'Branded merchandise design',
    ],
  },
  {
    icon: FaRegImage,
    title: 'Tell Your Story Without Saying a Word',
    label: 'Visual Storytelling',
    description:
      'We use photos, illustrations, and smart layouts to tell your story in a way that actually makes people feel something.',
    items: [
      'Photo direction and editing',
      'Custom illustrations',
      'Infographic design',
      'Presentation design',
      'Visual content strategy',
    ],
  },
]

const portfolio = [
  {
    name: 'PathSync Recruitment Identity',
    image: '/images/branding-pathsync.jpg',
    description:
      'A bold brand with clean fonts, structured layouts, and colour-coded sections to help a tech recruitment agency stand out.',
  },
  {
    name: 'Clear Vital Social Care Branding',
    image: '/images/branding-clearvital.jpg',
    description:
      'Warm, calming colours and a friendly design system for a care service. The goal was to feel trustworthy and approachable from the first glance.',
  },
  {
    name: 'Save the Men',
    image: '/images/savethe-men.jpg',
    description:
      'A bold, content-focused brand with bright colours, fun fonts, and flexible templates built around blog and article content.',
  },
]

const pricingTiers = [
  {
    name: 'Free Brand Review',
    price: 'Free',
    features: [
      'Review of your current branding',
      'Competitor comparison',
      'Top recommendations',
      'No obligation',
    ],
    bestFor: 'Understanding where your brand stands',
    isFree: true,
  },
  {
    name: 'Logo & Identity',
    price: 'From \u00a3750',
    features: [
      'Custom logo design',
      'Colour palette and typography',
      'Logo variations (full, icon, mono)',
      'All source files included',
    ],
    bestFor: 'New businesses or those needing a fresh logo',
  },
  {
    name: 'Full Branding Package',
    price: 'From \u00a32,000',
    features: [
      'Everything in Logo & Identity, plus:',
      'Brand guidelines document',
      'Business card and stationery design',
      'Social media templates',
      'Presentation template',
    ],
    bestFor: 'Businesses that want a complete, consistent brand',
    highlighted: true,
  },
  {
    name: 'Ongoing Design Retainer',
    price: 'From \u00a3400/month',
    features: [
      'Dedicated design hours each month',
      'Social media graphics',
      'Marketing materials as needed',
      'Brand consistency management',
      'Priority turnaround',
    ],
    bestFor: 'Businesses that need regular design support without hiring in-house',
  },
]

const faqData = [
  {
    question: 'What\'s included in a branding package?',
    answer:
      'Our branding packages typically include a custom logo, colour palette, typography selection, and a brand guidelines document. Depending on what you need, we can also include business card design, social media templates, letterheads, and other branded materials. We tailor every package to the business, so you only pay for what you actually need.',
  },
  {
    question: 'How long does a branding project take?',
    answer:
      'A logo and basic brand identity usually takes 2 to 4 weeks. A full branding project with guidelines, templates, and marketing materials can take 4 to 8 weeks. The biggest factor is feedback time on your end. We keep things moving and don\'t drag projects out.',
  },
  {
    question: 'Can you rebrand an existing business?',
    answer:
      'Yes, and it\'s something we do regularly. Whether you need a complete overhaul or just want to tighten up what you\'ve got, we can modernise your logo, refresh your colour scheme, and create proper brand guidelines. We\'ll make sure the new look still feels like your business, just a better version of it.',
  },
  {
    question: 'Do I own the final designs?',
    answer:
      'Absolutely. Once the project is complete and paid for, you own all the final files outright. We hand over everything in the formats you need, including vector files, PNGs, and any other assets. You\'re free to use them however you like without any ongoing fees or licensing.',
  },
]

const brandingFaqSchema = {
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

const GraphicBranding = () => {
  const [openFaq, setOpenFaq] = useState(null)

  return (
  <main className="bg-white text-gray-900">
    <SEO
      {...pagesSEO['/creative-solutions/graphic-design-and-branding']}
      jsonLd={[
        serviceSchema({
          name: 'Graphic Design and Branding',
          description: 'Expert graphic design and branding services in Aldershot, Hampshire.',
          url: '/creative-solutions/graphic-design-and-branding',
          category: 'Graphic Design',
        }),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Creative Solutions', path: '/creative-solutions' },
          { name: 'Graphic Design & Branding', path: '/creative-solutions/graphic-design-and-branding' },
        ]),
        brandingFaqSchema,
      ]}
    />

    {/* Hero Section */}
    <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Graphic Design & Branding</p>
        <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight max-w-3xl">Graphic Design & Branding in Aldershot, Hampshire</h1>
        <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-2xl">
          We help businesses in Aldershot, Farnborough, Farnham, Camberley, and across Hampshire build brands that people remember. Your design is the first thing customers notice. It tells them who you are before you say a word. We make sure it says the right thing, stays consistent, and actually connects with the people you want to reach.
        </p>
        <Link
          to="/getintouch"
          className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
        >
          Start Your Brand Project <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>

    {/* Pain Points */}
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10">
          Sound Familiar?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-white rounded-2xl border border-gray-100 p-7"
            >
              <span className="text-red-400 mt-1 text-lg">"</span>
              <p className="text-gray-600 leading-relaxed italic">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Service Cards */}
    <section id="services" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 text-center">Our Services</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceCards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-md transition"
            >
              <card.icon className="text-3xl text-accent mb-4" />
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-1">
                {card.label}
              </p>
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm mb-4">{card.description}</p>
              <ul className="space-y-2">
                {card.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <FaCheckCircle className="text-accent mt-0.5 flex-shrink-0 text-xs" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Differentiator */}
    <section className="py-20 lg:py-28 bg-gradient-to-br from-primary via-primary-dark to-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6 max-w-3xl mx-auto">
          Brand + Web + Marketing From One Team
        </h2>
        <p className="text-white/70 text-lg leading-relaxed max-w-3xl mx-auto">
          Most design agencies stop at the logo. We don't. We can take your brand from concept all the way through to a live website, social media templates, and marketing materials. One team, one vision, everything consistent. No briefing three different agencies and hoping they all get it right.
        </p>
      </div>
    </section>

    {/* Portfolio Section */}
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 text-center">Our Work</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">Recent Brand Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map((project, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition"
            >
              <img src={project.image} alt={project.name} className="h-48 w-full object-cover" loading="lazy" decoding="async" />
              <div className="p-7">
                <h3 className="text-xl font-semibold text-accent">{project.name}</h3>
                <p className="text-gray-600 leading-relaxed text-sm mt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Pricing */}
    <section id="pricing" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 text-center">Pricing</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
          Transparent Pricing
        </h2>
        <p className="text-center text-gray-600 leading-relaxed mb-12">
          You only pay for what you need. No bloated packages.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingTiers.map((tier, i) => (
            <div
              key={i}
              className={`rounded-2xl p-7 border ${
                tier.highlighted
                  ? 'border-accent shadow-lg relative'
                  : tier.isFree
                  ? 'border-accent/30 bg-accent/5'
                  : 'border-gray-100'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-lg font-bold mb-1">{tier.name}</h3>
              <div className="text-xl font-bold text-accent mb-4">
                {tier.price}
              </div>
              <ul className="space-y-2 mb-6">
                {tier.features.map((feature, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <FaCheckCircle className="text-accent mt-0.5 flex-shrink-0 text-xs" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-500 italic mb-4">
                Best for: "{tier.bestFor}"
              </p>
              <Link
                to="/getintouch"
                className={`inline-block w-full text-center px-4 py-2.5 font-semibold rounded-xl transition text-sm ${
                  tier.highlighted
                    ? 'bg-accent text-white hover:bg-accent-dark'
                    : 'border-2 border-accent text-accent hover:bg-accent hover:text-white'
                }`}
              >
                {tier.isFree ? 'Get Free Review' : 'Get Started'}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-100 rounded-2xl bg-white"
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
            Why Local Businesses Choose Us
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              We're an Aldershot-based design agency, and we work with businesses right across Hampshire and Surrey. That means we can sit down with you, understand your market, and create a brand that actually fits.
            </p>
            <p>
              Companies in Farnborough, Fleet, Farnham, Camberley, and Guildford come to us because we don't overcomplicate things. You get a clear brief, honest feedback, and designs that are ready to use. No endless revision loops or vague creative waffle.
            </p>
            <p>
              Whether you're a new business needing a brand from scratch or an established company that's outgrown its current look, we'll give you something you're proud to put your name on.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Related Services */}
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
          Related Services
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Branding works best alongside these services.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/creative-solutions/website-design" className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-md transition block">
            <h3 className="text-lg font-bold mb-2">Website Design</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Need a website to match your new brand? We design sites that look great and bring in business.</p>
          </Link>
          <Link to="/creative-solutions/user-interface-and-experience" className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-md transition block">
            <h3 className="text-lg font-bold mb-2">UI/UX Design</h3>
            <p className="text-gray-600 text-sm leading-relaxed">For apps and digital products that need thoughtful user experience design alongside strong visuals.</p>
          </Link>
          <Link to="/digital-marketing/social-media-management" className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-md transition block">
            <h3 className="text-lg font-bold mb-2">Social Media Management</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Put your new brand to work on social media with consistent, professional content.</p>
          </Link>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">
          Your Brand Is More Than a Logo. Make It Count.
        </h2>
        <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
          Start with a free brand review. We'll tell you what's working, what's not, and what it'll take to build a brand people remember.
        </p>
        <Link
          to="/getintouch"
          className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
        >
          Get Your Free Brand Review <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>

    <Footer />
  </main>
  )
}

export default GraphicBranding
