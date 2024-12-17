import React, { useEffect, useState } from 'react';
import {
  AddButton,
  Container,
  GreetingContainer,
  Header,
  Title,
  WelcomeText,
  Notification,
  RightContainer,
  ChartCard,
} from './styles';
import Notifications from '@mui/icons-material/Notifications';
import { useNavigate } from 'react-router-dom';
import userService from 'src/services/userService';
import InternshipChart from 'src/components/InternshipChart';

const Home = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    document.title = 'Home | CampusLink';
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('userId');
        if (!token) {
          navigate('/');
          throw new Error('Token not found');
        }

        const user = await userService.getUserById(token);
        setUserName(user.name);
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
      <Header>
        <GreetingContainer>
          <WelcomeText>Seja bem-vindo(a),</WelcomeText>
          <Title>{userName}</Title>
        </GreetingContainer>
        <RightContainer>
          <AddButton>Adicionar</AddButton>
          <Notification>
            <Notifications />
          </Notification>
        </RightContainer>
      </Header>
      <ChartCard>
        <InternshipChart />
      </ChartCard>
    </Container>
  );
};

export default Home;
