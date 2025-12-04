// Home page - combines all homepage sections
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import TechStack from '../components/TechStack';
import Pricing from '../components/Pricing';
import FeaturedWork from '../components/FeaturedWork';
import Clients from '../components/Clients';
import Contact from '../components/Contact';

import SeoWrapper from '../components/SeoWrapper';
import SchemaJsonLd from '../components/SchemaJsonLd';

const Home = () => {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "SoftDevIn",
        "url": "https://softdevin.com",
        "logo": "https://softdevin.com/web-logo1.svg",
        "description": "SoftDevIn is a premier software development agency specializing in React, AI solutions, mobile apps, and enterprise software.",
        "sameAs": [
            "https://www.linkedin.com/company/softdevin",
            "https://twitter.com/softdevin"
        ],
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Gulberg Greens",
            "addressLocality": "Islamabad",
            "addressCountry": "PK"
        },
        "priceRange": "$$$",
        "telephone": "+92-336-5690614",
        "email": "support@softdevin.com",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Software Development Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Enterprise Engineering",
                        "description": "Scalable, fault-tolerant software architectures designed for high-availability environments with 99.99% uptime."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "AI & Machine Learning",
                        "description": "Production-grade AI solutions including predictive analytics and custom LLM integration."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Digital Transformation",
                        "description": "Strategic modernization of legacy systems including cloud migration and DevOps implementation."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Cloud Infrastructure",
                        "description": "Cloud-native architectures on AWS, Azure, and GCP with Infrastructure as Code."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Dedicated Teams",
                        "description": "Pre-vetted senior engineering talent that integrates seamlessly into your workflows."
                    }
                }
            ]
        }
    };

    return (
        <>
            <SeoWrapper
                title="Custom Software Development & AI Solutions Agency"
                description="SoftDevIn is a premier software development agency specializing in React, AI solutions, mobile apps, and enterprise software. We build scalable digital products."
                keywords="software development, react agency, ai solutions, mobile app development, enterprise software"
            />
            <SchemaJsonLd schema={organizationSchema} />

            <Hero />
            <About />
            <Services />
            <TechStack />
            <Pricing />
            {/* Ensure clear separation from testimonials */}
            <FeaturedWork />
            <Clients />
            <Contact />
        </>
    );
};

export default Home;

