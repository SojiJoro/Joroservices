import React, { useState, useEffect } from 'react'
import {
  FaMobileAlt,
  FaSyncAlt,
  FaCloudUploadAlt,
  FaRocket,
  FaPaintBrush,
  FaBell,
  FaPlus,
  FaMinus,
  FaCheckCircle,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'

const serviceCards = [
  {
    icon: FaMobileAlt,
    title: 'One Codebase. Both Platforms. No Compromise.',
    label: 'Cross-Platform Development',
    description:
      'We build high-performance apps using Flutter and React Native that run on both Android and iOS from a single codebase. Same features, same performance, half the development cost.',
    items: [
      'Flutter and React Native development',
      'Native-feel UI and animations',
      'Platform-specific optimisations',
      'Single codebase, dual deployment',
    ],
  },
  {
    icon: FaSyncAlt,
    title: 'Works Offline. Syncs When Connected.',
    label: 'Offline & Real-Time Sync',
    description:
      'Your users don\'t always have signal. We build apps that work offline and sync seamlessly when they\'re back online — no data loss, no conflicts, no frustration.',
    items: [
      'Local data storage and caching',
      'Background sync when online',
      'Conflict resolution logic',
      'Firebase or custom API integration',
    ],
  },
  {
    icon: FaCloudUploadAlt,
    title: 'From Build to App Store in Days, Not Weeks',
    label: 'App Store Launch & CI/CD',
    description:
      'We handle the entire submission process for Apple App Store and Google Play — provisioning profiles, screenshots, metadata, and automated deployment pipelines.',
    items: [
      'App Store and Google Play submission',
      'Automated build and deployment (Fastlane, GitHub Actions)',
      'App signing and provisioning',
      'Version management and release notes',
    ],
  },
  {
    icon: FaRocket,
    title: 'Fast, Fluid, and Accessible',
    label: 'Performance & UX',
    description:
      'Nobody waits for a slow app. We optimise for speed, smooth animations, and accessibility so every user has a great experience regardless of device or ability.',
    items: [
      'Performance profiling and optimisation',
      'Smooth 60fps animations',
      'Accessibility (screen readers, dynamic text)',
      'Crash monitoring and analytics',
    ],
  },
  {
    icon: FaPaintBrush,
    title: 'Designed for Thumbs, Not Cursors',
    label: 'Mobile-First UI Design',
    description:
      'Mobile design is different from web design. We create interfaces optimised for one-handed use, touch targets, gesture navigation, and the way people actually use their phones.',
    items: [
      'Thumb-friendly navigation patterns',
      'Gesture-based interactions',
      'Platform-appropriate design (Material/Cupertino)',
      'Design system and component library',
    ],
  },
  {
    icon: FaBell,
    title: 'Keep Users Coming Back',
    label: 'Push Notifications & Engagement',
    description:
      'We integrate push notifications, in-app messaging, and engagement features to keep your users active and coming back — without being annoying about it.',
    items: [
      'Push notification setup (FCM/APNs)',
      'In-app messaging',
      'Deep linking',
      'Analytics and engagement tracking',
    ],
  },
]

const stats = [
  {
    value: '15+',
    label: 'Mobile apps built and launched',
  },
  {
    value: 'iOS & Android',
    label: 'Both platforms from one codebase',
  },
  {
    value: '4.7+',
    label: 'Average app store rating',
  },
  {
    value: '<3s',
    label: 'Average app launch time',
  },
]

const painPoints = [
  'We had an app built overseas and it\'s full of bugs nobody will fix',
  'We need an app but we can\'t afford to build for iOS and Android separately',
  'Our app crashes constantly and we\'re losing users',
  'We want an app but have no idea where to start or what it should cost',
  'We need the app to work offline — our staff work in areas with no signal',
  'We paid for a prototype that never turned into a real product',
]

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'We map out your app\'s features, user flows, and technical requirements. You get a clear spec and timeline.',
  },
  {
    step: '02',
    title: 'Design & Prototype',
    description: 'Interactive prototypes you can tap through on your phone — before we write any code.',
  },
  {
    step: '03',
    title: 'Development & Testing',
    description: 'We build in sprints with regular demos. You see progress every week and give feedback along the way.',
  },
  {
    step: '04',
    title: 'Launch & Support',
    description: 'We handle app store submission, monitor performance, and provide ongoing maintenance and updates.',
  },
]

