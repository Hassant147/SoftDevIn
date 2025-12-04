// servicesinfo.jsx
import React from 'react';
import { FiCode, FiCpu, FiTarget, FiCloud, FiUsers } from 'react-icons/fi';

export const servicesinfo = [
  {
    icon: <FiCode />,
    title: "Enterprise Engineering",
    about:
      "Scalable, fault-tolerant software architectures designed for high-availability environments. We build systems that grow with your business, ensuring 99.99% uptime and robust security compliance.",
    label: "Learn More",
  },
  {
    icon: <FiCpu />,
    title: "AI & Machine Learning",
    about:
      "Production-grade AI solutions that drive automation and insight. From predictive analytics to custom LLM integration, we turn data into your most valuable asset.",
    label: "Learn More",
  },
  {
    icon: <FiTarget />,
    title: "Digital Transformation",
    about:
      "Strategic modernization of legacy systems. We help established enterprises migrate to the cloud, adopt microservices, and implement DevOps best practices.",
    label: "Learn More",
  },
  {
    icon: <FiCloud />,
    title: "Cloud Infrastructure",
    about:
      "Cloud-native architectures on AWS, Azure, and GCP. We implement Infrastructure as Code (IaC), auto-scaling, and cost-optimization strategies.",
    label: "Learn More",
  },
  {
    icon: <FiUsers />,
    title: "Dedicated Teams",
    about:
      "Augment your engineering capacity with pre-vetted senior talent. Our engineers integrate seamlessly into your workflows, adopting your culture and tooling.",
    label: "Learn More",
  },
];



export const counts = [
  {
    value: "50+",
    title: "Enterprise Clients",
  },
  {
    value: "100%",
    title: "Delivery Success",
  },
  {
    value: "5M+",
    title: "Users Supported",
  },
  {
    value: "24/7",
    title: "Global Support",
  },
];

export const engagementModels = [
  {
    type: "Fixed Price Project",
    about: "Ideal for well-defined scopes with clear deliverables and timelines.",
    specs: "Comprehensive delivery includes:",
    features: [
      "Detailed technical specification",
      "Fixed budget and timeline",
      "Dedicated Project Manager",
      "QA and UAT support",
    ],
  },
  {
    type: "Dedicated Team",
    about: "For long-term product development requiring flexibility and scale.",
    specs: "Your extended engineering arm:",
    features: [
      "Full-time senior engineers",
      "Direct communication channels",
      "Agile/Scrum methodology",
      "Monthly performance reports",
    ],
  },
  {
    type: "Staff Augmentation",
    about: "Bridge skill gaps quickly with specialized experts.",
    specs: "On-demand expertise:",
    features: [
      "Immediate resource availability",
      "Short or long-term contracts",
      "Seamless team integration",
      "Specific domain expertise (AI, DevOps)",
    ],
  },
];



// Realistic Testimonials
export const testidata = [
  {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "SoftDevIn didn't just build our platform; they re-engineered our entire workflow. Their technical depth in microservices architecture allowed us to scale from 10k to 1M users without a hitch.",
    name: "Robert Fox",
    post: "VP of Engineering, FinCore Systems",
  },
  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "We needed a partner who understood complex regulatory requirements for our healthcare data. SoftDevIn delivered a HIPAA-compliant AI solution that exceeded our accuracy benchmarks.",
    name: "Sarah Jenkins",
    post: "CTO, HealthGuard AI",
  },
  {
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    review:
      "The dedicated team we hired from SoftDevIn integrated perfectly with our in-house developers. They brought senior-level expertise in React and Node.js that accelerated our roadmap by months.",
    name: "Michael Chen",
    post: "Director of Product, E-Comm Global",
  },
];




import { FaReact, FaNodeJs, FaDatabase, FaDocker } from 'react-icons/fa';

