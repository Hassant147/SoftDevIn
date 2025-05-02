// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/web-logo.svg'; // Import your logo

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { link: 'About', path: 'about' },
    { link: 'Services', path: 'services' },
    { link: 'Plans', path: 'pricing' },
    { link: 'Testimonials', path: 'testimonials' },
    { link: 'Contact', path: 'contact' },
  ];

  return (
    <header className="w-full sticky top-1 z-50">
      <nav
        className="
          w-[90%]
          mx-auto
          py-8
          px-4
          flex
          justify-between
          items-center
          bg-white/20
          backdrop-blur-lg
          rounded-xl
          shadow-lg
          relative
          transition-all
          duration-300
          hover:shadow-2xl
        "
      >
        {/* Logo Section */}
        <div className="flex items-center cursor-pointer">
          <img
            src={logo}
            alt="SoftDevIn Logo"
            className="sm:h-14 h-10 w-auto pl-2"
          />
        </div>

        {/* Desktop Nav (visible from xl and up) */}
        <ul className="hidden xl:flex justify-center items-center gap-6">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              spy={true}
              smooth={false}
              offset={-80}
              className="
                font-ubuntu
                uppercase
                text-black
                font-semibold
                cursor-pointer
                px-3
                py-2
                transition-all
                duration-300
                hover:text-white
                hover:bg-gradient-to-r
                from-[#004aad]
                to-[#cb6ce6]
                hover:scale-[1.05]
                active:scale-95
                rounded-md
              "
            >
              {link}
            </Link>
          ))}
        </ul>

        {/* Right-Side Container for Hamburger + BOOK NOW button */}
        <div className="flex items-center gap-4">
          {/* BOOK NOW button (visible from md and up) */}
          <button
            className="
              hidden
              md:flex
              bg-gradient-to-r
              from-[#004aad]
              to-[#cb6ce6]
              text-white
              px-6
              py-2
              rounded-full
              font-bold
              font-ubuntu
              transition-all
              duration-300
              hover:scale-105
              active:scale-95
              shadow-md
            "
          >
            BOOK NOW
          </button>

          {/* Custom Animated Hamburger Icon (visible up to xl) */}
          <div
            className="
              flex
              xl:hidden
              text-gray-800
              ml-2
              relative
              cursor-pointer
            "
            style={{
              width: '40px',
              height: '40px',
              transformStyle: 'preserve-3d',
            }}
            onClick={toggleMenu}
          >
            <div
              className="
                absolute
                inset-0
                flex
                flex-col
                items-center
                justify-center
                space-y-2
                transition-transform
                duration-500
              "
              style={{
                transform: isMenuOpen ? 'rotateY(180deg)' : 'rotateY(0deg)',
                transformStyle: 'preserve-3d',
                perspective: '600px',
              }}
            >
              {/* Top line */}
              <span
                className={`
                  block
                  w-7
                  h-[3px]
                  bg-gray-800
                  rounded
                  transition-transform
                  duration-500
                  ${isMenuOpen ? 'translate-y-[9px] rotate-45 bg-limegreen' : ''}
                `}
              />
              {/* Middle line */}
              <span
                className={`
                  block
                  w-7
                  h-[3px]
                  bg-gray-800
                  rounded
                  transition-opacity
                  duration-300
                  ${isMenuOpen ? 'opacity-0' : 'opacity-100'}
                `}
              />
              {/* Bottom line */}
              <span
                className={`
                  block
                  w-7
                  h-[3px]
                  bg-gray-800
                  rounded
                  transition-transform
                  duration-500
                  ${isMenuOpen ? '-translate-y-[9px] -rotate-45 bg-limegreen' : ''}
                `}
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            absolute
            left-0
            w-full
            bg-black
            flex
            flex-col
            justify-center
            items-center
            py-4
            space-y-2
            xl:hidden
            origin-top
          `}
          style={{
            top: '72px',
            perspective: '1000px',
            transformStyle: 'preserve-3d',
            transition: 'transform 0.5s ease, opacity 0.5s ease',
            transform: isMenuOpen ? 'rotateX(0deg)' : 'rotateX(-90deg)',
            opacity: isMenuOpen ? 1 : 0,
            boxShadow: isMenuOpen ? '0 10px 20px rgba(0,0,0,0.3)' : 'none',
          }}
          onClick={closeMenu}
        >
          <ul className="flex flex-col gap-4 w-[90%]">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                spy={true}
                smooth={false}
                offset={-60}
                className="
                  text-white
                  uppercase
                  font-semibold
                  cursor-pointer
                  px-4
                  py-2
                  rounded-lg
                  transition-all
                  duration-300
                  text-center
                  hover:bg-gradient-to-r
                  from-[#004aad]
                  to-[#cb6ce6]
                  hover:text-black
                  active:scale-95
                "
              >
                {link}
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
