import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';

const Skills = () => {
  return (
    <div name='skills' className='w-full min-h-screen bg-primary text-lightText'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-secondary'>Skills</p>
          <p className='py-4'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-6 rounded-lg'>
            <FaHtml5 className='w-20 h-20 mx-auto text-[#E34F26]' />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-6 rounded-lg'>
            <FaCss3Alt className='w-20 h-20 mx-auto text-[#1572B6]' />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-6 rounded-lg'>
            <FaJs className='w-20 h-20 mx-auto text-[#F7DF1E]' />
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-6 rounded-lg'>
            <FaReact className='w-20 h-20 mx-auto text-[#61DAFB]' />
            <p className='my-4'>React</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-6 rounded-lg'>
            <SiTailwindcss className='w-20 h-20 mx-auto text-[#38B2AC]' />
            <p className='my-4'>Tailwind CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-6 rounded-lg'>
            <FaNodeJs className='w-20 h-20 mx-auto text-[#339933]' />
            <p className='my-4'>Node.js</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-6 rounded-lg'>
            <SiExpress className='w-20 h-20 mx-auto text-white' />
            <p className='my-4'>Express.js</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-6 rounded-lg'>
            <SiMongodb className='w-20 h-20 mx-auto text-[#47A248]' />
            <p className='my-4'>MongoDB</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-6 rounded-lg'>
            <FaGitAlt className='w-20 h-20 mx-auto text-[#F05032]' />
            <p className='my-4'>Git</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;