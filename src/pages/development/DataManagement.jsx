import React from 'react'
import { FaDatabase, FaProjectDiagram, FaChartBar, FaLock } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'

const services = [
  {
    icon: FaDatabase,
    title: 'Data Architecture & Storage',
    description:
      'We design efficient, scalable data systems using SQL, NoSQL, cloud-based, or hybrid databases tailored to your business goals.',
  },
  {
    icon: FaProjectDiagram,
    title: 'ETL & Data Pipeline Automation',
    description:
      'From ingestion to transformation, we automate your data flow with robust pipelines that eliminate errors and reduce manual effort.',
  },
  {
    icon: FaChartBar,
    title: 'Dashboards & Insights',
    description:
      'We build real-time, interactive dashboards in Power BI, Tableau, or open-source tools — giving your teams clarity and decision-making power.',
  },
  {
    icon: FaLock,
    title: 'Data Governance & Security',
    description:
      'We implement encryption, access control, backups, and compliance protocols to keep your data secure and trustworthy.',
  },
]

const portfolio = [
  {
    name: 'Sales Analytics Dashboard',
    image: '/images/data-sales.jpg',
    description:
      'Developed Power BI dashboards showing real-time KPIs, customer trends, and team performance across departments.',
  },
  {
    name: 'ETL Pipeline for Healthcare CRM',
    image: '/images/data-pipeline.jpg',
    description:
      'Built and deployed automated pipelines that pull and clean data from multiple sources into a centralised healthcare CRM.',
  },
  {
    name: 'Finance Data Governance Setup',
    image: '/images/data-governance.jpg',
    description:
      'Implemented a role-based access control system, backup strategy, and GDPR compliance for a finance firm’s internal data.',
  },
]

const DataManagement = () => (
  <main className="bg-white text-black">
    {/* Hero Section */}
    <section className="grid p-4 lg:p-20 grid-cols-1 lg:grid-cols-2 gap-12 min-h-screen items-center">
      <div>
        <p className="uppercase text-sm text-accent-dark mb-4">Data Management</p>
        <h1 className="text-3xl lg:text-5xl font-bold mb-6">From Raw Data to Real Impact</h1>
        <p className="text-lg text-gray-800">
          Data is your most powerful business asset — when managed right. We help you store, clean, visualise, and protect your data so you can unlock insights, save time, and scale with confidence.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-block px-6 py-3 bg-accent-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition"
        >
          Let’s Talk Data
        </Link>
      </div>
      <div>
        <img
          src="/images/data-hero.jpg"
          alt="Data visualisation interface"
          className="rounded-lg shadow-lg object-cover w-full h-[60vh]"
        />
      </div>
    </section>

    {/* Services Section */}
    <section className="py-20 px-4 lg:px-32 bg-gray-50">
      <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-12">Our Core Data Services</h2>
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

    {/* Projects / Case Studies */}
    <section className="py-20 px-4 lg:px-32">
      <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-12">Data Projects We've Delivered</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolio.map((project, i) => (
          <div key={i} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <img src={project.image} alt={project.name} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-accent-dark">{project.name}</h3>
              <p className="text-sm text-gray-700 mt-1">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="bg-accent-dark text-white py-16 text-center">
      <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
        Let’s Make Your Data Work for You
      </h2>
      <Link
        to="/contact"
        className="inline-block bg-white text-accent-dark font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
      >
        Book a Free Consultation
      </Link>
    </section>

    <Footer />
  </main>
)

export default DataManagement
