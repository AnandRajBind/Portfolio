const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "InternAuto",
      description: "Worked on the frontend of an internship application automation platform using React, incorporating web scraping, AI responses, career guidance, and resume generation.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      github: "https://github.com/pragyesh7753/InternAuto_project",
      demo: "https://internauto.pragyesh.tech/"
    },
    {
      id: 2,
      title: "Password Manager",
      description: "Developed a Password Manager website that securely stores website URLs, usernames, and passwords, similar to Google Password Manager. User credentials are stored locally using Local Storage for quick access.",
      image: "https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      github: "https://github.com/AnandRajBind/Password_Manager_Project-",
      demo: "https://password-manager-project-eta.vercel.app/"
    },
    {
      id: 3,
      title: "Employee Management",
      description: "Built an employee management system with local storage for data persistence. Created with HTML, CSS, JavaScript, ReactJS, and Vite.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      github: "https://github.com/AnandRajBind/Employee_Management_Project",
      demo: "https://employee-management-project-one.vercel.app/"
    },
    {
      id: 4,
      title: "Number Guessing Game",
      description: "Interactive number guessing game built with JavaScript.",
      image: "https://images.pexels.com/photos/1111597/pexels-photo-1111597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      github: "https://github.com/AnandRajBind/Number-Guessing-Game-",
      demo: "https://guess-number-eosin-six.vercel.app/"
    },
    {
      id: 5,
      title: "Snake Game",
      description: "Classic snake game implemented with JavaScript.",
      image: "https://images.pexels.com/photos/4062560/pexels-photo-4062560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      github: "https://github.com/AnandRajBind/Snake-Game-Mini-Project-",
      demo: "https://snake-game-mini-project.vercel.app/"
    },
    {
      id: 6,
      title: "To-Do List App",
      description: "Simple and effective to-do list application with task management features.",
      image: "https://images.pexels.com/photos/6408282/pexels-photo-6408282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      github: "https://github.com/AnandRajBind",
      demo: "https://todolist-b06qgr51n-anandrajbinds-projects.vercel.app/"
    }
  ];

  return (
    <div name='projects' className='w-full md:h-screen text-lightText bg-primary'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-lightText border-secondary'>
            Projects
          </p>
          <p className='py-6'>Check out some of my recent projects</p>
        </div>

        {/* Project Grid */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {projects.map((project) => (
            <div 
              key={project.id}
              style={{ backgroundImage: `url(${project.image})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100 text-center'>
                <span className='text-2xl font-bold text-primary tracking-wider'>
                  {project.title}
                </span>
                <p className='text-primary text-sm px-2 py-1'>{project.description}</p>
                <div className='pt-8 text-center'>
                  <a href={project.demo} target='_blank' rel='noreferrer'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>
                  <a href={project.github} target='_blank' rel='noreferrer'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;