import React from 'react';
import leetcodeIcon from '../assets/files/images/leetcode.svg';
import gfgIcon from '../assets/files/images/geeksforgeeks.svg';
import devicon from '../assets/files/images/devdotto.svg'

const Profiles = () => {
  return (
    <div className="box logo-box">
      <div className="box-container">
        <div className="card-container">
          <div className="card" data-platform="Dev.to">
            <div className="card-content">
              <img src={devicon} alt ="hiya"></img>
              <a href="https://dev.to/nemish" target="_blank" rel="noreferrer" className="card-link">View Profile</a>
              <h3 style={{ marginLeft: '-12.8vw' }}>Dev.to</h3>
              <p>Read my technical blog posts and with Exposure to my development Adventures</p>
            </div>
          </div>

          <div className="card" data-platform="LeetCode">
            <div className="card-content">
              <img src={leetcodeIcon} alt="LeetCode" />
              <a href="https://leetcode.com/u/NIKKU29/" target="_blank" rel="noreferrer" className="card-link">View Profile</a>
              <h3 style={{ marginLeft: '-12.4vw' }}>LeetCode</h3>
              <p>Check out my problem-solving skills and competitive programming solutions</p>
            </div>
          </div>

          <div className="card" data-platform="GeeksForGeeks">
            <div className="card-content">
              <img src={gfgIcon} alt="GeeksForGeeks" />
              <a href="https://www.geeksforgeeks.org/user/nemishsae2x/" target="_blank" rel="noreferrer" className="card-link">View Profile</a>
              <h3 style={{ marginLeft: '-13.2vw' }} id="gg">GFG</h3>
              <p>Practice Company Oriented list for DSA question practice and Contests</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
