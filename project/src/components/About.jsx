import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';

const About = () => {
  const skills = [
    { icon: FaHtml5, name: 'HTML', color: '#E34F26' },
    { icon: FaCss3Alt, name: 'CSS', color: '#1572B6' },
    { icon: FaJs, name: 'JavaScript', color: '#F7DF1E' },
    { icon: FaReact, name: 'React', color: '#61DAFB' },
    { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#38B2AC' },
    { icon: FaNodeJs, name: 'Node.js', color: '#339933' },
    { icon: SiExpress, name: 'Express.js', color: '#ffffff' },
    { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
    { icon: FaGitAlt, name: 'Git', color: '#F05032' }
  ];

  return (
    <div name='about' className='w-full section-min-height bg-primary text-lightText section-padding'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        {/* About Me Section */}
        <div className='w-full grid grid-cols-2 gap-8 mb-16'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-secondary'>
              About Me
            </p>
          </div>
          <div></div>
        </div>
        
        <div className='w-full grid sm:grid-cols-2 gap-8 px-4 mb-20'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi, I'm Anand Raj Bind. Nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p className='text-darkText'>
              I'm currently pursuing MCA from St. Andrews Institute of Technology. I've always enjoyed building things that people can interact with, which naturally led me to explore web development. Over the past few years, I've gained hands-on experience in JavaScript, ReactJS, Tailwind CSS, and MongoDB through personal projects like a Snake Game, To-Do List, Number Guessing Game, and a Password Manager app.
            </p>
            <p className='text-darkText mt-4'>
              I'm passionate about creating intuitive and responsive web applications that provide great user experiences. I'm constantly learning and improving my skills to become a better developer.
            </p>
          </div>
        </div>

        {/* Skills Section merged into About */}
        <div className='mb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-secondary'>Skills & Technologies</p>
          <p className='py-4'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8'>
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div key={skill.name} className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-6 rounded-lg'>
                <IconComponent className='w-20 h-20 mx-auto' style={{ color: skill.color }} />
                <p className='my-4'>{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;