import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DrillSelect from './pages/DrillSelect';
import DrillSession from './pages/DrillSession';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drills" element={<DrillSelect />} />
        <Route path="/drill/:drillId" element={<DrillSession />} />
      </Routes>
    </Router>
  );
}

export default App;
