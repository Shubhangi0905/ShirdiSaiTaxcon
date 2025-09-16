// src/App.jsx

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // We'll create this next
import TaxCalculatorPage from './pages/TaxCalculatorPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tax-calculator" element={<TaxCalculatorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;