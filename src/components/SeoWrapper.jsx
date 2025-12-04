import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SeoWrapper = ({
    title,
    description,
    keywords,
    ogImage,
    ogType = 'website',
    canonical
}) => {
    const location = useLocation();
    const siteName = 'SoftDevIn';
    const baseUrl = 'https://softdevin.com';
    const currentUrl = canonical || `${baseUrl}${location.pathname}`;
    const defaultImage = `${baseUrl}/web-logo1.svg`; // Fallback image

    const fullTitle = title ? `${title} | ${siteName}` : `${siteName} - Custom Software Development & AI Solutions`;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="canonical" href={currentUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage || defaultImage} />
            <meta property="og:site_name" content={siteName} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={currentUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage || defaultImage} />
        </Helmet>
    );
};

export default SeoWrapper;