const pricingTiers = [
  {
    name: 'MVP / Prototype',
    price: 'From £5,000',
    features: [
      'Core feature set',
      'Single platform (iOS or Android)',
      'Basic UI design',
      'User authentication',
      'App store submission',
    ],
    bestFor: 'Validating an idea before full investment',
  },
  {
    name: 'Full Mobile App',
    price: 'From £12,000',
    features: [
      'Cross-platform (iOS + Android)',
      'Custom UI/UX design',
      'Backend API development',
      'Push notifications',
      'Offline capability',
      'Admin dashboard',
    ],
    bestFor: 'A production-ready app for both platforms',
    highlighted: true,
  },
  {
    name: 'Ongoing Development',
    price: 'From £2,000/month',
    features: [
      'Continuous feature development',
      'Bug fixes and performance updates',
      'App store updates and compliance',
      'Analytics and crash monitoring',
      'Priority support',
    ],
    bestFor: 'Keeping your app evolving after launch',
  },
]

const faqData = [
  {
    question: 'Should we build native or cross-platform?',
    answer:
      'For most businesses, cross-platform (Flutter or React Native) is the right choice — you get both iOS and Android from one codebase at roughly 60% of the cost of building two native apps. We only recommend native when you need very specific platform features.',
  },
  {
    question: 'How long does it take to build a mobile app?',
    answer:
      'An MVP typically takes 6-8 weeks. A full-featured app takes 3-5 months. We\'ll give you a detailed timeline during the planning phase and keep you updated with weekly demos throughout development.',
  },
  {
    question: 'Do you handle the app store submission process?',
    answer:
      'Yes — we handle everything. App Store and Google Play registration, screenshots, descriptions, privacy policies, and the review process. We also manage updates and new versions post-launch.',
  },
  {
    question: 'What happens after launch?',
    answer:
      'We offer ongoing development and maintenance plans. This includes bug fixes, performance monitoring, OS compatibility updates, and new feature development. Apps need regular attention — we don\'t just build and disappear.',
  },
  {
    question: 'Can you build an app that works offline?',
    answer:
      'Yes — this is one of our specialities. We\'ve built apps for field workers, carers, and delivery teams who work in areas with poor or no connectivity. Data syncs automatically when they\'re back online.',
  },
  {
    question: 'Do we need a backend/API as well?',
    answer:
      'Most apps need some kind of backend — for user accounts, data storage, push notifications, etc. We build these too. If you already have a backend or API, we can integrate with it.',
  },
]

const MobileAppDevelopment = () => {
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    document.title =
      'Mobile App Development London | iOS & Android Apps | Joro Services'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Cross-platform mobile app development for SMBs. Flutter and React Native apps for iOS and Android. From £5,000 for MVP. Free consultation available.'
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
              Mobile App Development
            </p>
            <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              Your App Idea Deserves Better{' '}
              <span className="text-accent-dark">
                Than a Cheap Prototype.
              </span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We design and build mobile apps that feel native, perform fast,
              and work on both iOS and Android from a single codebase. From
              MVPs to full-featured products — built properly, priced fairly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/getintouch"
                className="inline-block px-6 py-3 bg-accent-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition text-center"
              >
                Get a Free Consultation
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
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { label: 'iOS', icon: '🍎' },
                { label: 'Android', icon: '🤖' },
              ].map((platform) => (
                <div key={platform.label} className="bg-white rounded-lg p-4 border border-gray-100 text-center">
                  <div className="text-2xl mb-1">{platform.icon}</div>
                  <span className="font-medium text-gray-800">{platform.label}</span>
                  <p className="text-xs text-gray-500">One codebase</p>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {['Offline Support', 'Push Notifications', 'App Store Submission', 'Ongoing Maintenance', 'Analytics'].map(
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
            Most businesses we talk to have had the same experiences:
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
            We build apps properly the first time — and we're here{' '}
            <strong>after launch too</strong>.
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
            How We Build Your App
          </h2>
          <p className="text-gray-600 mb-12 text-lg">
            A transparent process with demos every step of the way.
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

      {/* Section 6: Pricing */}
      <section className="py-16 lg:py-20 px-4 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            Pricing
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Transparent pricing. No surprises.
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

      {/* Section 7: FAQ */}
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

      {/* Section 8: Bottom CTA */}
      <section className="bg-accent-dark text-white py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Build an App That Actually Works?
          </h2>
          <p className="text-lg mb-8 text-white/80">
            Book a free consultation. We'll discuss your idea, recommend the
            right approach, and give you an honest quote.
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

export default MobileAppDevelopment
