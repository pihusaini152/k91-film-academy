import React, { useEffect } from "react";
import "./Contact.css";

import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-up").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();

  }, []);

  return (

    <section id="contact" className="contact-section">

      {/* BG EFFECT */}
      <div className="contact-bg">
        <div className="glow glow1"></div>
        <div className="glow glow2"></div>
      </div>

      <div className="contact-container">

        {/* TITLE */}
        <div className="contact-title fade-up">

          <span className="mini-tag">
            GET IN TOUCH
          </span>

          <h1>
            Contact <span>K91 Film Academy</span>
          </h1>

          <p>
            Connect with us for admissions, filmmaking training,
            editing services and collaborations.
          </p>

        </div>

        {/* MAIN */}
        <div className="contact-main">

          {/* LEFT */}
          <div className="contact-left fade-up">

            {/* EMAIL */}
            <a
              href="mailto:hemant861983@gmail.com"
              className="contact-card"
            >

              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <div>
                <h3>Email Address</h3>
                <p>hemant861983@gmail.com</p>
              </div>

            </a>

            {/* PHONE */}
            <a
              href="tel:+918619834121"
              className="contact-card"
            >

              <div className="contact-icon">
                <FaPhoneAlt />
              </div>

              <div>
                <h3>Phone Number</h3>
                <p>+91 8619834121</p>
              </div>

            </a>

            {/* ADDRESS */}
            <a
              href="https://www.google.com/maps/place/K91+Production/@27.6519289,75.1663385,17z/data=!3m1!4b1!4m6!3m5!1s0x396cbb352efd0981:0x6a9540d3aedbdb18!8m2!3d27.6519289!4d75.1663385!16s%2Fg%2F11ks1zzb8f"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >

              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3>Address</h3>

                <p>
                  Nawalgarh Rd, Bhadwasi,
                  Sikar, Rajasthan 332024
                </p>

              </div>

            </a>

          </div>

          {/* RIGHT */}
          <div className="contact-right fade-up">

            <div className="social-box">

              <h2>Follow & Connect</h2>

              <p>
                Stay connected with K91 Film Academy on social media.
              </p>

              {/* SOCIALS */}
              <div className="social-grid">

                <a
                  href="https://api.whatsapp.com/send/?phone=918619834121&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noreferrer"
                  className="social-card"
                >
                  <FaWhatsapp />
                  <span>WhatsApp</span>
                </a>

                <a
                  href="https://www.instagram.com/k91_film_academy/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-card"
                >
                  <FaInstagram />
                  <span>Instagram</span>
                </a>

                <a
                  href="https://www.facebook.com/people/Hemant-Kumar/100084060222178/?rdid=zHv5bhgtgUfJ7DEh&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CuBQDQ6JU%2F"
                  target="_blank"
                  rel="noreferrer"
                  className="social-card"
                >
                  <FaFacebookF />
                  <span>Facebook</span>
                </a>

                <a
                  href="https://www.youtube.com/@k91_production?si=fM7V_E9OGWtH0nvr"
                  target="_blank"
                  rel="noreferrer"
                  className="social-card"
                >
                  <FaYoutube />
                  <span>YouTube</span>
                </a>

                <a
                  href="https://linkedin.com/in/hemant-kumar-538154341"
                  target="_blank"
                  rel="noreferrer"
                  className="social-card"
                >
                  <FaLinkedinIn />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/Hemantk91"
                  target="_blank"
                  rel="noreferrer"
                  className="social-card"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>

              </div>

              {/* BUTTONS */}
              <div className="contact-buttons">

                <a
                  href="https://api.whatsapp.com/send/?phone=918619834121&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noreferrer"
                  className="whatsapp-btn"
                >
                  <FaWhatsapp />
                  Chat on WhatsApp
                </a>

                <a
                  href="tel:+918619834121"
                  className="call-btn"
                >
                  <FaPhoneAlt />
                  Call Now
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
};

export default Contact;