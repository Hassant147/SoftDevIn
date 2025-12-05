// Services.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { servicesinfo } from '../export';
import { motion } from 'framer-motion';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import SectionLabel from './SectionLabel';
import SectionTitle from './SectionTitle';

// Modern animated icon component with hover effects
const AnimatedIcon = ({ children, isHovered }) => (
    <div className="relative">
        <motion.div
            className="absolute inset-0 rounded-2xl blur-xl bg-gradient-to-br from-primary-200/60 via-primary-100/40 to-primary-400/60"
            animate={{
                opacity: isHovered ? 0.5 : 0.25,
                scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.4 }}
        />

        <motion.div
            className="relative flex items-center justify-center w-16 h-16 rounded-2xl text-white shadow-lg shadow-primary-500/30 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700"
            animate={{
                scale: isHovered ? 1.1 : 1,
                rotate: isHovered ? 5 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            {React.cloneElement(children, {
                size: 28,
                strokeWidth: 1.5,
            })}
        </motion.div>
    </div>
);

// Service card component with enhanced styling
const ServiceCard = ({ item, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="group relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Card glow effect on hover - using theme gradient */}
            <motion.div
                className="absolute -inset-0.5 rounded-3xl opacity-0 blur-sm transition-opacity duration-500 bg-gradient-to-br from-primary-300 via-primary-500 to-primary-400"
                animate={{ opacity: isHovered ? 0.5 : 0 }}
            />

            {/* Main card - solid white background */}
            <div className="relative h-full flex flex-col rounded-3xl bg-white border border-slate-200 p-8 transition-all duration-500 hover:border-primary-200 hover:shadow-[0_20px_60px_-12px_rgba(128,40,255,0.15)]">
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-50/70 via-transparent to-primary-100/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className="mb-6">
                        <AnimatedIcon isHovered={isHovered}>
                            {item.icon}
                        </AnimatedIcon>
                    </div>

                    {/* Number badge */}
                    <motion.span
                        className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full text-xs font-medium"
                        animate={{
                            backgroundColor: isHovered ? 'hsl(245, 75%, 58%)' : 'hsl(220, 18%, 95%)',
                            color: isHovered ? 'white' : 'hsl(220, 12%, 60%)',
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        0{index + 1}
                    </motion.span>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-primary-700">
                        {item.title}
                    </h3>

                    {/* Description */}
                    <p className="flex-1 text-slate-600 text-[15px] leading-relaxed mb-6">
                        {item.about}
                    </p>

                    {/* Learn more link */}
                    <motion.div
                        className="flex items-center gap-2 text-sm font-semibold text-primary-600"
                        animate={{ x: isHovered ? 4 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <span>Explore service</span>
                        <FiArrowRight
                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

const Services = () => {
    return (
        <section
            id="services"
            className="relative section-container bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 border-t border-slate-200"
        >
            {/* Background elements - using theme neutrals */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

            {/* Decorative gradient orbs - using theme colors */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl pointer-events-none bg-primary-200/30" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-3xl pointer-events-none bg-cyan-100/40" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl pointer-events-none bg-primary-500/10" />

            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 lg:mb-20">
                    <div className="mb-6">
                        <SectionLabel>Our Services</SectionLabel>
                    </div>

                    <SectionTitle normalText="What we" highlightText="deliver" />

                    <motion.p
                        className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        End-to-end product teams that handle strategy, design, engineering, and launch—built to ship predictably and scale with your roadmap.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
                    {servicesinfo.slice(0, 3).map((item, index) => (
                        <ServiceCard key={index} item={item} index={index} />
                    ))}
                </div>

                {/* Second row with 2 cards centered */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mb-16">
                    {servicesinfo.slice(3, 5).map((item, index) => (
                        <ServiceCard key={index + 3} item={item} index={index + 3} />
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Link
                        to="/work"
                        className="group inline-flex items-center gap-3 px-6 py-4 rounded-2xl border-2 border-slate-200 bg-white text-slate-900 font-semibold hover:border-primary-300 hover:shadow-lg hover:shadow-primary-100/50 hover:-translate-y-0.5 transition-all duration-300"
                    >
                        <span>See our case studies</span>
                        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-primary-100 transition-colors">
                            <FiArrowRight className="w-4 h-4 text-slate-600 group-hover:text-primary-600 transition-colors" />
                        </span>
                    </Link>

                    <Link
                        to="/custom-order"
                        className="group inline-flex items-center gap-3 px-6 py-4 rounded-2xl text-white font-semibold hover:-translate-y-0.5 transition-all duration-300 bg-gradient-to-r from-primary-500 to-primary-700 shadow-lg shadow-primary-500/30"
                    >
                        <span>Start your project</span>
                        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/20 group-hover:bg-white/30 transition-colors">
                            <FiArrowUpRight className="w-4 h-4" />
                        </span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
