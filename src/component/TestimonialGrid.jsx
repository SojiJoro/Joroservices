// src/components/TestimonialGrid.jsx
import React, { useEffect, useRef } from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    quote:
      'Joro Services streamlined our patient portal launch in under six weeks, boosting user registrations by 60% within the first month.',
  },
  {
    quote:
      'Their cloud migration plan was on point—we saw a 35% drop in hosting costs and zero downtime during the transition.',
  },
  {
    quote:
      'After implementing their security roadmap, phishing incidents declined by 80% and our audit passed with no critical findings.',
  },
  {
    quote:
      'Their custom dashboard gave us real‑time metrics we never had before. Our delivery accuracy improved from 92% to 98%.',
  },
  {
    quote:
      'The website redesign increased average session duration by 45% and reduced bounce rate by 30%. Our conversion rate is the highest it’s ever been.',
  },
  {
    quote:
      'Their Agile coaching replaced our waterfall delays. Our team now ships features every two weeks with confidence and speed.',
  },
];

const TestimonialGrid = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Duplicate testimonials for seamless loop
    const items = [...testimonials, ...testimonials];
    const cardWidth = container.children[0]?.offsetWidth || 300;
    container.style.width = `${items.length * cardWidth}px`;

    let offset = 0;
    const speed = 1; // px per frame

    const animate = () => {
      offset = (offset + speed) % ((items.length * cardWidth) / 2);
      container.style.transform = `translateX(-${offset}px)`;
      requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animate);
  }, []);

  return (
    <section className="py-16 bg-white text-black">
      <h2 className="text-3xl font-semibold text-center mb-8">
        What Our Clients Say
      </h2>
      <div className="overflow-hidden">
        <div ref={containerRef} className="flex gap-8 lg:gap-12">
          {[...testimonials, ...testimonials].map((data, idx) => (
            <div key={idx} className="flex-shrink-0 w-72 md:w-80">
              <TestimonialCard data={data} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialGrid;
