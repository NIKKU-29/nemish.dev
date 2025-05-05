import React, { useEffect, useState, useRef } from 'react';
import depioImage from '../assets/files/images/depio.png';
import skalImage from '../assets/files/images/skal.jpg';
import '../assets/Experience.css';

const AnimatedText = ({ text, animate, delay = 0 }) => {
  const words = text.split(' ');

  return (
    <span>
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <span
            className={animate ? 'blur-word' : ''}
            style={{
              ...(animate ? {} : { opacity: 0, filter: 'blur(5px)', transform: 'translateY(5px)' }),
              animationDelay: `${delay + (index * 0.08)}s`,
              display: 'inline-block'
            }}
          >
            {word}
          </span>
          {index < words.length - 1 ? ' ' : ''}
        </React.Fragment>
      ))}
    </span>
  );
};

const ExperienceCard = ({ title, company, date, points, imageSrc, imageAlt, baseDelay = 0 }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div ref={cardRef} className={`experience-card ${isVisible ? 'animate-card' : ''}`}>
      <div className="EXPleft">
        <h3><AnimatedText text={title} animate={isVisible} delay={baseDelay} /></h3>
        <p className="company"><AnimatedText text={company} animate={isVisible} delay={baseDelay + 0.2} /></p>
        <p className="date"><AnimatedText text={date} animate={isVisible} delay={baseDelay + 0.4} /></p>
        <ul>
          {points.map((point, index) => (
            <li key={index}>
              <AnimatedText text={point} animate={isVisible} delay={baseDelay + 0.6 + (index * 0.2)} />
            </li>
          ))}
        </ul>
      </div>
      <div className="EXPRight">
        <img src={imageSrc} alt={imageAlt} className={isVisible ? 'fade-in' : ''} />
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="experience" id="EXPP">
      <h1>Experience</h1>
      <ExperienceCard
        title="Development & Design Intern"
        company="ANS WorldWide Pvt Limited"
        date="June 2024 - August 2024"
        points={[
          "Built React UI components with 40% faster loading",
          "Created responsive designs for all devices",
          "Improved user engagement by 75%",
          "Led agile team sprints and reduced delivery time"
        ]}
        imageSrc={depioImage}
        imageAlt="ANS WorldWide"
        baseDelay={0.1}
      />
      <ExperienceCard
        title="Development Mentor"
        company="Skal Agency"
        date="April 2024 - October 2024"
        points={[
          "Mentored 18 students in HTML, CSS, and JavaScript fundamentals via Discord",
          "Created interactive coding exercises and provided real-time problem-solving support",
          "Conducted code reviews and provided feedback on student projects"
        ]}
        imageSrc={skalImage}
        imageAlt="Skal Agency"
        baseDelay={0.1}
      />
    </div>
  );
};

export default Experience;