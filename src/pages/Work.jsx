import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { caseStudies } from '../export';

import SeoWrapper from '../components/SeoWrapper';
import SchemaJsonLd from '../components/SchemaJsonLd';
import OptimizedImage from '../components/OptimizedImage';
import SectionLabel from '../components/SectionLabel';
import SectionTitle from '../components/SectionTitle';

const Work = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://softdevin.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Our Work",
                "item": "https://softdevin.com/work"
            }
        ]
    };

    return (
        <article className="bg-white min-h-screen pt-20">
            <SeoWrapper
                title="Our Work - Case Studies & Portfolio"
                description="Explore SoftDevIn's portfolio of enterprise-grade software, mobile apps, and AI solutions delivered for global clients."
                keywords="software portfolio, case studies, app development projects, react projects"
            />
            <SchemaJsonLd schema={breadcrumbSchema} />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 py-20 md:py-24 overflow-hidden border-b border-slate-200">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50"></div>
                    <div className="absolute top-1/2 -left-24 w-72 h-72 bg-cyan-100 rounded-full blur-3xl opacity-40"></div>
                </div>

                <div className="content-container relative z-10 text-center space-y-4">
                    {/* <nav aria-label="Breadcrumb" className="mb-4">
                        <ol className="inline-flex items-center gap-2 text-sm text-slate-600">
                            <li><Link to="/" className="hover:text-primary-700">Home</Link></li>
                            <li>/</li>
                            <li className="text-slate-900 font-semibold">Our Work</li>
                        </ol>
                    </nav> */}
                    <SectionLabel>Case Studies</SectionLabel>
                    <SectionTitle normalText="Delivering Digital" highlightText="Excellence" Tag="h1" />
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
                                        <OptimizedImage
                                            src={project.image}
                                            alt={`${project.title} - ${project.category} case study screenshot`}
                                            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                            aspectRatio={16 / 10}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-8">
                                            <div className="flex gap-4">
                                                <a
                                                    href={project.demoLink}
                                                    className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-slate-900 transition-all"
                                                    aria-label={`View ${project.title} demo`}
                                                >
                                                    <FaExternalLinkAlt />
                                                </a>
                                                <a
                                                    href={project.repoLink}
                                                    className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-slate-900 transition-all"
                                                    aria-label={`View ${project.title} source code`}
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
                                            <h3 className="font-semibold text-slate-900 mb-2">The Challenge</h3>
                                            <p className="text-slate-600 text-sm">{project.challenge}</p>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-slate-900 mb-2">The Solution</h3>
                                            <p className="text-slate-600 text-sm">{project.solution}</p>
                                        </div>
                                    </div>

                                    <div className="border-t border-slate-200 pt-6">
                                        <h3 className="font-semibold text-slate-900 mb-4">Technologies Used</h3>
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

                    {/* CTA Section */}
                    <div className="mt-16 text-center">
                        <p className="text-slate-600 mb-4">Ready to build something great together?</p>
                        <Link
                            to="/custom-order"
                            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 shadow-md"
                        >
                            Start your project <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </section>
        </article>
    );
};

export default Work;

