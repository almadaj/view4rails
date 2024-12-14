import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/Login';
import Home from '../pages/Home';
import { NavBar } from 'src/components/common/NavBar';

const LayoutWithNavbar = ({ children }: { children: React.ReactNode }) => (
  <>
    <NavBar />
    {children}
  </>
);

const StackRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/home"
          element={
            <LayoutWithNavbar>
              <Home />
            </LayoutWithNavbar>
          }
        />
      </Routes>
    </Router>
  );
};

export default StackRoutes;
