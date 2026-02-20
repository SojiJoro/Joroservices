import React, { useEffect, useRef } from 'react';
import { useAnimation, motion, useInView } from 'framer-motion';
import { FaCircleDot } from 'react-icons/fa6';
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
    tagline: 'Websites that load fast and work well',
    desc:
      'We build secure, responsive websites — from simple company sites to full e-commerce platforms. Everything is built with clean code, tested properly, and easy to maintain.',
    category: [
      { title: 'Front-end Engineering', icon: LiaLaptopCodeSolid },
      { title: 'Back-end Development', icon: FaDatabase },
      { title: 'eCommerce Solutions', icon: MdShoppingBag },
    ],
  },
  {
    title: 'Mobile App Solutions',
    image: '/bg9.webp',
    tagline: 'Native and cross-platform applications',
    desc:
      'We build mobile apps for iOS and Android that work properly on every device. We use native, hybrid, or cross-platform approaches depending on what makes sense for your project.',
    category: [
      { title: 'iOS & Android', icon: FaLaptopCode },
      { title: 'Cross-platform', icon: GiPlatform },
      { title: 'App Automation', icon: FaRobot },
    ],
  },
  {
    title: 'Data & Analytics Services',
    image: '/pexel3.webp',
    tagline: 'Make better decisions with your data',
    desc:
      'We help you collect, organise, and make sense of your business data. That means clean databases, proper security, and dashboards that show you what is actually happening.',
    category: [
      { title: 'Data Integration', icon: MdCloudUpload },
      { title: 'Security & Compliance', icon: BsShieldCheck },
      { title: 'Business Intelligence', icon: MdAnalytics },
    ],
  },
];

const DevServices = () => {
  return (
    <div className="mt-10 bg-white rounded-t-xl py-20 px-4 min-h-screen grid gap-12">
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
            className="flex flex-col rounded-lg shadow-lg overflow-hidden"
          >
            <div className={`flex flex-col lg:flex-row gap-6`}>
              <div className="lg:w-1/2">
                <img src={serv.image} alt={serv.title} className="w-full h-auto" />
              </div>
              <div className="lg:w-1/2 flex flex-col justify-center p-6">
                <p className="flex items-center gap-2 text-sm font-semibold text-accent-dark mb-2">
                  <FaCircleDot />
                  <span>{serv.title}</span>
                </p>
                <h2 className="text-2xl font-bold mb-2 text-black">{serv.tagline}</h2>
                <p className="text-sm text-gray-700 mb-4">{serv.desc}</p>
                <div className="flex flex-wrap gap-4">
                  {serv.category.map((cate, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center justify-center bg-black text-white p-4 rounded-lg w-32 h-32"
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
  );
};

export default DevServices;
