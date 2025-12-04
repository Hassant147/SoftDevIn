// src/components/Hero.jsx - Updated for routing
import React from 'react';

const heroStats = [
    { label: 'Clients shipped for', value: '20+' },
    { label: 'AI & automation builds', value: '10+' },
    { label: 'Regions served', value: '3' },
];

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
            <div className="absolute inset-0">
                <div className="absolute w-72 h-72 bg-primary-200/40 rounded-full blur-3xl -left-10 -top-16" />
                <div className="absolute w-80 h-80 bg-cyan-300/40 rounded-full blur-3xl right-0 top-10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(15,23,42,0.04),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(15,23,42,0.05),transparent_25%)]" />
            </div>

            <div className="content-container relative py-16 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 border border-primary-100 text-sm font-semibold">
                            Software Development Innovation Pvt. Ltd. Est. 2023
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                            Engineering intelligent software for complex teams
                        </h1>
                        <p className="text-lg text-slate-700 max-w-2xl">
                            We help modern teams ship secure, scalable software—combining AI, automation, and cross‑platform engineering to turn complicated requirements into reliable digital products.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <a
                                href="/custom-order"
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-primary-700 text-white px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 shadow-md"
                            >
                                Request Consultation
                            </a>
                            <a
                                href="/work"
                                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
                            >
                                View Case Studies
                            </a>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                            {heroStats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-lg shadow-slate-200/70"
                                >
                                    <p className="text-2xl font-bold">{stat.value}</p>
                                    <p className="text-xs uppercase tracking-[0.14em] text-slate-500">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative" style={{ perspective: '1400px' }}>
                        <div className="absolute -left-10 top-6 w-24 h-24 rounded-full bg-primary-100 blur-2xl" />
                        <div className="absolute -right-6 bottom-10 w-28 h-28 rounded-full bg-cyan-200 blur-2xl" />

                        <div className="relative min-h-[360px]">
                            <div className="tilt-card tilt-card-1">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="text-sm uppercase tracking-[0.16em] text-slate-500">System Status</div>
                                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold">Operational</span>
                                </div>
                                <ul className="space-y-2 text-sm text-slate-800">
                                    <li className="flex items-center justify-between">
                                        <span>API Availability</span>
                                        <span className="text-emerald-600 font-semibold">99.99%</span>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span>Avg. Latency</span>
                                        <span className="text-slate-900 font-semibold">12ms</span>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span>Security Audit</span>
                                        <span className="text-emerald-600 font-semibold">Passed</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="tilt-card tilt-card-2">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="text-sm uppercase tracking-[0.16em] text-slate-500">Cloud Scale</div>
                                    <span className="text-lg font-bold text-slate-900">Auto</span>
                                </div>
                                <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                                    <div className="h-full w-[92%] bg-gradient-to-r from-emerald-400 to-cyan-400" />
                                </div>
                                <p className="text-xs text-slate-600 mt-2">Kubernetes clusters auto-scaling based on real-time load.</p>
                            </div>

                            <div className="tilt-card tilt-card-3">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="text-sm uppercase tracking-[0.16em] text-slate-500">Architecture</div>
                                    <span className="text-xs px-2 py-1 rounded-full bg-primary-50 text-primary-700">Microservices</span>
                                </div>
                                <div className="grid grid-cols-2 gap-3 text-sm text-slate-900">
                                    <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">Docker / K8s</div>
                                    <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">Terraform</div>
                                    <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">GraphQL</div>
                                    <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">Next.js</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
