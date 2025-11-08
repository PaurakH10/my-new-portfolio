import React, { useEffect, useRef, useState } from "react";
import './Gallery.css';
const Gallery = () => {
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
    <section ref={ref} className={`gallery fadeInLeft ${visible ? 'visible' : ''}`} id="Projects">
      <div className="gallery-container">
        <div className="gallery-title">
            <h1>My Recent <span>Projects</span></h1> 
            </div>
        <div className="gallery-grid">
          <div className="gallery-item">
          <img src="/project1.jpg" alt="Web.com Website Examples" />
          </div>
          <div className="gallery-item">
          <img src="/project2.webp" alt="E-commerce Website Designs" />
          </div>
          <div className="gallery-item">
          <img src="/project3.png" alt="Serenity in Leadership Blog" />
          </div>
          <div className="gallery-item">
          <img src="/project4.jpg" alt="Website Design Template" />
          </div>
          <div className="gallery-item">
          <img src="/project5.jpg" alt="Copywriter Portfolio Website" />
          </div>
          <div className="gallery-item">
          <img src="/project6.jpg" alt="Website Template Examples" />
          </div>
          </div>
        </div>
    </section>
  );
}
export default Gallery;