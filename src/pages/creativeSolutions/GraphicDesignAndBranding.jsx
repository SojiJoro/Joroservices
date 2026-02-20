import React, { useState, useEffect } from 'react'
import {
  FaPenNib,
  FaPalette,
  FaBullhorn,
  FaRegImage,
  FaBook,
  FaRedo,
  FaPlus,
  FaMinus,
  FaCheckCircle,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'

const serviceCards = [
  {
    icon: FaPenNib,
    title: 'A Logo That Actually Means Something',
    label: 'Logo Design & Identity',
    description:
      'Your logo is the face of your business. We create timeless, versatile logos that work at every size — from business cards to billboards — and express who you are at a glance.',
    items: [
      'Multiple concept directions',
      'Unlimited revisions until you\'re happy',
      'Full vector files (SVG, AI, EPS)',
      'Variations for different backgrounds and sizes',
    ],
  },
  {
    icon: FaPalette,
    title: 'Consistency That Builds Trust',
    label: 'Brand Guidelines',
    description:
      'A brand guide makes sure your business looks professional and consistent everywhere — website, social media, print, signage. No more guessing which shade of blue to use.',
    items: [
      'Logo usage rules and clear space',
      'Colour palette with hex, RGB, and CMYK values',
      'Typography system and hierarchy',
      'Tone of voice and messaging guide',
    ],
  },
  {
    icon: FaBullhorn,
    title: 'Marketing Materials That Actually Get Used',
    label: 'Marketing & Print Design',
    description:
      'From social media graphics to brochures, business cards to exhibition stands — we design marketing materials that are on-brand, professional, and ready to print or post.',
    items: [
      'Business cards and stationery',
      'Brochures, flyers, and leaflets',
      'Social media templates',
      'Exhibition and event materials',
    ],
  },
  {
    icon: FaRegImage,
    title: 'Visual Stories That Connect',
    label: 'Visual Storytelling',
    description:
      'Great brands tell stories. We combine photography direction, illustration, layout, and typography to create visual narratives that build emotional connection with your audience.',
    items: [
      'Photo direction and art direction',
      'Custom illustration',
      'Infographic design',
      'Brand photography guidance',
    ],
  },
  {
    icon: FaBook,
    title: 'Everything in One Place',
    label: 'Brand Asset Library',
    description:
      'We deliver an organised brand asset library with everything your team needs — logos, templates, fonts, colour codes, and guidelines — so anyone can create on-brand content.',
    items: [
      'Organised file structure',
      'Print-ready and web-ready formats',
      'Editable templates (Canva, Figma, or Adobe)',
      'Asset usage documentation',
    ],
  },
  {
    icon: FaRedo,
    title: 'Your Brand Has Outgrown Its Look',
    label: 'Brand Refresh',
    description:
      'Not every brand needs a complete overhaul. Sometimes a refresh — modernised logo, updated colours, cleaner guidelines — is all you need to feel current without losing recognition.',
    items: [
      'Brand audit and assessment',
      'Logo modernisation',
      'Colour and typography update',
      'Updated guidelines and templates',
    ],
  },
]

const stats = [
  {
    value: '40+',
    label: 'Brand identities created',
  },
  {
    value: '100%',
    label: 'Clients receive full brand guidelines',
  },
  {
    value: 'Print & Digital',
    label: 'Assets ready for every medium',
  },
  {
    value: 'Unlimited',
    label: 'Revisions on logo design',
  },
]

const painPoints = [
  'Our logo was made in Microsoft Word and it shows',
  'We use different colours and fonts everywhere — nothing looks consistent',
  'We had a logo designed on Fiverr and it doesn\'t work on anything',
  'Every time we need a flyer or social post, we\'re starting from scratch',
  'Our brand doesn\'t reflect how good our actual service is',
  'We\'ve grown and our branding hasn\'t grown with us',
]

const pricingTiers = [
  {
    name: 'Logo & Essentials',
    price: 'From £750',
    features: [
      'Custom logo design (3 concepts)',
      'Unlimited revisions',
      'Full vector files',
      'Basic colour palette',
      'Business card design',
    ],
    bestFor: 'New businesses that need a professional logo',
  },
  {
    name: 'Full Brand Identity',
    price: 'From £2,500',
    features: [
      'Everything in Logo & Essentials, plus:',
      'Comprehensive brand guidelines',
      'Typography system',
      'Social media templates',
      'Stationery design',
      'Brand asset library',
    ],
    bestFor: 'Businesses that want a complete, consistent brand',
    highlighted: true,
  },
  {
    name: 'Brand Refresh',
    price: 'From £1,500',
    features: [
      'Brand audit and assessment',
      'Logo modernisation',
      'Updated colour and typography',
      'Refreshed guidelines',
      'Updated templates and assets',
    ],
    bestFor: 'Established businesses that need a modern update',
  },
]

const faqData = [
  {
    question: 'How many logo concepts do we get to choose from?',
    answer:
      'We typically present 3 distinct concepts, each with a different creative direction. You pick the one that resonates, and we refine it until you\'re completely happy. Unlimited revisions on the chosen direction.',
  },
  {
    question: 'What files do we receive?',
    answer:
      'You get full vector files (SVG, AI, EPS) plus ready-to-use formats (PNG, JPG) in multiple sizes. For brand identity projects, you also get editable templates, brand guidelines PDF, and a complete asset library.',
  },
  {
    question: 'How long does a branding project take?',
    answer:
      'A logo project typically takes 1-2 weeks. A full brand identity takes 3-4 weeks. Brand refreshes are usually 2-3 weeks. We\'ll give you a clear timeline before we start.',
  },
  {
    question: 'Can you match our existing brand colours?',
    answer:
      'Absolutely. If you already have colours you like, we\'ll work with them. If your colours need updating, we\'ll explain why and suggest improvements while keeping the essence of what makes your brand recognisable.',
  },
  {
    question: 'Do you design social media templates?',
    answer:
      'Yes — this is included in our Full Brand Identity package. We create templates in Canva or Figma that your team can use to create on-brand social posts independently.',
  },
  {
    question: 'What if we just need a logo refresh, not a complete rebrand?',
    answer:
      'That\'s our Brand Refresh package. We modernise your existing logo, update colours and fonts, and create clean guidelines — without losing the recognition you\'ve built.',
  },
]

const GraphicBranding = () => {
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    document.title =
      'Graphic Design & Branding London | Logo Design & Brand Identity | Joro Services'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Professional graphic design and branding for small businesses. Custom logos, brand guidelines, marketing materials. From £750. Free consultation available.'
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
              Graphic Design & Branding
            </p>
            <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              Your Brand Should Look as Good{' '}
              <span className="text-accent-dark">
                as Your Service Actually Is.
              </span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Great design isn't decoration — it's communication. We create
              brand identities that tell your story, build trust, and make you
              look as professional as you are. Logo, guidelines, templates —
              everything you need to show up consistently.
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
                See What We Create
              </a>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              What a Brand Identity Includes
            </h3>
            <div className="space-y-3">
              {[
                { label: 'Custom Logo', sub: 'Multiple concepts, unlimited revisions' },
                { label: 'Brand Guidelines', sub: 'Colours, fonts, tone of voice' },
                { label: 'Marketing Templates', sub: 'Social, print, and digital' },
                { label: 'Asset Library', sub: 'Everything organised and ready to use' },
                { label: 'Full File Delivery', sub: 'Vector, print-ready, and web formats' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 bg-white rounded-lg p-3 border border-gray-100">
                  <FaCheckCircle className="text-accent-dark flex-shrink-0" />
                  <div>
                    <span className="font-medium text-gray-800">{item.label}</span>
                    <p className="text-xs text-gray-500">{item.sub}</p>
                  </div>
                </div>
              ))}
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
            These are the branding problems we solve most often:
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
            Your brand deserves better. And it's{' '}
            <strong>more affordable than you think</strong>.
          </p>
        </div>
      </section>

      {/* Section 4: Service Cards */}
      <section id="services" className="py-16 lg:py-20 px-4 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            What We Create
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

      {/* Section 5: Pricing */}
      <section className="py-16 lg:py-20 px-4 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            Pricing
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Clear pricing. No hidden fees.
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

      {/* Section 6: FAQ */}
      <section className="py-16 lg:py-20 px-4 lg:px-20 bg-gray-50">
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

      {/* Section 7: Bottom CTA */}
      <section className="bg-accent-dark text-white py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Your Brand Is Your First Impression. Make It Count.
          </h2>
          <p className="text-lg mb-8 text-white/80">
            Book a free consultation. We'll discuss your vision, show you
            relevant examples, and give you a clear quote.
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

export default GraphicBranding
