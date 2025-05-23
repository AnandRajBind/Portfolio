const About = () => {
  return (
    <div name='about' className='w-full section-min-height bg-primary text-lightText section-padding'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-secondary'>
              About Me
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
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
      </div>
    </div>
  );
};

export default About;