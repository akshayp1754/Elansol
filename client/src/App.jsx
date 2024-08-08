import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDarkMode } from './components/hoc/useDarkMode.js';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import { Toaster } from 'react-hot-toast';
import Layout from './components/Layout';
import Table from './components/Table/Table';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <useDarkMode>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/table" element={<Table />} />
        <Route path="/landingPage" element={<LandingPage />} />
      </Routes>
    </useDarkMode>
  );
}

export default App;
