// Careers page - job listings and company culture
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import {
    FiDollarSign,
    FiHeart,
    FiUmbrella,
    FiTrendingUp,
    FiHome,
    FiBookOpen,
    FiMapPin,
    FiClock,
    FiCheck,
    FiX
} from 'react-icons/fi';

const Careers = () => {
    const [selectedJob, setSelectedJob] = useState(null);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        AOS.refresh();
    }, []);

    const benefits = [
        { icon: <FiDollarSign />, title: 'Competitive Salary', description: 'Market-aligned compensation with clear review cycles.' },
        { icon: <FiHeart />, title: 'Healthy Culture', description: 'Supportive, low-ego teams and sustainable working hours.' },
        { icon: <FiUmbrella />, title: 'Flexible PTO', description: 'Time off when you need it, plus local public holidays.' },
        { icon: <FiTrendingUp />, title: 'Career Growth', description: 'Mentorship, feedback, and opportunities to lead initiatives.' },
        { icon: <FiHome />, title: 'Remote-Friendly', description: 'Work from where you are, with async-first collaboration.' },
        { icon: <FiBookOpen />, title: 'Learning Budget', description: 'Dedicated budget for courses, books, and conferences.' },
    ];

    // Current openings are paused; keep structure for future roles.
    const jobs = [];

    const filteredJobs = filter === 'all' ? jobs : jobs.filter(job => job.department === filter);
    const departments = ['all', ...Array.from(new Set(jobs.map(job => job.department)))];

    return (
        <div className="min-h-screen bg-neutral-50">
            {/* Hero Section */}
            <section className="section pt-32 pb-16 bg-white">
                <div className="container">
                    <div className="text-center space-y-3">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-semibold tracking-[0.14em] uppercase">
                            Careers
                        </span>
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="section-title"
                        >
                            Join our global team
                        </motion.h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl text-neutral-600 text-center max-w-3xl mx-auto"
                    >
                        Build the future with teammates who care about quality, thoughtful design, and shipping real outcomes for enterprise clients.
                    </motion.p>
                </div>
            </section>

            {/* Benefits */}
            <section className="section pb-16 bg-neutral-50">
                <div className="container">
                    <div className="text-center space-y-3 mb-6">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-semibold tracking-[0.14em] uppercase">
                            Benefits
                        </span>
                        <h2 className="section-title" data-aos="fade-down">
                            Why SoftDevIn?
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-8 hover-lift border border-neutral-200 shadow-sm"
                                data-aos="zoom-in"
                                data-aos-delay={index * 100}
                            >
                                <div className="text-4xl mb-4 text-primary-600">{benefit.icon}</div>
                                <h3 className="text-xl font-heading font-bold mb-2 text-neutral-800">{benefit.title}</h3>
                                <p className="text-neutral-600">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Listings */}
            <section className="section pb-16 bg-white">
                <div className="container">
                    <div className="text-center space-y-3 mb-6">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-semibold tracking-[0.14em] uppercase">
                            Roles
                        </span>
                        <h2 className="section-title" data-aos="fade-down">
                            Open Positions
                        </h2>
                    </div>

                    {/* Department Filter (hidden when no roles) */}
                    {departments.length > 1 && (
                        <div className="flex flex-wrap justify-center gap-3 mb-12">
                            {departments.map((dept) => (
                                <button
                                    key={dept}
                                    onClick={() => setFilter(dept)}
                                    className={`px-6 py-2 rounded-full font-medium transition-all capitalize ${filter === dept
                                        ? 'bg-gradient-to-r from-primary-500 to-primary-700 text-white shadow-lg shadow-primary-500/30'
                                        : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                                        }`}
                                >
                                    {dept === 'all' ? 'All Positions' : dept}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Job Cards or Empty State */}
                    {filteredJobs.length === 0 ? (
                        <div className="max-w-3xl mx-auto bg-white border border-neutral-200 rounded-2xl p-10 text-center shadow-sm">
                            <p className="text-sm uppercase tracking-[0.2em] text-primary-700 font-semibold mb-2">No open roles</p>
                            <h3 className="text-2xl font-bold text-neutral-900 mb-3">We’re not hiring right now</h3>
                            <p className="text-neutral-600">
                                We’ll post new opportunities as soon as they’re available. In the meantime, feel free to share your portfolio or resume at
                                {' '}
                                <a className="text-primary-600 font-semibold hover:underline" href="mailto:careers@softdevin.com">careers@softdevin.com</a>.
                            </p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                            {filteredJobs.map((job, index) => (
                                <motion.div
                                    key={job.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm hover:shadow-xl transition-all cursor-pointer group"
                                    onClick={() => setSelectedJob(job)}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="flex flex-col items-start mb-4">
                                        <h3 className="text-2xl font-heading font-bold text-neutral-800 mb-3 group-hover:text-primary-600 transition-colors">{job.title}</h3>
                                        <div className="flex flex-wrap gap-2 w-full">
                                            <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium border border-primary-100">
                                                {job.department}
                                            </span>
                                            <span className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm font-medium border border-neutral-200">
                                                {job.type}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-neutral-600 mb-6 line-clamp-2">{job.description}</p>

                                    <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500 pt-4 border-t border-neutral-100 w-full">
                                        <span className="flex items-center gap-2">
                                            <FiMapPin /> {job.location}
                                        </span>
                                        <button className="text-primary-600 font-bold hover:underline flex items-center gap-1 ml-auto">
                                            View Details →
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Job Details Modal */}
            {selectedJob && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedJob(null)}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-white rounded-3xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-3">{selectedJob.title}</h2>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium border border-primary-100">
                                        {selectedJob.department}
                                    </span>
                                    <span className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm font-medium border border-neutral-200 flex items-center gap-1">
                                        <FiClock className="text-xs" /> {selectedJob.type}
                                    </span>
                                    <span className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm font-medium border border-neutral-200 flex items-center gap-1">
                                        <FiMapPin className="text-xs" /> {selectedJob.location}
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={() => setSelectedJob(null)}
                                className="text-neutral-400 hover:text-neutral-900 text-2xl p-2 transition-colors"
                            >
                                <FiX />
                            </button>
                        </div>

                        <p className="text-lg text-neutral-600 mb-8 leading-relaxed">{selectedJob.description}</p>

                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <h3 className="text-xl font-heading font-bold text-neutral-900 mb-4 flex items-center gap-2">
                                    <FiCheck className="text-primary-600" /> Responsibilities
                                </h3>
                                <ul className="space-y-3">
                                    {selectedJob.responsibilities.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3 text-neutral-600">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2.5 flex-shrink-0"></span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-heading font-bold text-neutral-900 mb-4 flex items-center gap-2">
                                    <FiBookOpen className="text-primary-600" /> Requirements
                                </h3>
                                <ul className="space-y-3">
                                    {selectedJob.requirements.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3 text-neutral-600">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2.5 flex-shrink-0"></span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <button className="w-full bg-gradient-to-r from-primary-500 to-primary-700 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg shadow-primary-500/40 transition-transform hover:-translate-y-0.5">
                            Apply for this Position
                        </button>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default Careers;
