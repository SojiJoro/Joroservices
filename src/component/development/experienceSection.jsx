import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Plus } from 'lucide-react';

const metrics = [
  { desc: 'Years building software for real businesses', fig: 4 },
  { desc: 'Projects shipped and live', fig: 35 },
  { desc: 'Happy clients across the UK', fig: 20 },
  { desc: 'Developers and designers on the team', fig: 8 },
];

const ExperienceSection = () => (
  <section className="py-20 lg:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 text-center">Our Track Record</p>
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
        Our Journey in Numbers
      </h2>
      <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
        {metrics.map((m, i) => (
          <MetricCard key={i} fig={m.fig} desc={m.desc} delay={i * 0.2} />
        ))}
      </div>
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
      className="flex flex-col items-center justify-center bg-white rounded-2xl border border-gray-100 p-6 w-36 h-36"
    >
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-bold text-accent-dark">{count}</span>
        <Plus className="w-5 h-5 text-accent-dark" />
      </div>
      <p className="text-sm text-center mt-2 text-gray-600">{desc}</p>
    </motion.div>
  );
};

export default ExperienceSection;
