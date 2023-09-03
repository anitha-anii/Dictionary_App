import React from 'react';
import { Routes,Route } from 'react-router-dom';
import HomePage from './HomePage';
import HistoryPage from './HistoryPage';
import WordDetailsPage from './WordDetailsPage';
import Navbar from './Navbar';
import '../components/App.css';

const App = () => {
    return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/word/:word" element={<WordDetailsPage />} />
      </Routes>
    
   
    </div>
  );
};


export default App;
