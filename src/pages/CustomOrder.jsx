import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiGlobe,
  FiSmartphone,
  FiCpu,
  FiCloud,
  FiShoppingBag,
  FiSettings,
  FiArrowRight,
  FiArrowLeft,
  FiCheckCircle,
  FiSend,
} from 'react-icons/fi';

const projectTypes = [
  { icon: <FiGlobe />, title: 'Web Application', value: 'web-app', description: 'Custom web platforms and SaaS experiences', color: '#7c3aed' },
  { icon: <FiSmartphone />, title: 'Mobile App', value: 'mobile-app', description: 'Native-quality iOS and Android builds', color: '#7c3aed' },
  { icon: <FiCpu />, title: 'AI/ML Solution', value: 'ai-ml', description: 'Applied machine learning for real products', color: '#7c3aed' },
  { icon: <FiCloud />, title: 'Cloud Migration', value: 'cloud', description: 'Migrations, infra as code, and observability', color: '#7c3aed' },
  { icon: <FiShoppingBag />, title: 'E-Commerce', value: 'ecommerce', description: 'Commerce platforms built for conversion', color: '#7c3aed' },
  { icon: <FiSettings />, title: 'Enterprise System', value: 'enterprise', description: 'ERP, CRM, and mission-critical tooling', color: '#7c3aed' },
];

const budgetRanges = [
  { label: '$10K - $25K', value: '10-25' },
  { label: '$25K - $50K', value: '25-50' },
  { label: '$50K - $100K', value: '50-100' },
  { label: '$100K - $250K', value: '100-250' },
  { label: '$250K+', value: '250+' },
];

const timelines = [
  { label: '1-3 months', value: '1-3' },
  { label: '3-6 months', value: '3-6' },
  { label: '6-12 months', value: '6-12' },
  { label: '12+ months', value: '12+' },
];

const steps = [
  { id: 1, label: 'Project' },
  { id: 2, label: 'Contact' },
  { id: 3, label: 'Scope' },
];

import SeoWrapper from '../components/SeoWrapper';

