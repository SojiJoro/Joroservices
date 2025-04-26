import React from 'react'
import { FaCloud, FaServer, FaChartBar, FaShieldAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'

const services = [
  {
    icon: FaCloud,
    title: 'Architecture & Migration',
    description:
      'We plan and migrate your infrastructure to AWS, Azure, or GCP — ensuring security, scalability, and zero downtime throughout the process.',
  },
  {
    icon: FaServer,
    title: 'Autoscaling & High Availability',
    description:
      'From load balancing to multi-region failover setups, we build cloud environments that automatically respond to traffic and system events.',
  },
  {
    icon: FaChartBar,
    title: 'Cost Control & Performance Optimisation',
    description:
      'We continuously monitor your cloud usage and refactor resources to avoid overprovisioning — keeping performance up and costs down.',
  },
  {
    icon: FaShieldAlt,
    title: 'Governance, Security & Compliance',
    description:
      'We help you implement IAM, encryption, backups, and compliance policies (GDPR, HIPAA, ISO) to ensure your cloud stays secure and auditable.',
  },
]

const portfolio = [
  {
    name: 'E-Commerce Cloud Migration (AWS)',
    image: '/images/cloud-ecommerce.jpg',
    description:
      'Migrated a Shopify‑based backend to AWS with S3, Lambda, and RDS — reducing latency by 40% and improving uptime.',
  },
  {
    name: 'Healthcare Cloud Setup (Azure)',
    image: '/images/cloud-healthcare.jpg',
    description:
      'Designed HIPAA-compliant architecture on Azure with secure storage, VM scaling, and multi-region redundancy.',
  },
  {
    name: 'CI/CD Deployment on GCP',
    image: '/images/cloud-cicd.jpg',
    description:
      'Automated build and deploy pipelines using GCP Cloud Build and Artifact Registry for a fintech SaaS platform.',
  },
]

const CloudInfrastructure = () => (
  <main className="bg-white text-black">
    {/* Hero Section */}
    <section className="grid p-4 lg:p-20 grid-cols-1 lg:grid-cols-2 gap-12 min-h-screen items-center">
      <div>
        <p className="uppercase text-sm text-accent-dark mb-4">Cloud Services</p>
        <h1 className="text-3xl lg:text-5xl font-bold mb-6">Build, Scale & Protect in the Cloud</h1>
        <p className="text-lg text-gray-800">
          We help you leverage the power of the cloud — securely and cost-effectively. From first-time migrations to high-availability architecture, we design and manage environments that grow with your business.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-block px-6 py-3 bg-accent-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition"
        >
          Book a Cloud Consultation
        </Link>
      </div>
      <div>
        <img
          src="/images/cloud-hero.jpg"
          alt="Cloud infrastructure illustration"
          className="rounded-lg shadow-lg object-cover w-full h-[60vh]"
        />
      </div>
    </section>

    {/* Services Section */}
    <section className="py-20 px-4 lg:px-32 bg-gray-50">
      <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-12">Our Cloud Capabilities</h2>
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
      <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-12">Cloud Projects We've Delivered</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolio.map((item, i) => (
          <div key={i} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <img src={item.image} alt={item.name} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-accent-dark">{item.name}</h3>
              <p className="text-sm text-gray-700 mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA Section */}
    <section className="bg-accent-dark text-white py-16 text-center">
      <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
        Ready to Modernise Your Infrastructure?
      </h2>
      <Link
        to="/contact"
        className="inline-block bg-white text-accent-dark font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
      >
        Let’s Get Started
      </Link>
    </section>

    <Footer />
  </main>
)

export default CloudInfrastructure
