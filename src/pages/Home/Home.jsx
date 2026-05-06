import React, { useEffect, useRef } from "react";
import "./Home.css";
import video from "../../assets/Herovideo.mp4";

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const vid = videoRef.current;

    if (vid) {
      vid.volume = 0.5;
      vid.muted = true; // start muted (browser rule)
    }

    // 🔊 enable sound on user interaction
    const enableSound = () => {
      if (vid) {
        vid.muted = false;
        vid.volume = 0.5;
        vid.play();
      }
    };

    window.addEventListener("click", enableSound);
    window.addEventListener("touchstart", enableSound);

    // 🔇 scroll mute/unmute
    const handleScroll = () => {
      const section = document.getElementById("home");
      const rect = section.getBoundingClientRect();

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        vid.muted = false;
      } else {
        vid.muted = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", enableSound);
      window.removeEventListener("touchstart", enableSound);
    };
  }, []);

  return (
    <section id="home" className="home">

      {/* 🎬 VIDEO */}
      <video
        ref={videoRef}
        src={video}
        autoPlay
        loop
        playsInline
        muted
        className="bg-video"
      />

      {/* 🎯 CONTENT */}
      <div className="overlay">
        <h1>
          Become a Complete <span>Filmmaker 🎬</span> 
        </h1>

        <p>
          Learn professional video editing, VFX, and filmmaking with real
          projects and industry-level tools. Turn your passion into a powerful career.
        </p>

        <button className="hero-btn">Join Now</button>
      </div>

    </section>
  );
};

export default Home;