const CustomOrder = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    name: '',
    email: '',
    company: '',
    phone: '',
    budget: '',
    timeline: '',
    description: '',
  });

  const totalSteps = steps.length;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert("Thanks! We'll reach out within one business day.");
  };

  const isStepValid = () => {
    if (step === 1) return formData.projectType !== '';
    if (step === 2) return formData.name && formData.email && formData.company;
    if (step === 3) return formData.budget && formData.timeline && formData.description;
    return false;
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <SeoWrapper
        title="Start a Project - Custom Software Development"
        description="Tell us about your project. We build custom web apps, mobile apps, and AI solutions tailored to your business needs."
        keywords="hire developers, custom software quote, app development cost, software project brief"
      />
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-3 mb-10 text-center"
        >
          <span className="mx-auto inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-sm font-semibold text-primary-700 shadow-sm">
            <FiSend /> Start a project
          </span>
          <h1 className="section-title">
            Build with a modern, minimal brief
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Share your idea and constraints. We will reply with a project outline, timeline, and team fit within one day.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8">
          {/* Form Card */}
          <div className="bg-white border border-slate-200 rounded-3xl shadow-lg p-6 md:p-8">
            {/* Stepper */}
            <div className="flex items-center gap-4 mb-8">
              {steps.map((item, idx) => {
                const active = step === item.id;
                const done = step > item.id;
                return (
                  <React.Fragment key={item.id}>
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold ${done ? 'bg-primary-600 text-white' : active ? 'border-2 border-primary-600 text-primary-700' : 'border border-slate-200 text-slate-500'
                          }`}
                      >
                        {done ? <FiCheckCircle /> : item.id}
                      </div>
                      <span className={`text-sm font-semibold ${active ? 'text-primary-700' : 'text-slate-500'}`}>{item.label}</span>
                    </div>
                    {idx < totalSteps - 1 && (
                      <div className="flex-1 h-px bg-slate-200">
                        <div
                          className="h-px bg-primary-600 transition-all duration-500"
                          style={{ width: step > item.id ? '100%' : '0%' }}
                        />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Steps */}
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.25 }}
                className="space-y-8"
              >
                {step === 1 && (
                  <div>
                    <h2 className="text-2xl font-heading font-bold text-slate-900 mb-2">Project focus</h2>
                    <p className="text-slate-600 mb-6">Choose the direction that best matches what you need.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {projectTypes.map((type) => {
                        const selected = formData.projectType === type.value;
                        return (
                          <button
                            key={type.value}
                            onClick={() => setFormData({ ...formData, projectType: type.value })}
                            className={`text-left rounded-2xl border transition-all p-4 flex flex-col gap-2 hover:-translate-y-0.5 ${selected
                                ? 'border-primary-600 shadow-lg bg-gradient-to-br from-primary-500 to-primary-700 text-white'
                                : 'border-slate-200 bg-white hover:border-slate-300 shadow-sm'
                              }`}
                          >
                            <div
                              className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${selected ? 'bg-white text-primary-700' : 'bg-primary-50 text-primary-700'
                                }`}
                              style={{ color: selected ? undefined : type.color }}
                            >
                              {type.icon}
                            </div>
                            <div className="font-semibold">{type.title}</div>
                            <p className={`text-sm leading-relaxed ${selected ? 'text-white/90' : 'text-slate-600'}`}>{type.description}</p>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-heading font-bold text-slate-900 mb-2">Your details</h2>
                    <p className="text-slate-600">So we can reach you with the plan.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <label className="flex flex-col gap-2">
                        <span className="text-sm font-semibold text-slate-700">Name *</span>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="rounded-xl border border-slate-200 px-4 py-3 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100"
                          placeholder="Jane Doe"
                        />
                      </label>
                      <label className="flex flex-col gap-2">
                        <span className="text-sm font-semibold text-slate-700">Email *</span>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="rounded-xl border border-slate-200 px-4 py-3 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100"
                          placeholder="jane@company.com"
                        />
                      </label>
                      <label className="flex flex-col gap-2">
                        <span className="text-sm font-semibold text-slate-700">Company *</span>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="rounded-xl border border-slate-200 px-4 py-3 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100"
                          placeholder="Company name"
                        />
                      </label>
                      <label className="flex flex-col gap-2">
                        <span className="text-sm font-semibold text-slate-700">Phone</span>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="rounded-xl border border-slate-200 px-4 py-3 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100"
                          placeholder="+1 (555) 000-0000"
                        />
                      </label>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-heading font-bold text-slate-900 mb-2">Scope & timing</h2>
                    <p className="text-slate-600">Help us understand budget guardrails and timelines.</p>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <span className="text-sm font-semibold text-slate-700">Budget *</span>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                          {budgetRanges.map((range) => {
                            const selected = formData.budget === range.value;
                            return (
                              <button
                                key={range.value}
                                onClick={() => setFormData({ ...formData, budget: range.value })}
                                className={`rounded-xl border px-4 py-3 text-sm font-semibold transition-all ${selected
                                    ? 'bg-gradient-to-r from-primary-500 to-primary-700 text-white border-primary-600 shadow-lg shadow-primary-500/30'
                                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                                  }`}
                              >
                                {range.label}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <span className="text-sm font-semibold text-slate-700">Timeline *</span>
                        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                          {timelines.map((time) => {
                            const selected = formData.timeline === time.value;
                            return (
                              <button
                                key={time.value}
                                onClick={() => setFormData({ ...formData, timeline: time.value })}
                                className={`rounded-xl border px-4 py-3 text-sm font-semibold transition-all ${selected
                                    ? 'bg-gradient-to-r from-primary-500 to-primary-700 text-white border-primary-600 shadow-lg shadow-primary-500/30'
                                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                                  }`}
                              >
                                {time.label}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <label className="flex flex-col gap-2">
                        <span className="text-sm font-semibold text-slate-700">What should we know? *</span>
                        <textarea
                          name="description"
                          value={formData.description}
                          onChange={handleInputChange}
                          rows={5}
                          className="rounded-xl border border-slate-200 px-4 py-3 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100 resize-none"
                          placeholder="Key goals, required platforms, success metrics, and any constraints."
                        />
                      </label>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="mt-10 flex justify-between gap-3">
              <button
                onClick={handleBack}
                disabled={step === 1}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold border transition-all ${step === 1
                    ? 'border-slate-200 text-slate-400 cursor-not-allowed bg-slate-50'
                    : 'border-slate-300 text-slate-800 hover:border-primary-600 hover:text-primary-700 hover:-translate-y-0.5'
                  }`}
              >
                <FiArrowLeft /> Back
              </button>

              {step < totalSteps ? (
                <button
                  onClick={handleNext}
                  disabled={!isStepValid()}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${!isStepValid()
                      ? 'bg-slate-200 text-slate-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-primary-500 to-primary-700 text-white hover:-translate-y-0.5 shadow-lg shadow-primary-500/40'
                    }`}
                >
                  Next <FiArrowRight />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!isStepValid()}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${!isStepValid()
                      ? 'bg-slate-200 text-slate-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-primary-500 to-primary-700 text-white hover:-translate-y-0.5 shadow-lg shadow-primary-500/40'
                    }`}
                >
                  Submit request <FiSend />
                </button>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="bg-white text-slate-900 border border-slate-200 rounded-3xl p-6 shadow-xl shadow-slate-200/80">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">What you get</h3>
                <span className="px-3 py-1 rounded-full bg-primary-50 text-primary-700 border border-primary-100 text-xs font-semibold">1-day response</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex gap-2"><FiCheckCircle className="mt-1 text-primary-600" /> A short proposal with a delivery plan</li>
                <li className="flex gap-2"><FiCheckCircle className="mt-1 text-primary-600" /> Squad makeup, timeline, and engagement model</li>
                <li className="flex gap-2"><FiCheckCircle className="mt-1 text-primary-600" /> Risks we see and how we mitigate them</li>
                <li className="flex gap-2"><FiCheckCircle className="mt-1 text-primary-600" /> A 30-minute follow-up to refine scope</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Your selections</h4>
              <div className="space-y-2 text-sm text-slate-700">
                <p><span className="font-semibold">Project:</span> {formData.projectType || 'Not set'}</p>
                <p><span className="font-semibold">Budget:</span> {formData.budget || 'Not set'}</p>
                <p><span className="font-semibold">Timeline:</span> {formData.timeline || 'Not set'}</p>
                <p><span className="font-semibold">Contact:</span> {formData.email || 'Not set'}</p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Need a call instead?</h4>
              <p className="text-sm text-slate-600 mb-4">Drop us a line at <a href="mailto:support@softdevin.com" className="text-slate-900 font-semibold underline">support@softdevin.com</a> and we will schedule a slot.</p>
              <a
                href="mailto:support@softdevin.com"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-primary-600 text-primary-700 font-semibold hover:-translate-y-0.5 transition-transform bg-primary-50"
              >
                Email the team <FiArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomOrder;
