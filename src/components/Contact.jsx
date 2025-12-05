// Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';

const services = [
  'Web Development',
  'Mobile Apps',
  'UI/UX Design',
  'Data & AI',
  'Cloud & DevOps',
  'SEO & Growth',
];

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="section-container bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 border-t border-slate-200"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="content-container grid lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-4 text-slate-900">
          <SectionLabel>Partnership Inquiry</SectionLabel>
          <h1 className="section-heading text-left">
            Let's engineer your next breakthrough
          </h1>
          <p className="text-slate-700 text-lg">
            Share your technical requirements or business goals. Our solution architects will review your brief and respond with a preliminary engagement plan within 24 hours.
          </p>
          <div className="flex flex-col gap-2 text-slate-700">
            <span>Gulberg Greens, Islamabad</span>
            <a className="hover:text-primary-700 transition-colors" href="tel:+923365690614">+92 336 5690614</a>
            <a className="hover:text-primary-700 transition-colors" href="mailto:support@softdevin.com">support@softdevin.com</a>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200 p-6 sm:p-8 md:p-10 space-y-5 border border-slate-200">
          <h2 className="text-2xl font-heading font-bold text-slate-900">Send a quick brief</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              className="w-full bg-white px-4 py-3 rounded-xl text-slate-900 placeholder:text-slate-400 border border-slate-200 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
              type="text"
              placeholder="Full name"
            />
            <input
              className="w-full bg-white px-4 py-3 rounded-xl text-slate-900 placeholder:text-slate-400 border border-slate-200 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
              type="email"
              placeholder="Email address"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              className="w-full bg-white px-4 py-3 rounded-xl text-slate-900 placeholder:text-slate-400 border border-slate-200 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
              type="tel"
              placeholder="Phone (optional)"
            />
            <select
              className="w-full bg-white px-4 py-3 rounded-xl text-slate-900 placeholder:text-slate-400 border border-slate-200 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
              defaultValue=""
            >
              <option value="" disabled>Select service</option>
              {services.map((service) => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
          </div>
          <textarea
            className="w-full bg-white px-4 py-3 rounded-xl text-slate-900 placeholder:text-slate-400 border border-slate-200 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 min-h-[140px] resize-none"
            placeholder="Tell us about the project, the goal, and what success looks like."
          ></textarea>
          <button
            className="w-full bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-4 rounded-xl font-semibold hover:-translate-y-0.5 transition-transform shadow-lg shadow-primary-500/40"
            type="submit"
          >
            Request consultation
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
