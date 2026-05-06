import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import video from "../..//assets/Herovideo.mp4";

const Home = () => {

  const videoRef = useRef(null);

  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {

    const vid = videoRef.current;

    if (vid) {
      vid.volume = 0.5;
      vid.muted = true;

      vid.play().catch(() => {});
    }

  }, []);

  // 🔊 SOUND TOGGLE
  const toggleSound = () => {

    const vid = videoRef.current;

    if (vid) {

      if (vid.muted) {

        vid.muted = false;
        vid.volume = 0.5;

        vid.play();

        setSoundOn(true);

      } else {

        vid.muted = true;

        setSoundOn(false);
      }

    }

  };

  return (

    <section id="home" className="home">

      {/* 🎬 VIDEO */}
      <video
        ref={videoRef}
        src={video}
        autoPlay
        muted
        loop
        playsInline
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

        <div className="hero-controls">

        <button
  className="hero-btn sound-btn"
  onClick={() => {

    const vid = videoRef.current;

    if (vid) {

      if (vid.muted) {

        vid.muted = false;
        vid.volume = 0.5;

        vid.play();

        setSoundOn(true);

      } else {

        vid.muted = true;

        setSoundOn(false);
      }

    }

  }}
>
  {soundOn ? "🔊 Sound" : "🔇 Sound"}
</button>

        </div>

      </div>

    </section>
  );
};

export default Home;