import React, { useEffect, useRef } from 'react';
import { useAnimation, motion, useInView } from 'framer-motion';
import { LiaLaptopCodeSolid } from 'react-icons/lia';
import { FaDatabase, FaLaptopCode } from 'react-icons/fa6';
import { MdShoppingBag, MdCloudUpload, MdAnalytics } from 'react-icons/md';
import { GiPlatform } from 'react-icons/gi';
import { FaRobot } from 'react-icons/fa';
import { BsShieldCheck } from 'react-icons/bs';

const offerings = [
  {
    title: 'Custom Web Development',
    image: '/bg8.webp',
    tagline: 'Websites that work hard and handle growth',
    desc:
      'We design and build secure, responsive websites that grow with your business. From simple brochure sites to full e-commerce platforms, we focus on making things reliable and easy to use.',
    category: [
      { title: 'Front-end Engineering', icon: LiaLaptopCodeSolid },
      { title: 'Back-end Development', icon: FaDatabase },
      { title: 'eCommerce Solutions', icon: MdShoppingBag },
    ],
  },
  {
    title: 'Mobile App Solutions',
    image: '/bg9.webp',
    tagline: 'Native and cross-platform apps',
    desc:
      'We build mobile apps for iOS and Android that feel natural and work properly on every device. Whether native, hybrid, or cross-platform, we make apps that people actually want to keep using.',
    category: [
      { title: 'iOS & Android', icon: FaLaptopCode },
      { title: 'Cross-platform', icon: GiPlatform },
      { title: 'App Automation', icon: FaRobot },
    ],
  },
  {
    title: 'Data & Analytics Services',
    image: '/pexel3.webp',
    tagline: 'Make sense of your data and use it',
    desc:
      'We help you manage, connect, and understand your data. From keeping it clean and secure to building dashboards that show you what is actually going on, so you can make better decisions.',
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12">
        {offerings.map((serv, i) => {
          const control = useAnimation();
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true });

          useEffect(() => {
            if (isInView) control.start('visible');
          }, [isInView, control]);

          return (
            <motion.div
              key={i}
              ref={ref}
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
              initial="hidden"
              animate={control}
              transition={{ duration: 1, delay: i * 0.3 }}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/2">
                  <img src={serv.image} alt={serv.title} className="w-full h-auto" />
                </div>
                <div className="lg:w-1/2 flex flex-col justify-center p-6">
                  <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
                    {serv.title}
                  </p>
                  <h2 className="text-2xl font-bold mb-2 text-gray-900">{serv.tagline}</h2>
                  <p className="text-sm text-gray-700 mb-4">{serv.desc}</p>
                  <div className="flex flex-wrap gap-4">
                    {serv.category.map((cate, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col items-center justify-center bg-gray-900 text-white p-4 rounded-xl w-32 h-32"
                      >
                        <cate.icon className="text-2xl text-accent-dark mb-2" />
                        <p className="text-xs text-center">{cate.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default DevServices;
