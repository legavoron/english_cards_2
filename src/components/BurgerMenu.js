import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './BurgerMenu.css';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [startX, setStartX] = useState(null);
  const [currentX, setCurrentX] = useState(null);
  const [translateX, setTranslateX] = useState(0);
  const menuRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleTouchStart = (e) => {
    if (isOpen) {
      setStartX(e.touches[0].pageX);
      setCurrentX(e.touches[0].pageX);
      setTranslateX(0);
    }
  };

  const handleTouchMove = (e) => {
    if (isOpen) {
      setCurrentX(e.touches[0].pageX);
      setTranslateX(currentX - startX);
      menuRef.current.style.transform = `translateX(${translateX}px)`;
    }
  };

  const handleTouchEnd = () => {
    if (isOpen && translateX > 50) {
      setIsOpen(false);
      setTranslateX(0);
      menuRef.current.style.transform = 'translateX(0)';
    }
  };

  return (
    <div className="burger-menu" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
      <div className="burger-icon" onClick={handleToggle}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      {isOpen && (
        <div className="burger-links" ref={menuRef}>
          <Link to="/">Главное меню</Link>
          <Link to="/secondPage">Старт</Link>
          <Link to="/levels">Выбрать уровни</Link>
          <Link to="/language">Выбрать язык</Link>
          <Link to="/create">Создать карточку</Link>
          <div className="close-icon" onClick={handleToggle}>
            <div className="close-line"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
