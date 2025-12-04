import React from "react";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import logo from "../assets/web-logo.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-white border-t border-slate-200 text-slate-700">
        <div className="w-[90%] mx-auto py-12">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-center gap-3">
                <img src={logo} alt="SoftDevIn logo" className="h-10 w-auto" />
              </div>
              <Link
                to="/custom-order"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-primary-700 text-white px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 shadow-md"
              >
                Start a project
              </Link>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2 space-y-3">
                <h3 className="text-lg font-semibold text-slate-900">Enterprise-ready delivery</h3>
                <p className="text-slate-600 leading-relaxed">
                  We design, build, and ship software with predictable timelines, secure defaults, and a clear line of sight to impact.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-[0.14em]">Company</h4>
                <div className="flex flex-col gap-2 text-sm text-slate-600">
                  <Link to="/about" className="hover:text-primary-700">About</Link>
                  <Link to="/careers" className="hover:text-primary-700">Careers</Link>
                  <Link to="/technologies" className="hover:text-primary-700">Technologies</Link>
                  <Link to="/custom-order" className="hover:text-primary-700">Get started</Link>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-[0.14em]">Contact</h4>
                <div className="flex flex-col gap-2 text-sm text-slate-600">
                  <span>Gulberg Greens, Islamabad</span>
                  <a href="tel:+923365690614" className="hover:text-primary-700">+92 336 5690614</a>
                  <a href="mailto:support@softdevin.com" className="hover:text-primary-700">support@softdevin.com</a>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-slate-500">
              <span>© 2024 SoftDevIn. All rights reserved.</span>
              <span>Privacy · Terms</span>
            </div>
          </div>
        </div>
      </footer>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 inline-flex items-center justify-center h-11 w-11 rounded-full bg-white text-slate-900 border border-slate-200 shadow-lg hover:bg-slate-50 transition-transform hover:-translate-y-1"
        aria-label="Scroll to top"
        type="button"
      >
        <FaArrowUp className="w-4 h-4" />
      </button>
    </>
  );
};

export default Footer;
