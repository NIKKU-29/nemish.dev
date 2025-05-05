import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import ThankYou from './components/ThankYou';
import './index.css';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
