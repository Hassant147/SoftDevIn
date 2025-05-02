// src/components/Projects.jsx

import React, { useEffect, useRef, Suspense } from 'react';
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";
import Slider from "react-slick";
import { motion, AnimatePresence } from 'framer-motion';
// Remove 3D imports
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, Stars } from '@react-three/drei';
import { projectsInfo } from '../export'; // Ensure correct path
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Optional: minimal fade on entire section, removing heavier AOS usage
// If you want to keep any AOS usage, import 'aos' and init as needed.

const Projects = () => {
    const [selectedProject, setSelectedProject] = React.useState(null);
    const [isDetailOpen, setIsDetailOpen] = React.useState(false);
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const sliderRef = useRef(null);

    // Minimal slider settings
    const sliderSettings = {
        dots: false, // We'll create custom dots
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3500,
        beforeChange: (oldIndex, newIndex) => {
            setCurrentSlide(newIndex % projectsInfo.length);
        },
    };

    // Open detail panel
    const openDetail = (project) => {
        setSelectedProject(project);
        setIsDetailOpen(true);
        document.body.style.overflow = 'hidden';
    };

    // Close detail panel
    const closeDetail = () => {
        setIsDetailOpen(false);
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };

    // Dot navigation
    const handleDotClick = (index) => {
        sliderRef.current.slickGoTo(index);
    };

    return (
        <motion.section
            id="projects"
            className="section-container section-gradient-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }} // Short fade in for entire section
        >
            {/* Floating Blobs */}
            <div className="pointer-events-none absolute w-full h-full top-0 left-0 overflow-hidden z-[-1]">
                <motion.div
                    className="hidden md:block absolute w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 rounded-full bg-pink-400 opacity-30 blur-xl top-10 left-5"
                    animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="hidden md:block absolute w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 rounded-full bg-purple-400 opacity-30 blur-xl bottom-10 right-10"
                    animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                />
            </div>

            {/* Section Content */}
            <div className="content-container flex flex-col items-center">
                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="section-title"
                >
                    Our Stunning Projects
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="max-w-2xl mx-auto mt-2 mb-8 text-center"
                >
                    Dive into some of our most innovative and visually captivating projects, showcasing our expertise.
                </motion.p>

                {/* Projects Slider */}
                <div className="w-full max-w-4xl mt-2">
                    <Slider ref={sliderRef} {...sliderSettings}>
                        {projectsInfo.map((project, index) => (
                            <div key={project.id}>
                                <motion.div
                                    className="relative bg-white/30 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => openDetail(project)}
                                >
                                    {/* Replace 3D with just image */}
                                    <div className="relative w-full h-60 sm:h-80 md:h-96 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20"></div>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="absolute top-0 left-0 w-full h-full object-cover opacity-90 transition-opacity duration-300 hover:opacity-100"
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-80 transition-opacity duration-300" />

                                    {/* Project Info */}
                                    <div className="absolute bottom-0 p-6">
                                        <h3 className="font-semibold text-white mb-2">{project.title}</h3>
                                        <p className="text-gray-300 mb-4">{project.description}</p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex space-x-2">
                                                {project.technologies.map((tech, i) => (
                                                    <span key={i} className="text-white">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="flex space-x-2">
                                                <a
                                                    href={project.demoLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-white hover:text-limegreen transition-colors duration-300"
                                                    aria-label={`${project.title} Demo`}
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <FaExternalLinkAlt size={20} />
                                                </a>
                                                <a
                                                    href={project.repoLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-white hover:text-limegreen transition-colors duration-300"
                                                    aria-label={`${project.title} Repository`}
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <FaGithub size={20} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Custom Dots */}
                <div className="flex justify-center gap-2 mt-4">
                    {projectsInfo.map((_, idx) => (
                        <motion.div
                            key={idx}
                            className="w-3 h-3 sm:w-4 sm:h-4 rounded-full cursor-pointer"
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

            {/* Project Details Panel */}
            <AnimatePresence>
                {isDetailOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25 }}
                            className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-2xl"
                        >
                            {selectedProject && (
                                <div className="flex flex-col h-full">
                                    {/* Header with close button */}
                                    <div className="flex justify-between items-center p-6 border-b">
                                        <h3 className="font-bold">{selectedProject.title}</h3>
                                        <button
                                            onClick={closeDetail}
                                            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                                            aria-label="Close"
                                        >
                                            <FaTimes size={20} />
                                        </button>
                                    </div>

                                    {/* Content scrollable area */}
                                    <div className="overflow-y-auto p-6">
                                        <img
                                            src={selectedProject.image}
                                            alt={selectedProject.title}
                                            className="w-full rounded-xl object-cover h-64 mb-6"
                                        />

                                        <div className="space-y-4">
                                            <p>{selectedProject.fullDescription || selectedProject.description}</p>

                                            <div>
                                                <h4 className="font-semibold mb-2">Technologies</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {selectedProject.technologies.map((tech, i) => (
                                                        <span
                                                            key={i}
                                                            className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <h4 className="font-semibold mb-2">Key Features</h4>
                                                <ul className="list-disc list-inside space-y-1">
                                                    {selectedProject.features?.map((feature, i) => (
                                                        <li key={i}>{feature}</li>
                                                    )) || (
                                                            <li>Detailed information coming soon</li>
                                                        )}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Footer with links */}
                                    <div className="p-6 border-t mt-auto">
                                        <div className="flex justify-between">
                                            <span>Want to see it in action?</span>
                                            <div className="space-x-4">
                                                <a
                                                    href={selectedProject.demoLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center text-blue-600 hover:underline"
                                                >
                                                    Live Demo <FaExternalLinkAlt className="ml-1" size={14} />
                                                </a>
                                                <a
                                                    href={selectedProject.repoLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center text-blue-600 hover:underline"
                                                >
                                                    View Code <FaGithub className="ml-1" size={14} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.section>
    );
};

export default Projects;
