import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-tertiary dark:bg-gray-900 text-lightText py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-secondary mb-4">Anand Raj Bind</h2>
            <p className="text-sm text-gray-400 max-w-md">
              A passionate Full Stack Developer focused on creating intuitive and performant web applications with clean, elegant code.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/AnandRajBind" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-secondary transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/anand-raj-bind-9b6890253/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-secondary transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
            </div>
            
            <Link 
              to="home" 
              smooth={true} 
              duration={500}
              className="flex items-center gap-2 text-sm text-secondary hover:text-blue-400 transition-colors cursor-pointer"
            >
              Back to top <FaArrowUp size={14} />
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Anand Raj Bind. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-gray-400">
                Designed & Built with 
                <span className="text-red-500 mx-1">❤</span> 
                using React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;