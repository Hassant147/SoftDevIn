// src/components/Projects.jsx

import React, { useEffect, useRef, Suspense } from 'react';
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";
import Slider from "react-slick";
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
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
            className="relative w-full pb-12 sm:pb-16 md:pb-20 lg:pb-24 flex flex-col items-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }} // Short fade in for entire section
        >
            {/* Gradient BG (from Clients.jsx) */}
            <div
                className="
          absolute 
          inset-0 
          z-[-2]
          bg-gradient-to-r 
          from-pink-500 
          via-blue-500 
          to-purple-500
          animate-gradient-x
          opacity-20
        "
            />

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

            {/* Starry 3D Scene */}
            <Canvas className="absolute inset-0 z-0">
                <ambientLight intensity={0.1} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <Stars
                    radius={200}
                    depth={60}
                    count={3000}
                    factor={8}
                    saturation={1}
                    fade
                    speed={1} // Subtle twinkle
                />
                <OrbitControls enableZoom={false} />
            </Canvas>

            {/* Section Content */}
            <div className="relative z-10 w-[90%] flex flex-col items-center">
                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-ubuntu text-center"
                    style={{
                        background: 'linear-gradient(90deg, #004aad, #cb6ce6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Our Stunning Projects
        </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="max-w-2xl mx-auto mt-2 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-8 text-center"
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
                                    {/* 3D & Image */}
                                    <div className="relative w-full h-60 sm:h-80 md:h-96 overflow-hidden">
                                        <Canvas>
                                            <ambientLight intensity={0.5} />
                                            <pointLight position={[10, 10, 10]} intensity={1} />
                                            <mesh rotation={[0, Math.PI / 4, 0]}>
                                                <boxGeometry args={[1, 1, 1]} />
                                                <meshStandardMaterial color="#8028ff" transparent opacity={0.1} />
                                            </mesh>
                                            <OrbitControls enableZoom={false} />
                                        </Canvas>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="absolute top-0 left-0 w-full h-full object-cover opacity-70 transition-opacity duration-300 hover:opacity-100"
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-80 transition-opacity duration-300" />

                                    {/* Project Info */}
                                    <div className="absolute bottom-0 p-6">
                                        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                                        <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex space-x-2">
                                                {project.technologies.map((tech, i) => (
                                                    <span key={i} className="text-white text-lg">
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
                        />
                    ))}
                </div>
            </div>

            {/* Sidebar Panel */}
            <AnimatePresence>
                {isDetailOpen && selectedProject && (
                    <motion.div
                        initial={{ x: '100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: '100%', opacity: 0 }}
                        transition={{ type: 'tween', duration: 0.4 }}
                        className="fixed top-0 right-0 w-full md:w-1/3 h-full bg-black/90 backdrop-blur-lg z-50 overflow-y-auto flex flex-col p-6"
                    >
                        <button
                            onClick={closeDetail}
                            className="ml-auto text-gray-200 hover:text-limegreen mb-4"
                            aria-label="Close Detail Panel"
                        >
                            <FaTimes size={24} />
                        </button>

                        <div className="flex flex-col gap-6">
                            {/* 3D Box + Image */}
                            <div className="w-full h-64 relative mb-4">
                                <Canvas>
                                    <ambientLight intensity={0.6} />
                                    <pointLight position={[10, 10, 10]} intensity={1} />
                                    <Suspense fallback={null}>
                                        <mesh rotation={[0, Math.PI / 4, 0]}>
                                            <boxGeometry args={[1.5, 1.5, 1.5]} />
                                            <meshStandardMaterial color="#8028ff" transparent opacity={0.3} />
                                        </mesh>
                                        <OrbitControls enableZoom={false} />
                                    </Suspense>
                                </Canvas>
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="absolute top-0 left-0 w-full h-full object-cover opacity-40 rounded-md"
                                />
                            </div>

                            {/* Details */}
                            <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
                            <p className="text-gray-200 leading-relaxed">
                                {selectedProject.description}
                            </p>

                            {/* Tech Badges */}
                            <div className="flex items-center flex-wrap gap-3 mb-4">
                                {selectedProject.technologies.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="bg-limegreen text-black px-3 py-1 rounded-full text-sm font-semibold"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex space-x-4">
                                <a
                                    href={selectedProject.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full hover:from-limegreen hover:to-purple-600 transition-colors duration-300"
                                >
                                    Live Demo <FaExternalLinkAlt className="ml-2" />
                                </a>
                                <a
                                    href={selectedProject.repoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
                                >
                                    GitHub <FaGithub className="ml-2" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.section>
    );
};

export default Projects;
