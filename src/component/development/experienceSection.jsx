import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaPlus } from 'react-icons/fa6';

const metrics = [
  { desc: 'Years delivering bespoke digital solutions', fig: 10 },
  { desc: 'Successful projects launched', fig: 75 },
  { desc: 'Satisfied clients worldwide', fig: 50 },
  { desc: 'Expert developers & designers', fig: 20 },
];

const ExperienceSection = () => (
  <section className="bg-white text-black py-20 px-4 lg:px-0">
    <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-12">
      Our Journey in Numbers
    </h2>
    <div className="mx-auto flex flex-wrap justify-center gap-8 max-w-4xl">
      {metrics.map((m, i) => (
        <MetricCard key={i} fig={m.fig} desc={m.desc} delay={i * 0.2} />
      ))}
    </div>
  </section>
);

const MetricCard = ({ fig, desc, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
      const duration = 1500;
      const step = Math.max(50, Math.floor(duration / fig));
      let start = 0;
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= fig) clearInterval(timer);
      }, step);
      return () => clearInterval(timer);
    }
  }, [isInView, fig, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      transition={{ duration: 0.8, delay }}
      className="flex flex-col items-center justify-center bg-gray-100 rounded-lg p-6 w-36 h-36 shadow"
    >
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-bold text-accent-dark">{count}</span>
        <FaPlus className="text-xl text-accent-dark" />
      </div>
      <p className="text-sm text-center mt-2">{desc}</p>
    </motion.div>
  );
};

export default ExperienceSection;
