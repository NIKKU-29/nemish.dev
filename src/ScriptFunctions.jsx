import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const CustomCursor = () => {
  useEffect(() => {
    class CursorManager {
      constructor() {
        this.cursor = document.createElement('div');
        this.cursor.classList.add('cursor');
        document.body.appendChild(this.cursor);

        // Initial cursor styles optimized for performance
        this.cursor.style.cssText = `
          position: fixed;
          pointer-events: none;
          width: 15px;
          height: 15px;
          background: #fa0e45;
          border-radius: 50%;
          z-index: 999999999;
          will-change: transform, opacity;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          opacity: 0;
        `;

        // Initialize state for smooth transitions
        this.firstMove = true;
        this.currentX = 0;
        this.currentY = 0;
        this.targetX = 0;
        this.targetY = 0;
        this.currentScale = 1;
        this.targetScale = 1;
        this.currentOpacity = 0;
        this.targetOpacity = 0;
        this.positionLerpFactor = 0.3;  // Faster response for position
        this.propertyLerpFactor = 0.2;  // Smooth transitions for scale and opacity

        // Animation loop using requestAnimationFrame
        this.updateCursor = () => {
          if (this.firstMove) return; // Wait for first mouse move
          this.currentX += (this.targetX - this.currentX) * this.positionLerpFactor;
          this.currentY += (this.targetY - this.currentY) * this.positionLerpFactor;
          this.currentScale += (this.targetScale - this.currentScale) * this.propertyLerpFactor;
          this.currentOpacity += (this.targetOpacity - this.currentOpacity) * this.propertyLerpFactor;

          this.cursor.style.left = `${this.currentX}px`;
          this.cursor.style.top = `${this.currentY}px`;
          this.cursor.style.transform = `translate(-50%, -50%) scale(${this.currentScale})`;
          this.cursor.style.opacity = this.currentOpacity;

          requestAnimationFrame(this.updateCursor);
        };

        requestAnimationFrame(this.updateCursor);
        this.setupEventListeners();
      }

      handleMouseMove(e) {
        // Set initial position on first move to prevent jumping
        if (this.firstMove) {
          this.currentX = e.clientX;
          this.currentY = e.clientY;
          this.firstMove = false;
        }
        this.targetX = e.clientX;
        this.targetY = e.clientY;

        // Hide cursor over navbar
        if (e.target.closest('.navbar')) {
          this.targetOpacity = 0;
        } else {
          this.targetOpacity = 1;
        }
      }

      handleMouseOver(e) {
        if (e.target.closest('.navbar')) return;

        // Apply hover effects for interactive elements
        if (
          e.target.closest('a') ||
          e.target.closest('button') ||
          e.target.closest('.language-btn') ||
          e.target.tagName === 'I' ||
          e.target.tagName === 'SPAN'
        ) {
          this.targetScale = 1.5;
          this.cursor.style.mixBlendMode = 'difference';
        }
      }

      handleMouseOut(e) {
        if (e.target.closest('.navbar')) return;

        // Reset hover effects
        if (
          e.target.closest('a') ||
          e.target.closest('button') ||
          e.target.closest('.language-btn') ||
          e.target.tagName === 'I' ||
          e.target.tagName === 'SPAN'
        ) {
          this.targetScale = 1;
          this.cursor.style.mixBlendMode = 'normal';
        }
      }

      setupEventListeners() {
        document.addEventListener('mousemove', this.handleMouseMove.bind(this), { passive: true });
        document.addEventListener('mouseover', this.handleMouseOver.bind(this), { passive: true });
        document.addEventListener('mouseout', this.handleMouseOut.bind(this), { passive: true });
      }
    }

    const cursorManager = new CursorManager();

    // Cleanup on unmount
    return () => {
      document.removeEventListener('mousemove', cursorManager.handleMouseMove);
      document.removeEventListener('mouseover', cursorManager.handleMouseOver);
      document.removeEventListener('mouseout', cursorManager.handleMouseOut);
      if (cursorManager.cursor && cursorManager.cursor.parentNode) {
        cursorManager.cursor.parentNode.removeChild(cursorManager.cursor);
      }
    };
  }, []);

  return null; // No visible render
};



