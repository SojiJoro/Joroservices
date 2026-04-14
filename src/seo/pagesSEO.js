/**
 * Per-page SEO configuration for all routes.
 * Each key matches a route path.
 * Titles follow format: [Service] in [Location] | Joro Services
 * Descriptions are 140-160 characters, unique per page.
 * Keywords target high-intent, competitive terms used by top UK IT service providers.
 */

const pagesSEO = {
  '/insights': {
    title: 'Insights & Articles on IT, Cloud, and Digital | Joro Services',
    description:
      'Practical articles on platform engineering, DevOps, cloud cost, cybersecurity, and local SEO for UK small and medium businesses. Written by Joro Services.',
    keywords:
      'IT insights UK, DevOps blog, platform engineering articles, cloud cost reduction, cybersecurity for small business, Joro Services insights',
  },
  '/': {
    title: 'Joro Services — Web Development, IT Support & DevOps for UK Businesses',
    description:
      'Joro Services delivers web development, graphic design, DevOps, cloud engineering, and IT support for small and medium businesses across the UK. One team, all your IT needs.',
    keywords:
      'managed IT services UK, IT support Aldershot, web development Hampshire, cybersecurity services UK, cloud migration AWS, digital marketing agency Aldershot, IT outsourcing Hampshire, managed service provider, technology partner UK, MSP Aldershot, IT solutions London, Joro Services, IT support near me, IT support for small business UK, outsourced IT support, IT company Surrey',
  },
  '/services': {
    title: 'IT Services & Digital Solutions in Hampshire | Joro Services',
    description:
      'IT support, web development, cybersecurity, cloud infrastructure, and digital marketing for businesses across Hampshire, Surrey, and the UK.',
    keywords:
      'IT services UK, managed IT services, web development services, cybersecurity solutions, cloud services Hampshire, digital transformation, technology consulting, business IT solutions, IT outsourcing, digital agency Aldershot, IT services Surrey, web development agency UK, app development company UK',
  },
  '/about': {
    title: 'About Joro Services — UK IT Services Company',
    description:
      'Joro Services is a UK-based IT services company offering web development, DevOps, graphic design, and digital marketing. Senior engineers. No unnecessary complexity.',
    keywords:
      'about Joro Services, IT company Aldershot, technology partner UK, digital agency Hampshire, AWS certified, managed service provider London, IT consultancy Farnborough, digital transformation partner, GDPR compliant IT services, IT company Surrey',
  },
  '/getintouch': {
    title: 'Contact Joro Services | Free Consultation',
    description:
      'Get in touch with Joro Services for a free consultation on web development, IT support, DevOps, cloud infrastructure, or graphic design. We respond within one working day.',
    keywords:
      'free IT consultation, contact Joro Services, IT support quote, web development quote, cybersecurity assessment, cloud audit, get a quote Aldershot, IT services enquiry Hampshire',
  },
  '/careers': {
    title: 'Careers at Joro Services | UK IT Jobs',
    description:
      'Joro Services is a growing UK IT services company. Check here for opportunities in web development, DevOps, design, and IT support.',
    keywords:
      'IT jobs UK, cloud engineer jobs, web developer jobs, cybersecurity jobs, digital marketing careers, tech jobs Hampshire, DevOps engineer, React developer, Joro Services careers',
  },
  '/creative-solutions': {
    title: 'Graphic Design & Creative Services for UK Businesses | Joro Services',
    description:
      'Brand identity, graphic design, and creative services for UK small businesses. Logos, marketing materials, and visual assets that make your business look professional.',
    keywords:
      'website design Hampshire, branding agency Aldershot, UI UX design UK, graphic design services, web design Farnborough, creative agency Surrey, logo design, brand identity, conversion-focused design',
  },
  '/creative-solutions/website-design': {
    title: 'Website Design for UK Small Businesses | Joro Services',
    description:
      'Professional website design for UK small and medium businesses. Fast, mobile-friendly, and built to rank in search. Free consultation available.',
    keywords:
      'website design Aldershot, web design Hampshire, responsive website, WordPress design, Shopify design, business website, affordable web design, professional website Surrey, mobile-first design, SEO website, WordPress website design UK, website redesign services, ecommerce website design, affordable website design for small business UK',
  },
  '/creative-solutions/graphic-design-and-branding': {
    title: 'Graphic Design & Branding in Aldershot, Hampshire | Joro Services',
    description:
      'Logo design, brand guidelines, and marketing materials for businesses in Aldershot and Hampshire. Build a brand identity that stands out locally.',
    keywords:
      'graphic design Aldershot, branding Hampshire, logo design, brand identity, brand guidelines, corporate branding UK, design agency, visual identity, marketing design, print design, brand strategy consultancy, small business branding package',
  },
  '/creative-solutions/user-interface-and-experience': {
    title: 'UI/UX Design in Aldershot, Hampshire | Joro Services',
    description:
      'User interface and experience design for web and mobile apps. Wireframing, prototyping, and usability testing for businesses across Hampshire.',
    keywords:
      'UI design, UX design Hampshire, user interface design, user experience design, wireframing, prototyping, usability testing, app design, digital product design UK, design systems, user research, UX audit services, Figma design services, web accessibility design',
  },
  '/development': {
    title: 'Web Development Services for UK Businesses | Joro Services',
    description:
      'Custom web development for UK small and medium businesses. From landing pages to full web applications — built to perform, optimised for search, and delivered on time.',
    keywords:
      'software development UK, web development Hampshire, mobile app development, React developer, Next.js development, Node.js, custom software, full stack developer, API development, agile development, web development agency UK, SaaS application development, TypeScript development',
  },
  '/development/web-development': {
    title: 'Web Development in Aldershot, Hampshire | Joro Services',
    description:
      'Custom web development using React and Next.js for businesses in Aldershot and Hampshire. Fast, secure, SEO-friendly sites from £1,500.',
    keywords:
      'web development Aldershot, web developer Hampshire, React development, Next.js developer, custom web application, ecommerce development, full stack developer, website developer Surrey, custom website, headless CMS development, progressive web app development, website maintenance and support, ecommerce website development UK',
  },
  '/development/mobile-app-development': {
    title: 'Mobile App Development for UK Businesses | Joro Services',
    description:
      'iOS and Android app development for UK businesses. We build mobile apps that work — from MVP to full product. Contact us for a free scoping call.',
    keywords:
      'mobile app development UK, app developer Hampshire, iOS development, Android app development, React Native developer, Flutter development, cross-platform app, app design and development, MVP development, app development company UK, Flutter app development UK, React Native app development UK, startup app development, mobile app testing services',
  },
  '/development/data-management': {
    title: 'Data Management & Analytics in Aldershot, Hampshire | Joro Services',
    description:
      'Database design, data migration, analytics dashboards, and reporting for businesses in Aldershot and Hampshire. Free data assessment available.',
    keywords:
      'data management UK, database design, data analytics, data migration, cloud database, business intelligence, data solutions, data engineering, ETL, data warehouse, Power BI, data consultant, data strategy consulting, data visualisation services, dashboard development, CRM data management, GDPR data compliance',
  },
  '/digital-marketing': {
    title: 'Digital Marketing Services for UK Businesses | Joro Services',
    description:
      'SEO, content strategy, PPC, and social media management for UK businesses. Data-driven digital marketing that generates leads and grows your online presence.',
    keywords:
      'digital marketing agency UK, SEO services Hampshire, PPC management, social media marketing, content marketing, Google Ads, Facebook advertising, online marketing, digital strategy, marketing agency Aldershot, digital marketing agency near me, B2B digital marketing UK, conversion rate optimisation CRO, marketing automation, email marketing services',
  },
  '/digital-marketing/seo-and-content-strategy': {
    title: 'SEO & Content Strategy for UK Businesses | Joro Services',
    description:
      'SEO and content strategy services for UK small and medium businesses. We research, plan, and execute search strategies that bring the right visitors to your site.',
    keywords:
      'SEO services UK, SEO agency Hampshire, local SEO Aldershot, content strategy, Google rankings, search engine optimisation, technical SEO, link building, content marketing, SEO consultant, SEO audit free, SEO services for small business UK, local SEO services Hampshire, technical SEO audit, SEO agency near me, Google Business Profile optimisation',
  },
  '/digital-marketing/social-media-management': {
    title: 'Social Media Management in Aldershot, Hampshire | Joro Services',
    description:
      'Social media strategy, content creation, and community management for businesses in Aldershot and Hampshire. LinkedIn, Instagram, Facebook, and X.',
    keywords:
      'social media management UK, social media marketing Hampshire, Facebook management, Instagram marketing, LinkedIn management, social media agency, social media strategy, paid social, content creation, social media agency Hampshire, TikTok marketing UK, video marketing services',
  },
  '/digital-marketing/ppc-and-online-campaigns': {
    title: 'PPC & Online Advertising in Aldershot, Hampshire | Joro Services',
    description:
      'Google Ads and social media advertising for Hampshire businesses. Transparent reporting, no markup on ad spend. Average 4.2x ROAS across clients.',
    keywords:
      'PPC management UK, Google Ads agency Hampshire, Facebook Ads, LinkedIn Ads, paid advertising, pay per click, PPC agency, SEM services, display advertising, remarketing, ROAS, conversion tracking, Google Ads management UK, PPC agency for small business UK, landing page optimisation',
  },
  '/technical-services': {
    title: 'DevOps, Cloud Engineering & IT Support | Joro Services',
    description:
      'DevOps, cloud infrastructure, and managed IT support for UK businesses. AWS and Azure setup, Terraform, Kubernetes, monitoring, and ongoing technical support.',
    keywords:
      'managed IT services UK, IT support Hampshire, cybersecurity services, cloud infrastructure, managed service provider, IT outsourcing, tech support, network security, IT solutions, MSP Aldershot, IT support for small business UK, remote IT support, co-managed IT support, IT infrastructure management, IT disaster recovery',
  },
  '/technical-services/it-support-and-maintenance': {
    title: 'IT Support & Maintenance in Aldershot, Hampshire | Joro Services',
    description:
      'Managed IT support for businesses in Aldershot and Hampshire. 24/7 monitoring, helpdesk, and on-site visits. From £30 per user per month.',
    keywords:
      'managed IT support UK, IT support Hampshire, helpdesk support, IT maintenance, managed services, proactive monitoring, IT outsourcing, computer support, network maintenance, tech support Aldershot, outsourced IT support, IT support contract, monthly IT support plan, IT support per user pricing, 24/7 IT support UK, on-site IT support Hampshire, Microsoft 365 support',
  },
  '/technical-services/cybersecurity': {
    title: 'Cybersecurity Services in Aldershot, Hampshire | Joro Services',
    description:
      'Cybersecurity for UK small businesses. Security audits, M365 hardening, endpoint protection, and phishing simulations. Free security health check.',
    keywords:
      'cybersecurity services UK, cyber security SMB, security audit Hampshire, GDPR compliance, endpoint protection, phishing protection, managed security, Microsoft 365 security, penetration testing, Cyber Essentials, Cyber Essentials Plus, ransomware protection, security awareness training, vulnerability assessment, cyber security for small business UK, cyber security consultant Hampshire',
  },
  '/technical-services/cloud-infrastructure': {
    title: 'Cloud Infrastructure & Migration Services UK | Joro Services',
    description:
      'Cloud migration and infrastructure setup for UK businesses. AWS and Azure specialists. Cost reduction, security hardening, and ongoing managed support available.',
    keywords:
      'AWS cloud services UK, cloud migration Hampshire, cloud cost optimisation, AWS consulting, cloud infrastructure, managed cloud services, cloud security, DevOps, infrastructure as code, cloud hosting, AWS managed services UK, cloud computing for small business, cloud backup solutions, AWS Well-Architected review, hybrid cloud solutions, Infrastructure as Code Terraform',
  },
  '/privacy': {
    title: 'Privacy Policy | Joro Services Ltd',
    description:
      'Privacy policy for Joro Services Ltd. How we collect, use, and protect your personal data in compliance with GDPR and UK data protection law.',
    keywords: 'privacy policy, Joro Services privacy, data protection, GDPR compliance',
  },
  '/terms': {
    title: 'Terms of Service | Joro Services Ltd',
    description:
      'Terms of service for Joro Services Ltd. Conditions governing our web development, IT support, and digital marketing services.',
    keywords: 'terms of service, Joro Services terms, service agreement, terms and conditions',
  },

  // New high-value service pages
  '/it-services-care-providers': {
    title: 'IT Services for UK Care Providers | Joro Services',
    description:
      'Web development, IT support, DevOps, and digital marketing for UK care agencies and care providers. We understand the care sector and build technology that works in it.',
    keywords:
      'IT services care providers UK, care agency website, care provider IT support, CQC digital requirements, care home technology, care agency scheduling software, GDPR care providers, domiciliary care IT, care sector technology',
  },
  '/devops-small-business': {
    title: 'DevOps Services for Small Business UK | Joro Services',
    description:
      'Affordable DevOps services for UK small businesses. CI/CD pipelines, cloud infrastructure, Terraform, and containerisation — without the enterprise price tag.',
    keywords:
      'DevOps small business UK, affordable DevOps, CI/CD pipelines, Terraform, Kubernetes small business, cloud infrastructure SMB, DevOps consulting UK, infrastructure as code, containerisation, Docker',
  },
  '/fractional-cto': {
    title: 'Fractional CTO Services UK — Technical Leadership Without the Full-Time Cost | Joro Services',
    description:
      'Fractional CTO services for UK startups and SMBs. Senior technical leadership, architecture decisions, team oversight, and hands-on delivery — part-time, full capability.',
    keywords:
      'fractional CTO UK, part-time CTO, technical leadership, CTO as a service, startup CTO, technical strategy, architecture consulting, fractional technology officer, CTO for hire UK',
  },

  // General Location Pages
  '/locations/aldershot': {
    title: 'Web Development, IT Support & Digital Marketing in Aldershot | Joro Services',
    description:
      'Aldershot\'s only full-service digital agency. Web design, IT support, cybersecurity, mobile apps, and cloud solutions for local businesses. Free consultation.',
    keywords:
      'digital agency Aldershot, web development Aldershot, IT support Aldershot, web design Aldershot, SEO Aldershot, cybersecurity Aldershot, cloud services Aldershot, digital marketing Aldershot, IT company Aldershot, managed IT services Aldershot',
  },
  '/locations/farnborough': {
    title: 'Web Development, IT Support & Digital Marketing in Farnborough | Joro Services',
    description:
      'Web development, IT support, SEO, and digital marketing for Farnborough businesses. Based 3 miles away in Aldershot. Free consultation available.',
    keywords:
      'digital agency Farnborough, web development Farnborough, IT support Farnborough, web design Farnborough, SEO Farnborough, cybersecurity Farnborough, digital marketing Farnborough, IT company Farnborough, managed services Farnborough',
  },
  '/locations/guildford': {
    title: 'Web Development, IT Support & Digital Marketing in Guildford | Joro Services',
    description:
      'Professional web development, IT support, digital marketing, and cybersecurity for Guildford businesses. Local expertise from Joro Services.',
    keywords:
      'digital agency Guildford, web development Guildford, IT support Guildford, web design Guildford, SEO Guildford, cybersecurity Guildford, digital marketing Guildford, IT company Guildford Surrey',
  },
  '/locations/camberley': {
    title: 'Web Development, IT Support & Digital Marketing in Camberley | Joro Services',
    description:
      'Web development, IT support, SEO, and digital marketing for Camberley businesses. Full-service digital solutions in Surrey Heath.',
    keywords:
      'digital agency Camberley, web development Camberley, IT support Camberley, web design Camberley, SEO Camberley, digital marketing Camberley, IT company Camberley Surrey Heath',
  },
  '/locations/hampshire': {
    title: 'Web Development, IT Support & Digital Marketing in Hampshire | Joro Services',
    description:
      'Expert web development, IT support, SEO, cybersecurity, and digital marketing for businesses across Hampshire. Based in Aldershot, serving the county.',
    keywords:
      'digital agency Hampshire, web development Hampshire, IT support Hampshire, web design Hampshire, SEO Hampshire, cybersecurity Hampshire, digital marketing Hampshire, IT company Hampshire, managed IT services Hampshire',
  },
  '/locations/surrey': {
    title: 'Web Development, IT Support & Digital Marketing in Surrey | Joro Services',
    description:
      'Full-service digital agency serving Surrey businesses. Web development, IT support, SEO, cybersecurity, and cloud solutions from Guildford to Camberley.',
    keywords:
      'digital agency Surrey, web development Surrey, IT support Surrey, web design Surrey, SEO Surrey, cybersecurity Surrey, digital marketing Surrey, IT company Surrey, managed IT services Surrey',
  },

  // Service-Location Pages
  '/it-support-aldershot': {
    title: 'IT Support in Aldershot, Hampshire | From £30/User/Month | Joro Services',
    description:
      'Managed IT support for Aldershot businesses. Same-day on-site visits, 24/7 monitoring, Microsoft 365 support, and helpdesk. From £30 per user per month.',
    keywords:
      'IT support Aldershot, managed IT services Aldershot, IT company Aldershot, computer support Aldershot, IT helpdesk Aldershot, Microsoft 365 support Aldershot, IT maintenance Aldershot, IT support near me Aldershot, business IT support Hampshire',
  },
  '/web-design-aldershot': {
    title: 'Web Design in Aldershot, Hampshire | From £1,500 | Joro Services',
    description:
      'Custom website design for Aldershot businesses. Mobile-first, no templates, sub-2-second load times. Fixed pricing from £1,500. Free consultation.',
    keywords:
      'web design Aldershot, website design Aldershot, web designer Aldershot, affordable web design Aldershot, business website Aldershot, responsive web design Hampshire, website designer near me Aldershot',
  },
  '/it-support-farnham': {
    title: 'IT Support in Farnham, Surrey | Joro Services',
    description:
      'IT support for Farnham businesses. Compliance-ready for professional services, EPOS systems for hospitality. 5 miles from our Aldershot base.',
    keywords:
      'IT support Farnham, managed IT services Farnham, IT company Farnham, computer support Farnham Surrey, IT helpdesk Farnham, business IT support Farnham, IT support near me Farnham',
  },
  '/web-design-farnham': {
    title: 'Web Design in Farnham, Surrey | Joro Services',
    description:
      'Design-led website creation for Farnham businesses. In-person meetings, e-commerce for boutiques, and mobile-first builds. Based 5 miles away.',
    keywords:
      'web design Farnham, website design Farnham, web designer Farnham, affordable web design Farnham Surrey, business website Farnham, website designer near me Farnham',
  },
  '/it-support-fleet': {
    title: 'IT Support in Fleet, Hampshire | Joro Services',
    description:
      'IT support for Fleet businesses outpacing their current IT. Remote working support, hardware procurement, and cloud migration. 6 miles from Aldershot.',
    keywords:
      'IT support Fleet, managed IT services Fleet, IT company Fleet Hampshire, computer support Fleet, IT helpdesk Fleet, business IT support Fleet, cloud migration Fleet',
  },
  '/it-support-camberley': {
    title: 'IT Support in Camberley, Surrey | Joro Services',
    description:
      'Proactive IT support for Camberley businesses. Watchmoor Park, Frimley, and Sandhurst covered. Documented IT profiles per client. 7 miles from base.',
    keywords:
      'IT support Camberley, managed IT services Camberley, IT company Camberley Surrey, computer support Camberley, IT helpdesk Camberley, business IT support Camberley Surrey Heath',
  },
  '/web-design-guildford': {
    title: 'Web Design in Guildford, Surrey | Joro Services',
    description:
      'Professional web design for Guildford businesses. Same quality as London agencies with lower overheads. Competitive pricing for professional services.',
    keywords:
      'web design Guildford, website design Guildford, web designer Guildford, affordable web design Guildford Surrey, business website Guildford, website designer near me Guildford',
  },
};

export default pagesSEO;
