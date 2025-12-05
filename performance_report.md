# Performance Report

## Overview
Optimizing the React application for speed, performance, and bundle size.

## Removed Items (Safe to Delete)
- **Assets**: `src/assets/1.SVG` (Unused)
- **Dependencies**: `animejs`, `gsap` (Unused in source code)


## Refactors & Optimizations
- **Render Optimization**: Implemented "Render-on-Reveal" for `Home.jsx` using `LazySection`.
  - Sections are valid React components but are not rendered into the DOM until visible.
  - **Benefit**: Reduces initial TBT (Total Blocking Time) and memory usage.
- **Chunk Strategy**: Default Vite splitting.
  - `Home` chunk: ~30kB (contains Services, TechStack, etc.) + shared `SectionLabel` (~112kB).
  - This is a safe balance between performance and stability.

## Performance Impact
- **Initial Load**: Fast. The browser processes the Home chunk, but does *not* pay the cost of rendering heavy sub-trees immediately.
- **Stability**: Resolved "Cannot convert object to primitive value" runtime errors by moving away from aggressive nested lazy loading.

## Future Recommendations
- **Images**: Continue using `OptimizedImage`.
- **Lighthouse**: Run a Lighthouse Audit in Chrome to further tune (e.g. LCP of Hero image).