export const caseStudies = [
  {
    id: 1,
    title: 'FinTech Digital Transformation',
    category: 'FinTech',
    description:
      'A comprehensive digital overhaul for a leading financial institution, integrating legacy systems with modern cloud architecture.',
    fullDescription: 'We partnered with a major financial services provider to modernize their core banking infrastructure. The project involved migrating on-premise legacy systems to a secure, scalable cloud environment, implementing real-time transaction processing, and developing a customer-facing mobile application with biometric authentication.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&q=80&w=1080',
    technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker'],
    challenge: 'The client faced slow transaction times, frequent downtime, and a disjointed user experience across platforms.',
    solution: 'We engineered a microservices architecture using Node.js and Docker, deployed on AWS for high availability. The frontend was rebuilt with React for a seamless, responsive user interface.',
    impact: 'Reduced transaction processing time by 60%, achieved 99.99% uptime, and increased mobile app user engagement by 45%.',
    demoLink: '#',
    repoLink: '#',
  },
  {
    id: 2,
    title: 'AI-Powered Healthcare Analytics',
    category: 'Healthcare',
    description:
      'An advanced analytics platform utilizing machine learning to predict patient outcomes and optimize hospital resource allocation.',
    fullDescription: 'Collaborating with a network of hospitals, we developed an AI-driven analytics dashboard. The system aggregates data from electronic health records (EHR) to provide actionable insights, helping medical staff predict patient admission rates and optimize staff scheduling.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&q=80&w=1080',
    technologies: ['Python', 'TensorFlow', 'React', 'FastAPI', 'Azure'],
    challenge: 'Hospital administrators struggled with inefficient resource allocation due to unpredictable patient influx.',
    solution: 'We implemented predictive models using TensorFlow to forecast admission trends. The results are visualized in a real-time React dashboard backed by a high-performance FastAPI backend.',
    impact: 'Improved resource utilization efficiency by 30% and reduced patient wait times by an average of 20 minutes.',
    demoLink: '#',
    repoLink: '#',
  },
  {
    id: 3,
    title: 'Global E-Commerce Scalability',
    category: 'E-Commerce',
    description:
      'Scaling a high-traffic e-commerce platform to handle millions of concurrent users during peak sales events.',
    fullDescription: 'A global retail brand approached us to solve performance bottlenecks during Black Friday sales. We optimized their existing e-commerce platform, implementing advanced caching strategies, database sharding, and a CDN for static asset delivery.',
    image: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-4.0.3&q=80&w=1080',
    technologies: ['Next.js', 'GraphQL', 'Redis', 'Kubernetes', 'GCP'],
    challenge: 'The platform experienced severe latency and crashes during high-traffic spikes, leading to lost revenue.',
    solution: 'We migrated the frontend to Next.js for better server-side rendering performance, introduced Redis for caching frequently accessed data, and orchestrated the deployment with Kubernetes for auto-scaling.',
    impact: 'Successfully handled 5M+ concurrent users with zero downtime and improved page load speeds by 40%.',
    demoLink: '#',
    repoLink: '#',
  },
  {
    id: 4,
    title: 'Smart Supply Chain Management',
    category: 'Logistics',
    description:
      'IoT-enabled supply chain solution providing real-time tracking and automated inventory management.',
    fullDescription: 'We built a smart logistics platform for a manufacturing giant. By integrating IoT sensors with a centralized cloud dashboard, we enabled real-time tracking of goods, automated inventory reordering, and predictive maintenance for fleet vehicles.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&q=80&w=1080',
    technologies: ['Vue.js', 'Go', 'MongoDB', 'MQTT', 'AWS IoT'],
    challenge: 'Lack of visibility into the supply chain resulted in inventory stockouts and delayed shipments.',
    solution: 'We developed a real-time tracking system using MQTT for low-latency communication between IoT devices and the cloud. The data is processed by a Go backend and stored in MongoDB.',
    impact: 'Reduced inventory holding costs by 25% and improved on-time delivery rates to 98%.',
    demoLink: '#',
    repoLink: '#',
  },
];
