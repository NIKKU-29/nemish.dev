import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './AppRouter.jsx'

// Add Font Awesome
const fontAwesomeScript = document.createElement('script');
fontAwesomeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js';
document.head.appendChild(fontAwesomeScript);

// Add Devicon
const deviconLink = document.createElement('link');
deviconLink.rel = 'stylesheet';
deviconLink.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css';
document.head.appendChild(deviconLink);

// Add Stats.js
const statsScript = document.createElement('script');
statsScript.src = 'https://threejs.org/examples/js/libs/stats.min.js';
document.head.appendChild(statsScript);

// Add GSAP
const gsapScript = document.createElement('script');
gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
document.head.appendChild(gsapScript);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
)
