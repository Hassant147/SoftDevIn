// App.jsx - React Router Configuration
import React, { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader3D from './components/Loader3D';
import { AnalyticsProvider, trackPageView } from './components/AnalyticsProvider';

import AOS from 'aos';
import 'aos/dist/aos.css';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const Careers = lazy(() => import('./pages/Careers'));
const CustomOrder = lazy(() => import('./pages/CustomOrder'));
const Technologies = lazy(() => import('./pages/Technologies'));
const Work = lazy(() => import('./pages/Work'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

// Scroll to top on route change and track page views
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Track page view for analytics
    trackPageView(pathname);
  }, [pathname]);

  return null;
}

const AppContent = () => {
  const MIN_LOADER_TIME = 2000;
  const [timeDone, setTimeDone] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-sine',
      once: true,
      disable: 'mobile',
    });
  }, []);

  // Loader timeout
  useEffect(() => {
    const timer = setTimeout(() => setTimeDone(true), MIN_LOADER_TIME);
    return () => clearTimeout(timer);
  }, []);

  // Dispatch event for pre-renderer
  useEffect(() => {
    if (timeDone) {
      document.dispatchEvent(new Event('render-event'));
    }
  }, [timeDone]);

  if (!timeDone) {
    return <Loader3D />;
  }

  return (
    <>
      {/* Scroll to top on route change */}
      <ScrollToTop />

      <Header />

      <main id="main-content">
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/custom-order" element={<CustomOrder />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/work" element={<Work />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </>
  );
};

const App = () => {
  return (
    <HelmetProvider>
      <AnalyticsProvider>
        <Router>
          <AppContent />
        </Router>
      </AnalyticsProvider>
    </HelmetProvider>
  );
};

export default App;
