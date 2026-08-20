import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  const [lightTheme, setLightTheme] = useState(
    localStorage.getItem("theme") === "light"
  );

  useEffect(() => {
    document.body.className = lightTheme ? "light-theme" : "";

    localStorage.setItem(
      "theme",
      lightTheme ? "light" : "dark"
    );
  }, [lightTheme]);

  return (
    <>
      <Navbar
        lightTheme={lightTheme}
        setLightTheme={setLightTheme}
      />

      <main>
        <Hero />

        <About />

        <Projects />

        <Contact />
      </main>

      <footer>
        <p>
          © {new Date().getFullYear()} Tejashwini.
          Built with React.
        </p>

        <div className="footer-links">
          <a
            href="https://github.com/tejuuu-31"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/tejashwini-rajesh-2423813ba"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;