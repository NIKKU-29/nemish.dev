import React from 'react';
import { useNavigate } from 'react-router-dom';
import leetcodeIcon from '../assets/files/images/leetcode.svg';

const Contact = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/thankyou');
  };

  const handleCancel = () => {
    // Reset form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('contact').value = '';
    document.getElementById('message').value = '';
  };

  return (
    <div className="Contact" id="pg3">
      <div className="background">
        <div className="container">
          <div className="screen">
            <div className="screen-header">
              <div className="screen-header-left">
                <div className="screen-header-button close"></div>
                <div className="screen-header-button maximize"></div>
                <div className="screen-header-button minimize"></div>
              </div>
              <div className="screen-header-right">
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
              </div>
            </div>
            <div className="screen-body">
              <div className="screen-body-item left">
                <div className="app-title">
                  <span>CONTACT</span>
                  <span>ME</span>
                </div>
                <div className="app-contact">
                  <a href="https://github.com/NIKKU-29" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                  <a href="https://www.linkedin.com/in/nemish-sharma-a31b7821b/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                  <a href="https://dev.to/nemish" target="_blank" rel="noreferrer"><i className="fab fa-dev"></i></a>
                  <a href="https://leetcode.com/u/NIKKU29/" target="_blank" rel="noreferrer">
                    <img src={leetcodeIcon} alt="LeetCode" style={{ width: '24px', height: '24px', verticalAlign: 'middle' }} />
                  </a>
                </div>
              </div>

              <div className="screen-body-item">
                <form className="app-form" onSubmit={handleSubmit}>
                  <div className="app-form-group">
                    <input id="name" className="app-form-control" placeholder="NAME" required />
                  </div>
                  <div className="app-form-group">
                    <input id="email" className="app-form-control" placeholder="EMAIL" required />
                  </div>
                  <div className="app-form-group">
                    <input id="contact" className="app-form-control" placeholder="CONTACT NO" required />
                  </div>
                  <div className="app-form-group message">
                    <input id="message" className="app-form-control" placeholder="MESSAGE" required />
                  </div>
                  <div className="app-form-group buttons">
                    <button className="app-form-button" type="button" id="cancel" onClick={handleCancel}>CANCEL</button>
                    <button className="app-form-button" type="submit" id="send">SEND</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p id = "LIGIT">&copy; 2025 Nemish Sharma. All rights reserved.</p>
    </div>
  );
};

export default Contact;
