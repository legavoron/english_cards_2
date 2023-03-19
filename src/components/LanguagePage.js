import React, { useState } from 'react';
import './LanguagePage.css';

function LanguagePage() {
  const [activeBtn, setActiveBtn] = useState('ru');

  const handleBtnClick = (lang) => {
    setActiveBtn(lang);
  };

  return (
    <div className="language-page">
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
  );
}

export default LanguagePage;
