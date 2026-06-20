import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage'; 
import IndustryPage from './pages/IndustryPage';
import PentaKuhlPage from './pages/PentaKuhlPage';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/industries" element={<IndustryPage />} />
        <Route path="/pentakuhl" element={<PentaKuhlPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}