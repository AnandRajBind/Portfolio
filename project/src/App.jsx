import  { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeProvider from './context/ThemeContext';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import LoadingScreen from './components/LoadingScreen';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Pre-load key resources
  useEffect(() => {
    // Function to pre-load critical images
    const preloadImages = async () => {
      const criticalImages = [
        // Add paths to critical images you want to preload
        // Example: '/images/profile.jpg', '/images/logo.png'
      ];
      
      // Wait for images to load
      const imagePromises = criticalImages.map(src => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve; // Continue even if an image fails
        });
      });
      // Set a minimum loading time for better UX
      const minLoadingTime = new Promise(resolve => setTimeout(resolve, 2800));
      
      // Wait for both images and minimum time
      await Promise.all([...imagePromises, minLoadingTime]);
      
      // Hide loading screen after a short delay for animations
      setTimeout(() => setIsLoading(false), 200);
    };
    
    preloadImages();
    
    // Fallback timer (longer to account for pre-loading)
    const fallbackTimer = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(fallbackTimer);
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider>
        <SEO />
        
        <AnimatePresence mode="wait">
          {isLoading && <LoadingScreen setLoading={setIsLoading} />}
        </AnimatePresence>
        
        <div className={isLoading ? 'hidden' : 'block'}>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <Contact />
          <Footer />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;