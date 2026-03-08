/**
 * Per-page SEO configuration for all routes.
 * Each key matches a route path.
 * Titles and descriptions are optimised for local (Aldershot/Hampshire) and UK-wide search.
 */

const pagesSEO = {
  '/': {
    title: 'Joro Services | Web Development, Digital Marketing & IT Solutions in Aldershot, Hampshire',
    description:
      'Joro Services Ltd delivers expert web development, digital marketing, SEO, mobile app development, UI/UX design, cybersecurity, and IT support for businesses in Aldershot, Hampshire, and across the UK. Free consultation available.',
    keywords:
      'web development Aldershot, digital marketing Hampshire, SEO Aldershot, IT support Farnborough, web design Aldershot, mobile app development Hampshire, cybersecurity UK, cloud infrastructure, Joro Services, digital agency Aldershot, website design Hampshire, PPC management Surrey',
  },
  '/services': {
    title: 'Our Services | Web Development, Marketing, IT & Design | Joro Services Aldershot',
    description:
      'Explore our full range of digital services including web development, SEO, PPC, social media marketing, mobile apps, UI/UX design, IT support, cybersecurity, and cloud solutions. Serving Aldershot, Hampshire, and UK-wide.',
    keywords:
      'digital services Aldershot, web development services Hampshire, digital marketing services UK, IT services Farnborough, creative design Aldershot, technology services Surrey, business IT solutions',
  },
  '/about': {
    title: 'About Joro Services | Digital Agency in Aldershot & London | Est. 2022',
    description:
      'Learn about Joro Services Ltd, a professional digital agency providing web development, digital marketing, IT support, and creative solutions to businesses in Aldershot, Hampshire, London, and across the UK since 2022.',
    keywords:
      'about Joro Services, digital agency Aldershot, IT company Hampshire, web development company London, technology partner UK, digital consultancy Farnborough',
  },
  '/getintouch': {
    title: 'Contact Joro Services | Free Consultation | Aldershot, Hampshire',
    description:
      'Get in touch with Joro Services for a free consultation on web development, digital marketing, IT support, or any digital project. Based in Aldershot, Hampshire, serving clients UK-wide. Call 07867 374034.',
    keywords:
      'contact Joro Services, free consultation Aldershot, digital agency contact Hampshire, web developer contact, IT support enquiry, get a quote Aldershot',
  },
  '/careers': {
    title: 'Careers at Joro Services | Digital & IT Jobs in Aldershot, Hampshire',
    description:
      'Join the Joro Services team. We are hiring talented developers, designers, marketers, and IT professionals in Aldershot, Hampshire. Explore career opportunities in a growing digital agency.',
    keywords:
      'jobs Aldershot, digital marketing jobs Hampshire, web developer jobs, IT careers Farnborough, design jobs Surrey, tech jobs UK, Joro Services careers',
  },
  '/creative-solutions': {
    title: 'Creative Solutions | Website Design, Branding & UI/UX | Joro Services Aldershot',
    description:
      'Professional website design, graphic design, branding, and UI/UX services in Aldershot, Hampshire. We create stunning digital experiences that convert visitors into customers. Serving UK-wide.',
    keywords:
      'website design Aldershot, graphic design Hampshire, branding agency Farnborough, UI UX design Surrey, creative agency Aldershot, web design services UK, logo design Hampshire',
  },
  '/creative-solutions/website-design': {
    title: 'Website Design Services in Aldershot, Hampshire | Joro Services',
    description:
      'Professional, responsive website design services in Aldershot and Hampshire. We build beautiful, fast-loading websites that rank on Google and convert visitors into leads. Mobile-friendly designs for every business.',
    keywords:
      'website design Aldershot, web design Hampshire, responsive website Farnborough, WordPress design, Shopify design, business website Aldershot, affordable web design Hampshire, professional website Surrey',
  },
  '/creative-solutions/graphic-design-and-branding': {
    title: 'Graphic Design & Branding in Aldershot, Hampshire | Joro Services',
    description:
      'Expert graphic design and branding services in Aldershot, Hampshire. From logo design to full brand identity, we help your business stand out. Serving Farnborough, Camberley, Guildford, and UK-wide.',
    keywords:
      'graphic design Aldershot, branding Hampshire, logo design Farnborough, brand identity Camberley, visual identity Guildford, corporate branding UK, design agency Aldershot',
  },
  '/creative-solutions/user-interface-and-experience': {
    title: 'UI/UX Design Services in Aldershot, Hampshire | Joro Services',
    description:
      'User interface and user experience design services in Aldershot, Hampshire. We create intuitive, user-centred digital products that delight users and drive business results. Wireframing, prototyping, and usability testing.',
    keywords:
      'UI design Aldershot, UX design Hampshire, user interface design, user experience design, wireframing, prototyping, usability testing, app design Farnborough, digital product design UK',
  },
  '/development': {
    title: 'Software Development | Web & Mobile Apps | Joro Services Aldershot',
    description:
      'Expert web development, mobile app development, and data management services in Aldershot, Hampshire. We build scalable, secure applications using React, Next.js, Node.js, and more. UK-wide delivery.',
    keywords:
      'web development Aldershot, mobile app development Hampshire, software development Farnborough, React developer Surrey, Node.js development UK, custom software Aldershot, app developer Hampshire',
  },
  '/development/web-development': {
    title: 'Web Development Services in Aldershot, Hampshire | Joro Services',
    description:
      'Custom web development services in Aldershot and Hampshire. We build fast, secure, SEO-optimised websites and web applications using React, Next.js, and modern technologies. From startups to enterprises.',
    keywords:
      'web development Aldershot, web developer Hampshire, React development Farnborough, Next.js developer, custom web application, ecommerce development Aldershot, full stack developer Hampshire, website developer Surrey',
  },
  '/development/mobile-app-development': {
    title: 'Mobile App Development in Aldershot, Hampshire | Joro Services',
    description:
      'Professional iOS and Android mobile app development in Aldershot, Hampshire. We build native and cross-platform apps that users love. React Native and Flutter expertise. Serving businesses UK-wide.',
    keywords:
      'mobile app development Aldershot, app developer Hampshire, iOS development Farnborough, Android app development, React Native developer, Flutter development UK, app design and development Surrey',
  },
  '/development/data-management': {
    title: 'Data Management & Analytics in Aldershot, Hampshire | Joro Services',
    description:
      'Data management, database design, and analytics services in Aldershot, Hampshire. We help businesses organise, analyse, and leverage their data for better decision-making. Cloud databases and data migration.',
    keywords:
      'data management Aldershot, database design Hampshire, data analytics Farnborough, data migration UK, cloud database, business intelligence, data solutions Surrey, data consultant Hampshire',
  },
  '/digital-marketing': {
    title: 'Digital Marketing Services | SEO, PPC & Social Media | Joro Services Aldershot',
    description:
      'Results-driven digital marketing services in Aldershot, Hampshire. SEO, PPC advertising, social media management, and content strategy to grow your business online. Free marketing audit available.',
    keywords:
      'digital marketing Aldershot, SEO Hampshire, PPC management Farnborough, social media marketing Surrey, content marketing UK, online marketing Aldershot, Google Ads management, Facebook advertising Hampshire',
  },
  '/digital-marketing/seo-and-content-strategy': {
    title: 'SEO & Content Strategy Services in Aldershot, Hampshire | Joro Services',
    description:
      'Professional SEO and content strategy services in Aldershot, Hampshire. We improve your Google rankings with technical SEO, local SEO, content marketing, and link building. Get found by more customers in Aldershot and beyond.',
    keywords:
      'SEO Aldershot, SEO services Hampshire, local SEO Farnborough, content strategy, Google rankings, search engine optimisation UK, technical SEO, link building, content marketing Aldershot, SEO consultant Hampshire, SEO agency Surrey',
  },
  '/digital-marketing/social-media-management': {
    title: 'Social Media Management in Aldershot, Hampshire | Joro Services',
    description:
      'Expert social media management services in Aldershot, Hampshire. We manage your Facebook, Instagram, LinkedIn, and Twitter accounts to build your brand and engage your audience. Strategy, content creation, and reporting.',
    keywords:
      'social media management Aldershot, social media marketing Hampshire, Facebook management, Instagram marketing Farnborough, LinkedIn management, social media agency Surrey, social media strategy UK',
  },
  '/digital-marketing/ppc-and-online-campaigns': {
    title: 'PPC & Online Advertising in Aldershot, Hampshire | Joro Services',
    description:
      'Professional PPC and online campaign management in Aldershot, Hampshire. Google Ads, Facebook Ads, and display advertising to drive targeted traffic and conversions. Transparent reporting and ROI-focused campaigns.',
    keywords:
      'PPC Aldershot, Google Ads management Hampshire, Facebook Ads Farnborough, online advertising Surrey, pay per click UK, PPC agency Aldershot, SEM services Hampshire, display advertising, remarketing',
  },
  '/technical-services': {
    title: 'IT Support, Cybersecurity & Cloud Services | Joro Services Aldershot',
    description:
      'Professional IT support, cybersecurity, and cloud infrastructure services in Aldershot, Hampshire. We keep your business secure, online, and running smoothly. 24/7 support available for UK businesses.',
    keywords:
      'IT support Aldershot, cybersecurity Hampshire, cloud services Farnborough, managed IT services, IT infrastructure Surrey, tech support UK, network security Aldershot, IT solutions Hampshire',
  },
  '/technical-services/it-support-and-maintenance': {
    title: 'IT Support & Maintenance in Aldershot, Hampshire | Joro Services',
    description:
      'Reliable IT support and maintenance services in Aldershot, Hampshire. From helpdesk support to proactive monitoring and maintenance, we keep your systems running. Serving businesses in Farnborough, Camberley, and UK-wide.',
    keywords:
      'IT support Aldershot, IT maintenance Hampshire, helpdesk support Farnborough, managed IT services Camberley, computer support, network maintenance Surrey, IT outsourcing UK, tech support Aldershot',
  },
  '/technical-services/cybersecurity': {
    title: 'Cybersecurity Services in Aldershot, Hampshire | Joro Services',
    description:
      'Comprehensive cybersecurity services in Aldershot, Hampshire. Protect your business from cyber threats with penetration testing, security audits, compliance, and 24/7 monitoring. GDPR compliant solutions for UK businesses.',
    keywords:
      'cybersecurity Aldershot, cyber security Hampshire, penetration testing Farnborough, security audit, GDPR compliance, network security Surrey, data protection UK, cyber threat protection Aldershot',
  },
  '/technical-services/cloud-infrastructure': {
    title: 'Cloud Infrastructure & Migration in Aldershot, Hampshire | Joro Services',
    description:
      'Expert cloud infrastructure and migration services in Aldershot, Hampshire. AWS, Azure, and Google Cloud solutions for scalable, secure business operations. Cloud consulting, setup, and ongoing management across the UK.',
    keywords:
      'cloud infrastructure Aldershot, cloud migration Hampshire, AWS services Farnborough, Azure solutions, Google Cloud, cloud consulting Surrey, cloud management UK, cloud hosting Aldershot',
  },
  '/privacy': {
    title: 'Privacy Policy | Joro Services Ltd',
    description:
      'Read the privacy policy of Joro Services Ltd. Learn how we collect, use, and protect your personal data in compliance with GDPR and UK data protection regulations.',
    keywords: 'privacy policy, Joro Services privacy, data protection, GDPR compliance',
  },
  '/terms': {
    title: 'Terms of Service | Joro Services Ltd',
    description:
      'Review the terms of service for Joro Services Ltd. Understand the conditions governing our digital marketing, web development, and IT services.',
    keywords: 'terms of service, Joro Services terms, service agreement, terms and conditions',
  },
};

export default pagesSEO;
