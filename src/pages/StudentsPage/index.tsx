import React from 'react';
import Container from 'src/components/common/Container';
import { NavBar } from 'src/components/common/NavBar';
import StudentsList from 'src/components/StudentsList';
import { AddButton, Header, PageTitle } from './styles';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const StudentsPage = () => {
  document.title = 'Estudantes | CampusLink';

  return (
    <Container>
      <NavBar />
      <Header>
        <PageTitle>Alunos Cadastrados</PageTitle>
        <AddButton>
          <AddCircleIcon style={{ paddingRight: 5 }} /> Cadastrar Aluno
        </AddButton>
      </Header>
      <StudentsList />
    </Container>
  );
};

export default StudentsPage;
