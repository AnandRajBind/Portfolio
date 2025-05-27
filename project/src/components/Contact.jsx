import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const canvasRef = useRef();
  const containerRef = useRef();
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
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [floatingShapes, setFloatingShapes] = useState([]);

  // Generate random floating shapes
  useEffect(() => {
    const shapes = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 20,
      rotation: Math.random() * 360,
      speed: Math.random() * 15 + 5,
      delay: Math.random() * 5,
      color: `hsl(${Math.random() * 60 + 230}, ${Math.random() * 40 + 60}%, ${Math.random() * 30 + 50}%)`,
      opacity: Math.random() * 0.3 + 0.1,
      type: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)]
    }));
    setFloatingShapes(shapes);
  }, []);

  // IntersectionObserver for entrance animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // 3D rotation effect based on mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 30;
      const rotateY = (centerX - x) / 30;
      
      setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
      setRotation({ x: 0, y: 0 });
    };

    document.addEventListener('mousemove', handleMouseMove);
    containerRef.current?.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      containerRef.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

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
      const newPosition = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
      
      setMousePosition(newPosition);
      
      // Update cursor trail
      setCursorTrail(prev => {
        const newTrail = [...prev, { ...newPosition, age: 0 }];
        return newTrail.slice(-20); // Keep last 20 positions
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
        this.maxLife = 100 + Math.random() * 150;
        this.pulse = 0;
        this.pulseSpeed = Math.random() * 0.1 + 0.05;
        
        switch(type) {
          case 'spark':
            this.size = Math.random() * 2.5 + 1;
            this.speedX = (Math.random() - 0.5) * 4;
            this.speedY = (Math.random() - 0.5) * 4;
            this.color = `hsl(${45 + Math.random() * 30}, 100%, 70%)`;
            break;
          case 'glow':
            this.size = Math.random() * 10 + 6;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.color = `hsl(${280 + Math.random() * 60}, 80%, 60%)`;
            break;
          case 'star':
            this.size = Math.random() * 2 + 1;
            this.speedX = (Math.random() - 0.5) * 1;
            this.speedY = (Math.random() - 0.5) * 1;
            this.color = `hsl(${200 + Math.random() * 50}, 100%, 90%)`;
            break;
          default:
            this.size = Math.random() * 3 + 1;
            this.speedX = (Math.random() - 0.5) * 2;
            this.speedY = (Math.random() - 0.5) * 2;
            this.color = `hsl(${260 + Math.random() * 60}, 80%, 65%)`;
        }
      }
      
      update() {
        this.life++;
        this.pulse = Math.sin(this.life * this.pulseSpeed);
        
        // Mouse interaction with enhanced effects
        const dx = mousePosition.x - this.x;
        const dy = mousePosition.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 180) {
          const force = (180 - distance) / 180;
          this.x += (dx * force * 0.03);
          this.y += (dy * force * 0.03);
          
          if (this.type === 'default' && Math.random() < 0.15) {
            return {
              createNew: true,
              type: 'spark'
            };
          }
        }
        
        this.x += this.speedX + Math.sin(time * 0.015 + this.life * 0.01) * 0.6;
        this.y += this.speedY + Math.cos(time * 0.02 + this.life * 0.015) * 0.6;
        
        // Boundary wrapping
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
        
        return {
          alive: this.life < this.maxLife,
          createNew: false
        };
      }
      
      draw() {
        const alpha = 1 - (this.life / this.maxLife);
        const sizeModifier = 1 + this.pulse * 0.3;
        
        if (this.type === 'glow') {
          const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * sizeModifier);
          gradient.addColorStop(0, this.color.replace('60%', '70%').replace(')', `, ${alpha})`));
          gradient.addColorStop(0.5, this.color.replace('60%', '50%').replace(')', `, ${alpha * 0.6})`));
          gradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * sizeModifier, 0, Math.PI * 2);
          ctx.fill();
        } else if (this.type === 'star') {
          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.fillStyle = this.color;
          this.drawStar(this.x, this.y, 5, this.size * sizeModifier, this.size * 0.5 * sizeModifier);
          ctx.fill();
          ctx.restore();
        } else {
          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * sizeModifier, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }
      
      drawStar(cx, cy, spikes, outerRadius, innerRadius) {
        let rot = Math.PI / 2 * 3;
        let x = cx;
        let y = cy;
        let step = Math.PI / spikes;
        
        ctx.beginPath();
        ctx.moveTo(cx, cy - outerRadius);
        
        for (let i = 0; i < spikes; i++) {
          x = cx + Math.cos(rot) * outerRadius;
          y = cy + Math.sin(rot) * outerRadius;
          ctx.lineTo(x, y);
          rot += step;
          
          x = cx + Math.cos(rot) * innerRadius;
          y = cy + Math.sin(rot) * innerRadius;
          ctx.lineTo(x, y);
          rot += step;
        }
        
        ctx.lineTo(cx, cy - outerRadius);
        ctx.closePath();
      }
    }
    
    const particles = [];
    for (let i = 0; i < 40; i++) {
      particles.push(new AdvancedParticle('default'));
    }
    for (let i = 0; i < 15; i++) {
      particles.push(new AdvancedParticle('glow'));
    }
    for (let i = 0; i < 10; i++) {
      particles.push(new AdvancedParticle('star'));
    }
    
    const animate = () => {
      time++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw cursor trail
      if (cursorTrail.length > 1 && isTyping) {
        ctx.beginPath();
        ctx.moveTo(cursorTrail[0].x, cursorTrail[0].y);
        
        for (let i = 1; i < cursorTrail.length; i++) {
          const point = cursorTrail[i];
          const prevPoint = cursorTrail[i - 1];
          const xc = (point.x + prevPoint.x) / 2;
          const yc = (point.y + prevPoint.y) / 2;
          
          ctx.quadraticCurveTo(prevPoint.x, prevPoint.y, xc, yc);
          
          // Update age
          point.age++;
        }
        
        // Create gradient
        const gradient = ctx.createLinearGradient(
          cursorTrail[0].x, cursorTrail[0].y,
          cursorTrail[cursorTrail.length - 1].x, cursorTrail[cursorTrail.length - 1].y
        );
        gradient.addColorStop(0, 'rgba(147, 51, 234, 0)');
        gradient.addColorStop(0.5, 'rgba(147, 51, 234, 0.7)');
        gradient.addColorStop(1, 'rgba(239, 68, 68, 0.3)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();
      }
      
      // Update and filter particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const result = particles[i].update();
        if (!result.alive) {
          particles.splice(i, 1);
        } else {
          particles[i].draw();
          if (result.createNew) {
            particles.push(new AdvancedParticle(result.type));
          }
        }
      }
      
      // Maintain particle count
      while (particles.length < 65) {
        const type = Math.random() < 0.6 ? 'default' : 
                    Math.random() < 0.8 ? 'glow' : 'star';
        particles.push(new AdvancedParticle(type));
      }
      
      // Enhanced connection system
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            const opacity = (120 - distance) / 120;
            const gradient = ctx.createLinearGradient(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
            gradient.addColorStop(0, `rgba(147, 51, 234, ${opacity * 0.5})`);
            gradient.addColorStop(0.5, `rgba(59, 130, 246, ${opacity * 0.7})`);
            gradient.addColorStop(1, `rgba(147, 51, 234, ${opacity * 0.5})`);
            
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
  }, [mousePosition, cursorTrail, isTyping]);

  // Enhanced typing detection
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setIsTyping(true);
    
    setTimeout(() => setIsTyping(false), 1500);
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

  // Function to render floating shapes
  const renderFloatingShapes = () => {
    return floatingShapes.map(shape => {
      const shapeStyles = {
        left: `${shape.x}%`,
        top: `${shape.y}%`,
        width: `${shape.size}px`,
        height: `${shape.size}px`,
        backgroundColor: shape.color,
        opacity: shape.opacity,
        transform: `rotate(${shape.rotation}deg)`,
        animation: `float ${shape.speed}s ease-in-out infinite`,
        animationDelay: `${shape.delay}s`
      };
      
      let shapeElement;
      switch(shape.type) {
        case 'square':
          shapeElement = <div style={shapeStyles} className="absolute rounded-lg" />;
          break;
        case 'triangle':
          shapeElement = (
            <div style={{ 
              ...shapeStyles, 
              backgroundColor: 'transparent',
              width: 0,
              height: 0,
              borderLeft: `${shape.size/2}px solid transparent`,
              borderRight: `${shape.size/2}px solid transparent`,
              borderBottom: `${shape.size}px solid ${shape.color}`
            }} className="absolute" />
          );
          break;
        default:
          shapeElement = <div style={shapeStyles} className="absolute rounded-full" />;
      }
      
      return <div key={shape.id} className="absolute">{shapeElement}</div>;
    });
  };

  return (
    <div name='contact' className='w-full section-min-height bg-primary section-padding flex justify-center items-center p-4 relative overflow-hidden'>
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-800"></div>
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-grid-pattern animate-grid-move"></div>
      </div>

      {/* Floating shapes background */}
      <div className="absolute inset-0 overflow-hidden">
        {renderFloatingShapes()}
      </div>
      
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
      />

      {/* Main content with glassmorphism */}
      <div 
        ref={containerRef}
        className={`max-w-[700px] mx-auto relative z-10 transform-gpu transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div 
          className='perspective-1000 w-full'
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transition: 'transform 0.3s ease-out'
          }}
        >
          <div className='backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl contact-container transform-style-3d relative'>
            {/* Glowing edge effect */}
            <div className="absolute inset-0 rounded-3xl glow-effect"></div>
            
            <div className='pb-8 text-center'>
              <h2 className='text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4 contact-title-enhanced animate-pulse-slow'>
                Let&apos;s Connect
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6 title-underline"></div>
              <p className='text-gray-300 text-lg leading-relaxed'>
                Ready to bring your ideas to life? Drop me a message and let&apos;s create something amazing together.
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
                  <label className='form-label relative'>
                    <div className='input-container relative'>
                      <input
                        type='text'
                        name='name'
                        value={form.name}
                        onChange={handleChange}
                        onFocus={() => setFormFocus('name')}
                        onBlur={() => setFormFocus(null)}
                        className='enhanced-input py-4 px-4 pt-6'
                        placeholder=" "
                        required
                      />
                      <span className={`floating-label transition-all duration-300 ${
                        form.name ? 'active' : ''
                      } ${formFocus === 'name' ? 'focused' : ''}`}>
                        Full Name
                      </span>
                      <div className={`input-border ${formFocus === 'name' ? 'active' : ''}`}></div>
                    </div>
                  </label>
                </div>
                
                <div className='form-group'>
                  <label className='form-label relative'>
                    <div className='input-container relative'>
                      <input
                        type='email'
                        name='email'
                        value={form.email}
                        onChange={handleChange}
                        onFocus={() => setFormFocus('email')}
                        onBlur={() => setFormFocus(null)}
                        className='enhanced-input py-4 px-4 pt-6'
                        placeholder=" "
                        required
                      />
                      <span className={`floating-label transition-all duration-300 ${
                        form.email ? 'active' : ''
                      } ${formFocus === 'email' ? 'focused' : ''}`}>
                        Email Address
                      </span>
                      <div className={`input-border ${formFocus === 'email' ? 'active' : ''}`}></div>
                    </div>
                  </label>
                </div>
              </div>
              
              <div className='form-group'>
                <label className='form-label relative'>
                  <div className='input-container relative'>
                    <textarea
                      rows='6'
                      name='message'
                      value={form.message}
                      onChange={handleChange}
                      onFocus={() => setFormFocus('message')}
                      onBlur={() => setFormFocus(null)}
                      className='enhanced-input resize-none py-4 px-4 pt-6'
                      placeholder=" "
                      required
                    />
                    <span className={`floating-label transition-all duration-300 ${
                      form.message ? 'active' : ''
                    } ${formFocus === 'message' ? 'focused' : ''}`}>
                      Your Message
                    </span>
                    <div className={`input-border ${formFocus === 'message' ? 'active' : ''}`}></div>
                  </div>
                </label>
              </div>
              
              {/* Enhanced submit button */}
              <div className='text-center'>
                <button
                  type='submit'
                  onClick={createRipple}
                  className='enhanced-button group'
                  disabled={loading}
                >
                  <span className="button-content">
                    <span className="button-icon group-hover:rotate-12 transition-transform duration-300">
                      {loading ? '⚡' : '✨'}
                    </span>
                    <span className="button-text relative overflow-hidden">
                      {loading ? (
                        <span className="flex items-center">
                          Sending
                          <span className="loading-dots ml-1">
                            <span>.</span><span>.</span><span>.</span>
                          </span>
                        </span>
                      ) : 'Send Message'}
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
                  
                  {/* Animated button border */}
                  <div className="btn-border-animation"></div>
                </button>
              </div>
              
              {/* Enhanced status messages */}
              {success && (
                <div className='status-message success-enhanced animate-slideIn'>
                  <div className="status-icon">
                    <div className="success-animation">
                      <div className="success-circle"></div>
                      <div className="success-check"></div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-green-400">Message Sent Successfully!</h4>
                    <p className="text-green-300/80">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}
              
              {error && (
                <div className='status-message error-enhanced animate-slideIn'>
                  <div className="status-icon">
                    <div className="error-animation">
                      <div className="error-circle"></div>
                      <div className="error-line1"></div>
                      <div className="error-line2"></div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-red-400">Oops! Something went wrong</h4>
                    <p className="text-red-300/80">{error}</p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;