import React, { useEffect, useRef } from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    quote:
      'They streamlined our patient portal launch in under six weeks, boosting user registrations by 60% within the first month.',
    name: 'Operations Director',
    role: 'Healthcare Provider',
  },
  {
    quote:
      'Their cloud migration plan was spot on. We saw a 35% drop in hosting costs and zero downtime during the transition.',
    name: 'CTO',
    role: 'Recruitment Platform',
  },
  {
    quote:
      'After implementing their security roadmap, phishing incidents declined by 80% and our audit passed with no critical findings.',
    name: 'Head of Compliance',
    role: 'Social Care Organisation',
  },
  {
    quote:
      'Their custom dashboard gave us real-time metrics we never had before. Our delivery accuracy improved from 92% to 98%.',
    name: 'Logistics Manager',
    role: 'E-commerce Business',
  },
  {
    quote:
      'The website redesign increased average session duration by 45% and reduced bounce rate by 30%. Our conversion rate is the highest it has ever been.',
    name: 'Marketing Lead',
    role: 'Non-profit Organisation',
  },
  {
    quote:
      'Their team integrated seamlessly with ours. We shipped features faster than we thought possible and the quality was outstanding.',
    name: 'Product Manager',
    role: 'SaaS Company',
  },
];

const TestimonialGrid = () => {
  const containerRef = useRef(null);
  const rafIdRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !container.children[0]) return;

    const cardWidth = container.children[0].offsetWidth + 24;
    const totalWidth = testimonials.length * cardWidth;
    let offset = 0;
    const speed = 0.4;

    const animate = () => {
      offset = (offset + speed) % totalWidth;
      container.style.transform = `translate3d(-${offset}px, 0, 0)`;
      rafIdRef.current = requestAnimationFrame(animate);
    };

    rafIdRef.current = requestAnimationFrame(animate);

    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(rafIdRef.current);
      } else {
        rafIdRef.current = requestAnimationFrame(animate);
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      cancelAnimationFrame(rafIdRef.current);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <div
        ref={containerRef}
        className="flex gap-6 will-change-transform"
        style={{ width: 'max-content' }}
      >
        {[...testimonials, ...testimonials].map((data, idx) => (
          <div key={idx} className="flex-shrink-0 w-80 lg:w-96">
            <TestimonialCard data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialGrid;
