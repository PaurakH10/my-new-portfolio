import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
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
        <p>© 2025 Your Name. All rights reserved.</p>
        <div className="footer-links">
            <a href="#Projects">Home</a>
            <a href="#Projects">About</a>
          <a href="#Projects">Projects</a>
          <a href="#About">Contact</a>
          <a href="#Contact">Gallery</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
