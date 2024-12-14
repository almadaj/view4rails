import React from 'react';
import { NavbarContainer, NavLink, NavLinks } from './styles';
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    navigate('/');
  };
  return (
    <NavbarContainer>
      <h1>CampusLink</h1>
      <NavLinks>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/settings">Settings</NavLink>
        <button
          onClick={handleLogout}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Logout
        </button>
      </NavLinks>
    </NavbarContainer>
  );
};
