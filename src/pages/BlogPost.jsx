import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiClock, FiArrowLeft, FiShare2, FiLink, FiTag, FiArrowUpRight } from 'react-icons/fi';
import { blogPosts } from '../data/blogPosts';

const formatDate = (date) =>
  new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

import SeoWrapper from '../components/SeoWrapper';
import SchemaJsonLd from '../components/SchemaJsonLd';

const BlogPost = () => {
  const { slug } = useParams();
  const post = useMemo(() => blogPosts.find((item) => item.slug === slug), [slug]);
  const [copied, setCopied] = useState(false);

  const shareUrl =
    typeof window !== 'undefined' ? `${window.location.origin}/blog/${slug}` : `https://softdevin.com/blog/${slug}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard?.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      setCopied(false);
    }
  };

  if (!post) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-neutral-900 flex items-center">
        <SeoWrapper
          title="Post Not Found"
          description="The article you are looking for may have been moved or unpublished."
        />
        <div className="w-[92%] mx-auto max-w-4xl text-center space-y-6 py-20">
          <p className="text-sm font-semibold text-primary-700 uppercase tracking-[0.14em]">Blog</p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Post not found</h1>
          <p className="text-neutral-600">The article you are looking for may have been moved or unpublished.</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-primary-700 text-white px-5 py-3 text-sm font-semibold shadow-md"
          >
            Back to blog
          </Link>
        </div>
      </main>
    );
  }

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    description: post.seoDescription || post.excerpt,
    url: `https://softdevin.com/blog/${post.slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://softdevin.com/blog/${post.slug}`,
    },
  };

  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-slate-100 text-neutral-900">
      <SeoWrapper
        title={post.title}
        description={post.seoDescription || post.excerpt}
        keywords={post.tags.join(', ')}
        ogType="article"
      />
      <SchemaJsonLd schema={articleSchema} />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-10 top-10 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-70" />
          <div className="absolute right-10 -bottom-10 w-80 h-80 bg-accent-purple/20 rounded-full blur-3xl opacity-70" />
        </div>

        <div className="relative w-[92%] mx-auto max-w-5xl pt-20 pb-14 space-y-6">
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary-700 font-semibold">
              <FiArrowLeft /> Back to blog
            </Link>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>{post.author}</span>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-primary-700 uppercase tracking-[0.14em]">
              <span className="px-3 py-1 rounded-full bg-primary-50 border border-primary-100">{post.category}</span>
              <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600">
                <FiClock />
                {post.readTime} min read
              </span>
              <span className="px-3 py-1 rounded-full bg-neutral-50 border border-slate-200 text-slate-600">
                {formatDate(post.date)}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">{post.title}</h1>
            <p className="text-lg text-neutral-600 max-w-3xl">{post.excerpt}</p>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700">
                  <FiTag className="text-primary-500" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-semibold text-slate-700 hover:-translate-y-0.5 transition"
            >
              {copied ? 'Link copied' : 'Copy link'}
              <FiLink className="text-primary-600" />
            </button>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-600 text-white text-sm font-semibold shadow-md hover:-translate-y-0.5 transition"
            >
              Share
              <FiShare2 />
            </a>
          </div>
        </div>
      </section>

      <article className="w-[92%] mx-auto max-w-4xl bg-white border border-slate-200 rounded-3xl shadow-xl shadow-primary-50 p-8 md:p-10 space-y-10">
        <div className="grid md:grid-cols-3 gap-4">
          {post.keyPoints.map((point) => (
            <div key={point} className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm text-slate-700">
              {point}
            </div>
          ))}
        </div>

        <div className="space-y-8">
          {post.sections.map((section) => (
            <section key={section.heading} className="space-y-3">
              <h2 className="text-2xl font-semibold text-slate-900">{section.heading}</h2>
              <p className="text-neutral-700 leading-relaxed">{section.paragraph}</p>
              <ul className="grid gap-2">
                {section.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4 bg-slate-50 border border-slate-200 rounded-2xl p-6">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.16em] font-semibold text-primary-700">SEO details</p>
            <p className="text-sm text-neutral-600">Semantic headings, schema, fast-loading assets, and intent-mapped internal links—built to rank and convert.</p>
          </div>
          <div className="flex items-center justify-end">
            <Link
              to="/custom-order"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-primary-700 text-white px-5 py-3 text-sm font-semibold shadow-md"
            >
              Plan your sprint
              <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </article>

      <section className="w-[92%] mx-auto max-w-5xl py-14 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.14em] font-semibold text-primary-700">Related reads</p>
            <h3 className="text-2xl font-bold text-slate-900">Keep exploring</h3>
          </div>
          <Link to="/blog" className="text-sm font-semibold text-primary-700 inline-flex items-center gap-1">
            View all <FiArrowUpRight />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {relatedPosts.map((item) => (
            <article
              key={item.slug}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-shadow"
            >
              <div
                className="h-28 w-full rounded-t-2xl"
                style={{ backgroundImage: item.heroGradient, backgroundSize: 'cover', backgroundPosition: 'center' }}
                aria-hidden="true"
              />
              <div className="p-5 flex-1 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-primary-700 uppercase tracking-[0.14em]">
                  <span className="px-3 py-1 rounded-full bg-primary-50 border border-primary-100">{item.category}</span>
                  <span className="flex items-center gap-1 text-slate-500">
                    <FiClock />
                    {item.readTime} min
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 group-hover:text-primary-700 transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed">{item.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-slate-600 mt-auto pt-2">
                  <span>{formatDate(item.date)}</span>
                  <Link to={`/blog/${item.slug}`} className="inline-flex items-center gap-1 text-primary-700 font-semibold">
                    Read <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BlogPost;
