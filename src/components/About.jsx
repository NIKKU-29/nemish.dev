"use client";
import React from 'react';
import RotatingText from './RotatingText';

const About = () => {
  return (
    <div className="box discount-box">
      <div className="intro-text flex flex-col gap-4">
        <div className="mb-2">
          <RotatingText
            texts={[
              'Boosting Innovation',
              'Simplifying Systems',
              'Crafting UX Magic',
              'Delivering Power',
              'Building Products'

            ]}
            mainClassName="px-2 bg-cyan-300 text-black overflow-hidden py-0.5 rounded-lg inline-block text-base sm:text-lg md:text-xl font-medium"
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
        <p2 className="mt-2 leading-relaxed text-gray-700">
  I'm a proficient <span2>Full Stack Developer</span2> with expertise in modern web technologies. Based in India, I specialize in building scalable applications with clean execution, maintainable code and exceptional user experiences that drive results.
</p2>

      </div>
    </div>
  );
};

export default About;