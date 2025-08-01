import Navbar from './components/Navbar';
import About from './components/About';
import ThemeToggle from './components/ThemeToggle';
import Background from './components/Background';

function App() {
  return (
    <>
      {/* {theme toggle} */}
      <ThemeToggle />
      {/* {Background stuff} */}
      <Background />

      <Navbar />
      <About />


      {/* {footer} */}
    </>
  )
}

export default App
