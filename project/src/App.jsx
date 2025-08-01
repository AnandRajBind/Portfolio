import React from 'react';
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

const App = () => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <SEO />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;