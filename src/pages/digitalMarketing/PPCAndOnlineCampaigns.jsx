import React from 'react'
import { FaBullhorn, FaBullseye, FaChartLine, FaLaptop } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Footer from '../../component/Footer'

const services = [
  {
    icon: FaBullhorn,
    title: 'Search, Display & Social Ads',
    description:
      'We run full-funnel campaigns on Google, Bing, Facebook, LinkedIn, and Instagram — using the right mix of text, banner, and video formats.',
  },
  {
    icon: FaBullseye,
    title: 'Targeting & Audience Segmentation',
    description:
      'We analyse user behaviours and intent to create precise audiences that convert — including remarketing and lookalike strategies.',
  },
  {
    icon: FaChartLine,
    title: 'Real-Time Analytics & Optimisation',
    description:
      'Track performance with live dashboards, heatmaps, and conversion funnels. We A/B test headlines, creatives, and placements weekly.',
  },
  {
    icon: FaLaptop,
    title: 'Conversion-Focused Landing Pages',
    description:
      'We design and build high-performing landing pages with strong CTAs, social proof, and mobile optimisation to boost ROI.',
  },
]

const portfolio = [
  {
    name: 'Healthcare Lead Campaign (Google Ads)',
    image: '/images/ppc-healthcare.jpg',
    description:
      'Generated qualified leads at £8 per conversion using targeted Google Ads and custom-built landing pages.',
  },
  {
    name: 'Job Ad Campaign (Meta Ads)',
    image: '/images/ppc-jobs.jpg',
    description:
      'Attracted over 300 job applicants for PathSync Recruitment in 3 weeks through A/B tested Facebook and Instagram ad sets.',
  },
  {
    name: 'B2B Outreach Campaign (LinkedIn)',
    image: '/images/ppc-b2b.jpg',
    description:
      'Launched a LinkedIn campaign targeting senior project managers, delivering a 22% lead form completion rate.',
  },
]

const PPCAndOnlineCampaigns = () => (
  <main className="bg-white text-black">
    {/* Hero Section */}
    <section className="grid p-4 lg:p-20 grid-cols-1 lg:grid-cols-2 gap-12 min-h-screen items-center">
      <div>
        <p className="uppercase text-sm text-accent-dark mb-4">Online Advertising</p>
        <h1 className="text-3xl lg:text-5xl font-bold mb-6">Maximise Reach & ROI with Targeted PPC</h1>
        <p className="text-lg text-gray-800">
          Paid media done right is an engine for instant traffic, leads, and visibility. We design and manage smart campaigns across search engines and social media — driven by strategy, not guesswork.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-block px-6 py-3 bg-accent-dark text-white font-semibold rounded-lg hover:bg-opacity-90 transition"
        >
          Book a Campaign Strategy Call
        </Link>
      </div>
      <div>
        <img
          src="/images/ppc-hero.jpg"
          alt="Digital ad campaign dashboard"
          className="rounded-lg shadow-lg object-cover w-full h-[60vh]"
        />
      </div>
    </section>

    {/* Services Section */}
    <section className="py-20 px-4 lg:px-32 bg-gray-50">
      <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-12">What’s Included</h2>
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

    {/* Campaign Showcase */}
    <section className="py-20 px-4 lg:px-32">
      <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-12">Recent Campaign Results</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolio.map((campaign, i) => (
          <div key={i} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <img src={campaign.image} alt={campaign.name} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-accent-dark">{campaign.name}</h3>
              <p className="text-sm text-gray-700 mt-1">{campaign.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA Section */}
    <section className="bg-accent-dark text-white py-16 text-center">
      <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
        Ready to Launch a Results-Driven Campaign?
      </h2>
      <Link
        to="/contact"
        className="inline-block bg-white text-accent-dark font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
      >
        Speak with a Specialist
      </Link>
    </section>

    <Footer />
  </main>
)

export default PPCAndOnlineCampaigns
