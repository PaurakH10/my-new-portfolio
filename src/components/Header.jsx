import { useState, useEffect } from "react";
import "./Header.css";
export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
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
          <a href="#About" className={`nav-link ${activeSection === "About" ? "active" : ""}`}>About</a>
          <a href="#Projects" className={`nav-link ${activeSection === "Projects" ? "active" : ""}`}>Projects</a>
          <a href="#Contact" className={`nav-link ${activeSection === "Contact" ? "active" : ""}`}>Contact</a>
          <a href="#Services" className={`nav-link ${activeSection === "Services" ? "active" : ""}`}>Services</a>
        </nav>
      </div>
    </header>
  );
}