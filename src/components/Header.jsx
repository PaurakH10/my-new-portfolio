import { useState } from "react";
import "./Header.css";
export default function Header() {
  const [open, setOpen] = useState(false);
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
          <a href="#Hero" className="nav-link active">Home</a>
          <a href="#About" className="nav-link">About</a>
          <a href="#Projects" className="nav-link">Projects</a>
          <a href="#Contact" className="nav-link">Contact</a>
          <a href="#Services" className="nav-link">Services</a>
        </nav>
      </div>
    </header>
  );
}