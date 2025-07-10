// Services.jsx
import React, { useRef, useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { servicesinfo } from '../export';
import Slider from "react-slick";
import { motion } from 'framer-motion';

// GradientIcon Component
const GradientIcon = ({ children, size = 60, enableRotate = true }) => {
    // Adjust size based on screen size using Tailwind's responsive classes
    const responsiveSizes = {
        base: 40,
        sm: 50,
        md: 60,
        lg: 70,
        xl: 80,
        '2xl': 90,
    };

    return (
        <div
            className="flex items-center p-3 justify-center rounded-full mb-4 transition-transform duration-300 hover:scale-110"
            style={{
                width: size,
                height: size,
                background: 'radial-gradient(circle at 0% 0%, #5de0e6, #8028ff)',
            }}
        >
            {React.cloneElement(children, {
                size: size * 1,
                color: 'white',
                className: enableRotate ? 'transition-transform duration-300 hover:rotate-12' : '',
            })}
        </div>
    );
};

const Services = () => {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false, // Disable default dots
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 1536, // 2xl
                settings: { slidesToShow: 4 },
            },
            {
                breakpoint: 1280, // xl
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 1024, // lg
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 640, // sm
                settings: { slidesToShow: 1 },
            },
        ],
        beforeChange: (oldIndex, newIndex) => {
            setCurrentSlide(newIndex % servicesinfo.length);
        },
    };

    const handleDotClick = (index) => {
        sliderRef.current.slickGoTo(index);
    };

    return (
        <section
            id="services"
            className="section-container section-gradient-1 glass-effect"
        >
            <div className="content-container flex flex-col items-center">
                {/* Section Title */}
                <motion.h1
                    data-aos="fade-down"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="section-title"
                >
                    Our Services
                </motion.h1>

                <motion.p
                    data-aos="fade-down"
                    data-aos-delay="200"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="max-w-2xl mx-auto mb-8 text-center"
                >
                    At SoftDevIn, we offer a wide range of IT and digital solutions tailored
                    to your business needs. Explore our services designed to help you excel
                    in the digital landscape.
                </motion.p>

                {/* Services Slider */}
                <div className="w-full mx-auto pb-10 ">
                    <Slider {...settings} ref={sliderRef}>
                        {servicesinfo.map((item, index) => (
                            <div key={index} className="px-2">
                                <motion.div
                                    className="bg-white/60 shadow-lg my-5  backdrop-blur-sm border border-white/30 rounded-3xl p-8 sm:py-10 sm:px-6 md:py-12 md:px-8 flex flex-col items-center justify-between h-auto md:h-96 lg:h-96 w-full transition-transform duration-300 hover:scale-105"
                                    data-aos="zoom-in-up"
                                    data-aos-delay={300 + index * 100} // Staggered animation delays
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                                >
                                    {/* Render the Icon with Gradient Background */}
                                    <GradientIcon size={60}>
                                        {item.icon}
                                    </GradientIcon>

                                    {/* Service Title */}
                                    <h2 className="font-semibold mb-2 text-gray-800 text-center">
                                        {item.title}
                                    </h2>

                                    {/* Service Description */}
                                    <p className="mb-4 leading-relaxed text-center break-words w-full">
                                        {item.about}
                                    </p>
                                </motion.div>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Custom Dots Indicator */}
                <div className="flex gap-2 py-1">
                    {servicesinfo.map((_, idx) => (
                        <motion.div
                            key={idx}
                            className={`w-3 sm:w-4 h-3 sm:h-4 rounded-full cursor-pointer`}
                            onClick={() => handleDotClick(idx)}
                            animate={{
                                backgroundColor: currentSlide === idx ? '#8028ff' : '#ccc',
                                scale: currentSlide === idx ? 1.25 : 1,
                            }}
                            transition={{ duration: 0.3 }}
                        ></motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
