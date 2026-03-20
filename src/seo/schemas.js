const BASE_URL = 'https://joroservices.org';

// Organization schema - global
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: 'Joro Services Ltd',
  alternateName: 'Joro Services',
  url: BASE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/Joro.svg`,
    width: 512,
    height: 512,
  },
  image: `${BASE_URL}/Joro.svg`,
  description:
    'Joro Services Ltd is a UK managed IT services provider delivering web development, cloud infrastructure, cybersecurity, digital marketing, and IT support for SMBs across Aldershot, Hampshire, London, and the UK. AWS-certified, GDPR-compliant.',
  foundingDate: '2022-04-30',
  legalName: 'JORO SERVICES LTD',
  taxID: '14079588',
  telephone: '+447867374034',
  email: 'info@joroservices.org',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kemp House, 152-160 City Road',
    addressLocality: 'London',
    postalCode: 'EC1V 2NX',
    addressCountry: 'GB',
  },
  location: {
    '@type': 'Place',
    name: 'Joro Services - Aldershot Office',
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
    { '@type': 'City', name: 'Reading' },
    { '@type': 'AdministrativeArea', name: 'Surrey' },
    { '@type': 'AdministrativeArea', name: 'Hampshire' },
    { '@type': 'Country', name: 'United Kingdom' },
  ],
  sameAs: [
    'https://www.facebook.com/Joroservices',
    'https://x.com/Joroservices',
    'https://www.linkedin.com/company/joro-services',
    'https://www.instagram.com/joroservices',
    'https://find-and-update.company-information.service.gov.uk/company/14079588',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+447867374034',
      contactType: 'customer service',
      email: 'info@joroservices.org',
      areaServed: 'GB',
      availableLanguage: 'English',
      contactOption: 'TollFree',
    },
    {
      '@type': 'ContactPoint',
      telephone: '+447867374034',
      contactType: 'sales',
      email: 'info@joroservices.org',
      areaServed: 'GB',
      availableLanguage: 'English',
    },
    {
      '@type': 'ContactPoint',
      telephone: '+447867374034',
      contactType: 'technical support',
      email: 'info@joroservices.org',
      areaServed: 'GB',
      availableLanguage: 'English',
    },
  ],
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    minValue: 2,
    maxValue: 10,
  },
  knowsAbout: [
    'Web Development',
    'IT Support',
    'Cybersecurity',
    'Cloud Infrastructure',
    'Digital Marketing',
    'SEO',
    'Mobile App Development',
    'UI/UX Design',
    'Graphic Design',
    'Data Management',
    'React',
    'Next.js',
    'AWS',
    'Microsoft 365',
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
    'Full-service digital agency in Aldershot, Hampshire. Web design from £1,500, IT support from £30/user/month, cybersecurity, cloud infrastructure, and digital marketing for local businesses.',
  priceRange: '$$',
  currenciesAccepted: 'GBP',
  paymentAccepted: 'Bank Transfer, Credit Card',
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
    'https://find-and-update.company-information.service.gov.uk/company/14079588',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital Services',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Creative Solutions',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Design', url: `${BASE_URL}/creative-solutions/website-design` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Graphic Design and Branding', url: `${BASE_URL}/creative-solutions/graphic-design-and-branding` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UI/UX Design', url: `${BASE_URL}/creative-solutions/user-interface-and-experience` } },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Development',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Development', url: `${BASE_URL}/development/web-development` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development', url: `${BASE_URL}/development/mobile-app-development` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Data Management', url: `${BASE_URL}/development/data-management` } },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Digital Marketing',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO and Content Strategy', url: `${BASE_URL}/digital-marketing/seo-and-content-strategy` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Management', url: `${BASE_URL}/digital-marketing/social-media-management` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'PPC and Online Campaigns', url: `${BASE_URL}/digital-marketing/ppc-and-online-campaigns` } },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Technical Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'IT Support and Maintenance', url: `${BASE_URL}/technical-services/it-support-and-maintenance` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cybersecurity', url: `${BASE_URL}/technical-services/cybersecurity` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud Infrastructure', url: `${BASE_URL}/technical-services/cloud-infrastructure` } },
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
  alternateName: 'Joro Services Ltd',
  url: BASE_URL,
  publisher: { '@id': `${BASE_URL}/#organization` },
  inLanguage: 'en-GB',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/services`,
    },
    'query-input': 'required name=search_term_string',
  },
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
    {
      '@type': 'Question',
      name: 'How quickly can you respond to IT issues?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For on-site support within Aldershot, we can usually arrive within an hour. Remote support response time averages under 15 minutes during business hours. Critical issues are escalated immediately.',
      },
    },
    {
      '@type': 'Question',
      name: 'What technologies do you use for web development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We primarily use React, Next.js, Node.js, and TypeScript for modern web applications. We also work with WordPress and Shopify for CMS-based sites. All our builds are mobile-first, SEO-optimised, and optimised for performance.',
      },
    },
  ],
};

// Speakable schema helper - for AI voice assistants and featured snippets
export function speakableSchema({ url, cssSelectors = ['h1', '.speakable-content'] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: cssSelectors,
    },
    url: `${BASE_URL}${url}`,
  };
}

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

// Service schema helper - enhanced with offers and pricing
export function serviceSchema({ name, description, url, category, areaServed, priceRange }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${BASE_URL}${url}/#service`,
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
      priceCurrency: 'GBP',
      areaServed: {
        '@type': 'Country',
        name: 'United Kingdom',
      },
    },
    termsOfService: `${BASE_URL}/terms`,
  };

  if (priceRange) {
    schema.offers.price = priceRange;
    schema.offers.priceSpecification = {
      '@type': 'PriceSpecification',
      priceCurrency: 'GBP',
    };
  }

  return schema;
}

