import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiClock, FiFilter, FiSearch, FiArrowUpRight, FiTag } from 'react-icons/fi';
import { blogPosts } from '../data/blogPosts';

const formatDate = (date) =>
  new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

const categories = ['All', ...new Set(blogPosts.map((post) => post.category))];

import SeoWrapper from '../components/SeoWrapper';
import SchemaJsonLd from '../components/SchemaJsonLd';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    return blogPosts
      .filter((post) => (activeCategory === 'All' ? true : post.category === activeCategory))
      .filter((post) => {
        if (!term) return true;
        return (
          post.title.toLowerCase().includes(term) ||
          post.excerpt.toLowerCase().includes(term) ||
          post.tags.some((tag) => tag.toLowerCase().includes(term))
        );
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [activeCategory, searchTerm]);

  const featuredPost = filteredPosts.find((post) => post.featured) ?? filteredPosts[0];
  const remainingPosts = featuredPost
    ? filteredPosts.filter((post) => post.slug !== featuredPost.slug)
    : filteredPosts;

  const listSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'SoftDevIn Insights',
    description:
      'SEO, growth, and engineering insights from SoftDevIn with playbooks, checklists, and practical experiments.',
    url: 'https://softdevin.com/blog',
    blogPost: filteredPosts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      datePublished: post.date,
      author: {
        '@type': 'Person',
        name: post.author,
      },
      description: post.seoDescription || post.excerpt,
      url: `https://softdevin.com/blog/${post.slug}`,
    })),
  };

  return (
    <main
      id="main-content"
      className="bg-gradient-to-b from-slate-50 via-white to-slate-100 text-neutral-900"
    >
      <SeoWrapper
        title="Blog - Engineering, AI & Product Insights"
        description="Engineering, AI, and product delivery insights from the SoftDevIn team—practical write‑ups on architecture, automation, and shipping reliable software."
        keywords="software engineering blog, ai insights, product development, tech blog"
      />
      <SchemaJsonLd schema={listSchema} />

      <section className="page-hero relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute -left-10 top-10 h-64 w-64 rounded-full bg-primary-100 blur-3xl" />
          <div className="absolute right-10 -bottom-10 h-80 w-80 rounded-full bg-accent-purple/20 blur-3xl" />
        </div>

        <div className="content-container relative z-10 max-w-6xl space-y-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-semibold tracking-[0.14em] uppercase">
              Insights
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight text-slate-900">
              Engineering, AI & product notes
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl">
              Deep dives, postmortems, and patterns from real client work—covering system design, AI assistants, workflow automation, and the realities of shipping enterprise software.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-primary-700">Architecture first</p>
              <p className="text-sm text-neutral-600">Resilient, observable systems designed for real production load.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-primary-700">Operational quality</p>
              <p className="text-sm text-neutral-600">Telemetry, testing, and runbooks that keep releases predictable.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-primary-700">Partner mindset</p>
              <p className="text-sm text-neutral-600">Lessons from long‑term product partnerships, not theory.</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-white/80 p-5 shadow-xl shadow-primary-100/70 backdrop-blur md:p-6">
            <div className="pointer-events-none absolute -left-16 top-0 h-40 w-40 rounded-full bg-primary-100/60 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 right-0 h-44 w-44 rounded-full bg-accent-purple/30 blur-[60px]" />
            <div className="relative z-10 flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:items-center lg:justify-between lg:gap-5">
              <div className="flex flex-1 flex-wrap items-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`h-11 rounded-full border px-4 text-sm font-semibold leading-none tracking-[0.01em] transition-all duration-200 ${
                      activeCategory === category
                        ? 'border-transparent bg-gradient-to-r from-primary-500 to-primary-700 text-white shadow-lg shadow-primary-300/40'
                        : 'border-slate-200/80 bg-white/70 text-slate-700 hover:-translate-y-0.5 hover:border-primary-100 hover:text-primary-700'
                      }`}
                    type="button"
                    aria-pressed={activeCategory === category}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-end sm:gap-3 lg:w-auto">
                <div className="relative w-full sm:w-80">
                  <FiSearch
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    aria-hidden="true"
                    size={20}
                  />
                  <input
                    type="text"
                    aria-label="Search blog posts"
                    placeholder="Search by keyword or tag"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="h-12 w-full rounded-[14px] border border-slate-200/80 bg-white/75 pl-10 pr-4 text-sm shadow-sm transition focus:border-primary-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-200/70 md:text-base"
                  />
                </div>
                <button
                  type="button"
                  className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl border border-slate-200/80 bg-white/80 px-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:border-primary-200 hover:text-primary-700"
                  aria-label="Filter curated posts"
                >
                  <FiFilter className="text-slate-500" />
                  Curated weekly
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-container max-w-6xl pb-16 space-y-10">
        {featuredPost && (
          <article
            className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white/95 p-0 shadow-[0_35px_80px_rgba(76,81,191,0.15)]"
            style={{ backgroundImage: featuredPost.heroGradient }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/70" />
            <div className="relative flex flex-col gap-10 p-8 md:p-10 lg:flex-row">
              <div className="flex-1 space-y-5">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary-700">
                  <span className="rounded-full border border-primary-100 bg-primary-50 px-3 py-1">{featuredPost.category}</span>
                  <span className="rounded-full border border-slate-200 bg-neutral-50 px-3 py-1 text-primary-600">
                    Featured
                  </span>
                  <span className="flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-600">
                    <FiClock />
                    {featuredPost.readTime} min read
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">{featuredPost.title}</h2>
                <p className="text-lg text-neutral-700 max-w-2xl">{featuredPost.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {featuredPost.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-slate-200 text-xs font-semibold text-slate-700">
                      <FiTag className="text-primary-500" />
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                  <span>{formatDate(featuredPost.date)}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span>{featuredPost.author}</span>
                </div>
              </div>
              <div className="flex flex-col gap-4 lg:w-72">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {featuredPost.keyPoints.map((point) => (
                    <div
                      key={point}
                      className="rounded-2xl border border-slate-200 bg-white/85 p-3 text-sm text-slate-700 shadow-sm"
                    >
                      {point}
                    </div>
                  ))}
                </div>
                <Link
                  to={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-primary-700 text-white px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 shadow-md"
                >
                  Read article
                  <FiArrowUpRight />
                </Link>
              </div>
            </div>
          </article>
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {remainingPosts.map((post) => (
            <article
              key={post.slug}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white/95 shadow-sm transition-shadow hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className="h-36 w-full rounded-t-2xl"
                style={{ backgroundImage: post.heroGradient, backgroundSize: 'cover', backgroundPosition: 'center' }}
                aria-hidden="true"
              />
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-center gap-2 text-xs font-semibold text-primary-700 uppercase tracking-[0.14em]">
                  <span className="px-3 py-1 rounded-full bg-primary-50 border border-primary-100">{post.category}</span>
                  <span className="flex items-center gap-1 text-slate-500">
                    <FiClock />
                    {post.readTime} min
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 transition-colors group-hover:text-primary-700">
                  {post.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                      <FiTag className="text-primary-500" />
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-slate-600 mt-auto pt-2">
                  <span>{formatDate(post.date)}</span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 font-semibold text-primary-700"
                  >
                    Read
                    <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {!remainingPosts.length && !featuredPost && (
          <div className="text-center py-16 rounded-2xl border border-dashed border-slate-200 bg-white">
            <p className="text-lg font-semibold text-slate-900 mb-2">No posts match that search (yet).</p>
            <p className="text-sm text-neutral-600">Try another keyword or clear filters to see everything.</p>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm h-full flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Built for production, not demos</h3>
            <p className="text-sm text-neutral-600">
              We write about the same things we build: secure backends, fast interfaces, AI assistants, and automation that holds up in production.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 text-white p-6 shadow-lg h-full">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 h-full">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.16em] font-semibold text-white/80">Planning a critical release?</p>
                <h3 className="text-2xl font-bold leading-tight">Let&apos;s map your next 90 days</h3>
                <p className="text-sm text-white/85 max-w-md">We can help design the architecture, assemble the team, and get a stable release into production.</p>
              </div>
              <Link
                to="/custom-order"
                className="inline-flex items-center gap-2 bg-white text-primary-700 px-4 py-2 rounded-lg text-sm font-semibold shadow-md whitespace-nowrap self-start"
              >
                Plan it
                <FiArrowUpRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
