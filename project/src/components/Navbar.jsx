import { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-primary text-lightText z-10'>
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
          <Link to='contact' smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-primary flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>About</Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>Skills</Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='projects' smooth={true} duration={500}>Projects</Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>

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
    </div>
  );
};

export default Navbar;