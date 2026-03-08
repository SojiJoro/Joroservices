import React, { useState, useMemo } from 'react';
import { ChevronDown } from 'lucide-react';
import Footer from '../component/Footer';
import SEO from '../component/SEO';
import pagesSEO from '../seo/pagesSEO';
import { organizationSchema, breadcrumbSchema } from '../seo/schemas';

function Careers() {
  const allJobs = useMemo(() => [
    {
      title: 'IT Manager',
      location: 'London, UK (Hybrid)',
      type: 'Full-time',
      salary: '\u00a355,000 -\u00a370,000',
      description: 'You will run our internal IT operations, oversee infrastructure projects, work closely with the dev and support teams, and keep all our technology systems secure and running smoothly.',
      requirements: [
        'Proven experience managing IT teams and infrastructure',
        'Strong knowledge of cloud platforms (AWS, Azure, or GCP)',
        'Experience with IT governance, budgeting, and vendor management',
        'ITIL or PMP certification preferred',
        'Excellent communication and leadership skills',
      ],
      link: 'mailto:info@joroservices.org?subject=IT%20Manager%20Application',
    },
    {
      title: 'Senior Cloud Engineer',
      location: 'London, UK (Hybrid)',
      type: 'Full-time',
      salary: '\u00a365,000 -\u00a380,000',
      description: 'You will design, build, and look after cloud infrastructure on AWS and Azure, making sure everything scales properly and stays reliable.',
      requirements: [
        'Minimum 4 years of experience with AWS or Azure',
        'Proficiency in Infrastructure as Code (Terraform, CloudFormation)',
        'Experience with containerisation (Docker, Kubernetes)',
        'Understanding of networking, security groups, and IAM policies',
        'AWS Solutions Architect or Azure Administrator certification preferred',
      ],
      link: 'mailto:info@joroservices.org?subject=Senior%20Cloud%20Engineer%20Application',
    },
    {
      title: 'Frontend React Developer',
      location: 'Remote',
      type: 'Full-time',
      salary: '\u00a340,000 -\u00a355,000',
      description: 'You will build fast, responsive web applications using React and modern JavaScript for our clients across the UK.',
      requirements: [
        'Strong proficiency in React, JavaScript (ES6+), and TypeScript',
        'Experience with state management (Redux, Context API, or Zustand)',
        'Familiarity with REST APIs and GraphQL',
        'Understanding of responsive design and cross-browser compatibility',
        'Experience with testing frameworks (Jest, React Testing Library)',
      ],
      link: 'mailto:info@joroservices.org?subject=Frontend%20React%20Developer%20Application',
    },
    {
      title: 'Technical Support Specialist',
      location: 'Birmingham, UK (On-site)',
      type: 'Full-time',
      salary: '\u00a326,000 -\u00a334,000',
      description: 'You will provide first and second-line technical support to our clients over phone, email, and remote desktop.',
      requirements: [
        'Experience in an IT helpdesk or technical support role',
        'Knowledge of Windows, macOS, and common business applications',
        'Familiarity with Active Directory, Office 365, and VPN setup',
        'CompTIA A+ or equivalent certification preferred',
        'Strong problem-solving and customer service skills',
      ],
      link: 'mailto:info@joroservices.org?subject=Technical%20Support%20Specialist%20Application',
    },
    {
      title: 'DevOps Engineer',
      location: 'Manchester, UK (Hybrid)',
      type: 'Full-time',
      salary: '\u00a350,000 -\u00a365,000',
      description: 'You will build and maintain CI/CD pipelines, automate infrastructure setup, and keep deployments running smoothly.',
      requirements: [
        'Experience with CI/CD tools (GitHub Actions, Jenkins, GitLab CI)',
        'Proficiency in scripting (Bash, Python)',
        'Hands-on experience with Docker, Kubernetes, and container orchestration',
        'Knowledge of monitoring tools (Prometheus, Grafana, Datadog)',
        'Understanding of security best practices in DevOps workflows',
      ],
      link: 'mailto:info@joroservices.org?subject=DevOps%20Engineer%20Application',
    },
    {
      title: 'UX/UI Designer',
      location: 'Leeds, UK (Remote)',
      type: 'Full-time',
      salary: '\u00a335,000 -\u00a348,000',
      description: 'You will create user-friendly designs for web and mobile apps, from wireframes through to finished UI.',
      requirements: [
        'Proficiency in Figma, Sketch, or Adobe XD',
        'Portfolio demonstrating strong UI/UX design skills',
        'Experience with user research, usability testing, and personas',
        'Understanding of accessibility standards (WCAG)',
        'Ability to create and maintain design systems and component libraries',
      ],
      link: 'mailto:info@joroservices.org?subject=UX/UI%20Designer%20Application',
    },
    {
      title: 'Data Analyst',
      location: 'Cardiff, UK (On-site)',
      type: 'Full-time',
      salary: '\u00a332,000 -\u00a342,000',
      description: 'You will dig into business data, spot useful patterns, and build dashboards and reports that help teams make better decisions.',
      requirements: [
        'Strong SQL skills and experience with relational databases',
        'Proficiency in Power BI, Tableau, or similar visualisation tools',
        'Experience with Excel and data modelling',
        'Understanding of ETL processes and data warehousing concepts',
        'Excellent analytical thinking and attention to detail',
      ],
      link: 'mailto:info@joroservices.org?subject=Data%20Analyst%20Application',
    },
    {
      title: 'Cybersecurity Consultant',
      location: 'Glasgow, UK (Hybrid)',
      type: 'Contract',
      salary: '\u00a3450 -\u00a3600 per day',
      description: 'You will run security assessments, penetration tests, and vulnerability scans for our clients, then help them fix what you find.',
      requirements: [
        'CEH, CISSP, or CISM certification',
        'Experience with penetration testing tools (Burp Suite, Nessus, Metasploit)',
        'Knowledge of OWASP Top 10 and common attack vectors',
        'Understanding of UK data protection regulations (GDPR, DPA 2018)',
        'Experience with security audits and compliance frameworks',
      ],
      link: 'mailto:info@joroservices.org?subject=Cybersecurity%20Consultant%20Application',
    },
    {
      title: 'Project Manager',
      location: 'Bristol, UK (On-site)',
      type: 'Full-time',
      salary: '\u00a342,000 -\u00a355,000',
      description: 'You will manage technology projects from start to finish, keeping clients informed and deliveries on track.',
      requirements: [
        'Proven experience managing IT or digital projects',
        'Familiarity with Agile (Scrum, Kanban) and Waterfall methodologies',
        'Proficiency in project management tools (Jira, Asana, Monday.com)',
        'PRINCE2 or PMP certification preferred',
        'Strong stakeholder management and communication skills',
      ],
      link: 'mailto:info@joroservices.org?subject=Project%20Manager%20Application',
    },
    {
      title: 'Digital Marketing Executive',
      location: 'Remote',
      type: 'Full-time',
      salary: '\u00a328,000 -\u00a338,000',
      description: 'You will plan and run digital marketing campaigns across SEO, PPC, social media, and email for our clients.',
      requirements: [
        'Experience with Google Ads, Meta Business Suite, and LinkedIn Ads',
        'Knowledge of SEO best practices and keyword research tools',
        'Proficiency in Google Analytics and Search Console',
        'Strong copywriting and content creation skills',
        'Understanding of conversion rate optimisation and A/B testing',
      ],
      link: 'mailto:info@joroservices.org?subject=Digital%20Marketing%20Executive%20Application',
    },
  ], []);

  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [expandedJob, setExpandedJob] = useState(null);
  const pageSize = 5;

  const filtered = useMemo(
    () => allJobs.filter(job =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase())
    ),
    [allJobs, search]
  );

  const pageCount = Math.ceil(filtered.length / pageSize);
  const currentJobs = filtered.slice(page * pageSize, (page + 1) * pageSize);

  return (
    <main className="bg-white text-gray-900 min-h-screen flex flex-col justify-between">
      <SEO
        {...pagesSEO['/careers']}
        jsonLd={[
          organizationSchema,
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Careers', path: '/careers' },
          ]),
        ]}
      />

      {/* Hero */}
      <section id="hero" className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent-light font-semibold text-sm uppercase tracking-widest mb-4">Careers</p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">Join Our Team</h1>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              We are growing and looking for good people to join us. Have a look at our open roles below.
            </p>
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 flex-1">
        <input
          type="search"
          placeholder="Search positions or locations..."
          value={search}
          onChange={e => { setSearch(e.target.value); setPage(0); setExpandedJob(null); }}
          className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl mb-10 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent text-sm transition-all"
        />

        {filtered.length === 0 ? (
          <p className="text-center text-gray-500 text-sm">No positions match your search.</p>
        ) : (
          <ul className="space-y-4">
            {currentJobs.map((job, idx) => {
              const globalIdx = page * pageSize + idx;
              return (
                <li key={globalIdx} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h2 className="text-lg font-bold">{job.title}</h2>
                        <span className="text-xs bg-accent/10 text-accent-dark px-2.5 py-0.5 rounded-full font-medium">{job.type}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-0.5">{job.location}</p>
                      <p className="text-sm text-gray-500 mb-3">{job.salary}</p>

                      <button
                        onClick={() => setExpandedJob(expandedJob === globalIdx ? null : globalIdx)}
                        className="inline-flex items-center gap-1 text-sm text-accent hover:text-accent-dark font-medium transition-colors"
                      >
                        {expandedJob === globalIdx ? 'Hide Details' : 'View Details'}
                        <ChevronDown size={14} className={`transition-transform duration-200 ${expandedJob === globalIdx ? 'rotate-180' : ''}`} />
                      </button>

                      {expandedJob === globalIdx && (
                        <div className="mt-4 space-y-3">
                          <p className="text-gray-600 text-sm leading-relaxed">{job.description}</p>
                          <div>
                            <h4 className="font-semibold text-sm text-gray-800 mb-2">Requirements:</h4>
                            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                              {job.requirements.map((req, rIdx) => (
                                <li key={rIdx}>{req}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                    <a
                      href={job.link}
                      className="px-5 py-2.5 bg-accent text-white font-semibold rounded-xl hover:bg-accent-dark transition text-sm text-center whitespace-nowrap self-start"
                    >
                      Apply Now
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        )}

        {pageCount > 1 && (
          <div className="mt-10 flex justify-between items-center">
            <button
              onClick={() => setPage(prev => Math.max(prev - 1, 0))}
              disabled={page === 0}
              className="px-4 py-2 border border-gray-200 text-gray-600 rounded-xl disabled:opacity-40 hover:bg-gray-50 transition text-sm"
            >
              Previous
            </button>
            <span className="text-sm text-gray-500">Page {page + 1} of {pageCount}</span>
            <button
              onClick={() => setPage(prev => Math.min(prev + 1, pageCount - 1))}
              disabled={page >= pageCount - 1}
              className="px-4 py-2 border border-gray-200 text-gray-600 rounded-xl disabled:opacity-40 hover:bg-gray-50 transition text-sm"
            >
              Next
            </button>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}

export default Careers;
