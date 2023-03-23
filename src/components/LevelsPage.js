import React from 'react';
import './LevelsPage.css';
import BurgerMenu from './BurgerMenu';
import { useLocation } from 'react-router-dom';

const LevelsPage = ({cardsList}) => {
 

  return (
    <div className="levels-page">
      <BurgerMenu/>
      <h1>Выберите уровни</h1>
      <div className="levels-list">
        {Object.keys(cardsList).map((key) => (
          <button key={key} className="level-button">{key}</button>
        ))}
      </div>
    </div>
  );
};

export default LevelsPage;

