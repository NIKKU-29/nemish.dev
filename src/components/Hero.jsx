import React from 'react';
import profileImage from '../assets/files/images/profile.png';

const Hero = () => {
  return (
    <div className="box font-box">
      <div className="info">
        <h2>Hi, I'm </h2>
        <h1>Nemish Sharma</h1>
        <div className="button-container">
          <a href="https://github.com/NIKKU-29" className="social-btn" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/nemish-sharma-a31b7821b/" className="social-btn" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <img src={profileImage} alt="Nemish Sharma" />
    </div>
  );
};

export default Hero;
