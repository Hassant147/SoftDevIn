// Contact.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ offset: 200, duration: 600, easing: 'ease-in-sine', once: true });
  }, []);

  const words = ["Amazing!", "Great!", "Innovative!", "Fantastic!"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      if (isDeleting) {
        setDisplayedText(currentWord.substring(0, displayedText.length - 1));
        setTypingSpeed(75);
      } else {
        setDisplayedText(currentWord.substring(0, displayedText.length + 1));
        setTypingSpeed(150);
      }
      if (!isDeleting && displayedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      }
      if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, typingSpeed, currentWordIndex, words]);

  return (
    <motion.section
      id="contact"
      className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 flex flex-col justify-center items-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ minHeight: '80vh' }}
    >
      {/* Swapped in: Clients' original gradient */}
      <div
        className="
          absolute 
          inset-0 
          z-[-2]
          bg-gradient-to-r 
          from-pink-500 
          via-blue-500 
          to-purple-500
          animate-gradient-x
          opacity-20
        "
      />

      <div className="pointer-events-none absolute w-full h-full top-0 left-0 overflow-hidden z-[-1]">
        <motion.div
          className="
            hidden md:block
            absolute
            w-24 sm:w-32 md:w-40 
            h-24 sm:h-32 md:h-40 
            rounded-full 
            bg-pink-400 
            opacity-30 
            blur-xl
            top-10 
            left-5
          "
          animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="
            hidden md:block
            absolute
            w-32 sm:w-40 md:w-48 
            h-32 sm:h-40 md:h-48 
            rounded-full 
            bg-purple-400 
            opacity-30 
            blur-xl
            bottom-10 
            right-10
          "
          animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div
        className="
          relative 
          w-[90%] 
          flex 
          flex-col 
          lg:flex-row 
          justify-between 
          items-center 
          gap-12 sm:gap-16 md:gap-20
        "
      >
        <motion.div
          data-aos="fade-right"
          className="z-10 flex flex-col gap-6 justify-center lg:w-1/2 w-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1
            className="
              font-bold 
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
              lg:leading-[80px] md:leading-[60px] sm:leading-[40px] leading-[40px] 
              font-ubuntu 
              relative 
              inline-block 
              text-left 
              transition-transform 
              duration-1000
            "
          >
            <span className='relative text-transparent bg-clip-text bg-gradient-to-r from-[#5de0e6] to-[#8028ff] animated-gradient'>
              Let’s Build Something{' '}
              <span className='inline-block'>
                {displayedText}
                <span className="blinking-cursor">|</span>
              </span>
            </span>
          </h1>
          <p className="text-white text-base font-bold sm:text-lg md:text-xl drop-shadow-[0_2px_3px_rgba(0,0,0,0.7)] leading-relaxed">
            Have an idea or a vision? Let’s bring it to life. Contact us and let’s create something that truly stands out.
          </p>
        </motion.div>

        <motion.div
          data-aos="fade-left"
          className="
            z-10 
            bg-black/60 
            p-6 sm:p-8 md:p-10 
            rounded-3xl 
            backdrop-blur-sm 
            flex 
            flex-col 
            gap-6
            w-full
            lg:w-1/2
          "
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold font-ubuntu text-center"
            style={{
              background: 'linear-gradient(90deg, #004aad, #cb6ce6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Contact Us
          </h2>

          <div className="flex flex-col gap-4">
            <input
              className="
                w-full 
                bg-slate-900 
                px-4 sm:px-6 md:px-8 
                py-2 sm:py-4 md:py-6 
                rounded-lg 
                font-ubuntu 
                text-white
                placeholder-gray-400
                focus:outline-none
                focus:ring-2
                focus:ring-limegreen
              "
              type="text"
              placeholder="Your Full Name"
            />
            <div className="flex flex-col lg:flex-row gap-4">
              <input
                className="
                  w-full 
                  bg-slate-900 
                  px-4 sm:px-6 md:px-8 
                  py-2 sm:py-4 md:py-6 
                  rounded-lg 
                  font-ubuntu 
                  text-white
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-2
                  focus:ring-limegreen
                "
                type="email"
                placeholder="Your Email"
              />
              <input
                className="
                  w-full 
                  bg-slate-900 
                  px-4 sm:px-6 md:px-8 
                  py-2 sm:py-4 md:py-6 
                  rounded-lg 
                  font-ubuntu 
                  text-white
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-2
                  focus:ring-limegreen
                "
                type="number"
                placeholder="Mobile Number"
              />
            </div>
            <textarea
              rows="4"
              className="
                w-full 
                bg-slate-900 
                px-4 sm:px-6 md:px-8 
                py-2 sm:py-4 md:py-6 
                rounded-lg 
                font-ubuntu 
                text-white
                placeholder-gray-400
                focus:outline-none
                focus:ring-2
                focus:ring-limegreen
              "
              placeholder="Your Message"
            ></textarea>
            <button
              className="
                px-6 sm:px-8 md:px-10 
                py-3 sm:py-4 md:py-5 
                w-full 
                rounded-md 
                font-bold 
                text-md sm:text-lg 
                font-ubuntu 
                bg-gradient-to-r 
                from-[#004aad] 
                to-[#cb6ce6] 
                text-white 
                hover:from-[#5de0e6] 
                hover:to-[#8028ff]
                transition-colors duration-300
              "
              aria-label="Submit Contact Form"
            >
              Submit Now
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
