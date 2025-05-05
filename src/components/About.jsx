//about.jsx
"use client";
import React from 'react';
import RotatingText from './RotatingText';

const About = () => {
  return (
    <div className="box discount-box">
      <h1>Expertise In...</h1>
      <div className="intro-text flex flex-col gap-4"> {/* Added gap between elements */}
        <div className="mb-2"> {/* Added margin bottom */}
          <RotatingText
            texts={[
              'Creating Solutions',
              'Building Products',
              'Solving Problems',
              'Developing Ideas',
              'Crafting Experiences'
            ]}
            mainClassName="px-2 bg-cyan-300 text-black overflow-hidden py-0.5 rounded-lg inline-block"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={4000}
          />
        </div>
        <p2 className="mt-2 leading-relaxed"> {/* Added margin top and improved line height */}
          I'm a proficient Full Stack Developer with expertise in modern web technologies. Based in India, I build scalable applications with clean, maintainable code and exceptional user experiences.
        </p2>
      </div>
    </div>
  );
};

export default About;