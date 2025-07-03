// servicesinfo.jsx
import React from 'react';
import { FaCode, FaRobot, FaPaintBrush, FaCloud, FaUsers } from 'react-icons/fa';

export const servicesinfo = [
  {
    icon: <FaCode />,
    title: "Enterprise Software Development",
    about:
      "End-to-end custom application development with enterprise-grade security, 99.9% uptime guarantee, and seamless integration with your existing systems.",
    label: "Read More",
  },
  {
    icon: <FaRobot />,
    title: "AI & Emerging Technology",
    about:
      "Implement cutting-edge AI/ML, blockchain, and IoT solutions that deliver measurable ROI, automate processes, and create new revenue opportunities.",
    label: "Read More",
  },
  {
    icon: <FaPaintBrush />,
    title: "Strategic Digital Marketing",
    about:
      "Data-driven marketing strategies that increase conversions by an average of 35%, combining SEO, content marketing, and advanced analytics.",
    label: "Read More",
  },
  {
    icon: <FaCloud />,
    title: "Cloud & SaaS Solutions",
    about:
      "Scalable cloud architecture and SaaS platforms that reduce operational costs by up to 40% while enhancing security and business agility.",
    label: "Read More",
  },
  {
    icon: <FaUsers />,
    title: "Expert Team Augmentation",
    about:
      "Access to certified senior developers, designers, and engineers with specialized expertise, flexible engagement models, and rapid onboarding.",
    label: "Read More",
  },
];



export const counts = [
  {
    value: "90%",
    title: "Conversion Rate",
  },
  {
    value: "70K+",
    title: "Active Users",
  },
  {
    value: "47K+",
    title: "Social Profiles",
  },
  {
    value: "27K+",
    title: "Active Followers",
  },
];

export const pricingPlans = [
  {
    type: "Starter Plan",
    about: "Designed for new businesses building their online presence.",
    specs: "Essential tools and support included:",
    features: [
      "Responsive custom website or app",
      "Dashboard setup for easy management",
      "SEO design for improved search ranking",
      "Basic reporting and traffic insights",
    ],
    // Removed price field
  },
  {
    type: "Professional Plan",
    about: "Perfect for businesses scaling their operations to the next level.",
    specs: "Starter Plan features plus additional upgrades:",
    features: [
      "Detailed analytics and performance data",
      "Integration with AI and ML capabilities",
      "Support for multiple language platforms",
      "Priority customer service and support",
    ],
    // Removed price field
  },
  {
    type: "Enterprise Plan",
    about: "Customized solutions for enterprises needing robust tools.",
    specs: "Professional Plan features plus enterprise upgrades:",
    features: [
      "Comprehensive SaaS platform deployment",
      "ERP system integration and customization",
      "Dedicated account management services",
      "Custom AI/VR modules for innovation",
    ],
    // Removed price field
  },
];

export const staffAugmentation = {
  type: "Staff Augmentation",
  about: "Hire experts to boost your team's capabilities and meet goals.",
  specs: "Flexible and tailored resource engagements:",
  features: [
    "Frontend and backend development experts",
    "Engineers specializing in AI and ML tech",
    "UI/UX designers for enhanced user appeal",
    "Managers and QA for project efficiency",
  ],
};

// Realistic Testimonials
export const testidata = [
  {
    image: "https://randomuser.me/api/portraits/men/85.jpg",
    review:
      "Our partnership with SoftDevIn was transformative. Their team not only delivered on time but also injected innovative ideas into our core product. We saw a 40% boost in engagement within a month of launch.",
    name: "David Murphy",
    post: "CTO, BrightVision Labs",
  },
  {
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    review:
      "SoftDevIn's attention to detail and design-thinking approach truly impressed us. The end result exceeded our expectations, and our customers consistently praise the new interface.",
    name: "Lisa Chen",
    post: "Head of Product, UniCore Inc.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    review:
      "Working with SoftDevIn was a breeze. Their agile development process kept us in the loop, and the final platform is both robust and scalable. Highly recommend their services!",
    name: "James Patel",
    post: "Project Manager, NovaWorks",
  },
];




import { FaReact, FaNodeJs, FaDatabase, FaDocker } from 'react-icons/fa';

export const projectsInfo = [
  {
    id: 1,
    title: 'Strapi Headless CMS',
    description:
      'Strapi is an open-source headless CMS built with Node.js. It offers a powerful API and intuitive admin panel for quickly creating and managing content.',
    image: 'https://images.unsplash.com/photo-1588618801953-5d13cc4175b3?ixlib=rb-4.0.3&q=80&w=1080',
    technologies: ['Node.js', 'Database', 'Docker'],
    demoLink: 'https://strapi.io',
    repoLink: 'https://github.com/strapi/strapi',
  },
  {
    id: 2,
    title: 'Ghost Blogging Platform',
    description:
      'Ghost is a modern open-source publishing platform focused on professional blogging. It\'s built on Node.js and provides a clean, user-friendly interface.',
    image: 'https://images.unsplash.com/photo-1571689936044-cb66ad395feb?ixlib=rb-4.0.3&q=80&w=1080',
    technologies: ['Node.js', 'Database'],
    demoLink: 'https://ghost.org/',
    repoLink: 'https://github.com/TryGhost/Ghost',
  },
  {
    id: 3,
    title: 'Rocket.Chat',
    description:
      'Rocket.Chat is an open-source team communication platform with features like real-time chat, video conferencing, and full customization, all self-hostable.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&q=80&w=1080',
    technologies: ['Node.js', 'Database', 'Docker'],
    demoLink: 'https://cloud.rocket.chat/trial',
    repoLink: 'https://github.com/RocketChat/Rocket.Chat',
  },
];
