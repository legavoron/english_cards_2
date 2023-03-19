import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import SecondPage from './components/SecondPage';
import LanguagePage from './components/LanguagePage';
import LevelsPage from './components/LevelsPage';
import GlobalStyle from './Globalstyle';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/secondPage" element={<SecondPage />} />
      <Route exact path="/language" element={<LanguagePage />} />
      <Route exact path="/levels" element={<LevelsPage />} />
    </Routes>
  </BrowserRouter>
);
