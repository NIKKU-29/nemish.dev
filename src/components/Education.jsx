import React from 'react';

const Education = () => {
  return (
    <div className="box banner-box">
      <div className="education-section">
        <h2 className="section-title">Education</h2>

        <div className="education-item">
          <div id="incl">
            <h3 className="institution">Maharaja Agrasen Institute of Technology </h3>
            <h3 id="d1"> ( 2021 - 2025 ) </h3>
          </div>
          <p className="description">
            B.Tech in EEE with specialization in AIML.
            Strong foundation in OOP, DBMS, and core engineering concepts.
          </p>
        </div>

        <div className="education-item">
          <div id="incl">
            <h3 className="institution">Little flowers Public School</h3>
            <h3 id="d1"> ( 2008 - 2020 )</h3>
          </div>
          <p className="description">
            Completed senior secondary education in PCM with excellent academics and active co-curricular
            participation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
