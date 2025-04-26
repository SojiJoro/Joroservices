// src/pages/ServiceDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ServiceList } from './serviceData';
import Footer from '../component/Footer';

const ServiceDetail = () => {
  const { id } = useParams();
  const service = ServiceList.find(s => s.id === id);

  if (!service) {
    return (
      <main className="text-center py-20">
        <h1 className="text-3xl font-bold">Service Not Found</h1>
        <Link to="/services" className="text-accent mt-4 inline-block">
          Back to Services
        </Link>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header
        className="relative bg-cover bg-center h-72"
        style={{ backgroundImage: `url(${service.image})` }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl lg:text-6xl text-white font-bold">
            {service.title}
          </h1>
        </div>
      </header>
      <main className="flex-1 px-4 lg:px-20 py-12 max-w-4xl mx-auto text-gray-700 space-y-6">
        {service.details.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
        <Link
          to="/getintouch"
          className="inline-block bg-accent text-white font-semibold px-6 py-3 rounded-xl hover:bg-accent-dark transition"
        >
          Contact Us About This Service
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
