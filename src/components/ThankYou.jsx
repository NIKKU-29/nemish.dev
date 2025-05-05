import React, { useEffect, useState } from 'react';

const ThankYou = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [showThankYou, setShowThankYou] = useState(false);
  const [showGames, setShowGames] = useState(false);
  const [loadingText, setLoadingText] = useState("Creating your response...");

  //showGames
  useEffect(() => {
    // Check if this is a fresh page load or back navigation
    const isBackNavigation = performance.navigation && performance.navigation.type === 2; // 2 is TYPE_BACK_FORWARD
    
    if (isBackNavigation) {
      // If coming back from game, show final state immediately
      setShowLoading(false);
      setShowThankYou(true);
      setShowGames(true);
    } else {
      // Simple loading text rotation with standard setTimeout
      const loadingTexts = [
        "Creating your response...",
        "Sending to Nemish...",
        "Almost there...",
        "Processing your message..."
      ];
      let currentIndex = 0;
      
      const loadingInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % loadingTexts.length;
        setLoadingText(loadingTexts[currentIndex]);
      }, 1500); // Change text every 1.5 seconds
      
      // Show thank you message after 3 seconds
      setTimeout(() => {
        setShowLoading(false);
        setShowThankYou(true);
        
        // Show games container after a short delay
        setTimeout(() => {
          setShowGames(true);
        }, 500);
        
        clearInterval(loadingInterval);
      }, 3000);
    }
    
    // Ensure cursor is visible by adding a specific style
    document.body.classList.add('cursor-visible');
    
    return () => {
      document.body.classList.remove('cursor-visible');
    };
  }, []);

  return (
    <div className="thank-you-page">
      {showLoading && (
        <div className="loading-container">
          <h1>Processing...</h1>
          <p className="loading-text">{loadingText}</p>
        </div>
      )}

      <div className={`container ${showThankYou ? 'visible' : ''}`}>
        <div className="success-checkmark">
          <div className="check-icon"></div>
        </div>
        <h1>Thank You!</h1>
        <span className="emoji">🎉</span>
        <p>Thank you for reaching out! I've received your message.</p>
        <p>I'll personally respond to you as soon as possible!</p>
        <div className="button-container">
          <a href="/" className="button">Return Home</a>
        </div>
      </div>

      

      <style jsx>{`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        @font-face {
            font-family: 'nin';
            src: url('dpcomic.ttf') format('truetype');
        }

        /* Ensure cursor is always visible */
        .cursor-visible {
            cursor: default !important;
        }
        
        /* Force cursor visibility on all elements */
        .thank-you-page, .thank-you-page * {
            cursor: default;
        }
        
        /* Special cursor for interactive elements */
        a, button, .play-btn, .button {
            cursor: pointer !important;
        }

        body {
            font-family: 'nin', sans-serif;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(135deg, #af2747 0%, #fa0e45 100%);
            color: white;
            overflow: hidden;
        }

        .thank-you-page {
            position: relative;
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .loading-container {
            text-align: center;
            padding: 2rem;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
            position: absolute;
            z-index: 3;
            width: 400px;
        }

        .loading-text {
            font-size: 1.2rem;
            margin-top: 1rem;
            opacity: 0.8;
        }

        .container {
            text-align: center;
            padding: 2rem;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
            position: absolute;
            z-index: 1;
            width: 400px;
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
            left: calc(50% - 200px);
        }

        .container.visible {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
            left: 40%;
        }

        .games-container {
            text-align: center;
            padding: 2rem;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
            position: absolute;
            opacity: 0;
            transform: translateX(100%);
            transition: opacity 0.8s ease, transform 0.8s ease;
            z-index: 2;
            width: 400px;
            right: calc(50% - 200px);
        }

        .games-container.visible {
            opacity: 1;
            transform: translateX(0);
            right: 10%;
        }

        .game-cards {
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin-top: 20px;
        }

        .game-card {
            background: rgba(255, 255, 255, 0.1);
            padding: 15px;
            border-radius: 15px;
            width: 100%;
            transition: transform 0.3s ease;
        }

        .game-card:hover {
            transform: translateY(-5px);
        }

        .game-card h3 {
            margin-bottom: 10px;
            font-size: 1.2rem;
        }

        .game-card p {
            font-size: 0.9rem;
            margin-bottom: 15px;
        }

        .play-btn {
            background: rgba(255, 255, 255, 0.2);
            padding: 8px 20px;
            border-radius: 20px;
            color: white;
            text-decoration: none;
            display: inline-block;
            transition: background 0.3s ease;
        }

        .play-btn:hover {
            background: rgba(255, 255, 255, 0.3);
        }

        h1 {
            margin-top: 2vw;
            font-size: 3rem;
            margin-bottom: 1rem;
            color: #ffffff;
        }

        .emoji {
            font-size: 4rem;
            margin: 1rem 0;
            display: inline-block;
        }

        p {
            font-size: 1.2rem;
            margin: 1rem 0;
            opacity: 0.9;
        }

        .button-container {
            display: flex;
            gap: 1rem;
            justify-content: center;
            margin-top: 2rem;
        }

        .button {
            font-family: 'nin', sans-serif;
            padding: 12px 24px;
            border: none;
            border-radius: 50px;
            background: rgba(255, 255, 255, 0.2);
            color: white;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            backdrop-filter: blur(5px);
        }

        .button:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: translateY(-2px);
        }

        .success-checkmark {
            width: 80px;
            height: 80px;
            margin: 0 auto;
            position: relative;
        }

        .success-checkmark .check-icon {
            width: 80px;
            height: 80px;
            position: relative;
            border-radius: 50%;
            border: 0.5vw solid white;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .success-checkmark .check-icon::before {
            content: '';
            width: 30px;
            height: 15px;
            border-left: 4px solid white;
            border-bottom: 4px solid white;
            transform: rotate(-45deg);
        }

        /* Responsive styles */
        @media (max-width: 900px) {
            .container.visible {
                left: 50%;
                transform: translateX(-50%) translateY(0);
                top: 20%;
            }
            
            .games-container.visible {
                right: 50%;
                transform: translateX(50%);
                top: 60%;
            }
        }
      `}</style>
    </div>
  );
};

export default ThankYou;
