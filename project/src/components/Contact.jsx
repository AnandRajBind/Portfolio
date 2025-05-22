import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if all required values are present
    if (!serviceId || !templateId || !publicKey) {
      console.error('Missing EmailJS configuration values');
      setLoading(false);
      setError('Email configuration error. Please contact the administrator.');
      return;
    }
    
    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setLoading(false);
        setSuccess(true);
        setForm({
          name: '',
          email: '',
          message: '',
        });
      }, (error) => {
        console.error('EmailJS error:', error);
        setLoading(false);
        setError('Failed to send message. Please try again later.');
      });
  };

  return (
    <div name='contact' className='w-full h-screen bg-primary flex justify-center items-center p-4'>
      <div className='max-w-[600px] mx-auto'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-secondary text-lightText'>Contact</p>
          <p className='text-lightText py-4'>Submit the form below or send me an email - anandrajbind35@gmail.com</p>
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outlined-none border-none font-medium'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outlined-none border-none font-medium'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outlined-none border-none font-medium'
              required
            />
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
          {success && (
            <p className='text-green-500 font-medium mt-2'>
              Thank you! I will get back to you as soon as possible.
            </p>
          )}
          {error && (
            <p className='text-red-500 font-medium mt-2'>
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;