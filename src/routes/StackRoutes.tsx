import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/Login';
import Home from '../pages/Home';
import Hamburguer from 'src/components/common/Hamburguer';

const LayoutWithNavbar = ({ children }: { children: React.ReactNode }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleDrawer = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <>
      <Hamburguer isExpanded={isExpanded} toggleDrawer={toggleDrawer} />
      <div
        style={{
          flexGrow: 1,
          marginLeft: isExpanded ? 240 : 60,
          transition: 'margin-left 0.3s',
        }}
      >
        {children}
      </div>
    </>
  );
};

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
