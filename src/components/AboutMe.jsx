import React from 'react';
import '../styles/AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="about-me-text">
        <h2>About Me</h2>
        <p>
          Hi, I'm <strong>Adithi P Rao</strong>, a passionate Computer Science student at PES University.
          I love learning new technologies, building projects, and exploring the world of programming.
        </p>
      </div>
      <div className="about-me-photo">
        <img src="/profile.jpg" alt="Adithi" />
      </div>
    </div>
  );
};

export default AboutMe;
