// App.jsx (Optimized for Performance)
import React, { useEffect, useState, useRef, lazy, Suspense } from 'react';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Header from './components/Header';
import CanvasScene from './components/CanvasScene';
import Loader3D from './components/Loader3D';
import TechStack from './components/TechStack';
// import CoreTeam from './components/CoreTeam';
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

// Debounce function to further reduce unnecessary calls
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const App = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInHero, setIsInHero] = useState(true);
  const [timeDone, setTimeDone] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showCanvas, setShowCanvas] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  
  const heroRef = useRef(null);
  const MIN_LOADER_TIME = 2000;

  // Check if tab is visible/hidden to save resources
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Initialize AOS once, with reduced animation time
  useEffect(() => {
    AOS.init({ 
      offset: 100, // Reduced from 200 
      duration: 500, // Reduced from 600
      easing: 'ease-in-sine', 
      once: true, // Important to prevent re-animations
      disable: 'mobile' // Disable on mobile for better performance
    });
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
    
    const throttledCheck = throttle(checkDevice, 500);
    checkDevice();
    
    window.addEventListener('resize', throttledCheck);
    return () => window.removeEventListener('resize', throttledCheck);
  }, []);

  // Optimized Scroll Event Handler
  useEffect(() => {
    if (isMobile || !isVisible) return; // Skip when mobile or tab not visible

    // Use both throttle AND debounce for even better performance
    const handleScroll = throttle(() => {
      if (!heroRef.current) return;
  
      const heroHeight = heroRef.current.offsetHeight;
      const scrollTop = window.scrollY;
  
      // Update scroll progress for 3D object animation
      const totalScroll = document.body.scrollHeight - window.innerHeight;
      const overallProgress = Math.min((scrollTop / totalScroll) * 100, 100);
      
      // Use RAF to optimize UI updates
      requestAnimationFrame(() => {
        setScrollProgress(overallProgress);
        setIsInHero(scrollTop < heroHeight);
      });
    }, 150); // Even more throttling
    
    // Debounce for further optimization - this significantly reduces calls
    const debouncedScroll = debounce(handleScroll, 50);
  
    window.addEventListener("scroll", debouncedScroll, { passive: true });
    return () => window.removeEventListener("scroll", debouncedScroll);
  }, [isMobile, isVisible]);  

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
  
  // Cleanup when window is hidden/inactive
  useEffect(() => {
    if (!isVisible && showCanvas) {
      // Temporarily hide 3D scene when tab is not visible
      const timer = setTimeout(() => {
        if (!isVisible) setShowCanvas(false);
      }, 10000); // Wait 10 seconds before disabling
      
      return () => clearTimeout(timer);
    } else if (isVisible && !showCanvas && !isMobile) {
      // Re-enable 3D scene when tab becomes visible again
      const timer = setTimeout(() => {
        const windowWidth = window.innerWidth;
        const isLowEndDevice = 
          !window.navigator.hardwareConcurrency || 
          window.navigator.hardwareConcurrency <= 4 ||
          windowWidth < 1024;
          
        setShowCanvas(isVisible && !isMobile && !isLowEndDevice);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, showCanvas, isMobile]);

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
      {showCanvas && isVisible && (
        <CanvasScene
          isInHero={isInHero}
          scrollProgress={scrollProgress}
          rotationSpeed={0.08 + scrollProgress / 2000} // Reduced speed
        />
      )}

      <Header />
      <Hero ref={heroRef} globalScrollProgress={scrollProgress} />
      <Suspense fallback={null}>
        <About />
        <Services />
        <TechStack />
        <Pricing />
        <Projects />
        {/* <CoreTeam /> */}
        <Clients />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
