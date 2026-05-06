import React from "react";
import "./About.css";
import founder from "../../assets/about.jpg"; // ✅ fixed path

const About = () => {
  return (
    <section id="about" className="about fade-in">

      {/* TITLE */}
      <h2 className="about-title">
        About <span>K91 Film Academy</span>
      </h2>

      <p className="about-sub">
        Crafting Visual Stories That Captivate and Inspire
      </p>

      {/* MAIN SECTION */}
      <div className="about-main">

        {/* LEFT IMAGE */}
        <div className="about-img fade-up">
          <img src={founder} alt="founder" />
          <div className="experience">2+ Years Experience</div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content fade-up">

          <h3>Our Story</h3>

          <p>
            I’m Hemant, founder of K91 Film Academy, where passion meets creativity.
            With years of experience in video shooting and editing, I’ve turned a love
            for cameras into a growing training academy.
          </p>

          <p>
            We focus on real-world filmmaking, helping students learn industry-level
            skills through practical training and live projects.
          </p>

          {/* BOXES */}
          <div className="about-box fade-up">
            <h4>🎯 Our Mission</h4>
            <p>
              To provide practical filmmaking training and help students build
              successful creative careers.
            </p>
          </div>

          <div className="about-box fade-up">
            <h4>🚀 Our Vision</h4>
            <p>
              To become the most trusted filmmaking academy with real-world training.
            </p>
          </div>

        </div>

      </div>

      {/* STATS */}
      <div className="about-stats">
        <div className="stat fade-up">
          <h3>50+</h3>
          <p>Projects Completed</p>
        </div>
        <div className="stat fade-up">
          <h3>2+</h3>
          <p>Years Experience</p>
        </div>
        <div className="stat fade-up">
          <h3>10+</h3>
          <p>Happy Students</p>
        </div>
        <div className="stat fade-up">
          <h3>100%</h3>
          <p>Satisfaction</p>
        </div>
      </div>

    </section>
  );
};

export default About;