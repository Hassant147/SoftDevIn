# SEO Implementation Notes

## Pre-rendering Options (Deferred)

The `vite-plugin-prerender` package has ESM compatibility issues with our current setup.
When ready to implement pre-rendering, consider these alternatives:

### 1. Vercel ISR (Recommended for Vercel deployments)
- Migrate to Next.js for Incremental Static Regeneration
- Best for: Dynamic content, automatic revalidation
- Effort: High (framework migration)

### 2. prerender.io Service
- SaaS solution that renders pages for bots
- Add middleware to detect bot requests and serve pre-rendered HTML
- Best for: Quick implementation without code changes
- Effort: Low (external service)
- Cost: Paid service

### 3. vite-ssg (Static Site Generation)
- Alternative Vite plugin for SSG
- Best for: Fully static sites
- Effort: Medium
- Note: Requires all routes to be statically generable

### Routes to Pre-render
When implementing any of the above, prioritize these routes:
- `/` (Home)
- `/about`
- `/work`
- `/technologies`
- `/careers`
- `/custom-order`
- `/blog`
- `/blog/:slug` (dynamic - generate for each post)

---

## Google Search Console Setup

1. Go to https://search.google.com/search-console
2. Add property: `https://softdevin.com`
3. Verify ownership (recommended: DNS TXT record)
4. Submit sitemap: `https://softdevin.com/sitemap.xml`
5. Monitor:
   - Index Coverage report
   - Core Web Vitals
   - Mobile Usability
   - Rich Results (for FAQ, Service schemas)

---

## Environment Variables

### Required for Analytics
```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### For Vercel
Add environment variables in:
Project Settings → Environment Variables

---

## Schema Validation

Test structured data at:
- https://validator.schema.org/
- https://search.google.com/test/rich-results

Implemented schemas:
- ProfessionalService (Home)
- Service (5 services in hasOfferCatalog)
- BreadcrumbList (Work)
- Blog (Blog listing)
- BlogPosting (Blog posts)
- FAQPage (Custom Order)
