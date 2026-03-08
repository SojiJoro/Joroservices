import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { ServiceList } from './serviceData';
import Footer from '../component/Footer';
import SEO from '../component/SEO';
import { breadcrumbSchema } from '../seo/schemas';

const ServiceDetail = () => {
  const { id } = useParams();
  const service = ServiceList.find(s => s.id === id);
  const otherServices = ServiceList.filter(s => s.id !== id).slice(0, 3);

  if (!service) {
    return (
      <main className="min-h-screen bg-white flex flex-col items-center justify-center px-4 text-center">
        <div className="text-6xl font-bold text-gray-200 mb-4">404</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Service Not Found</h1>
        <p className="text-gray-600 mb-6">The service you are looking for does not exist.</p>
        <Link to="/services" className="inline-flex items-center gap-2 text-accent font-medium hover:text-accent-dark transition-colors">
          <ArrowLeft size={16} />
          Back to Services
        </Link>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`${service.title} | Joro Services`}
        description={service.details?.[0] || `${service.title} services from Joro Services Ltd.`}
        jsonLd={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: service.title, path: `/services/${id}` },
          ]),
        ]}
      />

      {/* Hero */}
      <section id="hero" className="relative bg-gradient-to-br from-primary via-primary-dark to-secondary text-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <Link to="/services" className="hover:text-white transition-colors">Services</Link>
                <span>/</span>
                <span className="text-accent-light">{service.title}</span>
              </nav>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {service.title}
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {service.summary}
              </p>
              <Link
                to="/getintouch"
                className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20"
              >
                Discuss This Service
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="hidden lg:block">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest">Overview</p>
              <h2 className="text-3xl font-bold text-gray-900">What We Deliver</h2>
              {service.details.map((paragraph, idx) => (
                <p key={idx} className="text-gray-600 leading-relaxed text-lg">{paragraph}</p>
              ))}
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 h-fit">
              <h3 className="text-lg font-bold text-gray-900 mb-5">Why Choose Us</h3>
              <ul className="space-y-4">
                {[
                  'Dedicated project manager',
                  'Agile delivery methodology',
                  'Transparent pricing',
                  'Post-launch support included',
                  'UK-based team',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                    <CheckCircle2 size={16} className="text-accent flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-3">Ready to get started?</p>
                <Link
                  to="/getintouch"
                  className="block bg-accent text-white text-center font-semibold py-3 rounded-xl hover:bg-accent-dark transition-all text-sm"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      {otherServices.length > 0 && (
        <section className="bg-gray-50 py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Explore More</p>
              <h2 className="text-3xl font-bold text-gray-900">Other Services</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherServices.map((s) => (
                <Link
                  key={s.id}
                  to={`/services/${s.id}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors">{s.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{s.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ServiceDetail;
