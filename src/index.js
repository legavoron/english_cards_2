import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import GamePage from './components/GamePage';
import LanguagePage from './components/LanguagePage';
import LevelsPage from './components/LevelsPage';
import CreateCard from './components/CreateCard';

import GlobalStyle from './Globalstyle';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/secondPage" element={<GamePage />} />
      <Route exact path="/language" element={<LanguagePage />} />
      <Route exact path="/levels" element={<LevelsPage />} />
      <Route exact path="/createCard" element={<CreateCard />} />
    </Routes>
  </BrowserRouter>
);