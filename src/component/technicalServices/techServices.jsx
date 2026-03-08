import React from 'react';

const services = [
  {
    title: 'IT Support & Maintenance',
    description: 'Proactive monitoring and routine maintenance to avoid downtime.',
  },
  {
    title: 'Cybersecurity & Compliance',
    description: 'Risk assessments, firewalls, endpoint protection and audits.',
  },
  {
    title: 'Cloud Infrastructure Management',
    description: 'Design, deployment and optimisation on AWS, Azure or GCP.',
  },
  {
    title: 'Network Design & Implementation',
    description: 'Robust LAN/WAN architecture with secure VPN and QoS.',
  },
  {
    title: 'Disaster Recovery & Back-up',
    description: 'Backup strategies, failover planning and rapid restoration.',
  },
  {
    title: 'On-Site & Remote Helpdesk',
    description: '24/7 support via phone, chat or on-site wherever you are.',
  },
];

const TechServices = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
          <p className="text-gray-600 text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default TechServices;
