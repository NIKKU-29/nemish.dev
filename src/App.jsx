import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Resume from './components/Resume';
import Education from './components/Education';
import Profiles from './components/Profiles';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Games from './components/Games';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Aurora from './components/Aurora';
import ScrollVelocity from './components/ScrollVelocity';

import './assets/style.css';

const App = () => {
  // Add state to control content visibility
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    // Add smooth scroll behavior to the entire document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add overlay styles to head immediately
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
      
      .loader-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #121212;
        z-index: 9999999;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translateY(0);
        transition: transform 0.8s cubic-bezier(0.7, 0, 0.3, 1);
        will-change: transform;
      }
      
      .loader-content {
        text-align: center;
        color: #fff;
        font-family: 'nin', sans-serif;
        transform: translateZ(0);
      }
      
      .loader-text {
        font-size: 2.5rem;
        font-weight: bold;
        background: linear-gradient(90deg, #fff, #fa0e45, #fff);
        background-size: 200% auto;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        animation: shine 3s linear infinite;
        will-change: opacity, transform;
        transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
      }
      
      @keyframes shine {
        to {
          background-position: 200% center;
        }
      }
      
      @media (max-width: 768px) {
        .loader-text {
          font-size: 1.8rem;
        }
      }

      /* Hide content until loading is complete */
      .app-content {
        opacity: 0;
        transition: opacity 0.5s ease;
      }
      
      .app-content.loaded {
        opacity: 1;
      }
    `;
    document.head.appendChild(style);
    
    // Prevent scrolling initially
    // document.body.style.overflow = 'hidden';
    
    // // Initialize smooth scroll for navbar links with enhanced easing
    // document.querySelectorAll('.navbar__link').forEach(anchor => {
    //   anchor.addEventListener('click', function (e) {
    //     e.preventDefault();
    //     const targetId = this.getAttribute('href').substring(1);
    //     const targetElement = document.getElementById(targetId);

    //     if (targetElement) {
    //       const startPosition = window.pageYOffset;
    //       const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    //       const distance = targetPosition - startPosition;
    //       const duration = 1000; // Slightly longer for smoother effect
    //       let start = null;
          
    //       function easeInOutCubic(t) {
    //         return t < 0.5 
    //           ? 4 * t * t * t 
    //           : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    //       }
          
    //       function step(timestamp) {
    //         if (!start) start = timestamp;
    //         const progress = timestamp - start;
    //         const percentage = Math.min(progress / duration, 1);
    //         const easedPercentage = easeInOutCubic(percentage);
            
    //         window.scrollTo(0, startPosition + distance * easedPercentage);
            
    //         if (progress < duration) {
    //           window.requestAnimationFrame(step);
    //         }
    //       }
          
    //       window.requestAnimationFrame(step);
    //     }
    //   });
    // });
    
    // Add loading animation
    const overlay = document.createElement('div');
    overlay.classList.add('loader-overlay');
    
    const loaderContent = document.createElement('div');
    loaderContent.classList.add('loader-content');
    
    const loaderText = document.createElement('div');
    loaderText.classList.add('loader-text');
    
    loaderContent.appendChild(loaderText);
    overlay.appendChild(loaderContent);
    document.body.appendChild(overlay);
    
    const words = [ "Evaluate." , "Plan..", "Build...", "Debug....", "Deliver....."];
    let currentIndex = 0;
    
    loaderText.textContent = words[currentIndex];
    
    const textInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % words.length;
      
      loaderText.style.opacity = '0';
      loaderText.style.transform = 'translateY(-15px)';
      
      setTimeout(() => {
        loaderText.textContent = words[currentIndex];
        loaderText.style.transform = 'translateY(0)';
        loaderText.style.opacity = '1';
      }, 300);
      
    }, 1050);
    
    setTimeout(() => {
      clearInterval(textInterval);
      
      overlay.style.transform = 'translateY(-100%)';
      
      setTimeout(() => {
        document.body.style.overflow = '';
        setContentLoaded(true); // Show content after loading
        setTimeout(() => {
          overlay.remove();
        }, 800);
      }, 800);
      
    }, 5000);
    
  }, []);

  return (
    <>
      <CustomCursor />
      
      {/* Using conditional class to control visibility */}
      <div className={`app-content ${contentLoaded ? 'loaded' : ''}`}>
        {/* Aurora background */}
        <Aurora 
          colorStops={["#000000", "#fa0e45", "#fa0e45"]} 
          blend={1}
          amplitude={1}
          speed={1}
        />

        <div className="page1" id="pg1">
          <br />
          <Navbar />

          <div id="bento">
            <Hero />
            <About />
            <TechStack />
            <Resume />
            <Education />
            <Profiles />
            <div className="box romo-box">
              <div id="game-container">
                <div id="play-button">PLAY</div>
                <div id="timer"></div>
              </div>
            </div>
          </div>
        </div>

        <ScrollVelocity
          texts={['Create .','Something .','Good .']} 
          velocity="30"
          className="custom-scroll-text"
        />    
        <Experience />
        <Projects />
        <Games />
        <Contact />
      </div>
    </>
  );
};

export default App;