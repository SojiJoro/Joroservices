import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    quote:
      'They handled our website rebuild end to end and were straightforward about timelines. Easy to work with.',
    name: 'Operations Director',
    role: 'Healthcare Provider',
  },
  {
    quote:
      'Our cloud setup was reviewed and tidied up. The team explained the changes in plain English and our bill came down.',
    name: 'CTO',
    role: 'Recruitment Platform',
  },
  {
    quote:
      'We use them for ongoing IT support. Tickets get picked up within the hour and we hear back the same day.',
    name: 'Head of Operations',
    role: 'Care Organisation',
  },
];

const TestimonialGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {testimonials.map((data, idx) => (
      <TestimonialCard key={idx} data={data} />
    ))}
  </div>
);

export default TestimonialGrid;
