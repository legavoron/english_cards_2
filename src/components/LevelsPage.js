import React from 'react';
// import { Link } from 'react-router-dom';
import './LevelsPage.css';
import BurgerMenu from './BurgerMenu';
import { useLocation } from 'react-router-dom';

const LevelsPage = () => {
 

  return (
    <div className="levels-page">
      <BurgerMenu/>
      <h1>Выберите уровни</h1>
      <div className="levels-list">
        
      </div>
    </div>
  );
};

export default LevelsPage;
