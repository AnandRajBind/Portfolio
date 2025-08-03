import { useState, useRef } from 'react';
import { MdEmail, MdSend } from 'react-icons/md';
import { FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formCompletion, setFormCompletion] = useState(0);
  
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Calculate form completion percentage
    const { name: nameValue, email: emailValue, subject: subjectValue, message: messageValue } = {
      ...formData,
      [name]: value
    };
    
    const fields = [nameValue, emailValue, subjectValue, messageValue];
    const filledFields = fields.filter(field => field.trim() !== '').length;
    setFormCompletion(Math.round((filledFields / fields.length) * 100));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus({
        success: false,
        message: 'Please fill in all required fields'
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        success: false,
        message: 'Please enter a valid email address'
      });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // EmailJS configuration
    // Replace these with your actual EmailJS credentials
    const serviceId = 'service_rdzr5mg';
    const templateId = 'template_9l14hls';
    const publicKey = 'bxhcg7JSRXKjJzubH';
    
    try {
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      );
      
      console.log('Email sent successfully:', result.text);
      
      setSubmitStatus({
        success: true,
        message: 'Your message has been sent successfully! I will get back to you soon.'
      });
      
      // Reset the form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setFormCompletion(0);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again or contact me directly via email.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div name='contact' className='w-full section-min-height bg-primary text-lightText py-16 md:py-24'>
      <div className='max-w-[1200px] mx-auto px-4'>
        {/* Heading */}
        <div className='text-center mb-12'>
          <h2 className='text-5xl font-bold'>
            Let&apos;s <span className='text-blue-500'>Connect</span>
          </h2>
          <p className='text-gray-400 mt-4 max-w-2xl mx-auto'>
            Ready to turn your ideas into reality? I&apos;d love to hear about your project
            and explore how we can work together. ✨
          </p>
        </div>
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          {/* Left Column - Contact Info & Social */}
          <div className='space-y-8'>
            <div>
              <h3 className='flex items-center gap-2 text-2xl font-bold mb-6'>
                <span className='text-blue-500 text-3xl'>💬</span> Get in Touch
              </h3>
              
              {/* Contact Cards */}
              <div className='space-y-4'>
                {/* Email Card */}
                <div className='bg-blue-500/20 rounded-xl p-4 flex items-start gap-4'>
                  <div className='bg-blue-500/20 p-3 rounded-full flex-shrink-0'>
                    <MdEmail className='text-blue-500 text-xl' />
                  </div>
                  <div>
                    <h4 className='font-bold'>Email</h4>
                    <p className='text-blue-400'>anandrajbind35@gmail.com</p>
                    <p className='text-sm text-gray-400 mt-1'>Best way to reach me</p>
                  </div>
                </div>
                
                {/* Phone Card */}
                <div className='bg-blue-500/20 rounded-xl p-4 flex items-start gap-4'>
                  <div className='bg-green-500/20 p-3 rounded-full flex-shrink-0'>
                    <FaPhone className='text-green-500 text-xl' />
                  </div>
                  <div>
                    <h4 className='font-bold'>Phone</h4>
                    <p className='text-green-400'>+91 8726271088</p>
                    <p className='text-sm text-gray-400 mt-1'>Available 9 AM - 6 PM IST</p>
                  </div>
                </div>
                
                {/* Location Card */}
                <div className='bg-blue-500/20 rounded-xl p-4 flex items-start gap-4'>
                  <div className='bg-purple-500/20 p-3 rounded-full flex-shrink-0'>
                    <FaMapMarkerAlt className='text-purple-500 text-xl' />
                  </div>
                  <div>
                    <h4 className='font-bold'>Location</h4>
                    <p className='text-purple-400'>Jaunpur, U.P., India</p>
                    <p className='text-sm text-gray-400 mt-1'>UTC +5:30</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h3 className='flex items-center gap-2 text-2xl font-bold mb-6'>
                <span className='text-blue-500'>❤️</span> Connect on Social
              </h3>
              
              <div className='flex flex-wrap gap-4'>
                <a href="https://github.com/AnandRajBind" target="_blank" rel="noopener noreferrer"
                   className='bg-blue-500/20 hover:bg-blue-500/30 p-4 rounded-xl flex flex-col items-center transition-colors'>
                  <FaGithub className='text-2xl mb-2' />
                  <span>GitHub</span>
                </a>
                
                <a href="https://www.linkedin.com/in/anand-raj-bind-9b6890253/" target="_blank" rel="noopener noreferrer"
                   className='bg-blue-500/20 hover:bg-blue-500/30 p-4 rounded-xl flex flex-col items-center transition-colors'>
                  <FaLinkedin className='text-2xl mb-2 text-blue-500' />
                  <span>LinkedIn</span>
                </a>
                
                {/* <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"
                   className='bg-blue-500/20 hover:bg-blue-500/30 p-4 rounded-xl flex flex-col items-center transition-colors'>
                  <FaXTwitter className='text-2xl mb-2 text-gray-300' />
                  <span>X</span>
                </a> */}
                
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"
                   className='bg-blue-500/20 hover:bg-blue-500/30 p-4 rounded-xl flex flex-col items-center transition-colors'>
                  <FaInstagram className='text-2xl mb-2 text-pink-500' />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Column - Contact Form */}
          <div className='bg-blue-500/20 p-8 rounded-2xl shadow-lg'>
            <div className='flex items-center justify-between mb-6'>
              <h3 className='text-2xl font-bold flex items-center gap-2'>
                <MdSend className='text-blue-500' /> Send a Message
              </h3>
              
              {/* Form Completion Indicator */}
              <div className='flex items-center gap-2'>
                <div className='bg-gray-700 h-2 w-32 rounded-full overflow-hidden'>
                  <div 
                    className='bg-blue-500 h-full rounded-full transition-all duration-300'
                    style={{ width: `${formCompletion}%` }}
                  />
                </div>
                <span className='text-xs text-gray-400'>{formCompletion}%</span>
              </div>
            </div>
            
            <p className='text-gray-400 mb-6'>Share your details and let's start the conversation.</p>
            
            {/* Status Message */}
            {submitStatus && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitStatus.success ? 'bg-green-500/20 border border-green-500/30' : 'bg-red-500/20 border border-red-500/30'
              }`}>
                <p className={`text-sm ${
                  submitStatus.success ? 'text-green-400' : 'text-red-400'
                }`}>
                  {submitStatus.message}
                </p>
              </div>
            )}
            
            <form ref={form} onSubmit={handleSubmit}>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                {/* Name Input */}
                <div>
                  <label htmlFor='name' className='block mb-2 text-sm'>
                    Name <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full bg-blue-500/10 border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-blue-500'
                    placeholder='Your full name'
                  />
                </div>
                
                {/* Email Input */}
                <div>
                  <label htmlFor='email' className='block mb-2 text-sm'>
                    Email <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full bg-blue-500/10 border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-blue-500'
                    placeholder='your.email@example.com'
                  />
                </div>
              </div>
              
              {/* Subject Input */}
              <div className='mb-6'>
                <label htmlFor='subject' className='block mb-2 text-sm'>
                  Subject <span className='text-red-500'>*</span>
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className='w-full bg-blue-500/10 border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-blue-500'
                  placeholder='Project inquiry, collaboration, or general question'
                />
              </div>
              
              {/* Message Input */}
              <div className='mb-6'>
                <label htmlFor='message' className='block mb-2 text-sm'>
                  Message <span className='text-red-500'>*</span>
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows='4'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className='w-full bg-blue-500/10 border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-blue-500'
                  placeholder='Tell me about your project, timeline, budget, and any specific requirements...'
                />
              </div>
              
              {/* Submit Button */}
              <div className='flex justify-center'>
                <button 
                  type='submit' 
                  disabled={isSubmitting}
                  className='flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-10 py-3 rounded-full transition-colors text-white font-medium disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-blue-500/20'
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin h-5 w-5 mr-2 border-t-2 border-white rounded-full"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      SEND MESSAGE <span className='text-lg'>⚡</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;