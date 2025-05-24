import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
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
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;