import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { FiCpu, FiUsers, FiZap, FiShield, FiActivity } from 'react-icons/fi';

const timeline = [
  {
    year: '2023',
    title: 'Founded',
    description: 'Launched SoftDevIn to deliver enterprise-grade software with a relentless focus on quality and speed.',
  },
  {
    year: '2024',
    title: 'Global Delivery',
    description: 'Built distributed pods across the USA, UK, and Pakistan to serve clients around the clock.',
  },
  {
    year: '2024',
    title: 'AI & Automation Practice',
    description: 'Formalized an internal practice focused on generative AI assistants, RAG workflows, and enterprise automation.',
  },
  {
    year: '2025',
    title: 'Product Incubation',
    description: 'Dedicated a fixed slice of engineering time to incubate our own compliant AI and operations tooling.',
  },
  {
    year: '2026',
    title: 'SoftDevIn Platform',
    description: 'Targeting launch of our own SaaS product, combining AI orchestration with enterprise controls.',
  },
];

const values = [
  { icon: <FiCpu />, title: 'Engineering Excellence', description: 'We refuse to ship brittle code. Every line is reviewed, tested, and optimized for performance.' },
  { icon: <FiUsers />, title: 'Radical Transparency', description: 'You see what we see. Direct access to Jira, GitHub, and Slack channels from day one.' },
  { icon: <FiZap />, title: 'Velocity with Quality', description: 'CI/CD pipelines and automated testing allow us to ship daily without breaking things.' },
  { icon: <FiShield />, title: 'Security First', description: 'Security is not an afterthought. We implement OWASP best practices and regular audits.' },
];

const stats = [
  { number: 20, suffix: '+', label: 'Clients Served' },
  { number: 40, suffix: '+', label: 'Projects Delivered' },
  { number: 25, suffix: '+', label: 'Team Members' },
  { number: 3, suffix: '+', label: 'Regions Active' },
];

const About = () => {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-neutral-900">
      {/* Hero Section */}
      <section className="section pt-28 pb-12">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-sm font-semibold text-primary-700">
              <FiActivity className="text-primary-600" />
              Our story, in motion
            </p>
            <h1 className="section-title">
              About SoftDevIn
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Founded in 2023, we bridge advanced engineering with practical business outcomes across the USA, UK, and Pakistan—shipping secure, scalable software for regulated and high-growth teams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Animated Stats */}
      <section className="section pb-14" ref={statsRef}>
        <div className="container max-w-6xl space-y-8">
          <div className="text-center space-y-2">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-semibold tracking-[0.14em] uppercase">
              By the numbers
            </span>
            <h2 className="section-title ">Proven delivery</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={statsVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 leading-none">
                  {statsVisible ? (
                    <CountUp start={0} end={stat.number} duration={2} suffix={stat.suffix} />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <p className="text-sm uppercase tracking-wide text-slate-500 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-white py-16">
        <div className="container max-w-6xl grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-slate-200 text-slate-900 rounded-3xl p-8 shadow-lg shadow-slate-200/80"
          >
            <h2 className="section-heading heading-solid text-left text-primary-700 mb-3">Mission</h2>
            <p className="text-slate-700 text-lg leading-relaxed">
              Engineer intelligent solutions for complex industries—combining generative AI, automation, and cross-platform product builds—with predictable delivery and transparent communication.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm"
          >
            <h2 className="section-heading heading-solid text-left text-primary-700 mb-3">Vision</h2>
            <p className="text-slate-700 text-lg leading-relaxed">
              Become the trusted product partner for modern enterprises—shipping compliant AI platforms and cloud-native software that scale with our clients’ ambition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section py-16">
        <div className="container max-w-6xl">
          <div className="text-center space-y-3 mb-12">
            <h2 className="section-title">
              Our Core Values
            </h2>
            <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
              Principles that shape how we build, communicate, and deliver for our partners.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-700 border border-primary-100 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900">{value.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Roadmap */}
      <section className="section bg-white py-16">
        <div className="container max-w-6xl">
          <div className="text-center space-y-3 mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-semibold tracking-[0.14em] uppercase">
              Trajectory
            </span>
            <h2 className="section-title">
              Our Journey
            </h2>
            <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
              From our 2023 launch toward a global delivery network and our own compliant AI platform.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-200 via-primary-100 to-primary-200"></div>
            <div className="space-y-10">
              {timeline.map((item, index) => {
                const left = index % 2 === 0;
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="grid lg:grid-cols-[1fr_auto_1fr] items-start gap-6"
                  >
                    {/* Left column */}
                    {left ? (
                      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-md shadow-slate-200/60">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-semibold uppercase tracking-[0.12em]">
                          {item.year}
                        </span>
                        <h3 className="text-xl font-semibold text-slate-900 mt-3 mb-2">{item.title}</h3>
                        <p className="text-neutral-600 leading-relaxed text-sm">{item.description}</p>
                      </div>
                    ) : (
                      <div className="hidden lg:block" />
                    )}

                    {/* Center dot */}
                    <div className="flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-primary-700 shadow-[0_0_0_6px_rgba(124,58,237,0.12)]" />
                    </div>

                    {/* Right column */}
                    {!left ? (
                      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-md shadow-slate-200/60">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-semibold uppercase tracking-[0.12em]">
                          {item.year}
                        </span>
                        <h3 className="text-xl font-semibold text-slate-900 mt-3 mb-2">{item.title}</h3>
                        <p className="text-neutral-600 leading-relaxed text-sm">{item.description}</p>
                      </div>
                    ) : (
                      <div className="hidden lg:block" />
                    )}

                    {/* Mobile single column view */}
                    {left && (
                      <div className="lg:hidden bg-white border border-slate-200 rounded-2xl p-6 shadow-md shadow-slate-200/60 mt-2">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-semibold uppercase tracking-[0.12em]">
                          {item.year}
                        </span>
                        <h3 className="text-xl font-semibold text-slate-900 mt-3 mb-2">{item.title}</h3>
                        <p className="text-neutral-600 leading-relaxed text-sm">{item.description}</p>
                      </div>
                    )}
                    {!left && (
                      <div className="lg:hidden bg-white border border-slate-200 rounded-2xl p-6 shadow-md shadow-slate-200/60 mt-2">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-semibold uppercase tracking-[0.12em]">
                          {item.year}
                        </span>
                        <h3 className="text-xl font-semibold text-slate-900 mt-3 mb-2">{item.title}</h3>
                        <p className="text-neutral-600 leading-relaxed text-sm">{item.description}</p>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
