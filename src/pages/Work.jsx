import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { caseStudies } from '../export';

const Work = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 py-20 overflow-hidden border-b border-slate-200">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50"></div>
                    <div className="absolute top-1/2 -left-24 w-72 h-72 bg-cyan-100 rounded-full blur-3xl opacity-40"></div>
                </div>

                <div className="content-container relative z-10 text-center space-y-4">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-semibold tracking-[0.14em] uppercase">
                        Case Studies
                    </span>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="section-title"
                    >
                        Delivering Digital Excellence
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto"
                    >
                        Explore our portfolio of enterprise-grade solutions, from AI-powered analytics to global e-commerce platforms.
                    </motion.p>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="section-container">
                <div className="content-container">
                    <div className="grid grid-cols-1 gap-16">
                        {caseStudies.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                            >
                                {/* Image Side */}
                                <div className="w-full lg:w-1/2">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 group">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-8">
                                            <div className="flex gap-4">
                                                <a
                                                    href={project.demoLink}
                                                    className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-slate-900 transition-all"
                                                    aria-label="View Demo"
                                                >
                                                    <FaExternalLinkAlt />
                                                </a>
                                                <a
                                                    href={project.repoLink}
                                                    className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-slate-900 transition-all"
                                                    aria-label="View Code"
                                                >
                                                    <FaGithub />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="w-full lg:w-1/2">
                                    <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-2 block">
                                        {project.category}
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                        {project.title}
                                    </h2>
                                    <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                                        {project.fullDescription}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                        <div>
                                            <h4 className="font-semibold text-slate-900 mb-2">The Challenge</h4>
                                            <p className="text-slate-600 text-sm">{project.challenge}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-900 mb-2">The Solution</h4>
                                            <p className="text-slate-600 text-sm">{project.solution}</p>
                                        </div>
                                    </div>

                                    <div className="border-t border-slate-200 pt-6">
                                        <h4 className="font-semibold text-slate-900 mb-4">Technologies Used</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm text-slate-600 font-medium"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Work;
