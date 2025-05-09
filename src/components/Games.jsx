import React, { useEffect, useRef } from 'react';
import tetrisImage from '../assets/files/images/tertsi_game.PNG';
import spaceMonsterImage from '../assets/files/images/space_monster.PNG';

const Games = () => {
  const gameCardsRef = useRef([]);
  
  useEffect(() => {
    // Intersection Observer for animation when elements enter viewport
    const observerOptions = {
      root: null, // use viewport as root
      rootMargin: '0px',
      threshold: 0.1 // trigger when 10% of element is visible
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Once animation is triggered, no need to observe anymore
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observe all game cards
    gameCardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });
    
    return () => {
      // Cleanup observer on component unmount
      gameCardsRef.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);
  
  // Function to add refs to game cards
  const addToRefs = (el) => {
    if (el && !gameCardsRef.current.includes(el)) {
      gameCardsRef.current.push(el);
    }
  };

  return (
    <div className="box games-box" id="games">
      <h1 id="gameSS">Games</h1>
      <div className="games-container">
        <div className="game-card animate-card" ref={addToRefs}>
          <div className="game-preview">
            <img src={spaceMonsterImage} alt="Space Monster Preview" className="preview-img" />
          </div>
          <h3>Monster Blast</h3>
          <p>Space monsters are invading! Tap quickly and use your powers to survive this intense arcade shooter.</p>
          <div className="game-tech">
            <span>JavaScript</span>
            <span>HTML5 Canvas</span>
            <span>CSS3</span>
          </div>
          <div className="game-links">
            <a href="https://monster-bomb.vercel.app/" className="play-btn" target="_blank" rel="noreferrer">Play Now</a>
            <a href="https://github.com/NIKKU-29/MONSTER_BOMB" className="github-btn" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        <div className="game-card animate-card" ref={addToRefs}>
          <div className="game-preview">
            <img src={tetrisImage} alt="Tetris Bomb Preview" className="preview-img" />
          </div>
          <h3>Tetris Bomb</h3>
          <p>Classic Tetris with a BOOM! Watch out for explosive surprises! Only Sigma Can pass level 5.</p>
          
          <div className="game-tech">
            <span>JavaScript</span>
            <span>HTML5</span>
            <span>CSS3</span>
          </div>
          <div className="game-links">
            <a href="https://tetris-bob-game.vercel.app/" className="play-btn" target="_blank" rel="noreferrer">Play Now</a>
            <a href="https://github.com/NIKKU-29/Tetris_Bomb_game" className="github-btn" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
      
      <style jsx="true">{`
        .games-box {
          padding: 4vw 2vw;
          max-width: 100%;
        }
        
        #gameSS {
          font-size: clamp(2rem, 4vw, 3.5rem);
          margin-bottom: 2vw;
        }
        
        .games-container {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: clamp(15px, 2.5vw, 30px);
          margin-top: clamp(15px, 2.5vw, 30px);
          width: 100%;
        }
        
        .game-card {
          background-color: rgba(15, 15, 15, 0.5);
          border-radius: clamp(8px, 1vw, 12px);
          overflow: hidden;
          width: 100%;
          max-width: clamp(300px, 30vw, 400px);
          box-shadow: 0 0 20px rgba(250, 14, 69, 0.3);
          transition: all 0.3s ease;
          padding-bottom: clamp(15px, 1.5vw, 25px);
          
          /* Animation initial state */
          opacity: 0;
          transform: translateX(50px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        /* Animation visible state */
        .game-card.visible {
          opacity: 1;
          transform: translateX(0);
        }
        
        /* Stagger animation for second card */
        .game-card:nth-child(2) {
          transition-delay: 0.2s;
        }
        
        .game-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0 30px rgba(250, 14, 69, 0.6);
        }
        
        .game-preview {
          width: 100%;
          height: clamp(150px, 15vw, 220px);
          overflow: hidden;
        }
        
        .preview-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .game-card:hover .preview-img {
          transform: scale(1.05);
        }
        
        .game-card h3 {
          color: #fa0e45;
          margin: clamp(10px, 1.2vw, 15px) clamp(15px, 1.5vw, 20px) clamp(8px, 0.8vw, 10px);
          font-size: clamp(1.2rem, 1.5vw, 1.8rem);
        }
        
        .game-card p {
          color: white;
          margin: 0 clamp(15px, 1.5vw, 20px) clamp(10px, 1.2vw, 15px);
          font-size: clamp(0.8rem, 1vw, 1rem);
          line-height: 1.5;
        }
        
        .game-tech {
          display: flex;
          flex-wrap: wrap;
          gap: clamp(6px, 0.8vw, 10px);
          margin: 0 clamp(15px, 1.5vw, 20px) clamp(10px, 1.2vw, 15px);
        }
        
        .game-tech span {
          background-color: rgba(250, 14, 69, 0.2);
          color: #fa0e45;
          padding: clamp(4px, 0.4vw, 6px) clamp(8px, 0.8vw, 12px);
          border-radius: clamp(3px, 0.4vw, 5px);
          font-size: clamp(0.7rem, 0.8vw, 0.9rem);
        }
        
        .game-links {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0 clamp(15px, 1.5vw, 20px);
        }
        
        .play-btn {
          background-color: #fa0e45;
          color: white;
          padding: clamp(6px, 0.6vw, 10px) clamp(15px, 1.5vw, 25px);
          border-radius: clamp(3px, 0.4vw, 5px);
          text-decoration: none;
          font-weight: bold;
          transition: all 0.3s ease;
          display: inline-block;
          text-align: center;
          min-width: clamp(90px, 10vw, 120px);
          font-size: clamp(0.8rem, 1vw, 1rem);
        }
        
        .play-btn:hover {
          background-color: #d00a3c;
          transform: scale(1.05);
        }
        
        .github-btn {
          background-color: #333;
          color: white;
          width: clamp(32px, 3.5vw, 45px);
          height: clamp(32px, 3.5vw, 45px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .github-btn:hover {
          background-color: #555;
          transform: scale(1.1);
        }
        
        .github-btn i {
          font-size: clamp(1rem, 1.2vw, 1.3rem);
        }
        
        @media (max-width: 900px) {
          .games-container {
            flex-direction: column;
            align-items: center;
          }
          
          .game-card {
            max-width: 90%;
          }
        }

        @media (max-width: 520px) {
          
        .games-box{
          
          margin-top:300vw;
        }
        
        .game-card {
            
            max-width: 100%;
          }
          
          .game-preview {
            height: clamp(140px, 40vw, 180px);
          }
          
          .play-btn {
            padding: clamp(6px, 1.5vw, 8px) clamp(12px, 3vw, 15px);
            min-width: clamp(80px, 25vw, 100px);
          }
        
        @media (max-width: 480px) {
          
        .games-box{
          margin-top:300vw;
        }
        
        .game-card {
            
            max-width: 100%;
          }
          
          .game-preview {
            height: clamp(140px, 40vw, 180px);
          }
          
          .play-btn {
            padding: clamp(6px, 1.5vw, 8px) clamp(12px, 3vw, 15px);
            min-width: clamp(80px, 25vw, 100px);
          }
        }
      `}</style>
    </div>
  );
};

export default Games;
