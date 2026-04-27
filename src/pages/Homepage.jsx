import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Palette, BarChart3, Shield } from 'lucide-react';
import Footer from '../component/Footer';
import { ServiceList } from './serviceData';
import InsightsSection from '../component/insightSection.jsx';
import SEO from '../component/SEO';
import pagesSEO from '../seo/pagesSEO';
import {
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
  homepageFaqSchema,
  speakableSchema,
  orgLocalBusinessSchema,
  webDevServiceSchema,
  devopsServiceSchema,
  graphicDesignServiceSchema,
  digitalMarketingServiceSchema,
  itSupportServiceSchema,
  mobileAppServiceSchema,
  founderPersonSchema,
} from '../seo/schemas';

const serviceCategories = [
  {
    icon: Palette,
    title: 'Website Design & Branding',
    desc: 'We design and build websites, logos, and brand identities. You get a finished product, not a mockup.',
    path: '/creative-solutions',
  },
  {
    icon: Code2,
    title: 'Web & Mobile App Development',
    desc: 'We build web applications, mobile apps, and e-commerce stores with React, Next.js, and Flutter. Production-ready code.',
    path: '/development',
  },
  {
    icon: BarChart3,
    title: 'SEO & Digital Marketing',
    desc: 'We run your SEO, manage your Google Ads, and handle your social media. Monthly reporting, real results.',
    path: '/digital-marketing',
  },
  {
    icon: Shield,
    title: 'DevOps, Cloud & IT Support',
    desc: 'We set up your AWS infrastructure, manage your servers, run your CI/CD pipelines, and provide day-to-day IT support.',
    path: '/technical-services',
  },
];

const localServiceLinks = [
  { label: 'IT Support in Aldershot', path: '/it-support-aldershot', desc: 'From £30/user/month' },
  { label: 'Web Design in Aldershot', path: '/web-design-aldershot', desc: 'From £1,500' },
  { label: 'IT Support in Farnham', path: '/it-support-farnham', desc: '5 miles away' },
  { label: 'Web Design in Farnham', path: '/web-design-farnham', desc: 'Design-led builds' },
  { label: 'IT Support in Fleet', path: '/it-support-fleet', desc: '6 miles away' },
  { label: 'IT Support in Camberley', path: '/it-support-camberley', desc: '7 miles away' },
  { label: 'Web Design in Guildford', path: '/web-design-guildford', desc: 'Premium quality' },
];

const Homepage = () => (
  <div className="max-w-full overflow-x-hidden">
    <SEO
      {...pagesSEO['/']}
      dateModified="2026-04-27"
      jsonLd={[organizationSchema, localBusinessSchema, websiteSchema, homepageFaqSchema, speakableSchema({ url: '/' }), orgLocalBusinessSchema, webDevServiceSchema, devopsServiceSchema, graphicDesignServiceSchema, digitalMarketingServiceSchema, itSupportServiceSchema, mobileAppServiceSchema, founderPersonSchema]}
    />

    {/* Hero */}
    <section
      id="hero"
      className="relative bg-primary min-h-[80vh] w-full flex items-center"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight text-white">
            IT and web for UK businesses too small to need a CIO.
          </h1>
          <p className="text-lg text-gray-300 mb-10 max-w-xl leading-relaxed">
            Joro Services is an Aldershot-based team of engineers, designers and marketers. We build the websites, run the cloud, and handle day-to-day IT for businesses with 5 to 50 staff.
          </p>
          <Link
            to="/getintouch"
            className="inline-flex items-center bg-accent text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-accent-dark transition-colors text-sm"
          >
            Talk to us
          </Link>
        </div>
      </div>
    </section>

    {/* Service Categories */}
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Four things we do
          </h2>
          <p className="text-gray-500">
            We build websites, develop apps, set up cloud infrastructure, manage IT support, and run digital marketing campaigns. Services we deliver, not advice we give.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {serviceCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <Link
                key={idx}
                to={cat.path}
                className="group block bg-gray-50 rounded-xl p-7 hover:bg-primary transition-colors duration-300 border border-gray-100 hover:border-transparent"
              >
                <Icon size={22} className="text-accent mb-5" strokeWidth={1.5} />
                <h3 className="text-base font-bold text-gray-900 group-hover:text-white mb-2 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-gray-500 group-hover:text-gray-400 text-sm leading-relaxed transition-colors">
                  {cat.desc}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>

    {/* Recent projects */}
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Recent projects
          </h2>
          <p className="text-gray-500">
            Websites, web apps, mobile apps, cloud setups, and marketing campaigns built and shipped for UK businesses.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ServiceList.map((service, idx) => (
            <Link
              key={idx}
              to={`/services/${service.id}`}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] block"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white text-base font-bold mb-1">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                  {service.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-10 bg-primary rounded-xl px-6 py-10 sm:p-10 lg:p-12">
          <div className="max-w-2xl">
            <h3 className="text-white text-xl sm:text-2xl font-bold mb-3">
              One team. Every IT service you need.
            </h3>
            <p className="text-gray-400 mb-6 text-sm sm:text-base leading-relaxed">
              Web development, DevOps, cloud infrastructure, graphic design, IT support, and digital marketing. All in-house. No subcontractors.
            </p>
            <Link
              to="/getintouch"
              className="inline-flex items-center bg-accent text-white font-semibold px-6 py-3 rounded-lg hover:bg-accent-dark transition-colors text-sm"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Clients */}
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-12">
          Clients
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-12 items-center">
          {[
            { name: '1 Noble Healthcare', logo: '/Client%20Logos/1nobleHealthcare.png' },
            { name: 'ClearVital', logo: '/Client%20Logos/ClearVital.ico' },
            { name: 'DebtMap', logo: '/Client%20Logos/DebtMap.png' },
            { name: 'EMK', logo: '/Client%20Logos/emk-logo.jpg' },
          ].map((client) => (
            <div key={client.name} className="flex items-center justify-center">
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-14 lg:max-h-16 w-auto opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-colors"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why us */}
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              We do the work. No outsourcing.
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              The people you speak to are the engineers and designers who do the work. We don&apos;t sell projects and hand them to freelancers. Every website, every deployment, every support ticket is handled by our team.
            </p>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>— AWS Solutions Architect certified team</li>
              <li>— GDPR-compliant processes and professional indemnity insured</li>
              <li>— Fixed pricing with no hidden fees or hourly surprises</li>
              <li>— Work delivered in healthcare, financial services and recruitment</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <span className="text-3xl lg:text-4xl font-bold text-gray-900 block mb-1">20+</span>
              <span className="text-xs text-gray-500 uppercase tracking-wider">Clients served</span>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <span className="text-3xl lg:text-4xl font-bold text-gray-900 block mb-1">35+</span>
              <span className="text-xs text-gray-500 uppercase tracking-wider">Projects delivered</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Local Services */}
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            IT support and web design near you
          </h2>
          <p className="text-gray-500">
            Based in Aldershot. Same-day on-site support across Hampshire and Surrey.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {localServiceLinks.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="group bg-white rounded-lg p-5 border border-gray-100 hover:border-accent/30 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 group-hover:text-accent transition-colors text-sm">
                {item.label}
              </h3>
              <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
            </Link>
          ))}
          <Link
            to="/services"
            className="group bg-accent/5 rounded-lg p-5 border border-accent/20 hover:bg-accent/10 transition-colors flex items-center justify-center"
          >
            <span className="font-semibold text-accent text-sm">
              View all services
            </span>
          </Link>
        </div>
      </div>
    </section>

    {/* Insights */}
    <InsightsSection />

    <Footer />
  </div>
);

export default Homepage;
