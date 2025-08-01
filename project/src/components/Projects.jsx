import { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(null);

  const projects = [
    {
      id: 1,
      title: "InternAuto",
      description: "Worked on the frontend of an internship application automation platform using React, incorporating web scraping, AI responses, career guidance, and resume generation.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      github: "https://github.com/pragyesh7753/InternAuto_project",
      demo: "https://internauto.pragyesh.tech/",
      tags: ['React', 'AI Integration', 'Frontend'],
      category: 'frontend'
    },
    {
      id: 2,
      title: "Password Manager",
      description: "Developed a Password Manager website that securely stores website URLs, usernames, and passwords, similar to Google Password Manager. User credentials are stored locally using Local Storage for quick access.",
      image: "https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      github: "https://github.com/AnandRajBind/Password_Manager_Project-",
      demo: "https://password-manager-project-eta.vercel.app/",
      tags: ['JavaScript', 'LocalStorage', 'Security'],
      category: 'utility'
    },
    {
      id: 3,
      title: "Employee Management",
      description: "Built an employee management system with local storage for data persistence. Created with HTML, CSS, JavaScript, ReactJS, and Vite.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      github: "https://github.com/AnandRajBind/Employee_Management_Project",
      demo: "https://employee-management-project-one.vercel.app/",
      tags: ['React', 'LocalStorage', 'CRUD'],
      category: 'frontend'
    },
    {
      id: 4,
      title: "Number Guessing Game",
      description: "Interactive number guessing game built with JavaScript.",
      image: "https://images.pexels.com/photos/1111597/pexels-photo-1111597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      github: "https://github.com/AnandRajBind/Number-Guessing-Game-",
      demo: "https://guess-number-eosin-six.vercel.app/",
      tags: ['JavaScript', 'Game', 'Interactive'],
      category: 'games'
    },
    {
      id: 5,
      title: "Snake Game",
      description: "Classic snake game implemented with JavaScript.",
      image: "https://images.pexels.com/photos/4062560/pexels-photo-4062560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      github: "https://github.com/AnandRajBind/Snake-Game-Mini-Project-",
      demo: "https://snake-game-mini-project.vercel.app/",
      tags: ['JavaScript', 'Game', 'Canvas'],
      category: 'games'
    },
    {
      id: 6,
      title: "To-Do List App",
      description: "Simple and effective to-do list application with task management features.",
      image: "https://images.pexels.com/photos/6408282/pexels-photo-6408282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      github: "https://github.com/AnandRajBind",
      demo: "https://todolist-b06qgr51n-anandrajbinds-projects.vercel.app/",
      tags: ['React', 'CRUD', 'Productivity'],
      category: 'utility'
    }
  ];

  const categories = [
    { id: 'all', name: 'ALL' },
    { id: 'frontend', name: 'FRONTEND' },
    { id: 'utility', name: 'UTILITY' },
    { id: 'games', name: 'GAMES' }
  ];

  // Initialize filtered projects - simplified
  useEffect(() => {
    setFilteredProjects(projects);
  }, []);

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    
    // Simplified animation logic - removed unnecessary timeout
    if (category === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  return (
    <div name='projects' className='w-full section-min-height text-lightText bg-primary section-padding'>
      <div className='max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-lightText border-secondary'>
            Projects
          </p>
          <p className='py-6'>Check out some of my recent projects</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleFilterChange(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-[#00D1FF] text-white font-medium shadow-lg'
                  : 'bg-blue-500/10 hover:bg-blue-500/20 text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Project Grid - simplified motion effects */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {/* Project Image with simplified hover effect */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-300"
                  style={{ 
                    transform: hoverIndex === index ? 'scale(1.1)' : 'scale(1.0)',
                    filter: hoverIndex === index ? 'brightness(0.4)' : 'brightness(0.7)'
                  }}
                />
                
                {/* Simplified hover overlay */}
                {hoverIndex === index && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <FaCode className="text-[#00D1FF] text-4xl mb-4" />
                    <p className="text-white font-medium text-lg">View Project Details</p>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#00D1FF] dark:text-[#00D1FF]">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>
                
                {/* Project Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex justify-between mt-4 gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#00D1FF] text-white rounded-lg hover:bg-[#00b8e6] transition-colors"
                  >
                    <FaExternalLinkAlt size={14} /> 
                    <span>Demo</span>
                  </a>
                  
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#2d2d2d] dark:bg-[#333333] text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <FaGithub size={16} /> 
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;