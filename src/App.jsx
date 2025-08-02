import Navbar from './components/Navbar';
import About from './components/About';
import HeroSection from './components/HeroSection';
import ThemeToggle from './components/ThemeToggle';
import Background from './components/Background';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />

      <Background />

      <Navbar />


      <main>
        <HeroSection />
      </main>


      {/* {footer} */}
    </div>
  )
}

export default App
