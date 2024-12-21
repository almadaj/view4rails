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
} from './styles';
import Notifications from '@mui/icons-material/Notifications';
import { useNavigate } from 'react-router-dom';
import userService from 'src/services/userService';
import InternshipChart from 'src/components/InternshipChart';
import { Company } from 'src/entities/Company';
import companyService from 'src/services/companyService';
const Home = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>('');
  const [companies, setCompanies] = useState<Company[]>([]);

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
      } finally {
        const fetchCompanies = async () => {
          try {
            const companies = await companyService.getCompanies();
            setCompanies(companies);
          } catch (error) {
            console.log('Error in fetchCompanies', error);
          }
        };
        fetchCompanies();
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
      <ChartContainer>
        <ChartCard onClick={() => navigate('/internships')}>
          <ChartTitle>Novos Estágios</ChartTitle>
          <InternshipChart />
        </ChartCard>
        <ChartCard>
          <h2>Empresas com Alunos</h2>
          <ul>
            {companies.map((company) => (
              <li key={company.id}>
                <strong>Empresa:</strong> {company.name} <br />
                <strong>Contato:</strong> {company.email}
                <br />
              </li>
            ))}
          </ul>
        </ChartCard>
      </ChartContainer>
    </Container>
  );
};

export default Home;
