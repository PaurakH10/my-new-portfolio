// src/components/Contact.js
import React from "react";
import './Contact.css';

const Contact = () => {
  return (
    <section className="contac" id="Contact">
      <div className="contact">
        <div className="contact-title">
          <h1>Get in <span>touch</span></h1>
        </div>

        <div className="contact-section">
          {/* LEFT SIDE */}
          <div className="contact-left">
            <h1>Let's <span>talk</span></h1>
            <p>
              I am currently available to take on new projects, so feel free to
              send me a message about anything that you want me to work on. You
              can contact me anytime.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                
                <p><strong>Gmail:</strong> paurakhbhandari847@gmail.com</p>
              </div>
              <div className="contact-detail">
                
                <p><strong>Phone No:</strong> +772-825-524</p>
              </div>
              <div className="contact-detail">
               
                <p><strong>Location:</strong> CA, United States</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <form className="contact-right" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="name">Your Name</label>
            <input type="text" placeholder="Enter your name" required name="name" id="name" />

            <label htmlFor="email">Your Email</label>
            <input type="email" placeholder="Enter your email" required name="email" id="email" />

            <label htmlFor="message">Write your message here</label>
            <textarea name="message" rows="8" placeholder="Enter your message" required id="message"></textarea>

            <button type="submit" className="btn-primary">Submit now</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
