import React from 'react';
import { Link } from 'react-router-dom';
import './GamePage.css';
import BurgerMenu from './BurgerMenu';

function SecondPage() {
  return (
    <div className="second-page">
      <BurgerMenu/>
      <div className="second-page-content">
        <h1>Second Page</h1>
        <p>This is the second page of the app.</p>
      </div>
    </div>
  );
}

export default SecondPage;