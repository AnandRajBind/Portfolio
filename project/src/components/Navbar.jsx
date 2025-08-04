import { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-primary text-lightText z-50 shadow-sm'>
      <div>
        <h1 className='text-2xl font-bold text-secondary'>Anand Raj Bind</h1>
      </div>

      {/* Menu */}
      <ul className='hidden md:flex'>
        <li className='px-4 cursor-pointer capitalize font-medium hover:text-secondary duration-200'>
          <Link to='home' smooth={true} duration={500}>Home</Link>
        </li>
        <li className='px-4 cursor-pointer capitalize font-medium hover:text-secondary duration-200'>
          <Link to='about' smooth={true} duration={500}>About</Link>
        </li>
        <li className='px-4 cursor-pointer capitalize font-medium hover:text-secondary duration-200'>
          <Link to='skills' smooth={true} duration={500}>Skills</Link>
        </li>
        <li className='px-4 cursor-pointer capitalize font-medium hover:text-secondary duration-200'>
          <Link to='projects' smooth={true} duration={500}>Projects</Link>
        </li>
        <li className='px-4 cursor-pointer capitalize font-medium hover:text-secondary duration-200'>
          <Link to='achievements' smooth={true} duration={500}>Achievements</Link>
        </li>
        <li className='px-4 cursor-pointer capitalize font-medium hover:text-secondary duration-200'>
          <Link to='contact' smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-50 cursor-pointer'>
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {/* Mobile Menu - Side Dialog */}
      <div className={`fixed top-0 left-0 w-80 h-full bg-primary/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out z-40 ${
        nav ? 'translate-x-0' : '-translate-x-full'
      } md:hidden`}>
        <div className="pt-20 px-6">
          {/* Menu Header */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-secondary mb-2">Navigation</h2>
            <div className="w-16 h-1 bg-secondary rounded"></div>
          </div>

          {/* Menu Items */}
          <ul className="space-y-4">
            <li>
              <Link 
                onClick={handleClick} 
                to='home' 
                smooth={true} 
                duration={500}
                className="block py-3 px-4 text-lg hover:text-secondary hover:bg-blue-500/10 rounded-lg transition-all duration-200 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                onClick={handleClick} 
                to='about' 
                smooth={true} 
                duration={500}
                className="block py-3 px-4 text-lg hover:text-secondary hover:bg-blue-500/10 rounded-lg transition-all duration-200 cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                onClick={handleClick} 
                to='skills' 
                smooth={true} 
                duration={500}
                className="block py-3 px-4 text-lg hover:text-secondary hover:bg-blue-500/10 rounded-lg transition-all duration-200 cursor-pointer"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link 
                onClick={handleClick} 
                to='projects' 
                smooth={true} 
                duration={500}
                className="block py-3 px-4 text-lg hover:text-secondary hover:bg-blue-500/10 rounded-lg transition-all duration-200 cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                onClick={handleClick} 
                to='achievements' 
                smooth={true} 
                duration={500}
                className="block py-3 px-4 text-lg hover:text-secondary hover:bg-blue-500/10 rounded-lg transition-all duration-200 cursor-pointer"
              >
                Achievements
              </Link>
            </li>
            <li>
              <Link 
                onClick={handleClick} 
                to='contact' 
                smooth={true} 
                duration={500}
                className="block py-3 px-4 text-lg hover:text-secondary hover:bg-blue-500/10 rounded-lg transition-all duration-200 cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Social Links in Mobile Menu */}
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-gray-400 mb-4">Connect With Me</h3>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/anand-raj-bind-9b6890253/" target="_blank" rel="noreferrer"
                 className="p-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="https://github.com/AnandRajBind" target="_blank" rel="noreferrer"
                 className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="mailto:anandrajbind35@gmail.com"
                 className="p-2 bg-green-600 rounded-lg hover:bg-green-700 transition-colors">
                <HiOutlineMail size={20} />
              </a>
            </div>
          </div>

          {/* Theme Toggle in Mobile Menu */}
          <div className="mt-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-400">Theme</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {nav && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={handleClick}
        ></div>
      )}

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300' 
               href='https://www.linkedin.com/in/anand-raj-bind-9b6890253/' 
               target='_blank' 
               rel='noreferrer'>
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300' 
               href='https://github.com/AnandRajBind' 
               target='_blank' 
               rel='noreferrer'>
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a className='flex justify-between items-center w-full text-gray-300' 
               href='mailto:anandrajbind35@gmail.com'>
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>

      {/* Add theme toggle */}
      <div className="hidden md:flex items-center">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;