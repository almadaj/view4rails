import React, { useEffect, useState } from 'react';
import { NavbarContainer, NavLink, NavLinks, Separator } from './styles';
import { useNavigate } from 'react-router-dom';
import { User } from 'src/entities/User';
import userService from 'src/services/userService';

export const NavBar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>();
  const [period, setPeriod] = useState<string>();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('userId');
        if (!token) {
          navigate('/');
          throw new Error('Token not found');
        }
        const user = await userService.getUserById(token);
        setUser(user);
        if (!user) {
          navigate('/');
          throw new Error('User not found');
        }
      } catch (error) {
        console.log('Error in fetchUser', error);
      }
    };

    const fetchPeriod = async () => {
      const period = new Date().getFullYear().toString().slice(-2);
      const month = new Date().getMonth();
      setPeriod(period + (month < 7 ? '.1' : '.2'));
    };

    fetchUser();
    fetchPeriod();
  }, [navigate]);
  return (
    <NavbarContainer>
      <NavLinks>
        <NavLink to="/profile">
          <strong>{user?.name}</strong> <br />
          <strong>RA:</strong> {user?.registration}
        </NavLink>
        <Separator />
        <NavLink to="/users">
          <strong>{user?.role ? 'Secretária' : 'Coordenação'}</strong> <br />
          <strong>Período: </strong> {period}
        </NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};
