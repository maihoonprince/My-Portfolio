import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About"
import Skills from "./components/Skills";
import Works from "./components/Works";
import Footer from "./components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={`w-full h-fill min-h-[100vh] bg-white ${darkMode && "dark"}`}>
     <div className="w-full h-full min-h-[100vh] bg-white">
      <div className="dark:bg-gradient-to-tr from-[#0235a3] via-[#030a1c] to-[#05174e]">
        <Navbar 
        darkMode={darkMode}
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        toggleTheme={toggleTheme}
        />

        <section id='home'
        className="px-0 lg:px-5 2xl:px-40 py-10 lg:py-0"
        >
          <Header />
        </section>
      </div>

      <section 
      className="w-full bg-[#061130] py-20">
        <Projects />
      </section>

      <section id='about'
      className='w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0 dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#030a1c] to-[#05174e]'>
        <About />
      </section>

      <section
          id='skills'
          className='w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0 dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#05174e] to-[#030a1c]'
        >
          <Skills />
        </section>

        <section
          id='projects'
          className='w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0 dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#030a1c] to-[#05174e]'
        >
          <Works />
        </section>

        <div className='w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#05174e] to-[#030a1c] '>
          <Footer />
        </div>
     </div>
    </div>
  );
}

export default App;
