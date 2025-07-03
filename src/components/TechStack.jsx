import React from 'react';
import {
  FaReact, FaNodeJs, FaWordpress, FaShopify, FaAws, FaGithub, FaDocker, FaVuejs, FaBootstrap,
  FaFigma, FaSwift
} from 'react-icons/fa';
import {
  SiNextdotjs, SiTailwindcss, SiExpress, SiDjango, SiLaravel, SiFlutter,
  SiKotlin, SiMongodb, SiMysql, SiFirebase, SiAdobexd, SiWordpress, SiReact
} from 'react-icons/si';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

const techCategories = [
  {
    title: "Frontend",
    icons: [
      { Icon: FaReact, name: "React.js" },
      { Icon: SiNextdotjs, name: "Next.js" },
      { Icon: FaVuejs, name: "Vue.js" },
      { Icon: SiTailwindcss, name: "Tailwind CSS" },
      { Icon: FaBootstrap, name: "Bootstrap" }
    ]
  },
  {
    title: "Backend",
    icons: [
      { Icon: FaNodeJs, name: "Node.js" },
      { Icon: SiExpress, name: "Express.js" },
      { Icon: SiDjango, name: "Django" },
      { Icon: SiLaravel, name: "Laravel" }
    ]
  },
  {
    title: "Mobile Development",
    icons: [
      { Icon: SiFlutter, name: "Flutter" },
      { Icon: FaReact, name: "React Native" },
      { Icon: FaSwift, name: "Swift" },
      { Icon: SiKotlin, name: "Kotlin" }
    ]
  },
  {
    title: "Databases",
    icons: [
      { Icon: SiMongodb, name: "MongoDB" },
      { Icon: SiMysql, name: "MySQL" },
      { Icon: SiFirebase, name: "Firebase" }
    ]
  },
  {
    title: "Cloud & DevOps",
    icons: [
      { Icon: FaAws, name: "AWS" },
      { Icon: FaDocker, name: "Docker" },
      { Icon: FaGithub, name: "GitHub Actions" }
    ]
  },
  {
    title: "CMS & eCommerce",
    icons: [
      { Icon: FaWordpress, name: "WordPress" },
      { Icon: FaShopify, name: "Shopify" }
    ]
  },
  {
    title: "UI/UX & Design",
    icons: [
      { Icon: FaFigma, name: "Figma" },
      { Icon: SiAdobexd, name: "Adobe XD" }
    ]
  }
];

// Flatten all icons into a single array for the marquee
const allTechIcons = techCategories.flatMap(category => 
  category.icons.map(tech => ({
    ...tech,
    category: category.title
  }))
);

const TechStack = () => {
  return (
    <section id="tech-stack" className="section-container section-gradient-2">
      <div className="content-container flex flex-col items-center">
        {/* Section Title */}
        <motion.h1
          data-aos="fade-down"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="section-title"
        >
          Our Technology Stack
        </motion.h1>

        <motion.p
          data-aos="fade-down"
          data-aos-delay="200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-8 text-center"
        >
          Cutting-edge technologies we use to build amazing solutions
        </motion.p>

        {/* Marquee Container */}
        <div className="w-full overflow-hidden">
          <Marquee
            gradient={false}
            speed={40}
            pauseOnHover={true}
            className="py-8"
          >
            {allTechIcons.map((tech, index) => (
              <div
                key={index}
                className="inline-flex flex-col items-center justify-center mx-8"
              >
                <div className="w-16 h-16 flex items-center justify-center">
                  <tech.Icon className="w-12 h-12 text-gray-700 hover:text-blue-600 transition-colors duration-300" />
                </div>
                <span className="mt-2 text-sm text-gray-600">{tech.name}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
