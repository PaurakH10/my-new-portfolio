import { useState, useEffect } from "react";
import "./Header.css";
export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let currentSection = "Hero";
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = section.id;
        }
      });

      if (window.scrollY < 100) {
        currentSection = "Hero";
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <div className="container">
        <a className="logo" href="/">Paurakh <span>Bhandari</span></a>
        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
        <nav className={open ? "nav open" : "nav"}>
          <a href="#Hero" className={`nav-link ${activeSection === "Hero" ? "active" : ""}`}>Home</a>
          <a href="#Services" className={`nav-link ${activeSection === "Services" ? "active" : ""}`}>Services</a>
          <a href="#About" className={`nav-link ${activeSection === "About" ? "active" : ""}`}>About</a>
          <a href="#Projects" className={`nav-link ${activeSection === "Projects" ? "active" : ""}`}>Projects</a>
          <a href="#Contact" className={`nav-link ${activeSection === "Contact" ? "active" : ""}`}>Contact</a>
        </nav>
      </div>
    </header>
  );
}