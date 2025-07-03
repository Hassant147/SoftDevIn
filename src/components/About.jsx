import React, { useEffect, useRef } from 'react';
import { FaChevronCircleRight } from "react-icons/fa";
import { motion, useAnimation } from 'framer-motion';

const About = () => {
    const controls = useAnimation();
    const sectionRef = useRef(null);

    useEffect(() => {
        // AOS initialized globally in App.jsx
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const top = sectionRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (top < windowHeight * 0.8) {
                controls.start({
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1 },
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Trigger on mount

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [controls]);

    // Variants for the list items
    const listItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (custom) => ({
            opacity: 1,
            x: 0,
            transition: { delay: custom * 0.3, duration: 0.6 },
        }),
        hover: { scale: 1.05, color: '#004aad' },
    };

    return (
        <section
            id="about"
            ref={sectionRef}
            className="section-container section-gradient-2 glass-effect"
        >
            {/* Inner container */}
            <div className="content-container flex flex-col lg:flex-row justify-between items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16">

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    className="flex flex-col justify-center items-start gap-4 md:gap-5 lg:gap-6 w-full lg:w-full"
                >
                    {/* Section Header */}
                    <motion.h1
                        data-aos="fade-down"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="section-title"
                    >
                        ABOUT US
                    </motion.h1>

                    {/* Main Title with Gradient Text and Improved Animation */}
                    <motion.h2
                        data-aos="fade-up"
                        data-aos-delay="400"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        whileHover={{ scale: 1.05 }}
                        className="sub-section-title text-left font-ubuntu bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text"
                    >
                        Enterprise Technology Excellence
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        data-aos="fade-up"
                        data-aos-delay="600"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-slate-700 text-left lg:text-left"
                    >
                        Established in 2023, SoftDevIn has rapidly emerged as a trusted technology partner for businesses across industries. Our team of certified engineers and consultants brings 50+ years of combined experience in enterprise software development, cloud architecture, and digital strategy. We've successfully delivered over 200 projects for clients ranging from Fortune 500 companies to innovative startups.
                    </motion.p>

                    {/* Features List */}
                    <motion.ul
                        data-aos="fade-up"
                        data-aos-delay="800"
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col justify-center items-start gap-4"
                    >
                        <motion.li
                            className="flex items-center gap-4 text-black cursor-pointer"
                            variants={listItemVariants}
                            custom={0}
                            whileHover="hover"
                        >
                            <div
                                className="flex items-center justify-center rounded-full"
                                style={{
                                    width: '24px',
                                    height: '24px',
                                    background: 'radial-gradient(circle at 0% 0%, #5de0e6, #8028ff)',
                                }}
                            >
                                <FaChevronCircleRight className="text-white text-xs sm:text-sm" />
                            </div>
                            Enterprise software solutions with 99.9% uptime and scalability
                        </motion.li>

                        <motion.li
                            className="flex items-center gap-4 text-black cursor-pointer"
                            variants={listItemVariants}
                            custom={1}
                            whileHover="hover"
                        >
                            <div
                                className="flex items-center justify-center rounded-full"
                                style={{
                                    width: '24px',
                                    height: '24px',
                                    background: 'radial-gradient(circle at 0% 0%, #5de0e6, #8028ff)',
                                }}
                            >
                                <FaChevronCircleRight className="text-white text-xs sm:text-sm" />
                            </div>
                            Data-driven digital strategies yielding 40%+ ROI for clients
                        </motion.li>

                        <motion.li
                            className="flex items-center gap-4 text-black cursor-pointer"
                            variants={listItemVariants}
                            custom={2}
                            whileHover="hover"
                        >
                            <div
                                className="flex items-center justify-center rounded-full"
                                style={{
                                    width: '24px',
                                    height: '24px',
                                    background: 'radial-gradient(circle at 0% 0%, #5de0e6, #8028ff)',
                                }}
                            >
                                <FaChevronCircleRight className="text-white text-xs sm:text-sm" />
                            </div>
                            Award-winning UX/UI design enhancing user engagement by 35%
                        </motion.li>

                        <motion.li
                            className="flex items-center gap-4 text-black cursor-pointer"
                            variants={listItemVariants}
                            custom={3}
                            whileHover="hover"
                        >
                            <div
                                className="flex items-center justify-center rounded-full"
                                style={{
                                    width: '24px',
                                    height: '24px',
                                    background: 'radial-gradient(circle at 0% 0%, #5de0e6, #8028ff)',
                                }}
                            >
                                <FaChevronCircleRight className="text-white text-xs sm:text-sm" />
                            </div>
                            Strategic partnerships with 95% client retention rate
                        </motion.li>
                    </motion.ul>
                </motion.div>

                {/* Decorative Element: Animated Gradient Spinning SVG */}
                <div className="hidden lg:flex lg:w-1/2 justify-end items-center">
                    <motion.div
                        className="
                            w-40 sm:w-48 md:w-56 lg:w-64 
                            h-40 sm:h-48 md:h-56 lg:h-64 
                            rounded-full 
                            flex 
                            items-center 
                            justify-center 
                            shadow-xl
                        "
                        style={{
                            background: 'linear-gradient(90deg, #004aad, #cb6ce6)',
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-16 sm:h-20 md:h-24 lg:h-24 w-16 sm:w-20 md:w-24 lg:w-24 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4v1m0 14v1m8-8h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"
                            />
                        </svg>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
