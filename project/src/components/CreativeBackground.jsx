import React, { useEffect, useRef, useState } from 'react';

const CreativeBackground = () => {
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setIsHovering(true);
    };
    
    const handleMouseLeave = () => {
      setIsHovering(false);
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    handleResize();
    
    // Creative particle system with multiple types
    const particles = [];
    const wavePoints = [];
    const numberOfParticles = 150;
    const numberOfWavePoints = 50;
    
    // Floating orb particles
    class FloatingOrb {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 4 + 2;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
        this.hue = Math.random() * 60 + 240; // Purple to blue range
        this.brightness = Math.random() * 50 + 50;
        this.alpha = Math.random() * 0.5 + 0.3;
        this.pulse = Math.random() * 0.02 + 0.01;
        this.pulseDirection = 1;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Mouse interaction
        if (isHovering) {
          const dx = mousePos.current.x - this.x;
          const dy = mousePos.current.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            this.x -= dx * 0.02;
            this.y -= dy * 0.02;
          }
        }
        
        // Boundary wrapping
        if (this.x > canvas.width + 50) this.x = -50;
        if (this.x < -50) this.x = canvas.width + 50;
        if (this.y > canvas.height + 50) this.y = -50;
        if (this.y < -50) this.y = canvas.height + 50;
        
        // Pulsing effect
        this.brightness += this.pulse * this.pulseDirection;
        if (this.brightness > 80 || this.brightness < 30) {
          this.pulseDirection *= -1;
        }
      }
      
      draw() {
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2);
        gradient.addColorStop(0, `hsla(${this.hue}, 70%, ${this.brightness}%, ${this.alpha})`);
        gradient.addColorStop(0.5, `hsla(${this.hue}, 70%, ${this.brightness - 20}%, ${this.alpha * 0.5})`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Wave points for dynamic background waves
    class WavePoint {
      constructor(index) {
        this.index = index;
        this.x = (canvas.width / numberOfWavePoints) * index;
        this.baseY = canvas.height * 0.7;
        this.y = this.baseY;
        this.amplitude = Math.random() * 50 + 30;
        this.frequency = Math.random() * 0.02 + 0.01;
        this.phase = Math.random() * Math.PI * 2;
      }
      
      update(time) {
        this.y = this.baseY + Math.sin(time * this.frequency + this.phase) * this.amplitude;
        
        // Mouse interaction
        if (isHovering) {
          const distance = Math.abs(mousePos.current.x - this.x);
          if (distance < 200) {
            const influence = (200 - distance) / 200;
            this.y += (mousePos.current.y - this.baseY) * influence * 0.3;
          }
        }
      }
    }
    
    // Initialize particles and wave points
    for (let i = 0; i < numberOfParticles; i++) {
      particles.push(new FloatingOrb());
    }
    
    for (let i = 0; i < numberOfWavePoints; i++) {
      wavePoints.push(new WavePoint(i));
    }
    
    // Neural network connections
    const createConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            const opacity = (120 - distance) / 120;
            ctx.strokeStyle = `rgba(147, 51, 234, ${opacity * 0.3})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };
    
    // Draw flowing waves
    const drawWaves = () => {
      ctx.beginPath();
      ctx.moveTo(0, wavePoints[0].y);
      
      for (let i = 1; i < wavePoints.length; i++) {
        const controlX = wavePoints[i - 1].x + (wavePoints[i].x - wavePoints[i - 1].x) / 2;
        const controlY1 = wavePoints[i - 1].y;
        const controlY2 = wavePoints[i].y;
        
        ctx.quadraticCurveTo(controlX, controlY1, wavePoints[i].x, wavePoints[i].y);
      }
      
      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();
      
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(147, 51, 234, 0.1)');
      gradient.addColorStop(1, 'rgba(59, 130, 246, 0.3)');
      
      ctx.fillStyle = gradient;
      ctx.fill();
    };
    
    // Animation loop
    let time = 0;
    const animate = () => {
      time += 0.01;
      
      // Clear with subtle gradient
      const bgGradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      bgGradient.addColorStop(0, 'rgba(15, 23, 42, 0.95)');
      bgGradient.addColorStop(1, 'rgba(30, 41, 59, 0.98)');
      
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw wave points
      wavePoints.forEach(point => point.update(time));
      drawWaves();
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Draw connections
      createConnections();
      
      // Mouse glow effect
      if (isHovering) {
        const glowGradient = ctx.createRadialGradient(
          mousePos.current.x, mousePos.current.y, 0,
          mousePos.current.x, mousePos.current.y, 100
        );
        glowGradient.addColorStop(0, 'rgba(147, 51, 234, 0.2)');
        glowGradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(mousePos.current.x, mousePos.current.y, 100, 0, Math.PI * 2);
        ctx.fill();
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovering]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}
    />
  );
};

export default CreativeBackground;
