// src/pages/technicalServices/index.jsx
import React from 'react';
import Footer from '../../component/Footer';
import TechHeroSection from '../../component/technicalServices/techHeroSection';
import TechServices    from '../../component/technicalServices/techServices';

const TechnicalServices = () => (
  <div className="bg-white text-black">
    {/* Hero */}
    <TechHeroSection />

    {/* Offerings */}
    <section className="py-20 px-4 lg:px-20">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl lg:text-5xl font-bold">
          Expert Technical Services
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Cybersecurity, IT support, cloud infrastructure management and more—ensuring your systems run smoothly and securely.
        </p>
      </div>
      <TechServices />
    </section>

    <Footer />
  </div>
);

export default TechnicalServices;
