import  { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';

const LoadingScreen = ({ setLoading }) => {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  
  const loadingTexts = [
    "Initializing modules...",
    "Loading projects...",
    "Fetching skills...",
    "Setting up UI...",
    "Almost there..."
  ];
  
  // Simulate loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Delay to allow for final animations
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 5;
      });
    }, 150);
    
    return () => clearInterval(interval);
  }, [setLoading]);
  
  // Cycle through loading texts
  useEffect(() => {
    if (progress < 100) {
      const textInterval = setInterval(() => {
        setTextIndex(prev => (prev + 1) % loadingTexts.length);
      }, 1500);
      
      return () => clearInterval(textInterval);
    }
  }, [progress, loadingTexts.length]);
  
  // Floating icons animation
  const iconVariants = {
    animate: (i) => ({
      y: [0, -10, 0],
      rotate: [0, i % 2 === 0 ? 10 : -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        delay: i * 0.2
      }
    })
  };
  
  const icons = [
    { Icon: FaReact, color: "#61DAFB", size: 40 },
    { Icon: FaNodeJs, color: "#339933", size: 36 },
    { Icon: FaJs, color: "#F7DF1E", size: 32 },
    { Icon: FaHtml5, color: "#E34F26", size: 38 },
    { Icon: FaCss3Alt, color: "#1572B6", size: 34 }
  ];

  return (
    <motion.div
      className="fixed inset-0 bg-primary z-50 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.5, ease: "easeOut" }
      }}
    >
      <div className="text-center relative z-10 px-4">
        {/* Logo and Name with reveal animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
          }}
          className="mb-10"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-[#00D1FF] bg-clip-text text-transparent mb-3">
            Anand Raj Bind
          </h1>
          <div className="h-[1px] w-32 bg-gradient-to-r from-blue-500 to-[#00D1FF] mx-auto my-4"></div>
          <p className="text-gray-400 text-xl">Full Stack Developer</p>
        </motion.div>
        
        {/* Floating Tech Icons */}
        <motion.div className="flex justify-center gap-6 mb-10">
          {icons.map((icon, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={iconVariants}
              animate="animate"
            >
              <icon.Icon 
                size={icon.size} 
                color={icon.color} 
                className="drop-shadow-lg" 
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Progress Bar */}
        <div className="w-[280px] md:w-[320px] mx-auto mb-6 relative">
          <div className="h-2 bg-gray-800 rounded-full">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-500 to-[#00D1FF] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>
          
          {/* Percentage */}
          <motion.div 
            className="absolute -right-10 top-1/2 transform -translate-y-1/2 text-sm text-blue-400 font-medium"
          >
            {progress}%
          </motion.div>
        </div>
        
        {/* Loading Text */}
        <motion.div
          key={textIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="h-6"
        >
          <p className="text-gray-400 text-sm">{loadingTexts[textIndex]}</p>
        </motion.div>
      </div>
      
      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * -100, 0],
              x: [0, Math.random() * 100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

import PropTypes from 'prop-types';

LoadingScreen.propTypes = {
  setLoading: PropTypes.func.isRequired
};

export default LoadingScreen;
