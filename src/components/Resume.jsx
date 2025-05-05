import React from 'react';
import resumePDF from '../assets/files/documents/RESUME_Nemish_Sharma_MAIT_2025.pdf';

const Resume = () => {
  return (
    <div className="box one-box">
      <div className="pd">
        <a href={resumePDF} download="Nemish_Resume.pdf" className="download-btn">
          <p>My Resume</p>
        </a>
      </div>
    </div>
  );
};

export default Resume;
