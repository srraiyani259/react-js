
import About from './About';
import { useState } from 'react';
import './App.css';
import Contact from './Contact';
import Header from './Header';
import Navbar from './Navbar';
import Projects from './Projects';



function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
<>
<div className={darkMode ? 'App dark-mode' : 'App'}>
      <Header toggleTheme={toggleTheme} />
      <Navbar />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
</>
  );
}

export default App;
