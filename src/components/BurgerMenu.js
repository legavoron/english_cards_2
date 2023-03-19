import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BurgerMenu.css';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu">
      <div className="burger-icon" onClick={handleToggle}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      {isOpen && (
        <div className="burger-links">
          <Link to="/second-page">Second Page</Link>
          <Link to="/language-page">Language Page</Link>
          <Link to="/levels-page">Levels Page</Link>
          <Link to="/create-card">Create Card</Link>
          <div className="close-icon" onClick={handleToggle}>
            <div className="close-line"></div>
            <div className="close-line"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
