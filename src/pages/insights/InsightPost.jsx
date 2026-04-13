import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Footer from '../../component/Footer';
import SEO from '../../component/SEO';
import { breadcrumbSchema } from '../../seo/schemas';
import Breadcrumb from '../../component/Breadcrumb';
import { blogPosts } from './blogData';

function renderMarkdown(text) {
  if (!text) return null;

  return text.split('\n\n').map((block, i) => {
    const trimmed = block.trim();
    if (!trimmed) return null;

    // Headings
    if (trimmed.startsWith('### ')) {
      return <h3 key={i} className="text-lg font-bold text-gray-900 mt-8 mb-3">{trimmed.slice(4)}</h3>;
    }
    if (trimmed.startsWith('## ')) {
      return <h2 key={i} className="text-2xl font-bold text-gray-900 mt-10 mb-4">{trimmed.slice(3)}</h2>;
    }

    // Bold text and links within paragraphs
    const parts = trimmed.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
    const rendered = parts.map((part, j) => {
      // Bold
      const boldMatch = part.match(/^\*\*(.+)\*\*$/);
      if (boldMatch) return <strong key={j} className="font-semibold text-gray-900">{boldMatch[1]}</strong>;

      // Links
      const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        const [, linkText, href] = linkMatch;
        if (href.startsWith('/') || href.startsWith('https://www.joroservices.org')) {
          const to = href.replace('https://www.joroservices.org', '');
          return <Link key={j} to={to} className="text-accent hover:text-accent-dark underline font-medium">{linkText}</Link>;
        }
        return <a key={j} href={href} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-dark underline font-medium">{linkText}</a>;
      }

      return part;
    });

    return <p key={i} className="text-gray-600 leading-relaxed mb-4">{rendered}</p>;
  });
}

const InsightPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/insights" replace />;
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    author: { '@type': 'Organization', name: 'Joro Services', url: 'https://www.joroservices.org' },
    publisher: { '@type': 'Organization', name: 'Joro Services', url: 'https://www.joroservices.org' },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: `https://www.joroservices.org/insights/${post.slug}`,
    keywords: post.tags.join(', '),
  };

  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <SEO
        title={`${post.title} | Joro Services`}
        description={post.metaDescription}
        keywords={post.tags.join(', ')}
        canonicalPath={`/insights/${post.slug}`}
        ogType="article"
        jsonLd={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Insights', path: '/insights' },
            { name: post.title, path: `/insights/${post.slug}` },
          ]),
          articleSchema,
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[
            { name: 'Home', path: '/' },
            { name: 'Insights', path: '/insights' },
            { name: post.category },
          ]} />
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-accent bg-accent/20 px-2.5 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-gray-400">
              {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-4">{post.title}</h1>
          <p className="text-lg text-white/70">By {post.author}</p>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose-custom">
            {renderMarkdown(post.content)}
          </article>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-sm font-semibold text-gray-500 mb-3">Topics</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, i) => (
                <span key={i} className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Back link */}
          <div className="mt-10">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-dark font-medium text-sm transition-colors"
            >
              <ArrowLeft size={14} /> All articles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need help with this?</h2>
          <p className="text-gray-600 mb-6">We deliver these services for UK businesses. Get in touch for a free consultation.</p>
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

export default InsightPost;
