import "./Hero.css";
// If you have a local image, uncomment the next line and place hero.jpg in src/assets
// import heroImg from "../assets/hero.jpg";
export default function Hero() {
  return (
    <section className="hero fadeInRight" id="Hero">
      <div className="hero-container">
        {/* Left: Text */}
        <div className="hero-content">
          <p className="eyebrow">Build with React</p>
          <h1 className="hero-title">
            Hello Everyone!!<br />
            I am <span className="highlight">Paurakh Bhandari</span>
          </h1>
          <p className="hero-subtitle">
           I am a student who loves technology and design. I have worked on projects using Figma, WordPress, UI/UX design, databases, and website development.I am learning to create easy-to-use and creative digital solutions.</p>
          <div className="hero-actions">
            <a className="btn1 btn-primary" href="#Contact">Hire me</a>
            <a className="btn1 btn-primary" href="#Contact">Download CV</a>
          </div>
          
        </div>
        {/* Right: Image */}
        <div className="hero-media" aria-hidden="true">
          {/* Use local image if imported above: <img src={heroImg} alt="" /> */}
          {/* Or use a placeholder image from the web: */}
          <img
            src="https://www.365scores.com/news/wp-content/uploads/2025/01/GettyImages-671969260-scaled.jpg"
            alt=""
            loading="lazy"
          />
          <hr class="section-divider animated" />
        </div>
      </div>
      
    </section>
  );
}