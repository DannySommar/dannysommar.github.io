import Navbar from './components/Navbar';
import About from './components/About';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <>
      {/* {theme toggle} */}
      <ThemeToggle />
      {/* {Background stuff} */}

      <Navbar />
      <About />


      {/* {footer} */}
    </>
  )
}

export default App
