import React from 'react';
import buddyVideo from '../assets/files/videos/buddy.mp4';
import vinesVideo from '../assets/files/videos/vines.mp4';
import travelVideo from '../assets/files/videos/Travel Logo.mp4';
import bstVideo from '../assets/files/videos/bst.mp4';

const Projects = () => {
  return (
    <div className="PROJ" id="pg2">
      <section className="projects">
        <h1 style={{ fontSize: '5vw' }}>Projects</h1>
        <div className="project-grid">
          <div className="project-card">
            <div className="project-header">
              <h2 id="pp1">Practical Buddy</h2>
              <div className="project-links">
                <a href="https://github.com/NIKKU-29/Practical_Buddy" className="github-btn1" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://practical-buddy.vercel.app/" className="live-btn1" target="_blank" rel="noreferrer">Live</a>
              </div>
            </div>
            <p>Developed a web platform for EEE students, centralizing essential practical exam resources, improving
              navigation efficiency by 85%.</p>
            <div className="tech-stack1">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>Express</span>
            </div>
            <div className="overlayT">
              <video src={buddyVideo} autoPlay loop muted></video>
            </div>
            <div className="hover-glow" style={{ background: 'rgba(14, 57, 250, 0.4)' }}></div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <h2>Vines & Co</h2>
              <div className="project-links">
                <a href="https://github.com/NIKKU-29/VinesAndCompany" className="github-btn2" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://nikku-29.github.io/VinesAndCompany/" className="live-btn2" target="_blank" rel="noreferrer">Live</a>
              </div>
            </div>
            <p>Designed an elegant wine-themed website, enhancing visual presentation and user experience, reducing
              navigation time by 45%.</p>
            <div className="tech-stack2">
              <span>JavaScript</span>
              <span>Tailwind CSS</span>
              <span>Swiper.js</span>
              <span>Scss</span>
            </div>
            <div className="overlayU">
              <video src={vinesVideo} autoPlay loop muted></video>
            </div>
            <div className="hover-glow"></div>
          </div>

        

          <div className="project-card">
            <div className="project-header">
              <h2>AeroXpert</h2>
              <div className="project-links">
                <a href="https://github.com/NIKKU-29/FlightReservation" className="github-btn2" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
            <p>Engineered a flight booking system in C++ with secure NoSQL integration, boosting efficiency and enabling
              rapid booking.</p>
            <div className="tech-stack2">
              <span>C++</span>
              <span>MongoDB</span>
              <span>Ninja</span>
            </div>
            <div className="overlayV">
              <video src={travelVideo} autoPlay loop muted></video>
            </div>
            <div className="hover-glow"></div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <h2 id="pp3">Recovery Visualizer</h2>
              <div className="project-links">
                <a href="https://github.com/NIKKU-29/Recover_Tree_visualizer" className="github-btn3" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
            <p>Developed a Binary Search Tree Visualizer using Python, JavaScript and Flask to help visualize and solve Recover Binary Search Tree.</p>
            <div className="tech-stack3">
              <span>Python</span>
              <span>JavaScript</span>
              <span>Flask</span>
            </div>
            <div className="overlayW" style={{ backgroundColor: 'black' }}>
              <video src={bstVideo} autoPlay loop muted></video>
            </div>
            <div className="hover-glow" style={{ background: '#048d9f' }}></div>
          </div>

          <div className="project-card" id="MORE">
            <div className="MORE2">
              <a id="linnn" href="https://github.com/NIKKU-29" target="_blank" rel="noreferrer">EXPLORE MORE</a>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
            <div className="hover-glow" style={{ background: '#3526bd' }}></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
