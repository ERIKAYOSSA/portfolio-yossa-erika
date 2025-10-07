import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import EnglishHome from './components/EnglishHome';
import FrenchHome from './components/FrenchHome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/en" element={<EnglishHome />} />
        <Route path="/fr" element={<FrenchHome />} />
      </Routes>
    </Router>
  );
}

export default App;