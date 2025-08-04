import Navbar from './components/Navbar';
import About from './components/About';
import HeroSection from './components/HeroSection';
import Background from './components/Background';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* <ThemeToggle /> */}

      <Background />

      <Navbar />


      <main>
        <HeroSection />
        <About />
        <Projects />
      </main>


      <Footer />
    </div>
  )
}

export default App
