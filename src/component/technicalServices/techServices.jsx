import React from 'react';

const services = [
  'IT Support & Maintenance',
  'Cybersecurity & Compliance',
  'Cloud Infrastructure Management',
  'Network Design & Implementation',
  'Disaster Recovery & Back‑up',
  'On‑Site & Remote Helpdesk',
];

const TechServices = () => (
  <section className="py-16 px-4 lg:px-20 bg-white">
    <div className="max-w-5xl mx-auto text-center mb-12">
      <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
        Our Technical Expertise
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Comprehensive IT services that ensure your systems are secure, reliable, and high‑performing.
      </p>
    </div>
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((item, i) => (
        <div
          key={i}
          className="bg-[#f9fafb] rounded-lg shadow p-6 hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold mb-2">{item}</h3>
          <p className="text-gray-600 text-sm">
            {(() => {
              switch (i) {
                case 0:
                  return 'Proactive monitoring and routine maintenance to avoid downtime.';
                case 1:
                  return 'Risk assessments, firewalls, endpoint protection and audits.';
                case 2:
                  return 'Design, deployment and optimisation on AWS, Azure or GCP.';
                case 3:
                  return 'Robust LAN/WAN architecture with secure VPN and QoS.';
                case 4:
                  return 'Backup strategies, failover planning and rapid restoration.';
                case 5:
                  return '24/7 support via phone, chat or on‑site wherever you are.';
                default:
                  return '';
              }
            })()}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default TechServices;
