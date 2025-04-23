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
                <h1 className='text-black text-xl sm:text-2xl font-semibold font-ubuntu'>{item.type}</h1>

                {/* Service Description */}
                <p className='text-gray-600 text-sm sm:text-base font-ubuntu mt-4'>{item.about}</p>

                {/* Specs */}
                <p className='text-gray-600 text-sm sm:text-base font-semibold font-ubuntu mt-4'>{item.specs}</p>

                {/* Features List */}
                <div className='flex flex-col justify-center items-start gap-4 mt-4 w-full flex-grow'>
                    {item.features.map((feature, idx) => (
                        <div
                            key={idx}
                            className='text-gray-600 flex justify-start items-center gap-4 font-ubuntu text-sm sm:text-base'
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

                <h1 className='text-gray-800 text-2xl sm:text-3xl font-semibold font-ubuntu text-left mt-4'>
                    {staffAugmentation.type}
                </h1>

                <p className='text-gray-600 text-sm sm:text-base font-ubuntu mt-4 text-left'>
                    {staffAugmentation.about}
                </p>

                <p className='text-gray-600 text-sm sm:text-base font-semibold font-ubuntu mt-4 text-left'>
                    {staffAugmentation.specs}
                </p>

                {/* Features List */}
                <div className='flex flex-col justify-center items-start gap-3 mt-4'>
                    {staffAugmentation.features.map((feature, idx) => (
                        <div key={idx} className='flex items-center gap-3'>
                            <span className="inline-flex items-center">
                                <GradientIcon size={20} enableRotate={false} className="mr-2">
                                    <FaChevronCircleRight />
                                </GradientIcon>
                            </span>
                            <span className='text-gray-700 text-sm sm:text-base'>{feature}</span>
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
            id='pricing'
            className=" relative w-full py-12 sm:py-16 md:py-20 lg:py-24 flex flex-col items-center overflow-hidden"
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 z-[-1]"></div>

            {/* Section Content */}
            <div className="relative w-[90%] flex flex-col items-center">
                {/* Section Title */}
                <h1
                    className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-ubuntu text-center"
                    style={{
                        background: 'linear-gradient(90deg, #004aad, #cb6ce6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Tailored IT Solutions for Every Business Need
                </h1>

                {/* Pricing Plans Section */}
                <div className='w-full flex flex-col items-center mt-10'>
                    <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-8 font-ubuntu text-center'>
                        Our Pricing Plans
                    </h3>

                    {/* Pricing Cards (Appear Immediately) */}
                    <div className='w-full flex lg:flex-row flex-col justify-center items-stretch gap-10'>
                        {pricingPlans.map((item, index) => (
                            <PricingCard key={index} item={item} />
                        ))}
                    </div>
                </div>

                {/* Staff Augmentation Section */}
                <div className='w-full flex flex-col items-center mt-24'>
                    <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-8 font-ubuntu text-center'>
                        Staff Augmentation
                    </h3>

                    {/* Staff Augmentation Card (Appears Immediately) */}
                    <div className='w-full flex justify-center'>
                        <StaffAugmentationCard />
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Pricing;
