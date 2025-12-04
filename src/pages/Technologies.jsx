// Technologies page - comprehensive tech stack showcase
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaDatabase, FaMobileAlt, FaCloud, FaCode, FaServer, FaBrain } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiRedis, SiKubernetes, SiTensorflow, SiPytorch, SiGraphql, SiNestjs } from 'react-icons/si';

const Technologies = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All Technologies', icon: <FaCode /> },
        { id: 'frontend', name: 'Frontend', icon: <FaReact /> },
        { id: 'backend', name: 'Backend', icon: <FaServer /> },
        { id: 'mobile', name: 'Mobile', icon: <FaMobileAlt /> },
        { id: 'ai-ml', name: 'AI/ML', icon: <FaBrain /> },
        { id: 'devops', name: 'DevOps & Cloud', icon: <FaCloud /> },
        { id: 'database', name: 'Databases', icon: <FaDatabase /> },
    ];

    const technologies = [
        // Frontend
        { name: 'React', icon: <FaReact />, category: 'frontend', color: '#61DAFB', description: 'Interactive UIs' },
        { name: 'Next.js', icon: <SiNextdotjs />, category: 'frontend', color: '#000000', description: 'Production Framework' },
        { name: 'TypeScript', icon: <SiTypescript />, category: 'frontend', color: '#3178C6', description: 'Type Safety' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, category: 'frontend', color: '#06B6D4', description: 'Rapid Styling' },

        // Backend
        { name: 'Node.js', icon: <FaNodeJs />, category: 'backend', color: '#339933', description: 'Scalable Server' },
        { name: 'NestJS', icon: <SiNestjs />, category: 'backend', color: '#E0234E', description: 'Enterprise Node.js' },
        { name: 'Python', icon: <FaPython />, category: 'backend', color: '#3776AB', description: 'Versatile Backend' },
        { name: 'GraphQL', icon: <SiGraphql />, category: 'backend', color: '#E10098', description: 'Flexible API' },

        // Databases
        { name: 'MongoDB', icon: <SiMongodb />, category: 'database', color: '#47A248', description: 'NoSQL Database' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, category: 'database', color: '#4169E1', description: 'Relational SQL' },
        { name: 'Redis', icon: <SiRedis />, category: 'database', color: '#DC382D', description: 'In-Memory Cache' },

        // AI/ML
        { name: 'TensorFlow', icon: <SiTensorflow />, category: 'ai-ml', color: '#FF6F00', description: 'ML Framework' },
        { name: 'PyTorch', icon: <SiPytorch />, category: 'ai-ml', color: '#EE4C2C', description: 'Deep Learning' },

        // DevOps & Cloud
        { name: 'AWS', icon: <FaAws />, category: 'devops', color: '#FF9900', description: 'Cloud Infrastructure' },
        { name: 'Docker', icon: <FaDocker />, category: 'devops', color: '#2496ED', description: 'Containerization' },
        { name: 'Kubernetes', icon: <SiKubernetes />, category: 'devops', color: '#326CE5', description: 'Orchestration' },
    ];

    const filteredTech = activeCategory === 'all'
        ? technologies
        : technologies.filter(tech => tech.category === activeCategory);

    return (
        <div className="min-h-screen bg-neutral-50">
            {/* Hero Section */}
            <section className="section pt-32 pb-16 bg-white">
                <div className="container">
                    <div className="text-center space-y-3">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-semibold tracking-[0.14em] uppercase">
                            Technology
                        </span>
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="section-title"
                        >
                            Our Technology Stack
                        </motion.h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl text-neutral-600 text-center max-w-3xl mx-auto"
                    >
                        We select our stack based on stability, ecosystem maturity, and performance. No resume-driven development—just proven engineering tools.
                    </motion.p>
                </div>
            </section>

            {/* Category Filter */}
            <section className="pb-12 bg-white border-b border-neutral-200">
                <div className="container">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${activeCategory === category.id
                                    ? 'bg-gradient-to-r from-primary-500 to-primary-700 text-white shadow-lg shadow-primary-500/30'
                                    : 'bg-white text-slate-600 border border-slate-200 hover:border-primary-200 hover:text-primary-700'
                                    }`}
                            >
                                {category.icon}
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Grid */}
            <section className="section py-20">
                <div className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredTech.map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="bg-white rounded-2xl p-8 hover-lift border border-neutral-200 shadow-sm hover:shadow-xl transition-all group"
                            >
                                <div
                                    className="text-6xl mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                                    style={{ color: tech.color }}
                                >
                                    {tech.icon}
                                </div>
                                <h3 className="text-xl font-heading font-bold text-center text-neutral-800 mb-2">
                                    {tech.name}
                                </h3>
                                <p className="text-center text-neutral-500 text-sm font-medium">
                                    {tech.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-gradient-to-b from-white via-slate-50 to-white py-20 border-t border-slate-200">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center bg-white border border-slate-200 rounded-3xl p-10 shadow-2xl shadow-slate-200"
                    >
                        <h2 className="section-heading heading-solid text-center text-slate-900 mb-4">
                            Ready to Build Something Amazing?
                        </h2>
                        <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
                            Our architects are ready to design a solution that fits your legacy constraints and future goals.
                        </p>
                        <a
                            href="/custom-order"
                            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg shadow-primary-500/40 transition-transform hover:-translate-y-0.5"
                        >
                            Start Your Project →
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Technologies;
