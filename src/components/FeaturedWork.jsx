import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { caseStudies } from '../export';
import SectionLabel from './SectionLabel';

const FeaturedWork = () => {
    // Display only the first 3 case studies
    const featuredProjects = caseStudies.slice(0, 3);

    return (
        <section className="section-container bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 relative overflow-hidden border-t border-slate-200">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute top-1/2 -left-24 w-72 h-72 bg-cyan-100 rounded-full blur-3xl opacity-40"></div>
            </div>

            <div className="content-container relative z-10">
                <div className="flex flex-col items-center text-center gap-4 mb-12">
                    <SectionLabel>Case Studies</SectionLabel>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="section-title"
                    >
                        Our Featured Work
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-slate-600 text-lg max-w-2xl"
                    >
                        Recent engagements where we modernized platforms, shipped revenue-driving features, and scaled global teams for enterprise clients.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                    >
                        <Link
                            to="/work"
                            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
                        >
                            View All Case Studies
                            <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col h-full"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <span className="text-white font-medium text-sm bg-primary-600/90 px-3 py-1 rounded-full backdrop-blur-sm">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-600 mb-6 line-clamp-3 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.slice(0, 3).map((tech, i) => (
                                        <span key={i} className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                                            +{project.technologies.length - 3}
                                        </span>
                                    )}
                                </div>

                                <Link
                                    to="/work"
                                    className="mt-auto inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                                >
                                    Read Case Study
                                    <FaArrowRight className="ml-2 w-3 h-3" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedWork;