// GSAP animations
export const useGSAPAnimations = () => {
  useEffect(() => {
    const initGSAPAnimations = () => {
      if (typeof gsap === 'undefined') {
        console.error('GSAP is not loaded. Make sure the library is properly imported.');
        return;
      }
      
      if (typeof ScrollTrigger === 'undefined') {
        console.error('ScrollTrigger is not loaded. Make sure the plugin is properly imported.');
        return;
      }

      const projectCards = document.querySelectorAll(".project-card");
      // Only initialize animations if elements exist
      if (projectCards.length > 0) {
        // Use batch for better performance
        gsap.utils.toArray(".project-card").forEach((card, index) => {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 20, // Further reduced distance for smoother animation
              scale: 0.98, // Less extreme scale for smoother animation
              rotateX: 3, // Less extreme rotation
              filter: "blur(3px)" // Less extreme blur
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
              filter: "blur(0px)",
              duration: 0.6, // Faster animation
              ease: "power1.out", // Smoother easing
              delay: index * 0.05, // Shorter delay between cards
              scrollTrigger: {
                trigger: card,
                start: "top 95%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }
    };

    // Initialize GSAP animations after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(initGSAPAnimations, 500);

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      // Kill all ScrollTriggers
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, []);
};

// Form validation functions
export const useFormValidation = () => {
  useEffect(() => {
    function validateForm() {
      const name = document.getElementById("name")?.value.trim();
      const email = document.getElementById("email")?.value.trim();
      const contact = document.getElementById("contact")?.value.trim();
      const message = document.getElementById("message")?.value.trim();
    
      if (!name || !email || !contact || !message) return false;
    
      const existingErrors = document.querySelectorAll('.error-message');
      existingErrors.forEach(error => error.remove());
    
      let isValid = true;
      
      if (!name) {
        showError("name", "Name is required");
        isValid = false;
      }
    
      if (!email) {
        showError("email", "Email is required");
        isValid = false;
      } else if (!isValidEmail(email)) {
        showError("email", "Please enter a valid email");
        isValid = false;
      }
    
      if (!contact) {
        showError("contact", "Contact number is required");
        isValid = false;
      }
    
      if (!message) {
        showError("message", "Message is required");
        isValid = false;
      }
    
      return isValid;
    }
    
    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
    function showError(fieldId, message) {
      const field = document.getElementById(fieldId);
      if (!field) return;
      
      const errorDiv = document.createElement('div');
      errorDiv.className = 'error-message';
      errorDiv.textContent = message;
      
      // Apply styles directly instead of CSS transitions
      errorDiv.style.cssText = `
        color: #dc3545;
        font-size: 0.8rem;
        margin-top: 5px;
        margin-bottom: 10px;
        opacity: 0;
      `;
      
      field.parentNode.insertBefore(errorDiv, field.nextSibling);
      field.style.borderColor = '#dc3545';
      
      // Use requestAnimationFrame for smoother animation
      requestAnimationFrame(() => {
        errorDiv.style.opacity = '1';
        errorDiv.style.transition = 'opacity 0.3s ease';
      });
      
      // Use a single event listener for better performance
      if (!field.hasErrorListener) {
        field.addEventListener('input', function() {
          this.style.borderColor = '';
          const error = this.parentNode.querySelector('.error-message');
          if (error) {
            error.remove();
          }
        });
        field.hasErrorListener = true;
      }
    }

    // Initialize form event listeners
    const sendButton = document.getElementById("send");
    if (sendButton) {
      const handleClick = function(e) {
        e.preventDefault();

        if (!validateForm()) {
          return;
        }

        // Add loading animation to button
        this.innerHTML = '<span class="loading-spinner"></span> Sending...';
        this.disabled = true;
        
        // Add spinner style
        const spinnerStyle = document.createElement('style');
        spinnerStyle.textContent = `
          .loading-spinner {
            display: inline-block;
            width: 1rem;
            height: 1rem;
            border: 2px solid rgba(255,255,255,0.3);
            border-radius: 50%;
            border-top-color: #fff;
            animation: spin 1s ease-in-out infinite;
            margin-right: 0.5rem;
          }
          
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `;
        document.head.appendChild(spinnerStyle);
        
        // Simulate form submission (replace with actual form submission)
        setTimeout(() => {
          this.innerHTML = 'Message Sent!';
          this.classList.add('success');
          
          // Reset form after delay
          setTimeout(() => {
            document.getElementById("contact-form")?.reset();
            this.innerHTML = 'Send Message';
            this.disabled = false;
            this.classList.remove('success');
          }, 3000);
        }, 2000);
      };

      sendButton.addEventListener("click", handleClick);
      
      // Cleanup function
      return () => {
        sendButton.removeEventListener("click", handleClick);
      };
    }
  }, []);
};
