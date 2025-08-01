import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaArrowRight, FaFileAlt } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Hero = () => {
  const { isDarkMode } = useContext(ThemeContext);
  
  const [typewriterText] = useTypewriter({
    words: [
      'Full Stack Developer',
      'MERN Stack Enthusiast',
      'Open Source Contributor',
      'React Developer',
      'UI/UX Enthusiast'
    ],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 50,
    deleteSpeed: 30
  });

  return (
    <div name='home' className='w-full h-screen pt-[80px]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <div className='flex flex-col md:flex-row md:items-center'>
          <div className='md:w-2/3'>
            <p className='text-secondary sm:text-3xl '>Hi, My Name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-lightText'>Anand Raj Bind</h1>
            <h2 className='text-3xl sm:text-5xl font-bold text-darkText'>
              I'm a{' '}
              <span className='text-secondary'>
                {typewriterText}
                <Cursor cursorStyle='|' cursorColor='#4B5563' />
              </span>
            </h2>
            <p className='text-darkText py-4 max-w-[700px]'>
              I'm a full stack developer specializing in building exceptional digital experiences.
              Currently, I'm focused on building responsive full-stack web applications.
            </p>
            <div className='flex flex-wrap gap-4'>
              <Link to="projects" smooth={true} duration={500}>
                <button className='group text-primary border-2 px-6 py-3 my-2 flex items-center hover:bg-secondary hover:border-secondary'>
                  View Projects
                  <span className='group-hover:rotate-90 duration-300'>
                    <FaArrowRight className='ml-3' />
                  </span>
                </button>
              </Link>
              
              <a href="https://drive.google.com/file/d/1t1jlmSJmndlF5dbNP49923NtAy5JAwb8/view?usp=drivesdk" 
                target="_blank" 
                rel="noreferrer">
                <button className='group text-primary border-2 px-6 py-3 my-2 flex items-center hover:bg-secondary hover:border-secondary'>
                  View Resume
                  <FaFileAlt className='ml-3' />
                </button>
              </a>
            </div>
          </div>
          
          {/* Profile Image Circle */}
          <div className='mt-8 md:mt-0 md:w-1/3 flex justify-center'>
            <div className={`w-64 h-64 rounded-full overflow-hidden border-4 border-secondary shadow-lg ${isDarkMode ? 'shadow-sky-400/20' : 'shadow-sky-500/20'}`}>
              <img 
                src='image .jpg' 
                alt='Developer Profile' 
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;