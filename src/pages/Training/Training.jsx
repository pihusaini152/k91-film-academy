import React, { useEffect } from "react";
import "./Training.css";

import main from "../../assets/t4.jpg";
import img1 from "../../assets/t1.jpg";
import img2 from "../../assets/t2.jpg";
import img3 from "../../assets/t3.jpg";
import img4 from "../../assets/t5.jpg";

const Training = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".skill-card, .benefit-card, .gallery-img");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Get Started button handler
  const handleGetStarted = () => {
    // TODO: Admission form ka link laga dena
    window.location.href = "/admission"; // Ya apne form ke link se replace karna
    // example: window.location.href = "https://forms.google.com/your-form-link";
  };

  return (
    <section id="training" className="training">
      <div className="container">
        
        {/* Header */}
        <div className="header">
          <h1>
            Professional <span className="gold">Training</span> Program
          </h1>
          <p>Learn filmmaking from basics to advanced with real-world experience</p>
        </div>

        {/* Main Content - Left Text + Right Image */}
        <div className="main-content">
          <div className="left-content">
            <h2>What You'll Learn</h2>
            <ul>
              <li>✓ Professional Camera Handling</li>
              <li>✓ Cinematic Gimbal Movement</li>
              <li>✓ Studio Lighting Setup</li>
              <li>✓ Real Client Shoot Experience</li>
              <li>✓ Video Editing & Color Grading</li>
              <li>✓ Post Production & VFX</li>
            </ul>
            <div className="highlight">
              🎯 Real Projects + Practical Learning
            </div>
          </div>
          <div className="right-image">
            <img src={main} alt="Training Setup" />
          </div>
        </div>

        {/* Industry Ready Skills */}
        <div className="skills-section">
          <h2>Industry <span className="gold">Ready Skills</span></h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="icon">🎥</div>
              <h3>Cinematography</h3>
              <p>Master camera angles, composition & movement</p>
            </div>
            <div className="skill-card">
              <div className="icon">🎬</div>
              <h3>Direction</h3>
              <p>Learn script breakdown & shot division</p>
            </div>
            <div className="skill-card">
              <div className="icon">✂️</div>
              <h3>Editing</h3>
              <p>Professional video editing techniques</p>
            </div>
            <div className="skill-card">
              <div className="icon">🎨</div>
              <h3>VFX & Motion</h3>
              <p>Visual effects and motion graphics</p>
            </div>
          </div>
        </div>

        {/* Career Benefits Section */}
        <div className="benefits-section">
          <h2>Career <span className="gold">Benefits</span></h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="icon">💼</div>
              <h3>100% Placement Support</h3>
              <p>Committed interview calls</p>
            </div>
            <div className="benefit-card">
              <div className="icon">📜</div>
              <h3>Industry Recognized Certificate</h3>
              <p>Valid across production houses</p>
            </div>
            <div className="benefit-card">
              <div className="icon">🤝</div>
              <h3>Live Projects</h3>
              <p>Work on real client assignments</p>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="gallery-section">
          <h2>Team <span className="gold">Work Gallery</span></h2>
          <div className="gallery-grid">
            <div className="gallery-img">
              <img src={img1} alt="Gallery" />
              <div className="overlay">On-Set Production</div>
            </div>
            <div className="gallery-img">
              <img src={img2} alt="Gallery" />
              <div className="overlay">Lighting Setup</div>
            </div>
            <div className="gallery-img">
              <img src={img3} alt="Gallery" />
              <div className="overlay">Camera Operation</div>
            </div>
            <div className="gallery-img">
              <img src={img4} alt="Gallery" />
              <div className="overlay">Client Shoot</div>
            </div>
          </div>
        </div>

        {/* CTA Button - Get Started */}
        <div className="cta">
          <button className="get-started-btn" onClick={handleGetStarted}>
            Get Started <span className="arrow">→</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Training;