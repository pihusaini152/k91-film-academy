import React from "react";
import "./Footer.css";

import {
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {

  return (

    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-box">

          <h2>K91 Film Academy</h2>

          <p>
            Learn professional filmmaking, video editing,
            VFX and cinematic storytelling with real-world projects.
          </p>

          <div className="footer-contact">

            <div>
              <FaEnvelope />
              <span>hemant861983@gmail.com</span>
            </div>

            <div>
              <FaPhoneAlt />
              <span>+91 8619834121</span>
            </div>

            <div>
              <FaMapMarkerAlt />
              <span>Sikar, Rajasthan</span>
            </div>

          </div>

        </div>

        {/* QUICK LINKS */}
        <div className="footer-box">

          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/courses">Courses</a>
          <a href="/training">Training</a>
          <a href="/about">About</a>
          <a href="/admission">Admission</a>
          <a href="/contact">Contact</a>

        </div>

        {/* COURSES */}
        <div className="footer-box">

          <h3>Popular Courses</h3>

          <p>Basic Video Editing</p>
          <p>Advanced Editing</p>
          <p>Motion Graphics & VFX</p>
          <p>Professional Colour Grading</p>
          <p>Complete Filmmaking Course</p>

        </div>

        {/* SOCIAL */}
        <div className="footer-box">

          <h3>Connect With Us</h3>

          <div className="footer-socials">

            <a
              href="https://api.whatsapp.com/send/?phone=918619834121&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.instagram.com/k91_film_academy/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/people/Hemant-Kumar/100084060222178/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.youtube.com/@k91_production"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube />
            </a>

            <a
              href="https://linkedin.com/in/hemant-kumar-538154341"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://github.com/Hemantk91"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">

        <p>
          © 2026 K91 Film Academy. All Rights Reserved.
        </p>

      </div>

    </footer>

  );
};

export default Footer;