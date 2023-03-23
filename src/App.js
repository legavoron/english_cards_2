import {Route, Routes } from 'react-router-dom';
import './App.css';

import { useState } from 'react';

import StartPage from './components/StartPage';
import LanguagePage from './components/LanguagePage';
import GamePage from './components/GamePage';
import LevelsPage from './components/LevelsPage';
import CreateCard from './components/CreateCard';

function App() {

  const [currentLang, setCurrentLang] = useState('ru');
  const [cardsList, setCardsList] = useState({});

  function handleLang(lang) {
    setCurrentLang(lang)
  }

  function handleAddCard(card) {
    setCardsList(card);
    console.log(cardsList)
  }


  return (
    <div className="App">
       <Routes>
          <Route exact path='/' element={<StartPage/>}/>
          <Route exact path='/levels' element={<LevelsPage cardsList = {cardsList}/>}/>
          <Route exact path='/game' element={<GamePage />} />
          <Route exact path='/lang' element={<LanguagePage 
                                                currentLang={currentLang}
                                                handleLang={handleLang}/>} />
          <Route exact path='/create' element={<CreateCard cardsList = {cardsList} handleAddCard={handleAddCard}/>} />
      </Routes>
    </div>
  );
}

export default App;