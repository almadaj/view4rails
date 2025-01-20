import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'src/components/common/Container';
import { NavBar } from 'src/components/common/NavBar';
import { User } from 'src/entities/User';
import userService from 'src/services/userService';
import { Title } from './styles';

const ProfilePage = () => {
  const [user, setUser] = useState<User>();
  const navigate = useNavigate();
  window.document.title = 'Perfil | CampusLink';
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
    fetchUser();
  }, [navigate]);
  return (
    <Container>
      <NavBar />
      <Title>Perfil</Title>
      <p>Nome: {user?.name}</p>
      <p>Nome: {user?.email}</p>
      <p>Nome: {user?.registration}</p>
    </Container>
  );
};

export default ProfilePage;
