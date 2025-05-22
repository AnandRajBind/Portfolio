const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-primary flex justify-center items-center p-4'>
      <div className='max-w-[600px] mx-auto'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-secondary text-lightText'>Contact</p>
          <p className='text-lightText py-4'>Submit the form below or send me an email - anandrajbind35@gmail.com</p>
        </div>
        <form method='POST' action='https://getform.io/f/a699a1b2-f225-434e-b317-1fcdccdb0e0e' className='flex flex-col max-w-[600px] w-full'>
          <input className='bg-tertiary p-2 text-lightText rounded-md' type="text" placeholder='Name' name='name' required />
          <input className='my-4 p-2 bg-tertiary text-lightText rounded-md' type="email" placeholder='Email' name='email' required />
          <textarea className='bg-tertiary p-2 text-lightText rounded-md' name="message" rows="10" placeholder='Message' required></textarea>
          <button className='text-primary border-none px-4 py-3 my-8 mx-auto flex items-center rounded-md'>Let's Collaborate</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;