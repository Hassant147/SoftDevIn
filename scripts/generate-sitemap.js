/**
 * Sitemap Generator for SoftDevIn
 * 
 * Run this script after build to generate sitemap.xml
 * Usage: node scripts/generate-sitemap.js
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SITE_URL = 'https://softdevin.com';
const OUTPUT_DIR = join(__dirname, '../dist');

// Define all static routes
const staticRoutes = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/about', priority: '0.8', changefreq: 'monthly' },
    { path: '/work', priority: '0.8', changefreq: 'weekly' },
    { path: '/technologies', priority: '0.7', changefreq: 'monthly' },
    { path: '/careers', priority: '0.6', changefreq: 'weekly' },
    { path: '/custom-order', priority: '0.9', changefreq: 'monthly' },
    { path: '/blog', priority: '0.8', changefreq: 'daily' },
];

// Blog post slugs (you can import from blogPosts.js if structured as ESM)
const blogSlugs = [
    'react-seo-best-practices-2025',
    'technical-seo-foundations-spa',
    'ai-seo-content-strategy',
    'conversion-rate-optimization-guide',
    'enterprise-analytics-dashboard',
    'brand-authority-content-marketing',
];

function generateSitemap() {
    const today = new Date().toISOString().split('T')[0];

    const urls = [
        ...staticRoutes.map(route => `
  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`),
        ...blogSlugs.map(slug => `
  <url>
    <loc>${SITE_URL}/blog/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`),
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('')}
</urlset>`;

    // Ensure dist directory exists
    if (!existsSync(OUTPUT_DIR)) {
        mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    writeFileSync(join(OUTPUT_DIR, 'sitemap.xml'), sitemap.trim());
    console.log('✅ sitemap.xml generated successfully!');
}

generateSitemap();
