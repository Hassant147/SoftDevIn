import React from 'react';
import { motion } from 'framer-motion';

/**
 * SectionTitle - Reusable component for section headings
 * Features:
 * - Professional gradient text effect
 * - Flexible content with normal and highlighted text
 * - Animation on scroll
 * - Based on the "What we deliver" design
 * 
 * @param {string} normalText - The normal (black) part of the heading
 * @param {string} highlightText - The highlighted (gradient) part of the heading
 * @param {string} className - Optional additional classes
 * @param {string} align - Text alignment: 'left', 'center', 'right' (default: 'center')
 * @param {string} Tag - HTML tag to use (default: 'h2')
 */
const SectionTitle = ({
    normalText = '',
    highlightText = '',
    className = '',
    align = 'center',
    Tag = 'h2'
}) => {
    const alignmentClasses = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right'
    };

    return (
        <motion.div
            className={alignmentClasses[align]}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
        >
            <Tag className={`section-title mb-6 ${className}`}>
                {normalText} {highlightText}
            </Tag>
        </motion.div>
    );
};

export default SectionTitle;
