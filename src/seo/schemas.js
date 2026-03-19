const BASE_URL = 'https://joroservices.org';

// Organization schema - global
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: 'Joro Services Ltd',
  alternateName: 'Joro Services',
  url: BASE_URL,
  logo: `${BASE_URL}/Joro.svg`,
  description:
    'Joro Services Ltd is a UK managed IT services provider delivering web development, cloud infrastructure, cybersecurity, digital marketing, and IT support for SMBs across Aldershot, Hampshire, London, and the UK. AWS-certified, GDPR-compliant.',
  foundingDate: '2022-04-30',
  legalName: 'JORO SERVICES LTD',
  telephone: '+447867374034',
  email: 'info@joroservices.org',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Aldershot',
    addressRegion: 'Hampshire',
    addressCountry: 'GB',
  },
  areaServed: [
    { '@type': 'City', name: 'Aldershot' },
    { '@type': 'City', name: 'Farnborough' },
    { '@type': 'City', name: 'Farnham' },
    { '@type': 'City', name: 'Fleet' },
    { '@type': 'City', name: 'Camberley' },
    { '@type': 'City', name: 'Guildford' },
    { '@type': 'City', name: 'Basingstoke' },
    { '@type': 'City', name: 'Woking' },
    { '@type': 'AdministrativeArea', name: 'Surrey' },
    { '@type': 'AdministrativeArea', name: 'Hampshire' },
    { '@type': 'Country', name: 'United Kingdom' },
  ],
  sameAs: [
    'https://www.facebook.com/Joroservices',
    'https://x.com/Joroservices',
    'https://www.linkedin.com/company/joro-services',
    'https://www.instagram.com/joroservices',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+447867374034',
      contactType: 'customer service',
      email: 'info@joroservices.org',
      areaServed: 'GB',
      availableLanguage: 'English',
    },
  ],
};

// LocalBusiness schema - Aldershot focused
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${BASE_URL}/#localbusiness`,
  name: 'Joro Services Ltd',
  image: `${BASE_URL}/Joro.svg`,
  url: BASE_URL,
  telephone: '+447867374034',
  email: 'info@joroservices.org',
  description:
    'Full-service digital agency in Aldershot, Hampshire. Web design, IT support, cybersecurity, cloud infrastructure, and digital marketing for local businesses.',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Aldershot',
    addressRegion: 'Hampshire',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.2483,
    longitude: -0.7589,
  },
  areaServed: [
    { '@type': 'City', name: 'Aldershot' },
    { '@type': 'City', name: 'Farnborough' },
    { '@type': 'City', name: 'Farnham' },
    { '@type': 'City', name: 'Fleet' },
    { '@type': 'City', name: 'Camberley' },
    { '@type': 'City', name: 'Guildford' },
    { '@type': 'City', name: 'Basingstoke' },
    { '@type': 'City', name: 'Woking' },
    { '@type': 'AdministrativeArea', name: 'Surrey' },
    { '@type': 'AdministrativeArea', name: 'Hampshire' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  sameAs: [
    'https://www.facebook.com/Joroservices',
    'https://x.com/Joroservices',
    'https://www.linkedin.com/company/joro-services',
    'https://www.instagram.com/joroservices',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Design' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Graphic Design and Branding' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UI/UX Design' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Data Management' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO and Content Strategy' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Management' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'PPC and Online Campaigns' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'IT Support and Maintenance' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cybersecurity' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud Infrastructure' } },
    ],
  },
};

// Website schema with SearchAction
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  name: 'Joro Services',
  url: BASE_URL,
  publisher: { '@id': `${BASE_URL}/#organization` },
  inLanguage: 'en-GB',
};

// FAQ schema - homepage
export const homepageFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What services does Joro Services offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer web design, web development, mobile app development, graphic design and branding, UI/UX design, SEO, social media management, PPC advertising, IT support, cybersecurity, cloud infrastructure, and data management. All from one team based in Aldershot, Hampshire.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where are you based and which areas do you cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are based in Aldershot, Hampshire. We serve businesses across Aldershot, Farnborough, Farnham, Fleet, Camberley, Guildford, Basingstoke, Woking, and the wider Hampshire and Surrey area. We also work with clients across the UK.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is Joro Services different from other agencies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We combine technical infrastructure expertise with creative and marketing services. Most web agencies cannot fix server performance issues. Most IT companies do not do marketing. We do both, which means your website is fast, secure, and gets found on Google.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is your pricing model?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer both project-based and monthly retainer pricing. Web design starts from £1,500, IT support from £30 per user per month, and SEO from £500 per month. Every quote is fixed price with no hidden fees. Contact us for a custom quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer free consultations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We offer free consultations, free SEO audits, free security health checks, and free AWS cost audits. No obligation, no sales pressure. Just an honest conversation about what you need.',
      },
    },
  ],
};

// Breadcrumb helper
export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.path ? `${BASE_URL}${item.path}` : undefined,
    })),
  };
}

// Service schema helper
export function serviceSchema({ name, description, url, category, areaServed }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${BASE_URL}${url}`,
    provider: { '@id': `${BASE_URL}/#organization` },
    areaServed: areaServed || [
      { '@type': 'City', name: 'Aldershot' },
      { '@type': 'City', name: 'Farnborough' },
      { '@type': 'City', name: 'Farnham' },
      { '@type': 'City', name: 'Fleet' },
      { '@type': 'City', name: 'Camberley' },
      { '@type': 'City', name: 'Guildford' },
      { '@type': 'City', name: 'Basingstoke' },
      { '@type': 'City', name: 'Woking' },
      { '@type': 'AdministrativeArea', name: 'Hampshire' },
      { '@type': 'AdministrativeArea', name: 'Surrey' },
      { '@type': 'Country', name: 'United Kingdom' },
    ],
    serviceType: category,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      areaServed: {
        '@type': 'Country',
        name: 'United Kingdom',
      },
    },
  };
}

// WebPage schema helper
export function webPageSchema({ name, description, url }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: `${BASE_URL}${url}`,
    isPartOf: { '@id': `${BASE_URL}/#website` },
    about: { '@id': `${BASE_URL}/#organization` },
    inLanguage: 'en-GB',
  };
}

// Location-specific LocalBusiness schema helper
export function locationBusinessSchema({ town, county = 'Hampshire' }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Joro Services Ltd',
    url: BASE_URL,
    telephone: '+447867374034',
    email: 'info@joroservices.org',
    address: {
      '@type': 'PostalAddress',
      addressLocality: town,
      addressRegion: county,
      addressCountry: 'GB',
    },
    areaServed: { '@type': 'City', name: town },
    priceRange: '$$',
  };
}
