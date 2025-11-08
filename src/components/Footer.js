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
    <footer ref={ref} className={`footer ${visible ? 'visible' : ''}`}>
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z" fill="url(#gradient)" />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6dd1ed" />
              <stop offset="100%" stopColor="#4ab1c5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section footer-about">
            <h3>Paurakh Bhandari</h3>
            <p className="footer-description">
              A passionate student exploring technology, design, and development. 
              Creating digital experiences that matter.
            </p>
            <div className="social-icons">
              <a href="https://github.com/PaurakH10/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="ri-github-fill"></i>
              </a>
              <a href="https://www.facebook.com/paurakh.bhandari.777/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="ri-facebook-circle-fill"></i>
              </a>
              <a href="https://www.instagram.com/paurakh_10/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="https://www.youtube.com/@prasanna-freefire1667" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <i className="ri-youtube-fill"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="ri-twitter-fill"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#Hero"><i className="ri-arrow-right-s-line"></i>Home</a></li>
              <li><a href="#About"><i className="ri-arrow-right-s-line"></i>About</a></li>
              <li><a href="#Projects"><i className="ri-arrow-right-s-line"></i>Projects</a></li>
              <li><a href="#Services"><i className="ri-arrow-right-s-line"></i>Services</a></li>
              <li><a href="#Contact"><i className="ri-arrow-right-s-line"></i>Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Get In Touch</h4>
            <div className="footer-contact">
              <p><i className="ri-mail-line"></i> hello@paurakh.com</p>
              <p><i className="ri-phone-line"></i> +977 98XXXXXXXX</p>
              <p><i className="ri-map-pin-line"></i> Kathmandu, Nepal</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Paurakh Bhandari. All rights reserved.</p>
          <p className="footer-tagline">Crafted with <i className="ri-heart-fill"></i> and React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
