import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { initEmailJS } from '../utils/emailjs'; // <-- import utility

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
  const [isTyping, setIsTyping] = useState(false);
  const [ripples, setRipples] = useState([]);
  const [cursorTrail, setCursorTrail] = useState([]);

  // Enhanced particle system with multiple types
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;
    
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
    
    // Advanced particle system
    class AdvancedParticle {
      constructor(type = 'default') {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.type = type;
        this.life = 1;
        this.maxLife = 100 + Math.random() * 100;
        
        switch(type) {
          case 'spark':
            this.size = Math.random() * 2 + 1;
            this.speedX = (Math.random() - 0.5) * 4;
            this.speedY = (Math.random() - 0.5) * 4;
            this.color = `hsl(${45 + Math.random() * 30}, 100%, 70%)`;
            break;
          case 'glow':
            this.size = Math.random() * 8 + 4;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.color = `hsl(${280 + Math.random() * 40}, 70%, 60%)`;
            break;
          default:
            this.size = Math.random() * 3 + 1;
            this.speedX = (Math.random() - 0.5) * 2;
            this.speedY = (Math.random() - 0.5) * 2;
            this.color = `hsl(${260 + Math.random() * 60}, 70%, 60%)`;
        }
      }
      
      update() {
        this.life++;
        
        // Mouse interaction with enhanced effects
        const dx = mousePosition.x - this.x;
        const dy = mousePosition.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150;
          this.x += (dx * force * 0.02);
          this.y += (dy * force * 0.02);
          
          if (this.type === 'default' && Math.random() < 0.1) {
            particles.push(new AdvancedParticle('spark'));
          }
        }
        
        this.x += this.speedX + Math.sin(time * 0.01) * 0.5;
        this.y += this.speedY + Math.cos(time * 0.015) * 0.5;
        
        // Boundary wrapping
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
        
        return this.life < this.maxLife;
      }
      
      draw() {
        const alpha = 1 - (this.life / this.maxLife);
        
        if (this.type === 'glow') {
          const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
          gradient.addColorStop(0, this.color.replace('60%', '70%').replace(')', `, ${alpha})`));
          gradient.addColorStop(0.5, this.color.replace('60%', '50%').replace(')', `, ${alpha * 0.5})`));
          gradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }
    }
    
    const particles = [];
    for (let i = 0; i < 40; i++) {
      particles.push(new AdvancedParticle('default'));
    }
    for (let i = 0; i < 15; i++) {
      particles.push(new AdvancedParticle('glow'));
    }
    
    const animate = () => {
      time++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and filter particles
      for (let i = particles.length - 1; i >= 0; i--) {
        if (!particles[i].update()) {
          particles.splice(i, 1);
        } else {
          particles[i].draw();
        }
      }
      
      // Maintain particle count
      while (particles.length < 55) {
        particles.push(new AdvancedParticle(Math.random() < 0.7 ? 'default' : 'glow'));
      }
      
      // Enhanced connection system
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const opacity = (100 - distance) / 100;
            const gradient = ctx.createLinearGradient(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
            gradient.addColorStop(0, `rgba(147, 51, 234, ${opacity * 0.4})`);
            gradient.addColorStop(0.5, `rgba(59, 130, 246, ${opacity * 0.6})`);
            gradient.addColorStop(1, `rgba(147, 51, 234, ${opacity * 0.4})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = opacity * 2;
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

  // Ensure EmailJS is initialized only once
  useEffect(() => {
    initEmailJS();
  }, []);

  // Enhanced typing detection
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setIsTyping(true);
    
    setTimeout(() => setIsTyping(false), 1000);
  };

  // Ripple effect on click
  const createRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ripple = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      id: Date.now()
    };
    
    setRipples(prev => [...prev, ripple]);
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== ripple.id));
    }, 1000);
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
      setError('Email service is not configured properly. Please try again later or contact me directly at anandrajbind35@gmail.com.');
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
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-grid-pattern animate-grid-move"></div>
      </div>
      
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
      />
      
      {/* Advanced floating elements */}
      <div className="absolute inset-0 pointer-events-none z-[2]">
        <div className="floating-orb floating-orb-1"></div>
        <div className="floating-orb floating-orb-2"></div>
        <div className="floating-orb floating-orb-3"></div>
        <div className="floating-code floating-code-1">{'<contact/>'}</div>
        <div className="floating-code floating-code-2">{'{ ...form }'}</div>
        <div className="floating-code floating-code-3">{'send()'}</div>
      </div>

      {/* Main content with glassmorphism */}
      <div className='max-w-[700px] mx-auto relative z-10'>
        <div className='backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl contact-container'>
          <div className='pb-8 text-center'>
            <h2 className='text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4 contact-title-enhanced'>
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6 title-underline"></div>
            <p className='text-gray-300 text-lg leading-relaxed'>
              Ready to bring your ideas to life? Drop me a message and let's create something amazing together.
            </p>
          </div>
          
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='space-y-8'
          >
            {/* Enhanced form fields */}
            <div className='grid md:grid-cols-2 gap-6'>
              <div className='form-group'>
                <label className='form-label'>
                  <span className='label-text'>Full Name</span>
                  <div className='input-container'>
                    <input
                      type='text'
                      name='name'
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFormFocus('name')}
                      onBlur={() => setFormFocus(null)}
                      placeholder="John Doe"
                      className='enhanced-input'
                      required
                    />
                    <div className={`input-border ${formFocus === 'name' ? 'active' : ''}`}></div>
                  </div>
                </label>
              </div>
              
              <div className='form-group'>
                <label className='form-label'>
                  <span className='label-text'>Email Address</span>
                  <div className='input-container'>
                    <input
                      type='email'
                      name='email'
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFormFocus('email')}
                      onBlur={() => setFormFocus(null)}
                      placeholder="john@example.com"
                      className='enhanced-input'
                      required
                    />
                    <div className={`input-border ${formFocus === 'email' ? 'active' : ''}`}></div>
                  </div>
                </label>
              </div>
            </div>
            
            <div className='form-group'>
              <label className='form-label'>
                <span className='label-text'>Your Message</span>
                <div className='input-container'>
                  <textarea
                    rows='6'
                    name='message'
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFormFocus('message')}
                    onBlur={() => setFormFocus(null)}
                    placeholder="Tell me about your project..."
                    className='enhanced-input resize-none'
                    required
                  />
                  <div className={`input-border ${formFocus === 'message' ? 'active' : ''}`}></div>
                </div>
              </label>
            </div>
            
            {/* Enhanced submit button */}
            <div className='text-center'>
              <button
                type='submit'
                onClick={createRipple}
                className='enhanced-button'
                disabled={loading}
              >
                <span className="button-content">
                  <span className="button-icon">
                    {loading ? '⚡' : '🚀'}
                  </span>
                  <span className="button-text">
                    {loading ? 'Launching Message...' : 'Send Message'}
                  </span>
                </span>
                
                {/* Ripple effects */}
                {ripples.map(ripple => (
                  <span
                    key={ripple.id}
                    className="ripple-effect"
                    style={{
                      left: ripple.x,
                      top: ripple.y,
                    }}
                  />
                ))}
                
                <div className="button-gradient"></div>
              </button>
            </div>
            
            {/* Enhanced status messages */}
            {success && (
              <div className='status-message success-enhanced'>
                <div className="status-icon">✨</div>
                <div>
                  <h4>Message Sent Successfully!</h4>
                  <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
                </div>
              </div>
            )}
            
            {error && (
              <div className='status-message error-enhanced'>
                <div className="status-icon">⚠️</div>
                <div>
                  <h4>Oops! Something went wrong</h4>
                  <p>{error}</p>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;