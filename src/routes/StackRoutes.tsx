import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importação das telas
import LoginPage from '../pages/Login';
import Home from '../pages/Home';

// Componente de Rotas
const StackRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default StackRoutes;
