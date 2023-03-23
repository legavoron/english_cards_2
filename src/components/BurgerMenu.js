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

  const handleTouchMove = (event) => {
    if (currentX === null) {
      return;
    }
    const deltaX = event.touches[0].clientX - currentX;
    if (deltaX >= 0) { 
      setTranslateX(deltaX);
      menuRef.current.style.transform = `translateX(${deltaX}px)`;
    }
  };

  const handleTouchEnd = () => {
    if (isOpen) {
      if (translateX > 100) {
        setIsOpen(false);
        setTranslateX(0);
        menuRef.current.style.transform = 'translateX(0)';
      } else if (translateX > 0 && translateX < 100){
        setTranslateX(0);
        menuRef.current.style.transform = 'translateX(0)';
      } else {
        setTranslateX(0);
        menuRef.current.style.transform = 'translateX(0)';
      }
      setCurrentX(null);
    }
  };

  return (
    <div
      className="burger-menu"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="burger-icon" onClick={handleToggle}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      {isOpen && (
        <div className="burger-links" ref={menuRef}>
          <Link to="/">Главное меню</Link>
          <Link to="/game">Старт</Link>
          <Link to="/levels">Выбрать уровни</Link>
          <Link to="/lang">Выбрать язык</Link>
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
