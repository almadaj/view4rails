import React, { useEffect, useState } from 'react';
import Container from 'src/components/common/Container';
import { NavBar } from 'src/components/common/NavBar';
import { MainContainer, SubTitle, Title } from './styles';
import { useNavigate } from 'react-router-dom';
import userService from 'src/services/userService';
import { User } from 'src/entities/User';
import UsersList from 'src/components/UsersList';

const UserPage = () => {
  document.title = 'Painel Admnistrativo | CampusLink';
  const [user, setUser] = useState<User>();
  const navigate = useNavigate();

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
      <MainContainer>
        <Title>Painel Administrativo</Title>
        {user?.role ? (
          <UsersList />
        ) : (
          <SubTitle>Você não tem autorização.</SubTitle>
        )}
      </MainContainer>
    </Container>
  );
};

export default UserPage;
