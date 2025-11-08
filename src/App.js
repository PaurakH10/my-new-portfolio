import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from"./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <About />
      <Gallery/>
      <Contact />
      <Footer/>
    </div>
  );
}
export default App;