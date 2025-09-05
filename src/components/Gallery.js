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
          <img src="https://cdn.pixabay.com/photo/2022/08/22/11/04/skate-7403432_1280.jpg" alt="Gallery Image 1" />
          </div>
          <div className="gallery-item">
          <img src="https://cdn.pixabay.com/photo/2022/08/22/11/04/skate-7403432_1280.jpg" alt="Gallery Image 1" />
          </div>
          <div className="gallery-item">
          <img src="https://cdn.pixabay.com/photo/2022/08/22/11/04/skate-7403432_1280.jpg" alt="Gallery Image 1" />
          </div>
          <div className="gallery-item">
          <img src="https://cdn.pixabay.com/photo/2022/08/22/11/04/skate-7403432_1280.jpg" alt="Gallery Image 1" />
          </div>
          <div className="gallery-item">
          <img src="https://cdn.pixabay.com/photo/2022/08/22/11/04/skate-7403432_1280.jpg" alt="Gallery Image 1" />
          </div>
          <div className="gallery-item">
          <img src="https://cdn.pixabay.com/photo/2022/08/22/11/04/skate-7403432_1280.jpg" alt="Gallery Image 1" />
          </div>
          </div>
        </div>
    </section>
  );
}
export default Gallery;