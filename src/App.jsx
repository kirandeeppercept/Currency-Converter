import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Convert from './components/Convert';
import Rates from './components/Rates';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Rates />} />
      <Route path="/convert" element={<Convert />} />
    </Routes>
  );
}

export default App;
