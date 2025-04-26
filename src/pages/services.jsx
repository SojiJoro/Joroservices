// src/pages/Services.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../component/Footer';
import { ServiceList } from './serviceData';

const Services = () => (
  <div className="bg-gray-50 w-full min-h-screen">
    {/* Hero Banner */}
    <div className="bg-services-hero bg-cover bg-center h-[60vh] w-full">
      <div className="h-full bg-black/40 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl lg:text-6xl font-bold text-white">
            Our Expertise, Your Advantage
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            Explore our digital solutions, crafted to solve complex challenges and accelerate growth.
          </p>
        </div>
      </div>
    </div>

    {/* Services Grid */}
    <section className="py-16 px-4 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {ServiceList.map((service) => (
          <Link
            key={service.id}
            to={`/services/${service.id}`}
            className="group block bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 group-hover:text-accent-dark">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>

    <Footer />
  </div>
);

export default Services;
