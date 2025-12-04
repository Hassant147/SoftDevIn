// src/components/Header.jsx - Updated for React Router
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/web-logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { link: 'Home', path: '/' },
    { link: 'Work', path: '/work' },
    { link: 'About', path: '/about' },
    { link: 'Careers', path: '/careers' },
    { link: 'Technologies', path: '/technologies' },
    { link: 'Get Started', path: '/custom-order' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200 shadow-sm">
      <div className="w-[92%] mx-auto">
        <nav className="flex items-center justify-between px-2 sm:px-4 py-2">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="SoftDevIn Logo" className="h-9 w-auto" />
            {/* <span className="hidden sm:inline-flex text-sm font-semibold text-slate-900 tracking-wide">
              SoftDevIn
            </span> */}
          </Link>

          <ul className="hidden lg:flex items-center gap-2">
            {navItems.map(({ link, path }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-semibold transition-colors border-b-2 ${isActive
                    ? 'text-slate-900 border-primary-500'
                    : 'text-slate-600 border-transparent hover:text-slate-900 hover:border-primary-200'
                  }`
                }
              >
                {link}
              </NavLink>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              to="/custom-order"
              className="hidden md:inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary-500 to-primary-700 text-white px-4 py-2 text-sm font-semibold transition-transform hover:-translate-y-0.5 shadow-md"
            >
              Start project
            </Link>

            <button
              onClick={toggleMenu}
              className="lg:hidden inline-flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-slate-200 text-slate-900 hover:bg-slate-100"
              aria-label="Toggle navigation menu"
              type="button"
            >
              <span
                className={`block w-5 h-0.5 bg-current transition-all ${isMenuOpen ? 'rotate-45 translate-y-[6px]' : ''}`}
              />
              <span
                className={`block w-5 h-0.5 bg-current transition-all ${isMenuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block w-5 h-0.5 bg-current transition-all ${isMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}
              />
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="lg:hidden mt-2 rounded-2xl border border-slate-200 bg-white shadow-lg backdrop-blur-xl overflow-hidden">
            <ul className="flex flex-col divide-y divide-slate-200">
              {navItems.map(({ link, path }) => (
                <NavLink
                  key={path}
                  to={path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `px-4 py-3 text-sm font-semibold transition-colors ${isActive ? 'bg-primary-50 text-primary-700' : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                    }`
                  }
                >
                  {link}
                </NavLink>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
