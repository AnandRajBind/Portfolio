import React from 'react';
import { motion } from 'framer-motion';
import { linkedin, github, email } from '../assets';

const SocialCard = ({ icon, color, link, delay }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-14 h-14 rounded-md flex justify-center items-center cursor-pointer ${color} hover:shadow-lg transition-all duration-300 hover:scale-110`}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <img src={icon} alt="social media" className="w-1/2 h-1/2 object-contain" />
    </motion.a>
  );
};

const SocialLinks = () => {
  return (
    <div className="flex flex-col fixed left-0 top-[35%] gap-4 z-10">
      <SocialCard
        icon={linkedin}
        color="bg-[#0A66C2]"
        link="https://www.linkedin.com/in/yourprofile"
        delay={0.2}
      />
      <SocialCard
        icon={github}
        color="bg-[#333333]"
        link="https://github.com/yourusername"
        delay={0.4}
      />
      <SocialCard
        icon={email}
        color="bg-[#6FCF97]"
        link="mailto:youremail@example.com"
        delay={0.6}
      />
    </div>
  );
};

export default SocialLinks;
