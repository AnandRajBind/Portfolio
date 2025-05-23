import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const canvasRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formFocus, setFormFocus] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };
    
    canvas.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Floating particles for contact section
    const particles = [];
    const numberOfParticles = 50;
    
    class ContactParticle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 1;
        this.speedY = (Math.random() - 0.5) * 1;
        this.color = `hsl(${280 + Math.random() * 40}, 70%, 60%)`;
        this.alpha = Math.random() * 0.5 + 0.3;
      }
      
      update() {
        // Attraction to mouse
        const dx = mousePosition.x - this.x;
        const dy = mousePosition.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          this.x += dx * 0.01;
          this.y += dy * 0.01;
        }
        
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Wrap around edges
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }
      
      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }
    
    // Initialize particles
    for (let i = 0; i < numberOfParticles; i++) {
      particles.push(new ContactParticle());
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 80) {
            ctx.strokeStyle = `rgba(147, 51, 234, ${0.3 * (1 - distance / 80)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePosition]);

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
    <div name='contact' className='w-full section-min-height bg-primary section-padding flex justify-center items-center p-4 relative overflow-hidden'>
      {/* Animated background canvas */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-purple-400/20 rounded-lg animate-spin-slow" />
        <div className="absolute bottom-32 right-20 w-16 h-16 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full contact-float" />
        <div className="absolute top-1/2 left-20 w-12 h-1 bg-gradient-to-r from-transparent via-purple-400/40 to-transparent animate-pulse" />
      </div>

      <div className='max-w-[600px] mx-auto relative z-10 contact-fade-in'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-secondary text-lightText contact-title-hover'>
            Contact
          </p>
          <p className='text-lightText py-4 contact-subtitle-fade'>
            Submit the form below or send me an email - anandrajbind35@gmail.com
          </p>
        </div>
        
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='flex flex-col gap-6 relative contact-form-fade'
        >
          <label className='flex flex-col relative contact-field-hover'>
            <span className='text-white font-medium mb-4 relative z-10'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              onFocus={() => setFormFocus('name')}
              onBlur={() => setFormFocus(null)}
              placeholder="What's your name?"
              className={`contact-input bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outlined-none border-none font-medium relative z-10 transition-all duration-300 ${formFocus === 'name' ? 'contact-input-focus' : ''}`}
              required
            />
            {formFocus === 'name' && (
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg contact-glow-fade" />
            )}
          </label>
          
          <label className='flex flex-col relative contact-field-hover'>
            <span className='text-white font-medium mb-4 relative z-10'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              onFocus={() => setFormFocus('email')}
              onBlur={() => setFormFocus(null)}
              placeholder="What's your email?"
              className={`contact-input bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outlined-none border-none font-medium relative z-10 transition-all duration-300 ${formFocus === 'email' ? 'contact-input-focus' : ''}`}
              required
            />
            {formFocus === 'email' && (
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg contact-glow-fade" />
            )}
          </label>
          
          <label className='flex flex-col relative contact-field-hover'>
            <span className='text-white font-medium mb-4 relative z-10'>Your Message</span>
            <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              onFocus={() => setFormFocus('message')}
              onBlur={() => setFormFocus(null)}
              placeholder="What do you want to say?"
              className={`contact-input bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outlined-none border-none font-medium relative z-10 transition-all duration-300 resize-none ${formFocus === 'message' ? 'contact-input-focus' : ''}`}
              required
            />
            {formFocus === 'message' && (
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg contact-glow-fade" />
            )}
          </label>
          
          <button
            type='submit'
            className={`contact-button bg-gradient-to-r from-purple-500 to-blue-500 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl relative overflow-hidden transition-all duration-300 ${loading ? 'contact-button-loading' : ''}`}
            disabled={loading}
          >
            <span className="relative z-10">
              {loading ? 'Sending...' : 'Send Message'}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 contact-button-slide" />
          </button>
          
          {success && (
            <p className='text-green-400 font-medium mt-2 p-4 success-message rounded-lg contact-message-slide'>
              ✨ Thank you! I will get back to you as soon as possible.
            </p>
          )}
          
          {error && (
            <p className='text-red-400 font-medium mt-2 p-4 error-message rounded-lg contact-message-slide'>
              ❌ {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;