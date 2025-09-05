import React, { useEffect, useRef, useState } from "react";
import './Footer.css';

const Footer = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={ref} className={`footer fadeInLeft ${visible ? 'visible' : ''}`}>
      <div className="download-social">
        <div className="social-icons">
          <a href="https://github.com/PaurakH10/" target="_blank" rel="noopener noreferrer">
            <i className="ri-github-fill"></i>
          </a>
          <a href="https://www.facebook.com/paurakh.bhandari.777/" target="_blank" rel="noopener noreferrer">
            <i className="ri-facebook-circle-fill"></i>
          </a>
          <a href="https://www.instagram.com/paurakh_10/" target="_blank" rel="noopener noreferrer">
            <i className="ri-instagram-line"></i>
          </a>
          <a href="https://www.youtube.com/@prasanna-freefire1667" target="_blank" rel="noopener noreferrer">
            <i className="ri-youtube-fill"></i>
          </a>
        </div>
      </div>

      <div className="footer-container">
        <p>© 2025 Paurakh Bhandari. All rights reserved.</p>
        <div className="footer-links">
            <a href="#Hero">Home</a>
            <a href="#About">About</a>
          <a href="#Projects">Projects</a>
          <a href="#Contact">Contact</a>
          <a href="#Services">Services</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
