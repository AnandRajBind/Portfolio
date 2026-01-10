import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaUserAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { BsTranslate, BsBriefcase } from 'react-icons/bs';

const About = () => {
  return (
    <div name='about' className='w-full section-min-height bg-primary text-lightText py-16 md:py-24'>
      <div className='max-w-[1200px] mx-auto px-4'>
        {/* Gradient Title */}
        <h2 className='text-center text-5xl font-bold mb-16 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent'>
          About Me
        </h2>
        
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Left Column - Developer Description */}
          <div className='lg:col-span-2 bg-tertiary p-8 rounded-2xl shadow-lg'>
            {/* Developer Title */}
            <div className='border-l-4 border-blue-500 pl-4 mb-6'>
              <h3 className='text-2xl font-bold text-blue-500'>Passionate Full Stack Developer</h3>
            </div>
            
            {/* Main Description */}
            <p className='text-lg mb-6'>
              I am a passionate Full Stack Developer with expertise in cutting-edge web technologies. My
              journey began with curiosity and has evolved into a professional career building <span className='text-blue-500 font-semibold'>robust,
              scalable, and beautiful applications</span>.
            </p>
            
            <p className='text-lg mb-6'>
              I specialize in creating <span className='text-blue-500 font-semibold'>responsive web applications</span> using React, TypeScript, and Node.js, with
              a strong focus on <span className='text-blue-500 font-semibold'>clean architecture and optimal user experience</span>. I'm constantly learning and
              adapting to new technologies to stay current in this ever-evolving field.
            </p>
            
            {/* Skills Badges */}
            <div className='flex flex-wrap gap-3 mt-8'>
              <span className='bg-gray-800 text-white px-4 py-2 rounded-full text-sm'>Problem Solver</span>
              <span className='bg-gray-800 text-white px-4 py-2 rounded-full text-sm'>Clean Code</span>
              <span className='bg-gray-800 text-white px-4 py-2 rounded-full text-sm'>Performance Focused</span>
              <span className='bg-gray-800 text-white px-4 py-2 rounded-full text-sm'>User-Centric</span>
            </div>
          </div>
          
          {/* Right Column - Personal Details */}
          <div className='bg-tertiary p-8 rounded-2xl shadow-lg'>
            <h3 className='text-xl font-semibold mb-6 text-purple-500 border-l-4 border-purple-500 pl-4'>
              Personal Details
            </h3>
            
            <div className='space-y-6'>
              {/* Name */}
              <div className='flex items-center gap-4'>
                <div className='bg-blue-500/20 p-3 rounded-full'>
                  <FaUserAlt className='text-blue-500' />
                </div>
                <div>
                  <p className='text-sm text-gray-400'>Name</p>
                  <p className='text-lg'>Anand Raj Bind</p>
                </div>
              </div>
                
              {/* Location */}
              <div className='flex items-center gap-4'>
                <div className='bg-red-500/20 p-3 rounded-full'>
                  <FaMapMarkerAlt className='text-red-500' />
                </div>
                <div>
                  <p className='text-sm text-gray-400'>Location</p>
                  <p className='text-lg'>Jaunpur, U.P, India</p>
                </div>
              </div>
              
              {/* Email */}
              <div className='flex items-center gap-4'>
                <div className='bg-green-500/20 p-3 rounded-full'>
                  <MdEmail className='text-green-500' />
                </div>
                <div>
                  <p className='text-sm text-gray-400'>Email</p>
                  <p className='text-lg'>anandrajbind35@gmail.com</p>
                </div>
              </div>
              {/* Experience */}
              <div className='flex items-center gap-4'>
                <div className='bg-yellow-500/20 p-3 rounded-full'>
                  <BsBriefcase className='text-yellow-500' />
                </div>
                <div>
                  <p className='text-sm text-gray-400'>Experience</p>
                  <p className='text-lg'>Fresher</p>
                </div>
              </div>
              
              {/* Languages */}
              <div className='flex items-center gap-4'>
                <div className='bg-purple-500/20 p-3 rounded-full'>
                  <BsTranslate className='text-purple-500' />
                </div>
                <div>
                  <p className='text-sm text-gray-400'>Languages</p>
                  <p className='text-lg'>Hindi, English</p>
                </div>
              </div>
            </div>
            
            <div className='mt-8'>
              <p className='text-center text-amber-400'>
                ✨ Open to opportunities ✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;