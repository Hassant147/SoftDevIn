// src/components/Pricing.jsx
import React, { useEffect } from 'react';
import { engagementModels } from '../export';
import { FaChevronCircleRight } from "react-icons/fa";
import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';

// Unified icon badge for pricing bullets
const GradientIcon = ({ children, size = 60, className = '' }) => (
    <span
        className={`flex items-center justify-center rounded-full bg-primary-50 border border-primary-200 text-primary-600 shadow-sm ${className}`}
        style={{ width: size, height: size }}
    >
        {React.cloneElement(children, {
            size: size * 0.55,
            color: 'currentColor',
        })}
    </span>
);

// Pricing Card Component
const PricingCard = ({ item }) => {
    return (
        <motion.div
            className="
                glow-border-container
                h-full p-6 sm:p-8 md:p-10
                rounded-3xl flex flex-col justify-between items-start gap-6 text-slate-900
                mx-auto
                max-w-md w-full
                shadow-lg hover:shadow-2xl
                transition-shadow duration-300
            "
            whileHover={{
                scale: 1.02,
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.15)",
                transition: { type: 'spring', stiffness: 120, damping: 15 },
            }}
        >
            {/* Glowing Border Elements */}
            <div className="glow-border-glow"></div>
            <div className="glow-border-box"></div>

            {/* Card Content */}
            <div className="relative z-10 w-full">
                {/* Service Type */}
                <h1 className="text-slate-900 font-semibold text-xl">{item.type}</h1>

                {/* Service Description */}
                <p className="text-slate-700 mt-4 min-h-[48px]">{item.about}</p>

                {/* Specs */}
                <p className="text-slate-800 font-semibold mt-4 border-t border-slate-100 pt-4">{item.specs}</p>

                {/* Features List */}
                <div className="flex flex-col justify-center items-start gap-4 mt-4 w-full flex-grow">
                    {item.features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="text-slate-700 flex justify-start items-center gap-3"
                        >
                            <span className="inline-flex items-center shrink-0">
                                <GradientIcon size={22} className="mr-2">
                                    <FaChevronCircleRight />
                                </GradientIcon>
                            </span>
                            <span className="text-sm">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Pricing = () => {
    useEffect(() => {
        // Optional for any side effects or analytics
    }, []);

    return (
        <motion.section
            id="pricing"
            className="section-container bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 border-t border-slate-200"
        >
            <div className="content-container flex flex-col items-center">
                <div className="text-center space-y-3 mb-10">
                    <SectionLabel>Engagement Models</SectionLabel>
                    <h1 className="section-title">
                        Flexible ways to partner
                    </h1>
                    <p className="text-slate-700 max-w-2xl mx-auto">
                        Whether you need a full product team or specialized experts, we adapt to your workflow.
                    </p>
                </div>

                <div className="w-full flex flex-col items-center">
                    <div className="w-full grid lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
                        {engagementModels.map((item, index) => (
                            <PricingCard key={index} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Pricing;
