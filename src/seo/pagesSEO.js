/**
 * Per-page SEO configuration for all routes.
 * Each key matches a route path.
 * Titles and descriptions are optimised for local (Aldershot/Hampshire) and UK-wide search.
 * Keywords target high-intent, competitive terms used by top UK IT service providers.
 */

const pagesSEO = {
  '/': {
    title: 'Managed IT Services, Web Development & Cybersecurity | Joro Services | Aldershot & London',
    description:
      'Joro Services is a UK IT services provider offering managed IT support, web development, cloud solutions, cybersecurity, and digital marketing for small and medium businesses in Aldershot, Hampshire, London, and across the UK. Free consultation.',
    keywords:
      'managed IT services UK, IT support Aldershot, web development Hampshire, cybersecurity services UK, cloud migration AWS, digital marketing agency Aldershot, IT outsourcing Hampshire, managed service provider, technology partner UK, MSP Aldershot, IT solutions London, Joro Services, IT support near me, IT support for small business UK, outsourced IT support, IT company Surrey',
  },
  '/services': {
    title: 'IT Services & Digital Solutions for UK Businesses | Joro Services',
    description:
      'IT services for UK businesses: managed support, cybersecurity, cloud infrastructure, web development, mobile apps, SEO, PPC, and creative design. Trusted by 20+ businesses. Free consultation.',
    keywords:
      'IT services UK, managed IT services, web development services, cybersecurity solutions, cloud services Hampshire, digital transformation, technology consulting, business IT solutions, IT outsourcing, digital agency Aldershot, IT services Surrey, web development agency UK, app development company UK',
  },
  '/about': {
    title: 'About Joro Services | Trusted IT & Digital Partner | Aldershot & London',
    description:
      'Joro Services Ltd is a UK technology company that gives small businesses access to enterprise-level IT services. AWS-certified, GDPR-compliant, and trusted by businesses in healthcare, recruitment, and financial services since 2022.',
    keywords:
      'about Joro Services, IT company Aldershot, technology partner UK, digital agency Hampshire, AWS certified, managed service provider London, IT consultancy Farnborough, digital transformation partner, GDPR compliant IT services, IT company Surrey',
  },
  '/getintouch': {
    title: 'Get a Free IT Consultation | Contact Joro Services | Aldershot, Hampshire',
    description:
      'Book a free consultation with Joro Services to discuss managed IT support, web development, cybersecurity, or cloud migration. Based in Aldershot, Hampshire. Serving clients UK-wide. Call 07867 374034.',
    keywords:
      'free IT consultation, contact Joro Services, IT support quote, web development quote, cybersecurity assessment, cloud audit, get a quote Aldershot, IT services enquiry Hampshire',
  },
  '/careers': {
    title: 'Careers in Tech | IT, Development & Marketing Jobs | Joro Services',
    description:
      'Join a growing UK technology company. We are hiring cloud engineers, developers, cybersecurity consultants, and digital marketers. Remote, hybrid, and on-site roles available across the UK.',
    keywords:
      'IT jobs UK, cloud engineer jobs, web developer jobs, cybersecurity jobs, digital marketing careers, tech jobs Hampshire, DevOps engineer, React developer, Joro Services careers',
  },
  '/creative-solutions': {
    title: 'Website Design, Branding & UI/UX Services | Joro Services | Hampshire',
    description:
      'Professional website design, graphic design, branding, and UI/UX services that convert visitors into customers. Mobile-first, SEO-optimised designs for UK businesses. Portfolio and case studies available.',
    keywords:
      'website design Hampshire, branding agency Aldershot, UI UX design UK, graphic design services, web design Farnborough, creative agency Surrey, logo design, brand identity, conversion-focused design',
  },
  '/creative-solutions/website-design': {
    title: 'Professional Website Design | Mobile-First & SEO-Optimised | Joro Services',
    description:
      'Website design services in Hampshire. We build fast, mobile-first websites that rank on Google and turn visitors into leads. WordPress, React, and Shopify. Prices from £1,500.',
    keywords:
      'website design Aldershot, web design Hampshire, responsive website, WordPress design, Shopify design, business website, affordable web design, professional website Surrey, mobile-first design, SEO website, WordPress website design UK, website redesign services, ecommerce website design, affordable website design for small business UK',
  },
  '/creative-solutions/graphic-design-and-branding': {
    title: 'Graphic Design & Brand Identity | Logo, Print & Digital | Joro Services',
    description:
      'Graphic design and branding services in Hampshire. Logo design, brand guidelines, marketing materials, and digital assets. We help you build a brand that stands out.',
    keywords:
      'graphic design Aldershot, branding Hampshire, logo design, brand identity, brand guidelines, corporate branding UK, design agency, visual identity, marketing design, print design, brand strategy consultancy, small business branding package',
  },
  '/creative-solutions/user-interface-and-experience': {
    title: 'UI/UX Design | User Research, Wireframing & Prototyping | Joro Services',
    description:
      'UI and UX design services for web and mobile. Wireframing, prototyping, usability testing, and design systems. We build digital products that people actually enjoy using.',
    keywords:
      'UI design, UX design Hampshire, user interface design, user experience design, wireframing, prototyping, usability testing, app design, digital product design UK, design systems, user research, UX audit services, Figma design services, web accessibility design',
  },
  '/development': {
    title: 'Software Development | Web Apps, Mobile Apps & APIs | Joro Services',
    description:
      'Software development using React, Next.js, Node.js, and cloud-native tech. We build web applications, mobile apps, and APIs for UK businesses. Agile delivery with post-launch support.',
    keywords:
      'software development UK, web development Hampshire, mobile app development, React developer, Next.js development, Node.js, custom software, full stack developer, API development, agile development, web development agency UK, SaaS application development, TypeScript development',
  },
  '/development/web-development': {
    title: 'Custom Web Development | React & Next.js Experts | Joro Services Hampshire',
    description:
      'Web development services using React, Next.js, and modern tech. Fast, secure, SEO-friendly websites and web applications for startups and established businesses. Prices from £1,500.',
    keywords:
      'web development Aldershot, web developer Hampshire, React development, Next.js developer, custom web application, ecommerce development, full stack developer, website developer Surrey, custom website, headless CMS development, progressive web app development, website maintenance and support, ecommerce website development UK',
  },
  '/development/mobile-app-development': {
    title: 'Mobile App Development | iOS & Android | React Native & Flutter | Joro Services',
    description:
      'iOS and Android mobile app development using React Native and Flutter. We build cross-platform apps from MVPs to full enterprise applications. Serving businesses across the UK.',
    keywords:
      'mobile app development UK, app developer Hampshire, iOS development, Android app development, React Native developer, Flutter development, cross-platform app, app design and development, MVP development, app development company UK, Flutter app development UK, React Native app development UK, startup app development, mobile app testing services',
  },
  '/development/data-management': {
    title: 'Data Management, Analytics & Database Design | Joro Services Hampshire',
    description:
      'Data management, database design, and business intelligence services. We help UK businesses organise, migrate, and leverage their data for better decision-making. Cloud databases and ETL pipelines.',
    keywords:
      'data management UK, database design, data analytics, data migration, cloud database, business intelligence, data solutions, data engineering, ETL, data warehouse, Power BI, data consultant, data strategy consulting, data visualisation services, dashboard development, CRM data management, GDPR data compliance',
  },
  '/digital-marketing': {
    title: 'Digital Marketing Agency | SEO, PPC & Social Media | Joro Services Hampshire',
    description:
      'Digital marketing services for UK businesses. SEO, Google Ads, social media management, and content strategy that actually bring in results. Free marketing audit available.',
    keywords:
      'digital marketing agency UK, SEO services Hampshire, PPC management, social media marketing, content marketing, Google Ads, Facebook advertising, online marketing, digital strategy, marketing agency Aldershot, digital marketing agency near me, B2B digital marketing UK, conversion rate optimisation CRO, marketing automation, email marketing services',
  },
  '/digital-marketing/seo-and-content-strategy': {
    title: 'SEO Services | Technical SEO, Content Strategy & Local SEO | Joro Services',
    description:
      'SEO services that actually get results. Technical SEO audits, keyword-targeted content, local SEO for Hampshire businesses, and monthly reporting. Free SEO audit. No lock-in contracts.',
    keywords:
      'SEO services UK, SEO agency Hampshire, local SEO Aldershot, content strategy, Google rankings, search engine optimisation, technical SEO, link building, content marketing, SEO consultant, SEO audit free, SEO services for small business UK, local SEO services Hampshire, technical SEO audit, SEO agency near me, Google Business Profile optimisation',
  },
  '/digital-marketing/social-media-management': {
    title: 'Social Media Management | Strategy, Content & Advertising | Joro Services',
    description:
      'Social media management for UK businesses. We handle your LinkedIn, Facebook, Instagram, and X with a clear strategy, good content, and paid ads when it makes sense. Monthly reporting included.',
    keywords:
      'social media management UK, social media marketing Hampshire, Facebook management, Instagram marketing, LinkedIn management, social media agency, social media strategy, paid social, content creation, social media agency Hampshire, TikTok marketing UK, video marketing services',
  },
  '/digital-marketing/ppc-and-online-campaigns': {
    title: 'PPC Management | Google Ads & Social Advertising | Joro Services Hampshire',
    description:
      'PPC and paid advertising management. Google Ads, Meta Ads, LinkedIn Ads, and display campaigns. Transparent reporting, no markup on ad spend. Average 4.2x ROAS across our clients.',
    keywords:
      'PPC management UK, Google Ads agency Hampshire, Facebook Ads, LinkedIn Ads, paid advertising, pay per click, PPC agency, SEM services, display advertising, remarketing, ROAS, conversion tracking, Google Ads management UK, PPC agency for small business UK, landing page optimisation',
  },
  '/technical-services': {
    title: 'Managed IT Services | IT Support, Cybersecurity & Cloud | Joro Services',
    description:
      'IT services at prices small businesses can afford. Managed IT support, cybersecurity, and AWS cloud infrastructure for UK businesses. 24/7 monitoring, proactive maintenance, and proper support.',
    keywords:
      'managed IT services UK, IT support Hampshire, cybersecurity services, cloud infrastructure, managed service provider, IT outsourcing, tech support, network security, IT solutions, MSP Aldershot, IT support for small business UK, remote IT support, co-managed IT support, IT infrastructure management, IT disaster recovery',
  },
  '/technical-services/it-support-and-maintenance': {
    title: 'Managed IT Support | 24/7 Monitoring & Helpdesk | Joro Services Hampshire',
    description:
      'Reliable managed IT support for UK businesses. 24/7 monitoring, proactive maintenance, helpdesk support, and on-site visits. From £30/user/month. Serving Hampshire, Surrey, and UK-wide.',
    keywords:
      'managed IT support UK, IT support Hampshire, helpdesk support, IT maintenance, managed services, proactive monitoring, IT outsourcing, computer support, network maintenance, tech support Aldershot, outsourced IT support, IT support contract, monthly IT support plan, IT support per user pricing, 24/7 IT support UK, on-site IT support Hampshire, Microsoft 365 support',
  },
  '/technical-services/cybersecurity': {
    title: 'Cybersecurity Services for SMBs | Security Audits & Managed Security | Joro Services',
    description:
      'Cybersecurity for UK small businesses that actually works. Security audits, M365 hardening, endpoint protection, phishing simulations, and ongoing management. Free security health check. We took one client from 33% to 61%.',
    keywords:
      'cybersecurity services UK, cyber security SMB, security audit Hampshire, GDPR compliance, endpoint protection, phishing protection, managed security, Microsoft 365 security, penetration testing, Cyber Essentials, Cyber Essentials Plus, ransomware protection, security awareness training, vulnerability assessment, cyber security for small business UK, cyber security consultant Hampshire',
  },
  '/technical-services/cloud-infrastructure': {
    title: 'AWS Cloud Services | Migration, Cost Optimisation & Management | Joro Services',
    description:
      'AWS-certified cloud services for UK businesses. Cloud migration, cost optimisation (we save clients 26.6% on average), security hardening, and ongoing management. Free AWS cost audit. Fixed pricing.',
    keywords:
      'AWS cloud services UK, cloud migration Hampshire, cloud cost optimisation, AWS consulting, cloud infrastructure, managed cloud services, cloud security, DevOps, infrastructure as code, cloud hosting, AWS managed services UK, cloud computing for small business, cloud backup solutions, AWS Well-Architected review, hybrid cloud solutions, Infrastructure as Code Terraform',
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
