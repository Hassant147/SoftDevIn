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
            className="
            glass-effect
                relative
                w-full  
                py-12 sm:py-16 md:py-20 lg:py-24
                overflow-hidden
            "
        >
            {/* Swapped Background Gradient from Services Section */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x opacity-20 z-[-1]" />

            {/* Inner container */}
            <div className="w-[90%] m-auto flex flex-col lg:flex-row justify-between items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16">

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
                        className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-ubuntu text-center"
                        style={{
                            background: 'linear-gradient(90deg, #004aad, #cb6ce6)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
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
                        className="
        text-black 
        font-bold 
        text-2xl md:text-3xl lg:text-4xl 
        leading-snug 
        font-ubuntu 
        bg-gradient-to-r 
        from-blue-500 
        to-purple-600 
        text-transparent 
        bg-clip-text
        text-left
    "
                    >
                        Revolutionizing the Digital World
</motion.h2>


                    {/* Description */}
                    <motion.p
                        data-aos="fade-up"
                        data-aos-delay="600"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="font-ubuntu text-sm sm:text-base md:text-lg text-slate-700 text-left lg:text-left"
                    >
                        Founded in May 2023, SoftDevIn is a global leader in software development, crafting cutting-edge digital solutions that empower businesses. With expertise in emerging technologies like AI, blockchain, and Web 3.0, we transform ideas into impactful realities.
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
                            className="flex items-center gap-4 text-black font-ubuntu text-sm sm:text-base cursor-pointer"
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
                            Transforming businesses with innovative software solutions
                        </motion.li>

                        <motion.li
                            className="flex items-center gap-4 text-black font-ubuntu text-sm sm:text-base cursor-pointer"
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
                            Delivering digital strategies for growth and innovation
                        </motion.li>

                        <motion.li
                            className="flex items-center gap-4 text-black font-ubuntu text-sm sm:text-base cursor-pointer"
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
                            Expertise in design, branding, and digital experiences
                        </motion.li>

                        <motion.li
                            className="flex items-center gap-4 text-black font-ubuntu text-sm sm:text-base cursor-pointer"
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
                            Building long-term partnerships with a client-first approach
                        </motion.li>
                    </motion.ul>


                    {/* Discover More Button */}
                    {/* <motion.button
                        data-aos="fade-up"
                        data-aos-delay="1000"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        whileHover={{
                            scale: 1.1,
                            backgroundColor: '#000000',
                            color: '#ffffff',
                            boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
                        }}
                        whileTap={{
                            scale: 0.95,
                            backgroundColor: '#1a1a1a',
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
                        }}
                        className="
                            bg-gradient-to-r 
                            from-blue-500 
                            to-purple-600 
                            px-4 sm:px-6 md:px-8 
                            py-2 sm:py-3 md:py-4 
                            rounded-full 
                            text-white 
                            text-sm sm:text-base 
                            font-semibold 
                            font-ubuntu 
                            flex 
                            items-center 
                            gap-2 
                            transition-colors 
                            duration-300
                            mt-4
                        "
                        aria-label="Discover More About Us"
                    >
                        Discover More
                        <FaChevronCircleRight className="text-white text-sm sm:text-base" />
                    </motion.button> */}

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
