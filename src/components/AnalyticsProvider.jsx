/**
 * Analytics Provider Component
 * 
 * Configurable analytics integration for Google Analytics 4 and other providers.
 * Reads tracking ID from environment variables.
 * 
 * SETUP INSTRUCTIONS:
 * 
 * 1. Create a .env file in project root (not committed to git):
 *    VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
 * 
 * 2. Get your GA4 Measurement ID from Google Analytics:
 *    - Go to Admin → Data Streams → Your Stream → Measurement ID
 * 
 * 3. For production (Vercel):
 *    - Add VITE_GA_MEASUREMENT_ID in Project Settings → Environment Variables
 * 
 * 4. Wrap your app with AnalyticsProvider in App.jsx:
 *    <AnalyticsProvider>
 *      <AppContent />
 *    </AnalyticsProvider>
 * 
 * GOOGLE SEARCH CONSOLE SETUP:
 * 
 * 1. Go to https://search.google.com/search-console
 * 2. Add property: https://softdevin.com
 * 3. Verify ownership via:
 *    - DNS TXT record (recommended), OR
 *    - HTML file upload to public/, OR
 *    - Google Analytics (if using same account)
 * 4. Submit sitemap: https://softdevin.com/sitemap.xml
 * 5. Monitor Index Coverage and Core Web Vitals reports
 */
import React, { useEffect, createContext, useContext } from 'react';

const AnalyticsContext = createContext(null);

// Google Analytics 4 initialization
const initGA4 = (measurementId) => {
    if (!measurementId || typeof window === 'undefined') return;

    // Load gtag.js script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    // Initialize dataLayer and gtag function
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
        window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
        page_path: window.location.pathname,
    });
};

// Track page views (call on route change)
export const trackPageView = (url) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID, {
            page_path: url,
        });
    }
};

// Track custom events
export const trackEvent = (eventName, params = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, params);
    }
};

export const AnalyticsProvider = ({ children }) => {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

    useEffect(() => {
        if (measurementId) {
            initGA4(measurementId);
            if (import.meta.env.DEV) {
                console.log('[Analytics] GA4 initialized');
            }
        } else if (import.meta.env.DEV) {
            console.log('[Analytics] No GA_MEASUREMENT_ID found. Analytics disabled.');
        }
    }, [measurementId]);

    return (
        <AnalyticsContext.Provider value={{ trackPageView, trackEvent }}>
            {children}
        </AnalyticsContext.Provider>
    );
};

export const useAnalytics = () => {
    const context = useContext(AnalyticsContext);
    if (!context) {
        throw new Error('useAnalytics must be used within AnalyticsProvider');
    }
    return context;
};

export default AnalyticsProvider;
