import React from 'react';
import { Link } from 'react-router-dom';
import './LevelsPage.css';

const LevelsPage = () => {
  const levels = Array.from({ length: 10 }, (_, index) => `Уровень${index + 1}`);

  return (
    <div className="levels-page">
      <h1>Выберите уровени</h1>
      <div className="levels-list">
        {levels.map((level, index) => (
          <Link to="/" className="level-button" key={index} style={{ textDecoration: 'none' }}>
            {level}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LevelsPage;
