import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className='w-full bg-tertiary text-lightText py-8'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col items-center'>
        <div className='flex space-x-6 mb-4'>
          <a href='https://www.linkedin.com/in/anand-raj-bind-9b6890253/' target='_blank' rel='noreferrer'>
            <FaLinkedin size={30} className='hover:text-secondary transition-colors' />
          </a>
          <a href='https://github.com/AnandRajBind' target='_blank' rel='noreferrer'>
            <FaGithub size={30} className='hover:text-secondary transition-colors' />
          </a>
          <a href='mailto:anandrajbind35@gmail.com'>
            <HiOutlineMail size={30} className='hover:text-secondary transition-colors' />
          </a>
          <a href='https://drive.google.com/file/d/1T6n_gCkIo0RW3Cx1AJOmieabzzBqjlnM/view?usp=drivesdk' target='_blank' rel='noreferrer'>
            <FaFileAlt size={30} className='hover:text-secondary transition-colors' />
          </a>
        </div>
        <p className='text-center text-darkText'>
          &copy; {new Date().getFullYear()} Anand Raj Bind. All rights reserved.
        </p>
        <div className='flex space-x-4 mt-2'>
          <a href="https://drive.google.com/file/d/1T6n_gCkIo0RW3Cx1AJOmieabzzBqjlnM/view?usp=drivesdk" 
             target="_blank" 
             rel="noreferrer"
             className="hover:text-secondary transition-colors">
            Download Resume
          </a>
          <Link to="resume" smooth={true} duration={500} className="cursor-pointer hover:text-secondary transition-colors">
            View Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;