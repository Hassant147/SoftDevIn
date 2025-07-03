// Clients.jsx
import React, { useRef, useState } from 'react';
import Slider from "react-slick";
import { testidata } from '../export';
import { motion } from 'framer-motion';

// Detect low-end devices to disable heavy animations
const isLowEndDevice = typeof navigator !== 'undefined' && (!navigator.hardwareConcurrency || navigator.hardwareConcurrency <= 4);

const Clients = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnHover: true,
        pauseOnFocus: true,
        pauseOnDotsHover: true,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    };

    const handleDotClick = (index) => {
        sliderRef.current.slickGoTo(index);
    };

    return (
        <motion.section
            id="testimonials"
            className="section-container section-gradient-2 glass-effect"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >

            {!isLowEndDevice && (
            <div className="pointer-events-none absolute w-full h-full top-0 left-0 overflow-hidden z-[-1]">
                <motion.div
                    className="
            hidden md:block
            absolute
            w-24 sm:w-32 md:w-40 
            h-24 sm:h-32 md:h-40 
            rounded-full 
            bg-pink-400 
            opacity-30 
            blur-xl
            top-10 
            left-5
          "
                    animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="
            hidden md:block
            absolute
            w-32 sm:w-40 md:w-48 
            h-32 sm:h-40 md:h-48 
            rounded-full 
            bg-purple-400 
            opacity-30 
            blur-xl
            bottom-10 
            right-10
          "
                    animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                />
            </div>
            )}

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center gap-12">
                <div className="text-center flex flex-col gap-3 max-w-2xl mx-auto">
                    <h1
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="
              font-semibold 
              text-3xl md:text-4xl lg:text-5xl 
              leading-tight 
              font-ubuntu 
              text-center
              drop-shadow-sm
              bg-gradient-to-r 
              from-blue-500 
              to-purple-600 
              text-transparent 
              bg-clip-text
            "
                    >
                        What Our Clients Say
          </h1>
                </div>

                <div
                    data-aos="zoom-in"
                    data-aos-delay="400"
                    className="
            w-full
            max-w-2xl
            mx-auto
            bg-white/30 
            backdrop-blur-md 
            rounded-xl 
            p-6 sm:p-8 md:p-10 
            shadow-lg
          "
                >
                    <Slider ref={sliderRef} {...settings}>
                        {testidata.map((item, index) => (
                            <div key={index}>
                                <div className="flex flex-col sm:flex-row items-start gap-4">
                                    {/* Circular container that won't shrink */}
                                    <div className="shrink-0 w-20 h-20 rounded-full overflow-hidden shadow-md mb-4 sm:mb-0">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Text Section */}
                                    <div className="flex flex-col gap-4">
                                        <p className="font-ubuntu font-light text-lg sm:text-lg md:text-xl text-gray-700 text-left">
                                            {item.review}
                                        </p>
                                        <div>
                                            <h3 className="text-black font-semibold text-xl sm:text-xl md:text-2xl">
                                                {item.name}
                                            </h3>
                                            <p className="text-gray-600 text-base sm:text-lg">
                                                {item.post}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </Slider>

                    {/* Custom Dots */}
                    <div className="flex justify-center gap-2 mt-4">
                        {testidata.map((_, idx) => (
                            <motion.div
                                key={idx}
                                className="w-3 h-3 sm:w-4 sm:h-4 rounded-full cursor-pointer"
                                onClick={() => handleDotClick(idx)}
                                animate={{
                                    backgroundColor: currentSlide === idx ? '#8028ff' : '#ccc',
                                    scale: currentSlide === idx ? 1.25 : 1,
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Clients;
