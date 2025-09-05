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
          <img src="https://images-cdn.ubuy.co.id/65eec32f45467825a63ed6ce-nike-fc-barcelona-home-youth-soccer.jpg" alt="Gallery Image 1" />
          </div>
          <div className="gallery-item">
          <img src="https://i.namu.wiki/i/DZFBzzYUTooUqJv4lQbAgSlCjOlmndpYTR1JcFC6cF-tZTpSeLNyDb7JlHQeVx3QF9k7d1tQmHSa3YZrovXa8g.webp" alt="Gallery Image 1" />
          </div>
          <div className="gallery-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVl-j04O3swPMgcNCExtSc_PAjavlQ5Lncsg&s" alt="Gallery Image 1" />
          </div>
          <div className="gallery-item">
          <img src="https://i.ebayimg.com/images/g/ZcEAAOSw6lplOcZx/s-l1200.jpg" alt="Gallery Image 1" />
          </div>
          <div className="gallery-item">
          <img src="https://indiansoccermart.in/cdn/shop/files/PhotoRoom-20230721_145410_1_1200x1200.png?v=1689931499" alt="Gallery Image 1" />
          </div>
          <div className="gallery-item">
          <img src="https://theshoppies.pk/wp-content/uploads/2023/05/FC-Barcelona-2025-26-Home-Jersey.jpg" alt="Gallery Image 1" />
          </div>
          </div>
        </div>
    </section>
  );
}
export default Gallery;