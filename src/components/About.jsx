import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FiLayers, FiCode, FiTrendingUp, FiUsers } from 'react-icons/fi';

const pillars = [
    { title: 'Architecture first', copy: 'Designing fault-tolerant systems with secure defaults and observability built in.' },
    { title: 'Human-centered product', copy: 'Interfaces that stay fast, accessible, and focused on the outcomes that matter.' },
    { title: 'Measured delivery', copy: 'Weekly releases, clear milestones, and dashboards your leadership can trust.' },
    { title: 'Embedded partnership', copy: 'We work as an extension of your team—from discovery through long-term support.' },
];

const About = () => {
    const controls = useAnimation();
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const top = sectionRef.current.getBoundingClientRect().top;
            if (top < window.innerHeight * 0.8) {
                controls.start({ opacity: 1, y: 0, transition: { duration: 0.7 } });
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [controls]);

    return (
        <section
            id="about"
            ref={sectionRef}
            className="section-container bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 border-t border-slate-200"
        >
            <div className="content-container grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={controls}
                    className="space-y-5"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-semibold tracking-[0.18em] uppercase">
                        About SoftDevIn
                    </span>
                    <h2 className="section-heading text-left">
                        Engineering depth with real-world impact
                    </h2>
                    <p className="text-lg text-slate-700">
                        SoftDevIn is a software studio focused on generative AI, automation, and cross‑platform apps. We pair senior engineers with clear product thinking so every build is secure, maintainable, and tied to measurable business value.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {pillars.map((item, idx) => (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/70 p-4"
                                style={{ transform: `translateZ(${idx * 6}px)` }}
                            >
                                <p className="text-sm uppercase tracking-[0.12em] text-slate-500 mb-2">{item.title}</p>
                                <p className="text-slate-700 text-sm leading-relaxed">{item.copy}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <div className="relative h-full">
                    <div className="absolute -top-6 -left-10 w-40 h-40 rounded-full bg-primary-100/70 blur-3xl" />
                    <div className="absolute -bottom-8 -right-14 w-48 h-48 rounded-full bg-cyan-100/70 blur-3xl" />
                    <div className="relative rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/80 p-6 overflow-hidden">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Delivery snapshot</p>
                                <h3 className="text-xl font-semibold text-slate-900">What we&rsquo;re building</h3>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold">Active</span>
                        </div>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center justify-between">
                                <span className="text-slate-700">AI assistants & RAG tools</span>
                                <span className="font-semibold text-slate-900">In build</span>
                            </div>
                            <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                                <div className="h-full w-[82%] bg-gradient-to-r from-primary-500 to-primary-300" />
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-slate-700">Ops & workflow automation</span>
                                <span className="font-semibold text-slate-900">Rolling out</span>
                            </div>
                            <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                                <div className="h-full w-[68%] bg-gradient-to-r from-primary-400 to-accent-cyan" />
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-slate-700">Web & mobile platforms</span>
                                <span className="font-semibold text-slate-900">In discovery</span>
                            </div>
                            <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                                <div className="h-full w-[35%] bg-gradient-to-r from-amber-400 to-orange-300" />
                            </div>
                        </div>
                        <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-3">
                                <p className="text-lg font-bold text-slate-900">120+</p>
                                <p className="text-xs text-slate-500 uppercase tracking-[0.12em]">Engineers</p>
                            </div>
                            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-3">
                                <p className="text-lg font-bold text-slate-900">24/7</p>
                                <p className="text-xs text-slate-500 uppercase tracking-[0.12em]">Support</p>
                            </div>
                            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-3">
                                <p className="text-lg font-bold text-slate-900">100%</p>
                                <p className="text-xs text-slate-500 uppercase tracking-[0.12em]">Delivery</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
