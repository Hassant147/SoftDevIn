// App.jsx (Optimized for Performance)
import React, { useEffect, useState, useRef, lazy, Suspense } from 'react';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Header from './components/Header';
import CanvasScene from './components/CanvasScene';
import Loader3D from './components/Loader3D';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Lazy-loaded components
const Services = lazy(() => import('./components/Services'));
const Projects = lazy(() => import('./components/Projects'));
const About = lazy(() => import('./components/About'));
const Pricing = lazy(() => import('./components/Pricing'));
const Clients = lazy(() => import('./components/Clients'));
const Contact = lazy(() => import('./components/Contact'));

// Throttle function to limit execution frequency
const throttle = (callback, delay) => {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) return;
    lastCall = now;
    return callback(...args);
  };
};

const App = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInHero, setIsInHero] = useState(true);
  const [timeDone, setTimeDone] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showCanvas, setShowCanvas] = useState(false);
  
  const heroRef = useRef(null);
  const MIN_LOADER_TIME = 2000;

  // Initialize AOS once
  useEffect(() => {
    AOS.init({ offset: 200, duration: 600, easing: 'ease-in-sine', once: true });
  }, []);

  // Detect device capabilities for performance optimization
  useEffect(() => {
    const checkDevice = () => {
      const windowWidth = window.innerWidth;
      const isMobileView = windowWidth < 768;
      
      // Check for low-end devices
      const isLowEndDevice = 
        !window.navigator.hardwareConcurrency || 
        window.navigator.hardwareConcurrency <= 4 ||
        windowWidth < 1024;
      
      setIsMobile(isMobileView);
      // Only show Canvas on higher-end devices
      setShowCanvas(!isMobileView && !isLowEndDevice);
    };
    
    const throttledCheck = throttle(checkDevice, 200);
    checkDevice();
    
    window.addEventListener('resize', throttledCheck);
    return () => window.removeEventListener('resize', throttledCheck);
  }, []);

  // Optimized Scroll Event Handler
  useEffect(() => {
    if (isMobile) return; // Skip heavy calculations on mobile

    // Create throttled handler to improve performance
    const handleScroll = throttle(() => {
      if (!heroRef.current) return;
  
      const heroHeight = heroRef.current.offsetHeight;
      const scrollTop = window.scrollY;
  
      // Update scroll progress for 3D object animation
      const totalScroll = document.body.scrollHeight - window.innerHeight;
      const overallProgress = Math.min((scrollTop / totalScroll) * 100, 100);
      setScrollProgress(overallProgress);
      
      // Check if still in Hero section
      setIsInHero(scrollTop < heroHeight);
    }, 100); // Throttle to max 10 updates per second
  
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);  

  // Loader Timeout
  useEffect(() => {
    const timer = setTimeout(() => setTimeDone(true), MIN_LOADER_TIME);
    return () => clearTimeout(timer);
  }, []);

  // Memory cleanup for WebGL renderer
  useEffect(() => {
    // Add global error handler for WebGL context loss
    const handleContextLost = (event) => {
      console.error('WebGL context lost', event);
      // Force disable 3D elements
      setShowCanvas(false);
    };
    
    window.addEventListener('webglcontextlost', handleContextLost);
    
    return () => {
      window.removeEventListener('webglcontextlost', handleContextLost);
    };
  }, []);

  if (!timeDone) {
    return <Loader3D />;
  }

  return (
    <>
      {/* Global Scroll Progress Bar */}
      <div className="fixed top-0 z-50 left-0 w-full h-1 bg-gray-200">
        <div
          className="h-full bg-gradient-to-r from-[#5de0e6] to-[#8028ff]"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Render 3D Scene Only for Non-Mobile Devices with capability check */}
      {showCanvas && (
        <CanvasScene
          isInHero={isInHero}
          scrollProgress={scrollProgress}
          rotationSpeed={0.1 + scrollProgress / 1000} // Restored original rotation speed
        />
      )}

      <Header />
      <Hero ref={heroRef} globalScrollProgress={scrollProgress} />
      <Suspense fallback={null}>
        <About />
        <Services />
        <Pricing />
        <Projects />
        <Clients />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
