import React, { useState } from 'react';
import './LanguagePage.css';
import BurgerMenu from './BurgerMenu';

function LanguagePage({currentLang, handleLang}) {
  
  return (
    <div className="language-page">
      <BurgerMenu/>
      <h1 className='language'> Выберете язык</h1>
      <div className='language_button-container'>
      <button
        className={currentLang === 'ru' ? 'btn btnActive' : 'btn'}
        onClick={() => handleLang('ru')}
      >
        RU
      </button>
      <button
        className={currentLang === 'en' ? 'btn btnActive' : 'btn'}
        onClick={() => handleLang('en')}
      >
        EN
      </button>
      </div>
    </div>
  );
}

export default LanguagePage;
