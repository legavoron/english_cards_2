import React, { useState } from 'react';
import './LanguagePage.css';
import BurgerMenu from './BurgerMenu';

function LanguagePage() {
  const [activeBtn, setActiveBtn] = useState('ru');

  const handleBtnClick = (lang) => {
    setActiveBtn(lang);
  };

  return (
    <div className="language-page">
      <BurgerMenu/>
      <h1 className='language'> Выберете язык</h1>
      <div className='language_button-container'>
      <button
        className={activeBtn === 'ru' ? 'btn active' : 'btn'}
        onClick={() => handleBtnClick('ru')}
      >
        RU
      </button>
      <button
        className={activeBtn === 'en' ? 'btn active' : 'btn'}
        onClick={() => handleBtnClick('en')}
      >
        EN
      </button>
      </div>
    </div>
  );
}

export default LanguagePage;
