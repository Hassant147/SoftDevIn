// src/components/Hero.jsx (Optimized)
import React, { useEffect, useState } from 'react';

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

const Hero = React.forwardRef(({ globalScrollProgress }, ref) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [scrollProgressLocal, setScrollProgressLocal] = useState(0);

    useEffect(() => {
        // Trigger 'loaded' for the fade-in effect
        const timeout = setTimeout(() => setIsLoaded(true), 500);

        // AOS initialized globally in App.jsx

        // Create throttled scroll handler
        const handleScroll = throttle(() => {
            if (!ref.current) return;

            const hero = ref.current;
            const scrollTop = window.scrollY;
            const heroTop = hero.offsetTop;
            const heroHeight = hero.offsetHeight;

            const relativeScroll = scrollTop - heroTop;
            const clampedScroll = Math.max(0, relativeScroll);

            // This local progress (0-100) animates the heading
            const progress = Math.min((clampedScroll / heroHeight) * 100, 100);
            setScrollProgressLocal(progress);
        }, 50); // Throttle to max 20 updates per second

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => {
            clearTimeout(timeout);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [ref]);

    // More efficient heading movement - reduced amount
    const headingTranslate = Math.min(scrollProgressLocal * 0.5, 50);
    const headingStyle = {
        transform: `translateY(${headingTranslate * -1}px)`,
    };

    return (
        <div className="section-container section-white">
            <section
                id="hero"
                ref={ref}
                className="content-container flex flex-col"
            >
                {/* HEADLINE with subtle upward movement */}
                <div className="hover-stretch-container mb-8 sm:mb-14 lg:mb-20" style={headingStyle}>
                    <h1 className="hover-stretch-title">
                        <span>Solutions</span>
                        <span aria-hidden="true">
                            <span>F</span>
                            <span className="stretch-o"></span>
                            <span>r</span>
                        </span>
                        <span>Innovators</span>
                    </h1>
                </div>

                {/* Description Text */}
                <p
                    className={`font-ubuntu text-xl lg:text-2xl text-slate-700 transition-all duration-700 ${
                        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    At SoftDevIn, we deliver enterprise-grade software solutions and digital transformation services. 
                    Our expertise spans custom development, AI integration, and strategic digital marketing, 
                    helping businesses achieve measurable growth and operational excellence.
                </p>
                
                {/* Added Call-to-Action for better conversion */}
                <div 
                    className={`mt-4 transition-all duration-700 ${
                        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    <a 
                        href="#contact" 
                        className="inline-block px-6 py-3 bg-gradient-to-r from-[#004aad] to-[#cb6ce6] text-white font-medium rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300"
                        aria-label="Discuss your project with our experts"
                    >
                        Discuss Your Project
                    </a>
                </div>
            </section>
        </div>
    );
});

export default Hero;
