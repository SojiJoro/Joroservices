import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Footer from '../../component/Footer';
import SEO from '../../component/SEO';
import { breadcrumbSchema } from '../../seo/schemas';
import Breadcrumb from '../../component/Breadcrumb';
import { blogPosts } from './blogData';

const InsightsIndex = () => {
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <SEO
        title="Insights & Blog | Joro Services"
        description="Practical articles on web development, DevOps, cloud infrastructure, cybersecurity, and digital marketing for UK businesses. Written by the Joro Services team."
        canonicalPath="/insights"
        jsonLd={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Insights', path: '/insights' },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[
            { name: 'Home', path: '/' },
            { name: 'Insights' },
          ]} />
          <div className="max-w-3xl">
            <p className="text-accent-light font-semibold text-sm uppercase tracking-widest mb-4">Blog</p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">Insights</h1>
            <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
              Practical articles on DevOps, cloud infrastructure, web development, cybersecurity, and digital marketing. No fluff — just things we've learned from doing the work.
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/insights/${post.slug}`}
                className="group bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">
                    {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-gray-900 group-hover:text-accent transition-colors mb-3 leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                  {post.metaDescription}
                </p>
                <div className="flex items-center gap-1 text-accent text-sm font-medium">
                  Read article <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Need Help With Any of This?</h2>
          <p className="text-gray-400 mb-8">
            We don't just write about it — we deliver these services for UK businesses every day.
          </p>
          <Link
            to="/getintouch"
            className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 text-sm"
          >
            Get in Touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default InsightsIndex;
