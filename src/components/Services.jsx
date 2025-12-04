// Services.jsx
import React, { useRef, useState } from 'react';
import { servicesinfo } from '../export';
import Slider from "react-slick";
import { motion } from 'framer-motion';

// Minimal icon badge to keep UI clean
const GradientIcon = ({ children, size = 56 }) => (
    <div
        className="flex items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white mb-4 shadow-lg shadow-primary-500/30"
        style={{ width: size, height: size }}
    >
        {React.cloneElement(children, {
            size: size * 0.55,
        })}
    </div>
);

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
            className="section-container bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 border-t border-slate-200"
        >
            <div className="content-container flex flex-col items-center">
                {/* Section Title */}
                <motion.div
                    data-aos="fade-down"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center space-y-3"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-semibold tracking-[0.14em] uppercase">
                        Services
                    </span>
                    <h1 className="section-title">What we deliver</h1>
                </motion.div>

                <motion.p
                    data-aos="fade-down"
                    data-aos-delay="200"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="max-w-2xl mx-auto mb-8 text-center text-slate-700"
                >
                    End-to-end product teams that handle strategy, design, engineering, and launch—built to ship predictably and scale with your roadmap.
                </motion.p>

                {/* Services Slider */}
                <div className="w-full mx-auto pb-10 ">
                    <Slider {...settings} ref={sliderRef}>
                        {servicesinfo.map((item, index) => (
                            <div key={index} className="px-2">
                                <motion.div
                                    className="bg-white my-5 border border-slate-200 rounded-3xl p-8 sm:py-10 sm:px-6 md:py-12 md:px-8 flex flex-col items-start justify-between h-auto md:h-96 lg:h-96 w-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl shadow-md shadow-slate-200/70"
                                    data-aos="zoom-in-up"
                                    data-aos-delay={300 + index * 100} // Staggered animation delays
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                                    whileHover={{ rotateX: -3, rotateY: 4 }}
                                    style={{ transformStyle: 'preserve-3d' }}
                                >
                                    {/* Render the Icon with Gradient Background */}
                                    <GradientIcon size={60}>
                                        {item.icon}
                                    </GradientIcon>

                                    {/* Service Title */}
                                    <h2 className="font-semibold mb-2 text-slate-900 text-left text-lg">
                                        {item.title}
                                    </h2>

                                    {/* Service Description */}
                                    <p className="mb-4 leading-relaxed text-left break-words w-full text-slate-600 text-sm">
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
                                backgroundColor: currentSlide === idx ? '#7c3aed' : 'rgba(148, 163, 184, 0.5)',
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
