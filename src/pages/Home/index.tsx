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
  ChartTitle,
  ChartContainer,
  CompanyCard,
  BannerContainer,
  Banner,
  ContentContainer,
} from './styles';
import Notifications from '@mui/icons-material/Notifications';
import { useNavigate } from 'react-router-dom';
import userService from 'src/services/userService';
import InternshipChart from 'src/components/InternshipChart';
import CompanyChart from 'src/components/CompanyChart';
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
      <ContentContainer>
        <BannerContainer>
          <a
            href="https://www.unichristus.edu.br/?utm_source=Direto&utm_medium=Organico&utm_campaign=Direto&utm_content=Home&utm_term"
            target="blank"
          >
            <Banner src="https://www.unichristus.edu.br/wp-content/uploads/2024/04/Banner-MelhorParticular-CEDesktop.jpg" />
          </a>
        </BannerContainer>
        <ChartContainer>
          <ChartCard onClick={() => navigate('/internships')}>
            <ChartTitle>Novos Estágios</ChartTitle>
            <InternshipChart />
          </ChartCard>
          <CompanyCard onClick={() => navigate('/companies')}>
            <ChartTitle>Empresas Cadastradas:</ChartTitle>
            <CompanyChart />
          </CompanyCard>
        </ChartContainer>
      </ContentContainer>
    </Container>
  );
};

export default Home;
