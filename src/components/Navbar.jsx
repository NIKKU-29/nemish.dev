import React from 'react';
import homeIcon from '../assets/files/images/HOME.svg';
import experienceIcon from '../assets/files/images/EXPERIENCE.svg';
import projectsIcon from '../assets/files/images/Pro.svg';
import gamesIcon from '../assets/files/images/GAMES.svg';
import contactIcon from '../assets/files/images/CONTACT.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        <li className="navbar__item">
          <a href="#pg1" className="navbar__link">
            <img src={homeIcon} alt="home" style={{ filter: 'invert(1)', width: '2vw', height: '2vw', verticalAlign: 'middle' }} />
            <span>Home</span>
          </a>
        </li>
        <li className="navbar__item">
          <a href="#EXPP" className="navbar__link">
            <img src={experienceIcon} alt="experience" style={{ filter: 'invert(1)', width: '2.5vw', height: '2.5vw', verticalAlign: 'middle' }} />
            <span>Experience</span>
          </a>
        </li>
        <li className="navbar__item">
          <a href="#pg2" className="navbar__link">
            <img src={projectsIcon} alt="projects" style={{ filter: 'invert(1)', width: '2.8vw', height: '2.8vw', verticalAlign: 'middle' }} />
            <span>Projects</span>
          </a>
        </li>
        <li className="navbar__item">
          <a href="#gameSS" className="navbar__link">
            <img src={gamesIcon} alt="games" style={{ filter: 'invert(1)', width: '2.8vw', height: '2.8vw', verticalAlign: 'middle' }} />
            <span>Games</span>
          </a>
        </li>
        <li className="navbar__item">
          <a href="#pg3" className="navbar__link">
            <img src={contactIcon} alt="contact" style={{ filter: 'invert(1)', width: '2.8vw', height: '2.8vw', verticalAlign: 'middle' }} />
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
