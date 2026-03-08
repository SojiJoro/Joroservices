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
    streetAddress: 'Kemp House, 152-160 City Road',
    addressLocality: 'London',
    addressRegion: 'England',
    postalCode: 'EC1V 2NX',
    addressCountry: 'GB',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Aldershot',
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'Hampshire',
      },
    },
    {
      '@type': 'City',
      name: 'Farnborough',
    },
    {
      '@type': 'City',
      name: 'Farnham',
    },
    {
      '@type': 'City',
      name: 'Camberley',
    },
    {
      '@type': 'City',
      name: 'Guildford',
    },
    {
      '@type': 'City',
      name: 'London',
    },
    {
      '@type': 'Country',
      name: 'United Kingdom',
    },
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
    'Professional digital marketing, web development, IT support, cybersecurity, and cloud solutions provider serving Aldershot, Hampshire, and businesses across the UK.',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kemp House, 152-160 City Road',
    addressLocality: 'London',
    addressRegion: 'England',
    postalCode: 'EC1V 2NX',
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
    { '@type': 'City', name: 'Camberley' },
    { '@type': 'City', name: 'Guildford' },
    { '@type': 'City', name: 'Fleet' },
    { '@type': 'City', name: 'Reading' },
    { '@type': 'City', name: 'Basingstoke' },
    { '@type': 'City', name: 'Woking' },
    { '@type': 'City', name: 'London' },
    { '@type': 'AdministrativeArea', name: 'Hampshire' },
    { '@type': 'AdministrativeArea', name: 'Surrey' },
    { '@type': 'Country', name: 'United Kingdom' },
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
      {
        '@type': 'OfferCatalog',
        name: 'Creative Solutions',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Design' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Graphic Design and Branding' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UI/UX Design' } },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Development',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Data Management' } },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Digital Marketing',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO and Content Strategy' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Management' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'PPC and Online Campaigns' } },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Technical Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'IT Support and Maintenance' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cybersecurity' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud Infrastructure' } },
        ],
      },
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

// FAQ schema - from homepage FAQ data
export const homepageFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What digital marketing services do you offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We specialise in SEO, PPC, social media management, email marketing, and content strategy. Each campaign is tailored to meet your unique business goals.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you measure campaign success?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We track key metrics such as traffic growth, conversion rates, engagement levels, and ROI using industry-leading analytics tools to ensure transparent reporting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you work with our in-house team?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We collaborate seamlessly with your internal teams, offering strategic guidance, training, and full support to amplify your existing efforts.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is your pricing model?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer both project-based and retainer pricing, depending on the scope and duration of your requirements. Contact us for a custom quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long until we see results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'While paid campaigns can yield quick wins, organic strategies like SEO typically take 3-6 months to fully mature. We set realistic timelines and milestones from the start.',
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
      { '@type': 'City', name: 'London' },
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
