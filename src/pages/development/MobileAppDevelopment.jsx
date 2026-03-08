import React, { useState } from 'react'
import { FaMobileAlt, FaSyncAlt, FaCloudUploadAlt, FaRocket, FaPlus, FaMinus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'
import SEO from '../../component/SEO'
import pagesSEO from '../../seo/pagesSEO'
import { serviceSchema, breadcrumbSchema } from '../../seo/schemas'

const services = [
  {
    icon: FaMobileAlt,
    title: 'Cross‑Platform Development',
    description:
      'We build high-performance apps using Flutter and React Native to deliver seamless experiences across both Android and iOS from a single codebase.',
  },
  {
    icon: FaSyncAlt,
    title: 'Offline & Real-Time Sync',
    description:
      'Enable your users to work online or offline with seamless syncing, local storage, and instant updates using Firebase or custom APIs.',
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
      'From fast loading to native transitions and accessibility support, every app is designed for fluid UX and long-term growth.',
  },
]

const portfolio = [
  {
    name: 'Care Timesheet App (Flutter)',
    image: '/images/mobile-timesheet.jpg',
    description:
      'A hybrid timesheet app for carers to log hours, sign on-screen, and export to PDF — with offline-first capabilities and real-time data sync.',
  },
  {
    name: 'QuickApply Recruitment App',
    image: '/images/ux-jobapp.jpg',
    description:
      'A job discovery app with profile login, swipe-to-save, and one‑tap apply. Built with React Native for Android and iOS.',
  },
  {
    name: 'Client Support Portal',
    image: '/images/ux-healthcare-mobile.jpg',
    description:
      'Mobile dashboard with in-app notifications, ticket tracking, and secure file uploads — designed for remote teams.',
  },
]

const faqData = [
  {
    question: 'How much does it cost to build a mobile app in the UK?',
    answer:
      'Mobile app costs vary significantly based on complexity. A simple app with basic features typically starts from £10,000, while a feature-rich app with backend integration, real-time data, and multiple user roles can range from £25,000 to £75,000+. We provide detailed estimates after a free discovery session where we scope your requirements.',
  },
  {
    question: 'Should I build a native app or a cross-platform app?',
    answer:
      'For most businesses, cross-platform development with React Native or Flutter offers the best value — you get a single codebase that runs on both iOS and Android, reducing development time and cost by up to 40%. We recommend native development only when you need highly specialised platform features or maximum performance for graphics-intensive apps.',
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
  <main className="bg-white text-black">
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
    <section id="hero" className="grid p-4 pt-20 lg:p-20 lg:pt-24 grid-cols-1 lg:grid-cols-2 gap-12 min-h-screen items-center">
      <div>
        <p className="uppercase text-sm text-accent-dark mb-4">Mobile App Development</p>
        <h1 className="text-3xl lg:text-5xl font-bold mb-6">Apps That Work Everywhere, Instantly</h1>
        <p className="text-lg text-gray-800">
          We design and build mobile apps that feel native, perform fast, and scale beautifully. Whether it's Flutter, React Native, or full native, we deliver custom mobile experiences that users love and businesses trust.
        </p>
        <Link
          to="/getintouch"
          className="mt-6 inline-block px-6 py-3 bg-accent-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition"
        >
          Let's Build Your App
        </Link>
      </div>
      <div className="rounded-lg shadow-lg bg-gradient-to-br from-accent/20 to-accent-dark/30 w-full h-[60vh] flex items-center justify-center">
        <p className="text-6xl opacity-30">📱</p>
      </div>
    </section>

    {/* Services Section */}
    <section className="py-20 px-4 lg:px-32 bg-gray-50">
      <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-12">What We Deliver</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <div key={i} className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white">
            <s.icon className="text-4xl text-accent-dark mb-4" />
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-gray-700">{s.description}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Portfolio Section */}
    <section className="py-20 px-4 lg:px-32">
      <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-12">Apps We've Built</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolio.map((app, i) => (
          <div
            key={i}
            className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <img src={app.image} alt={app.name} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-accent-dark">{app.name}</h3>
              <p className="text-sm text-gray-700 mt-1">{app.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-16 lg:py-20 px-4 lg:px-20 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10">
          Frequently Asked Questions About Mobile App Development
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

    {/* CTA Section */}
    <section className="bg-accent-dark text-white py-16 text-center">
      <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
        Your App Idea Deserves a Seamless Experience
      </h2>
      <Link
        to="/getintouch"
        className="inline-block bg-white text-accent-dark font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
      >
        Get Started Today
      </Link>
    </section>

    <Footer />
  </main>
  )
}

export default MobileAppDevelopment
