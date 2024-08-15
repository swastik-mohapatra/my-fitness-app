import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Box width="400px" sx={{ width: { xl: '100%' } }} m="auto" className={darkMode ? 'dark-mode' : ''}>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/exercise/:id" element={<ExerciseDetail darkMode={darkMode} />} />
      </Routes>
      <Footer darkMode={darkMode} />
    </Box>
  );
};

export default App;
