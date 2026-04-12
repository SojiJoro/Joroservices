import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Footer from '../component/Footer'
import SEO from '../component/SEO'
import pagesSEO from '../seo/pagesSEO'
import { breadcrumbSchema, faqPageSchema } from '../seo/schemas'
import Breadcrumb from '../component/Breadcrumb'

const faqData = [
  {
    question: 'What is DevOps and why does my small business need it?',
    answer:
      'DevOps is a set of practices that automates and improves how software is built, tested, and deployed. For a small business, it means faster updates, fewer errors, and infrastructure that scales without manual intervention.',
  },
  {
    question: 'How much do DevOps services cost for a small business?',
    answer:
      'We offer project-based pricing starting from \u00a31,500 for CI/CD pipeline setup. Ongoing managed DevOps support starts from \u00a3500 per month. We scale our pricing to match your organisation size.',
  },
  {
    question: 'Do I need DevOps if I only have one developer?',
    answer:
      'Yes. Even a single developer benefits from automated deployments, infrastructure as code, and proper monitoring. It reduces risk and frees up time to focus on building features.',
  },
  {
    question: 'What tools do you use for DevOps?',
    answer:
      'We use Terraform for infrastructure as code, Docker and Kubernetes for containerisation, GitHub Actions and GitLab CI for CI/CD, and Prometheus and Grafana for monitoring. We choose tools based on your needs, not vendor lock-in.',
  },
  {
    question: 'Can you set up DevOps for an existing project?',
    answer:
      'Yes. Most of our clients come to us with an existing application that needs better deployment processes and infrastructure. We audit your current setup and implement improvements incrementally.',
  },
]

const services = [
  {
    title: 'CI/CD Pipeline Setup',
    description:
      'Automated build, test, and deployment pipelines using GitHub Actions or GitLab CI. Push code, and it goes live — tested and reliable, every time.',
  },
  {
    title: 'Infrastructure as Code',
    description:
      'Your servers, databases, and networking defined in Terraform. Version-controlled, repeatable, and auditable. No more clicking around the AWS console hoping for the best.',
  },
  {
    title: 'Containerisation',
    description:
      'Docker containers and Kubernetes orchestration so your application runs the same way everywhere — local, staging, and production. No more "it works on my machine".',
  },
  {
    title: 'Monitoring and Alerting',
    description:
      'Prometheus and Grafana dashboards that show you what is happening in your infrastructure. Alerts that tell you when something is wrong before your customers do.',
  },
]

const DevopsSmallBusiness = () => {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <main className="bg-white text-gray-900">
      <SEO
        {...pagesSEO['/devops-small-business']}
        dateModified="2026-04-12"
        jsonLd={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'DevOps for Small Business', path: '/devops-small-business' },
          ]),
          faqPageSchema(faqData),
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: 'Home', path: '/' },
              { name: 'DevOps for Small Business' },
            ]}
          />
          <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            DevOps Services for{' '}
            <span className="text-accent">Small Business UK</span>
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-3xl leading-relaxed">
            Automated deployments, infrastructure as code, containerisation, and monitoring — without the enterprise price tag. We bring DevOps to small businesses that are tired of deploying manually and hoping nothing breaks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/getintouch"
              className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
            >
              Get a Free DevOps Audit <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+4407867374034"
              className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-sm"
            >
              Call 07867 374034
            </a>
          </div>
        </div>
      </section>

      {/* What DevOps Actually Means for a Small Business */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              What DevOps Actually Means for a Small Business
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                DevOps is not just a buzzword for large enterprises. At its core, it is a set of practices that automates the way you build, test, and ship software. For a small business, that translates into three things: faster deployments, fewer errors, and better infrastructure.
              </p>
              <p>
                Faster deployments mean your developers spend less time manually uploading files or running scripts and more time building features that grow your business. Automated pipelines handle the repetitive work, so every code change goes through the same reliable process.
              </p>
              <p>
                Fewer errors come from removing the human element from deployments. When a machine runs the same steps every time, there is no room for the kind of mistakes that happen at 5pm on a Friday when someone is rushing to push a fix.
              </p>
              <p>
                Better infrastructure means your servers, databases, and networking are defined in code, not configured by hand. If something goes wrong, you can rebuild your entire environment in minutes instead of days. That is the difference between a minor inconvenience and a business-threatening outage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            DevOps Services We Offer
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Everything you need to move from manual deployments and fragile infrastructure to a modern, automated setup.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Small Businesses Need DevOps */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Small Businesses Need DevOps — and Why Most Providers Ignore You
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                Most DevOps consultancies are built for enterprises. They quote six-figure projects, assume you have a platform team of ten, and recommend toolchains that cost more than your entire IT budget. That leaves small businesses stuck with manual processes and infrastructure held together with hope.
              </p>
              <p>
                But small businesses benefit from DevOps just as much as large ones — arguably more. When you have a small team, every hour spent on manual deployments or firefighting infrastructure issues is an hour not spent on the product. Automation gives you leverage that bigger companies already have.
              </p>
              <p>
                We built our DevOps practice specifically for small and medium businesses in the UK. That means right-sized solutions, sensible tooling, and pricing that reflects your actual scale. You get the same reliability and automation that enterprise teams enjoy, without paying enterprise prices.
              </p>
              <p>
                Whether you have one developer or twenty, we will set up the pipelines, infrastructure, and monitoring that let you ship with confidence. No bloated proposals, no unnecessary complexity — just the DevOps practices that make a real difference to how your team works.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-10">
            DevOps for Small Business — Common Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-100">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center text-left p-5"
                >
                  <span className="font-medium text-lg pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-accent-dark flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    openFaq === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
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
            Ready to Stop Deploying Manually?
          </h2>
          <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
            Book a free DevOps audit. We will review your current setup and show you exactly where automation can save your team time and reduce risk.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/getintouch"
              className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
            >
              Book Your Free DevOps Audit <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+4407867374034"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-all text-sm"
            >
              Call 07867 374034
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default DevopsSmallBusiness
