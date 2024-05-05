import React from "react";
import PortfolioNavbar from "./components/PortfolioNavbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollUpButton from "./components/ScrollUpButton";
import Footer from "./components/Footer";

const App = () => {

  return (
    <div>
      <ScrollUpButton />
      <PortfolioNavbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
