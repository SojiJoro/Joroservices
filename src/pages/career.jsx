import React, { useState, useMemo } from 'react';
import Footer from '../component/Footer';

function Careers() {
  const allJobs = useMemo(() => [
    {
      title: 'IT Manager',
      location: 'London, UK (Hybrid)',
      type: 'Full-time',
      salary: '£55,000 – £70,000',
      description: 'Lead and manage our internal IT operations, oversee infrastructure projects, coordinate with development and support teams, and ensure the security and reliability of all technology systems across the business.',
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
      salary: '£65,000 – £80,000',
      description: 'Design, implement, and maintain scalable cloud infrastructure solutions on AWS and Azure. Work closely with DevOps and development teams to ensure high availability, security, and cost optimisation across all client environments.',
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
      salary: '£40,000 – £55,000',
      description: 'Build responsive, high-performance web applications using React and modern JavaScript. Collaborate with UX designers and backend engineers to deliver seamless user experiences for our clients across healthcare, recruitment, and e-commerce sectors.',
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
      salary: '£26,000 – £34,000',
      description: 'Provide first and second-line technical support to clients via phone, email, and remote desktop. Diagnose and resolve hardware, software, and network issues while maintaining detailed logs in our ticketing system.',
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
      salary: '£50,000 – £65,000',
      description: 'Build and maintain CI/CD pipelines, automate infrastructure provisioning, and ensure smooth deployment workflows. Monitor production systems and collaborate with engineering teams to improve reliability and release velocity.',
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
      salary: '£35,000 – £48,000',
      description: 'Create user-centred designs for web and mobile applications. Conduct user research, build wireframes and prototypes, and work closely with developers to ensure pixel-perfect implementation of design systems.',
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
      salary: '£32,000 – £42,000',
      description: 'Analyse business data to provide actionable insights, build dashboards and reports using Power BI and SQL, and support decision-making across operations, marketing, and client delivery teams.',
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
      salary: '£450 – £600 per day',
      description: 'Conduct security assessments, penetration testing, and vulnerability analysis for client environments. Develop security policies, incident response plans, and advise on compliance requirements including Cyber Essentials and ISO 27001.',
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
      salary: '£42,000 – £55,000',
      description: 'Manage end-to-end delivery of technology projects for clients, from requirements gathering through to launch. Coordinate cross-functional teams, track milestones, manage budgets, and ensure projects are delivered on time and within scope.',
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
      salary: '£28,000 – £38,000',
      description: 'Plan and execute digital marketing campaigns across SEO, PPC, social media, and email. Track campaign performance using Google Analytics and reporting tools, and collaborate with the content team to drive brand awareness and lead generation.',
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

  const handlePrev = () => setPage(prev => Math.max(prev - 1, 0));
  const handleNext = () => setPage(prev => Math.min(prev + 1, pageCount - 1));

  return (
    <main className="bg-white text-gray-900 min-h-screen flex flex-col justify-between">
      {/* Hero Section */}
      <section id="hero" className="bg-gradient-to-r from-accent-dark to-blue-800 text-white py-20 px-6 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">Join Our Team</h1>
        <p className="text-lg lg:text-xl max-w-3xl mx-auto">
          We are always looking for driven, creative minds to help us grow. Explore open roles and apply today.
        </p>
      </section>

      {/* Jobs List Section */}
      <section className="max-w-5xl w-full mx-auto px-4 py-16">
        <input
          type="search"
          placeholder="Search positions or locations..."
          value={search}
          onChange={e => { setSearch(e.target.value); setPage(0); setExpandedJob(null); }}
          className="w-full p-4 border border-gray-300 rounded-lg mb-10 focus:outline-none focus:ring-2 focus:ring-accent-dark"
        />

        {filtered.length === 0 ? (
          <p className="text-center text-gray-600">No positions match your search.</p>
        ) : (
          <ul className="grid gap-6">
            {currentJobs.map((job, idx) => {
              const globalIdx = page * pageSize + idx;
              return (
                <li key={globalIdx} className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h2 className="text-xl font-semibold">{job.title}</h2>
                        <span className="text-xs bg-accent/20 text-accent-dark px-2 py-1 rounded-full font-medium">{job.type}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{job.location}</p>
                      <p className="text-sm text-gray-500 mb-3">{job.salary}</p>

                      <button
                        onClick={() => setExpandedJob(expandedJob === globalIdx ? null : globalIdx)}
                        className="text-sm text-accent-dark hover:underline font-medium"
                      >
                        {expandedJob === globalIdx ? 'Hide Details' : 'View Details'}
                      </button>

                      {expandedJob === globalIdx && (
                        <div className="mt-4 space-y-3">
                          <p className="text-gray-700">{job.description}</p>
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
                      className="px-6 py-2 bg-accent-dark text-white font-semibold rounded hover:opacity-90 transition text-sm text-center whitespace-nowrap self-start"
                    >
                      Apply Now
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        )}

        {/* Pagination */}
        {pageCount > 1 && (
          <div className="mt-10 flex justify-between items-center">
            <button
              onClick={handlePrev}
              disabled={page === 0}
              className="px-4 py-2 border border-accent-dark text-accent-dark rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-sm text-gray-600">
              Page {page + 1} of {pageCount}
            </span>
            <button
              onClick={handleNext}
              disabled={page >= pageCount - 1}
              className="px-4 py-2 border border-accent-dark text-accent-dark rounded disabled:opacity-50"
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
