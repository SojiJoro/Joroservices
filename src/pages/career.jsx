import React, { useState, useMemo } from 'react';
import Footer from '../component/Footer';

function Careers() {
  const allJobs = useMemo(() => [
    { title: 'Senior Cloud Engineer', location: 'London, UK (Hybrid)', link: 'mailto:careers@yourcompany.com?subject=Senior%20Cloud%20Engineer%20Application' },
    { title: 'Frontend React Developer', location: 'Remote', link: 'mailto:careers@yourcompany.com?subject=Frontend%20React%20Developer%20Application' },
    { title: 'Technical Support Specialist', location: 'Birmingham, UK (On-site)', link: 'mailto:careers@yourcompany.com?subject=Technical%20Support%20Specialist%20Application' },
    { title: 'DevOps Engineer', location: 'Manchester, UK (Hybrid)', link: 'mailto:careers@yourcompany.com?subject=DevOps%20Engineer%20Application' },
    { title: 'UX/UI Designer', location: 'Leeds, UK (Remote)', link: 'mailto:careers@yourcompany.com?subject=UX/UI%20Designer%20Application' },
    { title: 'Data Analyst', location: 'Cardiff, UK (On-site)', link: 'mailto:careers@yourcompany.com?subject=Data%20Analyst%20Application' },
    { title: 'Cybersecurity Consultant', location: 'Glasgow, UK (Hybrid)', link: 'mailto:careers@yourcompany.com?subject=Cybersecurity%20Consultant%20Application' },
    { title: 'Project Manager', location: 'Bristol, UK (On-site)', link: 'mailto:careers@yourcompany.com?subject=Project%20Manager%20Application' },
    { title: 'Technical Writer', location: 'Remote', link: 'mailto:careers@yourcompany.com?subject=Technical%20Writer%20Application' },
    { title: 'AI/ML Engineer', location: 'Oxford, UK (Hybrid)', link: 'mailto:careers@yourcompany.com?subject=AI/ML%20Engineer%20Application' },
  ], []);

  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const pageSize = 5;

  const filtered = useMemo(
    () => allJobs.filter(job =>
      job.title.toLowerCase().includes(search.toLowerCase())
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
      <section className="bg-gradient-to-r from-accent-dark to-blue-800 text-white py-20 px-6 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">Join Our Team</h1>
        <p className="text-lg lg:text-xl max-w-3xl mx-auto">
          We’re always looking for driven, creative minds to help us grow. Explore open roles and apply today.
        </p>
      </section>

      {/* Jobs List Section */}
      <section className="max-w-5xl w-full mx-auto px-4 py-16">
        <input
          type="search"
          placeholder="Search positions..."
          value={search}
          onChange={e => { setSearch(e.target.value); setPage(0); }}
          className="w-full p-4 border border-gray-300 rounded-lg mb-10 focus:outline-none focus:ring-2 focus:ring-accent-dark"
        />

        {filtered.length === 0 ? (
          <p className="text-center text-gray-600">No positions match your search.</p>
        ) : (
          <ul className="grid gap-6">
            {currentJobs.map((job, idx) => (
              <li key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
                  <div>
                    <h2 className="text-xl font-semibold">{job.title}</h2>
                    <p className="text-sm text-gray-600">{job.location}</p>
                  </div>
                  <a
                    href={job.link}
                    className="px-6 py-2 bg-accent-dark text-white font-semibold rounded hover:opacity-90 transition text-sm text-center"
                  >
                    Apply Now
                  </a>
                </div>
              </li>
            ))}
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
