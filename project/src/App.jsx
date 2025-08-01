import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import ThemeProvider from './context/ThemeContext';
import CreativeBackground from "./components/CreativeBackground";
import FloatingElements from "./components/FloatingElements";
import Achievements from './components/Achievements';

function App() {
  return (
    <ThemeProvider>
      <div className="app bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
        <CreativeBackground />
        <FloatingElements />
        <Navbar />
        <ThemeToggle />
        <Hero />
        <About />
        <Achievements />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;