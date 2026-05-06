import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }

    setOpen(false);
  };

  return (
    <nav className="nav">

      {/* LOGO LEFT */}
      <div className="logo" onClick={() => scrollToSection("home")}>
        <img src={logo} alt="logo" />
      </div>

      {/* MENU CENTER */}
      <ul className={open ? "menu active" : "menu"}>
        <li onClick={() => scrollToSection("home")}>Home</li>
        <li onClick={() => scrollToSection("courses")}>Courses</li>
        <li onClick={() => scrollToSection("training")}>Training </li>
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("admission")}>Admission</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
      </ul>

      {/* BUTTON RIGHT */}
      <button className="btn" onClick={() => scrollToSection("admission")}>
        Enroll Now
      </button>

      {/* MOBILE TOGGLE */}
      <div className="toggle" onClick={() => setOpen(!open)}>
        {open ? "✖" : "☰"}
      </div>

    </nav>
  );
};

export default Navbar;