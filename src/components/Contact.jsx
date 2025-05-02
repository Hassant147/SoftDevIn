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
      className="section-container section-gradient-1 flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ minHeight: '80vh' }}
    >
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
          content-container 
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
          <h1 className="section-title text-left">
            Let's Build Something{' '}
            <span className='inline-block'>
              {displayedText}
              <span className="blinking-cursor">|</span>
            </span>
          </h1>
          <p className="text-slate-700 leading-relaxed font-medium">
            Have an idea or a vision? Let's bring it to life. Contact us and let's create something that truly stands out.
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
          <h2 className="section-title">
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
                text-white
                placeholder-gray-400
                focus:outline-none
                focus:ring-2
                focus:ring-limegreen
                font-ubuntu text-md
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
                  text-white
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-2
                  focus:ring-limegreen
                  font-ubuntu text-md
                "
                type="email"
                placeholder="Email Address"
              />
              <input
                className="
                  w-full 
                  bg-slate-900 
                  px-4 sm:px-6 md:px-8 
                  py-2 sm:py-4 md:py-6 
                  rounded-lg 
                  text-white
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-2
                  focus:ring-limegreen
                  font-ubuntu text-md
                "
                type="tel"
                placeholder="Phone Number"
              />
            </div>
            <select
              className="
                w-full 
                bg-slate-900 
                px-4 sm:px-6 md:px-8 
                py-2 sm:py-4 md:py-6 
                rounded-lg 
                text-white
                placeholder-gray-400
                focus:outline-none
                focus:ring-2
                focus:ring-limegreen
                appearance-none
                font-ubuntu text-md
              "
            >
              <option value="" disabled selected>Select Service</option>
              <option value="web">Web Development</option>
              <option value="mobile">Mobile App Development</option>
              <option value="ui">UI/UX Design</option>
              <option value="data">Data Analytics</option>
              <option value="seo">SEO Services</option>
              <option value="other">Other</option>
            </select>
            <textarea
              className="
                w-full 
                bg-slate-900 
                px-4 sm:px-6 md:px-8 
                py-2 sm:py-4 md:py-6 
                rounded-lg 
                text-white
                placeholder-gray-400
                focus:outline-none
                focus:ring-2
                focus:ring-limegreen
                min-h-[120px]
                resize-none
                font-ubuntu text-md
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
                bg-gradient-to-r 
                from-[#004aad] 
                to-[#cb6ce6] 
                text-white 
                hover:shadow-lg
                transition-shadow
                duration-300
                font-ubuntu
              "
              type="submit"
            >
              Send Message
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
