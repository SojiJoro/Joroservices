import React from 'react'
import { FaMobileAlt, FaSyncAlt, FaCloudUploadAlt, FaRocket } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'

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
    image: '/images/mobile-recruitment.jpg',
    description:
      'A job discovery app with profile login, swipe-to-save, and one‑tap apply. Built with React Native for Android and iOS.',
  },
  {
    name: 'Client Support Portal',
    image: '/images/mobile-support.jpg',
    description:
      'Mobile dashboard with in-app notifications, ticket tracking, and secure file uploads — designed for remote teams.',
  },
]

const MobileAppDevelopment = () => (
  <main className="bg-white text-black">
    {/* Hero Section */}
    <section className="grid p-4 lg:p-20 grid-cols-1 lg:grid-cols-2 gap-12 min-h-screen items-center">
      <div>
        <p className="uppercase text-sm text-accent-dark mb-4">Mobile App Development</p>
        <h1 className="text-3xl lg:text-5xl font-bold mb-6">Apps That Work Everywhere, Instantly</h1>
        <p className="text-lg text-gray-800">
          We design and build mobile apps that feel native, perform fast, and scale beautifully. Whether it's Flutter, React Native, or full native, we deliver custom mobile experiences that users love and businesses trust.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-block px-6 py-3 bg-accent-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition"
        >
          Let’s Build Your App
        </Link>
      </div>
      <div>
        <img
          src="/images/mobile-hero.jpg"
          alt="Mobile app screen mockups"
          className="rounded-lg shadow-lg object-cover w-full h-[60vh]"
        />
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

    {/* CTA Section */}
    <section className="bg-accent-dark text-white py-16 text-center">
      <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
        Your App Idea Deserves a Seamless Experience
      </h2>
      <Link
        to="/contact"
        className="inline-block bg-white text-accent-dark font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
      >
        Get Started Today
      </Link>
    </section>

    <Footer />
  </main>
)

export default MobileAppDevelopment
