import React from 'react';
import { LiaLaptopCodeSolid } from 'react-icons/lia';
import { FaDatabase, FaLaptopCode } from 'react-icons/fa6';
import { MdShoppingBag, MdCloudUpload, MdAnalytics } from 'react-icons/md';
import { GiPlatform } from 'react-icons/gi';
import { FaRobot } from 'react-icons/fa';
import { BsShieldCheck } from 'react-icons/bs';

const offerings = [
  {
    title: 'Custom Web Development',
    desc:
      'We design and build secure, responsive websites that grow with your business. From simple brochure sites to full e-commerce platforms.',
    category: [
      { title: 'Front-end Engineering', icon: LiaLaptopCodeSolid },
      { title: 'Back-end Development', icon: FaDatabase },
      { title: 'eCommerce Solutions', icon: MdShoppingBag },
    ],
  },
  {
    title: 'Mobile App Solutions',
    desc:
      'iOS and Android apps that work properly on every device. Native, hybrid, or cross-platform — built for people who actually use them.',
    category: [
      { title: 'iOS & Android', icon: FaLaptopCode },
      { title: 'Cross-platform', icon: GiPlatform },
      { title: 'App Automation', icon: FaRobot },
    ],
  },
  {
    title: 'Data & Analytics',
    desc:
      'We help you manage, connect, and understand your data. Clean storage, secure access, and dashboards that show what is actually going on.',
    category: [
      { title: 'Data Integration', icon: MdCloudUpload },
      { title: 'Security & Compliance', icon: BsShieldCheck },
      { title: 'Business Intelligence', icon: MdAnalytics },
    ],
  },
];

const DevServices = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 max-w-2xl">
          What we build
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offerings.map((serv, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-xl border border-gray-100 p-6 flex flex-col"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">{serv.title}</h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">{serv.desc}</p>
              <ul className="mt-auto space-y-2 text-sm text-gray-700">
                {serv.category.map((cate, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <cate.icon className="text-lg text-accent" />
                    {cate.title}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevServices;
