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
import SectionLabel from './SectionLabel';

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
    <section id="tech-stack" className="section-container bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 border-t border-slate-200">
      <div className="content-container flex flex-col items-center">
        <div className="text-center space-y-3">
          <SectionLabel>Core stack</SectionLabel>
          <motion.h1
            data-aos="fade-down"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="section-title"
          >
            Trusted tools for fast, stable delivery
          </motion.h1>
          <motion.p
            data-aos="fade-down"
            data-aos-delay="150"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mx-auto mb-6 text-slate-700"
          >
            We choose battle-tested technologies that ensure long-term maintainability, security, and performance at scale. No hype, just engineering.
          </motion.p>
        </div>

        <div className="w-full overflow-hidden bg-white border border-slate-200 rounded-3xl shadow-2xl shadow-slate-200 mt-6">
          <Marquee gradient={false} speed={38} pauseOnHover className="py-6">
            {allTechIcons.map((tech, index) => (
              <div
                key={index}
                className="inline-flex flex-col items-center justify-center mx-10"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-slate-50 border border-slate-200 shadow-md">
                  <tech.Icon className="w-10 h-10 text-primary-600" />
                </div>
                <span className="mt-3 text-sm text-slate-700">{tech.name}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
