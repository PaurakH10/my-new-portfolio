import "./Hero.css";
import { useEffect, useRef, useState } from "react";
// import heroImg from "../assets/hero.jpg";

export default function Hero() {
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
    <section ref={ref} className={`hero ${visible ? 'visible' : ''}`} id="Hero">
      <div className="hero-container">

        {/* Left: Text with fadeInLeft animation */}
        <div className="fadeInLeft">
          <div className="hero-content">
            <p className="eyebrow">Build with React</p>
            <h1 className="hero-title">
              Hello Everyone!!<br />
              I am <span className="highlight"><strong>Paurakh Bhandari</strong></span>
            </h1>
            <p className="hero-subtitle">
              I am a student who loves technology and design. I have worked on projects using Figma, WordPress, UI/UX design, databases, and website development.
              I am learning to create easy-to-use and creative digital solutions.
            </p>
            <div className="hero-actions">
              <a className="btn1 btn-primary" href="#Contact">Hire me</a>
              <a className="btn1 btn-primary" href="/Paurakh_Bhandari_CV.pdf" download>Download CV</a>
            </div>
          </div>
        </div>

        {/* Right: Image with fadeInRight animation */}
        <div className="fadeInRight">
          <div className="hero-media" aria-hidden="true">
            <img
              // src={heroImg}
              src="https://www.365scores.com/news/wp-content/uploads/2025/01/GettyImages-671969260-scaled.jpg"
              alt="Profile of Paurakh Bhandari"
              loading="lazy"
            />
            <hr className="section-divider animated" />
          </div>
        </div>
        
      </div>
    </section>
  );
}
