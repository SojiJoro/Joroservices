import React, { useState } from 'react'
import { FaMobileAlt, FaSyncAlt, FaCloudUploadAlt, FaRocket, FaPlus, FaMinus } from 'react-icons/fa'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'
import SEO from '../../component/SEO'
import pagesSEO from '../../seo/pagesSEO'
import { serviceSchema, breadcrumbSchema } from '../../seo/schemas'

const services = [
  {
    icon: FaMobileAlt,
    title: 'Cross-Platform Development',
    description:
      'We build high-performance apps using Flutter and React Native, so you get one codebase that works properly on both Android and iOS.',
  },
  {
    icon: FaSyncAlt,
    title: 'Offline & Real-Time Sync',
    description:
      'Let your users work online or offline with automatic syncing, local storage, and instant updates using Firebase or custom APIs.',
  },
  {
    icon: FaCloudUploadAlt,
    title: 'App Store Launch & CI/CD',
    description:
      'We handle App Store and Google Play submission, provisioning profiles, and deploy automation with tools like Fastlane and GitHub Actions.',
  },
  {
    icon: FaRocket,
    title: 'Performance & UX Focused',
    description:
      'Fast loading, smooth transitions, and accessibility support. Every app is built to feel great and grow with your business.',
  },
]

const portfolio = [
  {
    name: 'Care Timesheet App (Flutter)',
    image: '/images/mobile-timesheet.jpg',
    description:
      'A hybrid timesheet app for carers to log hours, sign on-screen, and export to PDF. Works offline and syncs data in real time.',
  },
  {
    name: 'QuickApply Recruitment App',
    image: '/images/ux-jobapp.jpg',
    description:
      'A job discovery app with profile login, swipe-to-save, and one-tap apply. Built with React Native for Android and iOS.',
  },
  {
    name: 'Client Support Portal',
    image: '/images/ux-healthcare-mobile.jpg',
    description:
      'Mobile dashboard with in-app notifications, ticket tracking, and secure file uploads. Built for remote teams.',
  },
]

const faqData = [
  {
    question: 'How much does it cost to build a mobile app in the UK?',
    answer:
      'Mobile app costs vary significantly based on complexity. A simple app with basic features typically starts from \u00a310,000, while a feature-rich app with backend integration, real-time data, and multiple user roles can range from \u00a325,000 to \u00a375,000+. We provide detailed estimates after a free discovery session where we scope your requirements.',
  },
  {
    question: 'Should I build a native app or a cross-platform app?',
    answer:
      'For most businesses, cross-platform development with React Native or Flutter offers the best value. You get a single codebase that runs on both iOS and Android, which can cut development time and cost by up to 40%. We only recommend native development when you need very specialised platform features or maximum performance for graphics-heavy apps.',
  },
  {
    question: 'How long does it take to develop a mobile app?',
    answer:
      'A minimum viable product (MVP) typically takes 8-12 weeks. A full-featured app with backend services, user authentication, and third-party integrations usually takes 12-20 weeks. We follow agile methodology with regular demos so you can see progress every two weeks.',
  },
  {
    question: 'Do you handle App Store and Google Play submissions?',
    answer:
      'Yes, we manage the entire submission process for both Apple App Store and Google Play Store, including app listing optimisation, screenshots, compliance requirements, and any review feedback. We also set up CI/CD pipelines for automated future deployments.',
  },
  {
    question: 'Can you build an app that works offline?',
    answer:
      'Yes, offline-first architecture is one of our specialities. We build apps with local data storage and background sync capabilities, so your users can continue working without an internet connection. Data is automatically synced when connectivity is restored.',
  },
]

const mobileFaqSchema = {
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

const MobileAppDevelopment = () => {
  const [openFaq, setOpenFaq] = useState(null)

  return (
  <main className="bg-white text-gray-900">
    <SEO
      {...pagesSEO['/development/mobile-app-development']}
      jsonLd={[
        serviceSchema({
          name: 'Mobile App Development',
          description: 'Professional iOS and Android mobile app development in Aldershot, Hampshire.',
          url: '/development/mobile-app-development',
          category: 'Mobile App Development',
        }),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Development', path: '/development' },
          { name: 'Mobile App Development', path: '/development/mobile-app-development' },
        ]),
        mobileFaqSchema,
      ]}
    />

    {/* Hero Section */}
    <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Mobile App Development</p>
        <h1 className="text-3xl lg:text-4xl font-bold mb-6">Apps That Work Everywhere, Instantly</h1>
        <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
          We design and build mobile apps that feel native and run fast. Whether it's Flutter, React Native, or full native, we build apps that people actually enjoy using and businesses can rely on.
        </p>
        <Link
          to="/getintouch"
          className="mt-8 inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
        >
          Let's Build Your App <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>

    {/* Services Section */}
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 text-center">Our Expertise</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">What We Deliver</h2>
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
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">Apps We've Built</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map((app, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition"
            >
              <img src={app.image} alt={app.name} className="h-48 w-full object-cover" />
              <div className="p-7">
                <h3 className="text-xl font-semibold text-accent">{app.name}</h3>
                <p className="text-gray-600 leading-relaxed text-sm mt-2">{app.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-10">
          Frequently Asked Questions About Mobile App Development
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

    {/* CTA Section */}
    <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6">
          Ready to Turn Your App Idea Into Reality?
        </h2>
        <Link
          to="/getintouch"
          className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
        >
          Get Started Today <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>

    <Footer />
  </main>
  )
}

export default MobileAppDevelopment
