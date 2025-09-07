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
          <img src="https://www.investopedia.com/thmb/ckPwC5ARwco1nOSCKVGE57se8MI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1245748917-99e3329a7b8147e8ab648806220ce153.jpg" alt="Gallery Image 1" />
          </div>
          <div className="gallery-item">
          <img src="https://i.namu.wiki/i/DZFBzzYUTooUqJv4lQbAgSlCjOlmndpYTR1JcFC6cF-tZTpSeLNyDb7JlHQeVx3QF9k7d1tQmHSa3YZrovXa8g.webp" alt="Gallery Image 1" />
          </div>
          <div className="gallery-item">
          <img src="https://e0.365dm.com/20/08/2048x1152/skysports-lionel-messi-graphic_5077688.jpg?20200826083544" alt="Gallery Image 1" />
          </div>
          <div className="gallery-item">
          <img src="https://www.fcbarcelona.com/photo-resources/2022/08/02/ae5252d1-b79b-4950-9e34-6e67fac09bb0/LeoMessi20092010_pic_fcb-arsenal62.jpg?width=1200&height=750" alt="Gallery Image 1" />
          </div>
          <div className="gallery-item">
          <img src="https://www.si.com/.image/t_share/MTY4MTAyNTc0Nzg3NDA1MDcz/messi-jersey-real-madridjpg.jpg" alt="Gallery Image 1" />
          </div>
          <div className="gallery-item">
          <img src="https://images.indianexpress.com/2020/12/lionel-messi.jpg?w=414" alt="Gallery Image 1" />
          </div>
          </div>
        </div>
    </section>
  );
}
export default Gallery;