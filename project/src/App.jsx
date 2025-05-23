import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'; // Add Footer import
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';
import CreativeBackground from "./components/CreativeBackground";
import FloatingElements from "./components/FloatingElements";

function App() {
  return (
    <ThemeProvider>
      <div className="transition-colors duration-300 dark:bg-gray-900 relative">
        <CreativeBackground />
        <FloatingElements />
        <Navbar />
        <ThemeToggle />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer /> {/* Add Footer component */}
      </div>
    </ThemeProvider>
  );
}

export default App;