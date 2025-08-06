import { useEffect } from 'react'; 

import Navbar from './components/Navbar';
import About from './components/About';
import HeroSection from './components/HeroSection';
import Background from './components/Background';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

import { initSmoothScroll } from "./lib/utils"

function App() {

  useEffect(() => {
    initSmoothScroll();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* <ThemeToggle /> */}

      <Background />

      <Navbar />


      <main>
        <HeroSection />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>


      <Footer />
    </div>
  )
}

export default App