// WebPage schema helper - enhanced
export function webPageSchema({ name, description, url, dateModified }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${BASE_URL}${url}/#webpage`,
    name,
    description,
    url: `${BASE_URL}${url}`,
    isPartOf: { '@id': `${BASE_URL}/#website` },
    about: { '@id': `${BASE_URL}/#organization` },
    inLanguage: 'en-GB',
    dateModified: dateModified || '2026-03-20',
    breadcrumb: { '@id': `${BASE_URL}${url}/#breadcrumb` },
  };
}

// Location-specific LocalBusiness schema helper - enhanced
export function locationBusinessSchema({ town, county = 'Hampshire', lat, lng }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${BASE_URL}/#localbusiness-${town.toLowerCase()}`,
    name: 'Joro Services Ltd',
    url: BASE_URL,
    telephone: '+447867374034',
    email: 'info@joroservices.org',
    image: `${BASE_URL}/Joro.svg`,
    description: `Full-service digital agency providing web design, IT support, cybersecurity, and digital marketing for businesses in ${town}, ${county}.`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: town,
      addressRegion: county,
      addressCountry: 'GB',
    },
    areaServed: { '@type': 'City', name: town },
    priceRange: '$$',
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
  };

  if (lat && lng) {
    schema.geo = {
      '@type': 'GeoCoordinates',
      latitude: lat,
      longitude: lng,
    };
  }

  return schema;
}

// Offer/Pricing schema helper for service pages
export function offerSchema({ name, price, priceCurrency = 'GBP', unit, description }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name,
    description,
    price,
    priceCurrency,
    availability: 'https://schema.org/InStock',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price,
      priceCurrency,
      unitText: unit || 'project',
    },
    seller: { '@id': `${BASE_URL}/#organization` },
  };
}

// Video schema helper for video content
export function videoSchema({ name, description, thumbnailUrl, contentUrl, uploadDate = '2026-03-20', duration }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name,
    description,
    thumbnailUrl: thumbnailUrl.startsWith('http') ? thumbnailUrl : `${BASE_URL}${thumbnailUrl}`,
    contentUrl: contentUrl.startsWith('http') ? contentUrl : `${BASE_URL}${contentUrl}`,
    uploadDate,
    publisher: { '@id': `${BASE_URL}/#organization` },
  };
  if (duration) schema.duration = duration;
  return schema;
}

// How-To schema helper for process/methodology pages
export function howToSchema({ name, description, steps }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}
