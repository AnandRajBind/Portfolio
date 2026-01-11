import { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs,FaJava, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'tools', name: 'Tools' }
  ];
  const skillsData = [
    {
      id: 1,
      name: 'HTML',
      icon: FaHtml5,
      color: '#E34F26',
      level: 90,
      category: 'frontend',
      description: 'Semantic markup, accessibility, and modern HTML5 features'
    },
    {
      id: 2,
      name: 'CSS',
      icon: FaCss3Alt,
      color: '#1572B6',
      level: 85,
      category: 'frontend',
      description: 'Responsive design, animations, and CSS3 properties'
    },
    {
      id: 3,
      name: 'JavaScript',
      icon: FaJs,
      color: '#F7DF1E',
      level: 80,
      category: 'frontend',
      description: 'ES6+, DOM manipulation, and asynchronous programming'
    },
    {
      id: 4,
      name: 'Java',
      icon: FaJava,
      color: '#F7DF1E',
      level: 80,
      category: 'backend',
      description: 'Object-oriented programming, multithreading, and Spring Boot for backend development'
    },
    {
      id: 5,
      name: 'React',
      icon: FaReact,
      color: '#61DAFB',
      level: 85,
      category: 'frontend',
      description: 'Hooks, state management, and component-based architecture'
    },
    {
      id: 6,
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
      color: '#38B2AC',
      level: 80,
      category: 'frontend',
      description: 'Utility-first CSS framework for rapid UI development'
    },
    {
      id: 7,
      name: 'Node.js',
      icon: FaNodeJs,
      color: '#339933',
      level: 75,
      category: 'backend',
      description: 'Server-side JavaScript runtime environment'
    },
    {
      id: 8,
      name: 'Express.js',
      icon: SiExpress,
      color: '#ffffff',
      level: 70,
      category: 'backend',
      description: 'Web application framework for Node.js'
    },
    {
      id: 9,
      name: 'MongoDB',
      icon: SiMongodb,
      color: '#47A248',
      level: 75,
      category: 'backend',
      description: 'NoSQL database for modern applications'
    },
    {
      id: 10,
      name: 'Git',
      icon: FaGitAlt,
      color: '#F05032',
      level: 80,
      category: 'tools',
      description: 'Version control system for code management'
    }
  ];
  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter(skill => skill.category === activeCategory);
  return (
    <div name='skills' className='w-full section-min-height bg-primary text-lightText section-padding'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className="mb-8">
          <h2 className='text-4xl font-bold inline border-l-4 border-green-500 pl-4'>
            Technologies I Work With
          </h2>
          <p className='py-4 text-darkText'>These are the technologies I've worked with</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${activeCategory === category.id
                  ? 'bg-secondary text-primary font-medium shadow-md'
                  : 'bg-blue-500/10 hover:bg-blue-500/20'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        {/* Skills Grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>
          {filteredSkills.map(skill => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.id}
                className='bg-blue-500/10 p-6 rounded-xl flex flex-col items-center 
                          transform transition-all duration-300 hover:scale-105 hover:shadow-xl 
                          hover:shadow-blue-500/10 group relative'
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 
                              rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <IconComponent
                  className='w-16 h-16 mb-4 transition-all duration-300 group-hover:scale-110'
                  style={{ color: skill.color }}
                />
                <p className='text-lg font-medium'>{skill.name}</p>
                {/* Skill Level */}
                <div className="w-full mt-3 bg-gray-700 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-400 to-secondary transition-all duration-1000 ease-out"
                    style={{
                      width: '0%',
                      animationName: 'skillFill',
                      animationDuration: '1.5s',
                      animationFillMode: 'forwards',
                      animationTimingFunction: 'ease-out',
                      animationDelay: `${skill.id * 0.1}s`,
                    }}
                    data-width={`${skill.level}%`}
                  />
                </div>
                {/* Hover Tooltip */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 
                              bg-gray-800 text-white p-2 rounded text-sm w-48 opacity-0 
                              invisible group-hover:opacity-100 group-hover:visible 
                              transition-all duration-300 z-10">
                  {skill.description}
                  <div className="text-xs mt-1 font-semibold">
                    Proficiency: {skill.level}%
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Keyframes for skill bar animation */}
      <style jsx>{`
        @keyframes skillFill {
          from { width: 0%; }
          to { width: var(--skill-width); }
        }
        [data-width] {
          --skill-width: attr(data-width);
        }
      `}</style>
    </div>
  );
};
export default Skills;