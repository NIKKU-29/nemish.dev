import React from 'react';

const TechStack = () => {
  const techStack = [
    { name: 'React.js', icon: '../assets/files/icons/react.svg' },
    { name: 'Node.js', icon: '../assets/files/icons/nodedotjs.svg' },
    { name: 'HTML', icon: '../assets/files/icons/html5.svg' },
    { name: 'CSS', icon: '../assets/files/icons/css.svg' },
    { name: 'JavaScript', icon: '../assets/files/icons/javascript.svg', style: { fontSize: '1.1vw' } },
    { name: 'SQL', icon: '../assets/files/icons/mysql.svg', displayName: 'MySQL' },
    { name: 'MongoDB', icon: '../assets/files/icons/mongodb.svg' },
    { name: 'C++', icon: '../assets/files/icons/cplusplus.svg' },
    { name: 'Python', icon: '../assets/files/icons/python.svg' },
    { name: 'Qt', icon: '../assets/files/icons/qt.svg' },
    { name: 'Scss', icon: '../assets/files/icons/sass.svg' },
  ];

  return (
    <div className="box sign-box">
      <div className="Stack">Stack</div>
      <div className="scroll-container" id="scrollContainer">
        <div className="scroll-inner" id="scrollInner">
          {[...techStack, ...techStack].map((tech, index) => (
            <div className="tech-row" key={`${tech.name}-${index}`}>
              <div className="language-btn" data-lang={tech.name}>
                <img src={tech.icon} alt={tech.name} className="tech-icon" />
                <span style={tech.style || {}}>{tech.displayName || tech.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;