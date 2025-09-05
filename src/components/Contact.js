// src/components/Contact.js
import React, { useRef, useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
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

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_i2j775k',      // Replace with your EmailJS service ID
      'template_k6xrhpa',     // Replace with your EmailJS template ID
      form.current,
      'DgINRXvhqKiVs2RVX'       // Replace with your EmailJS public key
    )
    .then((result) => {
      console.log(result.text);
      alert("Message sent successfully!");
      e.target.reset(); // Reset form fields
    })
    .catch((error) => {
      console.log(error.text);
      alert("Failed to send message. Please try again.");
    });
  };

  return (
    <section ref={ref} className={`contac fadeInRight ${visible ? 'visible' : ''}`} id="Contact">
      <div className="contact">
        <div className="contact-title">
          <h1>Get in <span>touch</span></h1>
        </div>

        <div className="contact-section">
          {/* LEFT SIDE */}
          <div className="contact-left">
            <h1>Let's <span>Talk</span></h1>
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
          <form ref={form} className="contact-right" onSubmit={sendEmail}>
            <label htmlFor="name">Your Name</label>
            <input type="text" placeholder="Enter your name" required name="from_name" id="name" />

            <label htmlFor="email">Your Email</label>
            <input type="email" placeholder="Enter your email" required name="from_email" id="email" />

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
