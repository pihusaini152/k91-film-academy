// Courses.jsx
import React, { useEffect, useRef, useState } from "react";
import "./Courses.css";

import capcut from "../../assets/capcut.png";
import premiere from "../../assets/premiere.png";
import ae from "../../assets/aftereffects.png";
import davinci from "../../assets/davinci.png";

const Courses = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const coursesData = [
    {
      name: "CapCut",
      description: "Basic Video Editing",
      icon: capcut,
      side: "left",
      delay: "delay1",
    },
    {
      name: "Adobe Premiere Pro",
      description: "Advanced Editing",
      icon: premiere,
      side: "right",
      delay: "delay2",
    },
    {
      name: "After Effects",
      description: "Motion Graphics & VFX",
      icon: ae,
      side: "left",
      delay: "delay3",
    },
    {
      name: "DaVinci Resolve",
      description: "Professional Colour Grading",
      icon: davinci,
      side: "right",
      delay: "delay4",
    },
  ];

  return (
    <section id="courses" className="courses" ref={sectionRef}>
      <h2 className="title">
        <span>Software</span> Training Included
      </h2>

      <div className="courses-grid">
        {coursesData.map((course, idx) => (
          <div
            key={idx}
            className={`card ${course.side} ${course.delay} ${isVisible ? "show" : ""}`}
          >
            <div className="card-icon">
              <img src={course.icon} alt={course.name} />
            </div>
            <h3>{course.name}</h3>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;