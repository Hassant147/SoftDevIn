// src/components/Pricing.jsx
import React, { useEffect } from 'react';
import { pricingPlans, staffAugmentation } from '../export';
import { FaChevronCircleRight, FaUsers } from "react-icons/fa";
import { motion } from 'framer-motion';

// Fixed GradientIcon component to properly handle icon children
const GradientIcon = ({ children, size = 60, enableRotate = true, className = '' }) => {
    return (
        <span
            className={`flex items-center justify-center rounded-full transition-transform duration-300 hover:scale-110 ${className}`}
            style={{
                width: size,
                height: size,
                background: 'radial-gradient(circle at 0% 0%, #5de0e6, #8028ff)',
                display: 'inline-flex',
            }}
        >
            {React.cloneElement(children, {
                size: size * 0.6,
                color: 'white',
            })}
        </span>
    );
};

// Pricing Card Component - Fixed nesting issues
const PricingCard = ({ item }) => {
    return (
        <motion.div
            className="
                glow-border-container
                h-full p-6 sm:p-8 md:p-10
                rounded-3xl flex flex-col justify-between items-start gap-6
                mx-auto
                max-w-md w-full
                shadow-lg hover:shadow-2xl
                transition-shadow duration-300
            "
            whileHover={{
                scale: 1.02, // Reduced scale for better performance
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.15)", // Less intense shadow
                transition: { type: 'spring', stiffness: 120, damping: 15 }, // Dampened animation
            }}
        >
            {/* Glowing Border Elements */}
            <div className="glow-border-glow"></div>
            <div className="glow-border-box"></div>

            {/* Card Content */}
            <div className="relative z-10 w-full">
                {/* Service Type */}
                <h1 className="text-black font-semibold">{item.type}</h1>

                {/* Service Description */}
                <p className="text-gray-600 mt-4">{item.about}</p>

                {/* Specs */}
                <p className="text-gray-600 font-semibold mt-4">{item.specs}</p>

                {/* Features List */}
                <div className="flex flex-col justify-center items-start gap-4 mt-4 w-full flex-grow">
                    {item.features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="text-gray-600 flex justify-start items-center gap-4"
                        >
                            <span className="inline-flex items-center">
                                <GradientIcon size={20} enableRotate={false} className="mr-2">
                                    <FaChevronCircleRight />
                                </GradientIcon>
                            </span>
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

// Staff Augmentation Card Component - Fixed similar nesting issues
const StaffAugmentationCard = () => {
    return (
        <motion.div
            className="
                glow-border-container
                max-w-md w-full
                bg-white
                p-6 sm:p-8 md:p-10
                rounded-3xl
                flex flex-col items-start
                shadow-md hover:shadow-lg
                transition-shadow duration-300
            "
            whileHover={{
                scale: 1.02, // Reduced scale for better performance
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.15)",
                transition: { type: 'spring', stiffness: 120, damping: 15 },
            }}
        >
            {/* Glowing Border Elements */}
            <div className="glow-border-glow"></div>
            <div className="glow-border-box"></div>

            {/* Card Content */}
            <div className="relative z-10 w-full">
                <span className="inline-block">
                    <GradientIcon size={60} className="mb-4">
                        <FaUsers />
                    </GradientIcon>
                </span>

                <h1 className="text-gray-800 font-semibold text-left mt-4">
                    {staffAugmentation.type}
                </h1>

                <p className="text-gray-600 mt-4 text-left">
                    {staffAugmentation.about}
                </p>

                <p className="text-gray-600 font-semibold mt-4 text-left">
                    {staffAugmentation.specs}
                </p>

                {/* Features List */}
                <div className="flex flex-col justify-center items-start gap-3 mt-4">
                    {staffAugmentation.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                            <span className="inline-flex items-center">
                                <GradientIcon size={20} enableRotate={false} className="mr-2">
                                    <FaChevronCircleRight />
                                </GradientIcon>
                            </span>
                            <span className="text-gray-700">{feature}</span>
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
            className="section-container section-gradient-1"
        >
            <div className="content-container flex flex-col items-center">
                {/* Section Title */}
                <h1 className="section-title">
                    Tailored IT Solutions for Every Business Need
                </h1>

                {/* Pricing Plans Section */}
                <div className="w-full flex flex-col items-center mt-10">
                    <h3 className="sub-section-title mb-8">
                        Our Pricing Plans
                    </h3>

                    {/* Pricing Cards (Appear Immediately) */}
                    <div className="w-full flex lg:flex-row flex-col justify-center items-stretch gap-10">
                        {pricingPlans.map((item, index) => (
                            <PricingCard key={index} item={item} />
                        ))}
                    </div>
                </div>

                {/* Staff Augmentation Section */}
                <div className="w-full flex flex-col items-center mt-24">
                    <h3 className="sub-section-title mb-8">
                        Staff Augmentation
                    </h3>

                    {/* Staff Augmentation Card (Appears Immediately) */}
                    <div className="w-full flex justify-center">
                        <StaffAugmentationCard />
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Pricing;
