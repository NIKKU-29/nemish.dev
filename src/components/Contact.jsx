import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import leetcodeIcon from '../assets/files/images/leetcode.svg';

const Contact = () => {
  const navigate = useNavigate();
  
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    
    // Clear error for this field if it exists
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: ''
      }));
    }
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.contact.trim()) {
      newErrors.contact = 'Contact number is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Show feedback message
  const showFeedback = (message, isError = false) => {
    const feedbackMsg = document.createElement("div");
    feedbackMsg.textContent = message;
    feedbackMsg.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background-color: ${isError ? '#dc3545' : '#fa0e40'};
      color: white;
      padding: 10px 20px;
      border-radius: 5px;
      opacity: 0;
      transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
      transform: translateZ(0) translateX(20px);
      font-family: 'nin';
      box-shadow: 0 2px 10px rgba(250, 14, 64, 0.3);
      z-index: 1000;
    `;
    document.body.appendChild(feedbackMsg);

    requestAnimationFrame(() => {
      feedbackMsg.style.opacity = "1";
      feedbackMsg.style.transform = "translateZ(0) translateX(0)";
      setTimeout(() => {
        feedbackMsg.style.opacity = "0";
        feedbackMsg.style.transform = "translateZ(0) translateX(20px)";
        setTimeout(() => {
          feedbackMsg.remove();
        }, 300);
      }, 2000);
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Create FormData for Google Forms
      const googleFormData = new FormData();
      googleFormData.append("entry.998938801", formData.name.trim());
      googleFormData.append("entry.1842017898", formData.email.trim());
      googleFormData.append("entry.643032720", formData.contact.trim());
      googleFormData.append("entry.1515541772", formData.message.trim());

      // Submit to Google Forms
      await fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSdJs9aRajaxhoKkOX6QAbV8m9_Qcbx_OfcU_Q7TfRxGUQS0FQ/formResponse", {
        method: "POST",
        mode: "no-cors",
        body: googleFormData
      });

      // Navigate to thank you page
      navigate('/thankyou');
      
    } catch (error) {
      console.error("❌ Error!", error);
      showFeedback("Failed to send message. Please try again.", true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle cancel/reset
  const handleCancel = () => {
    // Reset form data
    setFormData({
      name: '',
      email: '',
      contact: '',
      message: ''
    });
    
    // Clear errors
    setErrors({});
    
    // Show feedback
    showFeedback("Form has been reset");
    
    // Focus on first input
    setTimeout(() => {
      const nameInput = document.getElementById('name');
      if (nameInput) {
        nameInput.focus();
      }
    }, 100);
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
                  <a href="https://github.com/NIKKU-29" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/nemish-sharma-a31b7821b/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://dev.to/nemish" target="_blank" rel="noreferrer">
                    <i className="fab fa-dev"></i>
                  </a>
                  <a href="https://leetcode.com/u/NIKKU29/" target="_blank" rel="noreferrer">
                    <img src={leetcodeIcon} alt="LeetCode" style={{ width: '24px', height: '24px', verticalAlign: 'middle' }} />
                  </a>
                </div>
              </div>

              <div className="screen-body-item">
                <form className="app-form" onSubmit={handleSubmit}>
                  <div className="app-form-group">
                    <input 
                      id="name" 
                      className="app-form-control" 
                      placeholder="NAME" 
                      value={formData.name}
                      onChange={handleInputChange}
                      style={{ borderColor: errors.name ? '#dc3545' : '' }}
                      required 
                    />
                    {errors.name && <div className="error-message" style={{ color: '#dc3545', fontSize: '12px', marginTop: '5px' }}>{errors.name}</div>}
                  </div>
                  
                  <div className="app-form-group">
                    <input 
                      id="email" 
                      className="app-form-control" 
                      placeholder="EMAIL" 
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      style={{ borderColor: errors.email ? '#dc3545' : '' }}
                      required 
                    />
                    {errors.email && <div className="error-message" style={{ color: '#dc3545', fontSize: '12px', marginTop: '5px' }}>{errors.email}</div>}
                  </div>
                  
                  <div className="app-form-group">
                    <input 
                      id="contact" 
                      className="app-form-control" 
                      placeholder="CONTACT NO" 
                      value={formData.contact}
                      onChange={handleInputChange}
                      style={{ borderColor: errors.contact ? '#dc3545' : '' }}
                      required 
                    />
                    {errors.contact && <div className="error-message" style={{ color: '#dc3545', fontSize: '12px', marginTop: '5px' }}>{errors.contact}</div>}
                  </div>
                  
                  <div className="app-form-group message">
                    <textarea 
                      id="message" 
                      className="app-form-control" 
                      placeholder="MESSAGE" 
                      value={formData.message}
                      onChange={handleInputChange}
                      style={{ borderColor: errors.message ? '#dc3545' : '', minHeight: '80px', resize: 'vertical' }}
                      required 
                    />
                    {errors.message && <div className="error-message" style={{ color: '#dc3545', fontSize: '12px', marginTop: '5px' }}>{errors.message}</div>}
                  </div>
                  
                  <div className="app-form-group buttons">
                    <button 
                      className="app-form-button" 
                      type="button" 
                      id="cancel" 
                      onClick={handleCancel}
                      disabled={isSubmitting}
                    >
                      CANCEL
                    </button>
                    <button 
                      className="app-form-button" 
                      type="submit" 
                      id="send"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'SENDING...' : 'SEND'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p id="LIGIT">&copy; 2025 Nemish Sharma. All rights reserved.</p>
    </div>
  );
};

export default Contact;