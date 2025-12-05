import React from 'react';
import { motion } from 'framer-motion';

/**
 * SectionLabel - Reusable component for section badges/labels
 * Features:
 * - Animated blinking dot indicator
 * - Consistent styling across all pages
 * - Based on the "Our Services" design
 * 
 * @param {string} children - The label text to display
 * @param {string} className - Optional additional classes
 */
const SectionLabel = ({ children, className = '' }) => {
    return (
        <motion.span
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-semibold tracking-[0.12em] uppercase ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
            {children}
        </motion.span>
    );
};

export default SectionLabel;
