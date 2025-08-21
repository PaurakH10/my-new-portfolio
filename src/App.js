import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from"./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <About />
      <Gallery/>
      <Contact />
    </div>
  );
}
export default App;