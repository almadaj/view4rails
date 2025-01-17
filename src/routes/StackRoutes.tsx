import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/Login';
import Home from '../pages/Home';
import Hamburguer from 'src/components/common/Hamburguer';
import StudentsPage from 'src/pages/StudentsPage';
import CompaniesPage from 'src/pages/CompaniesPage';
import StudentProfile from 'src/pages/StudentProfile';
import InternshipsPage from 'src/pages/InternshipsPage';
import UserPage from 'src/pages/UsersPage';

const LayoutWithHamburguer = ({ children }: { children: React.ReactNode }) => {
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
            <LayoutWithHamburguer>
              <Home />
            </LayoutWithHamburguer>
          }
        />
        <Route
          path="/students"
          element={
            <LayoutWithHamburguer>
              <StudentsPage />
            </LayoutWithHamburguer>
          }
        />
        <Route
          path="/students/:id"
          element={
            <LayoutWithHamburguer>
              <StudentProfile />
            </LayoutWithHamburguer>
          }
        />
        <Route
          path="/companies"
          element={
            <LayoutWithHamburguer>
              <CompaniesPage />
            </LayoutWithHamburguer>
          }
        />
        <Route
          path="/internships"
          element={
            <LayoutWithHamburguer>
              <InternshipsPage />
            </LayoutWithHamburguer>
          }
        />
        <Route
          path="/users"
          element={
            <LayoutWithHamburguer>
              <UserPage />
            </LayoutWithHamburguer>
          }
        />
      </Routes>
    </Router>
  );
};

export default StackRoutes;
