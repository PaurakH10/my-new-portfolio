import React from "react";
import './Gallery.css';
const Gallery = () => {
  return (
    <section className="gallery fadeInLeft" id="Projects">
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