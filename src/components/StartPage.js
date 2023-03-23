import * as React from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo.svg';

import './StartPage.css';

function StartPage() {


  return (
    <div className="container">
      <div className="imageContainer">
        <img src={logo} alt="english cards" className='logo'/>
      </div>
      <div className="button-container">
        <Link to="/create" className="button" style={{ textDecoration: 'none' }}>
          Создать карточку
        </Link>
        <Link to="/levels" className="button" style={{ textDecoration: 'none' }}>
          Выбрать уровень
        </Link>
        <Link to="/lang" className="button" style={{ textDecoration: 'none' }}>
          Выбрать язык
        </Link>
        <Link to="/game" className="button" style={{ textDecoration: 'none' }}>
          Старт
        </Link>
      </div>
    </div>
  );
}

export default StartPage;