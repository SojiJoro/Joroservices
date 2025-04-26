import React from 'react'
import { FaCalendarAlt, FaCommentDots, FaPenFancy, FaChartPie } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'

const services = [
  {
    icon: FaCalendarAlt,
    title: 'Editorial Calendars & Scheduling',
    description:
      'We create detailed monthly content calendars that align with your campaigns, key dates, and target audiences — published consistently using trusted scheduling tools.',
  },
  {
    icon: FaPenFancy,
    title: 'Creative Design & Copywriting',
    description:
      'From platform-optimised visuals to scroll-stopping captions, we craft every post with attention to brand voice and storytelling impact.',
  },
  {
    icon: FaCommentDots,
    title: 'Community Engagement',
    description:
      'We actively monitor comments, inboxes, and mentions — responding, moderating, and nurturing your audience across platforms.',
  },
  {
    icon: FaChartPie,
    title: 'Performance Tracking & Reporting',
    description:
      'We deliver weekly or monthly reports with insights on impressions, reach, engagement, and follower growth — using native platform analytics and tools like Sprout or Buffer.',
  },
]

const portfolio = [
  {
    name: '1 Noble Healthcare Facebook Campaign',
    image: '/images/social-noble.jpg',
    description:
      'Increased page followers by 58% in 6 weeks through engaging carer spotlights, recruitment videos, and local community posts.',
  },
  {
    name: 'PathSync LinkedIn Content Plan',
    image: '/images/social-pathsync.jpg',
    description:
      'Built a consistent LinkedIn presence with weekly career tips, role updates, and carousel job breakdowns — tailored to tech professionals.',
  },
  {
    name: 'Top 20 Everywhere Instagram Strategy',
    image: '/images/social-top20.jpg',
    description:
      'Grew a content-focused Instagram account using themed story highlights, colour-coded post templates, and trending reel edits.',
  },
]

const SocialMediaManagement = () => (
  <main className="bg-white text-black">
    {/* Hero Section */}
    <section className="grid p-4 lg:p-20 grid-cols-1 lg:grid-cols-2 gap-12 min-h-screen items-center">
      <div>
        <p className="uppercase text-sm text-accent-dark mb-4">Social Media Management</p>
        <h1 className="text-3xl lg:text-5xl font-bold mb-6">Turn Scrolls into Connections</h1>
        <p className="text-lg text-gray-800">
          We help brands show up, speak up, and stay relevant across every platform. From Facebook to LinkedIn, we handle strategy, design, engagement, and reporting — so you can build real relationships at scale.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-block px-6 py-3 bg-accent-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition"
        >
          Let's Manage Your Socials
        </Link>
      </div>
      <div>
        <img
          src="/images/social-hero.jpg"
          alt="Social media planning desk setup"
          className="rounded-lg shadow-lg object-cover w-full h-[60vh]"
        />
      </div>
    </section>

    {/* Services Section */}
    <section className="py-20 px-4 lg:px-32 bg-gray-50">
      <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-12">How We Help You Grow</h2>
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
      <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-12">Social Campaign Highlights</h2>
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

    {/* CTA Section */}
    <section className="bg-accent-dark text-white py-16 text-center">
      <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
        Keep Your Brand Active, Visible & Engaged
      </h2>
      <Link
        to="/contact"
        className="inline-block bg-white text-accent-dark font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
      >
        Start Your Social Plan
      </Link>
    </section>

    <Footer />
  </main>
)

export default SocialMediaManagement
