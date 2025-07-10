// import React from 'react';
// import { motion } from 'framer-motion';
// import ceoImage from '../assets/ceo.png';
// import directorImage from '../assets/director.png';

// const TeamMember = ({ name, position, image }) => {
//   return (
//     <motion.div 
//       className="flex flex-col items-center"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       whileHover={{ y: -5 }}
//     >
//       <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-4 shadow-lg border-4 border-white relative bg-purple-100">
//         <img 
//           src={image} 
//           alt={`${name} - ${position}`} 
//           className="absolute -top-10 "
//         />
//       </div>
//       <h3 className="text-xl md:text-2xl font-bold mt-4">{name}</h3>
//       <p className="text-lg text-gray-600">{position}</p>
//     </motion.div>
//   );
// };

// const CoreTeam = () => {
//   return (
//     <section id="core-team" className="section-container section-gradient-1">
//       <div className="content-container">
//         <motion.h1 
//           className="section-title"
//           data-aos="fade-down"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           Our Core Team
//         </motion.h1>
        
//         <motion.p
//           data-aos="fade-down"
//           data-aos-delay="200"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.2 }}
//           className="max-w-2xl mx-auto mb-12 text-center"
//         >
//           Meet the leadership driving our vision and success
//         </motion.p>
        
//         <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32">
//           <TeamMember 
//             name="Syed Qammar Abbas" 
//             position="CEO" 
//             image={ceoImage}
//           />
//           <TeamMember 
//             name="Syed Ali Gohar" 
//             position="Director" 
//             image={directorImage}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CoreTeam; 