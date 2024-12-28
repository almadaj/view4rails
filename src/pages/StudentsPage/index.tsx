import React from 'react';
import Container from 'src/components/common/Container';
import { NavBar } from 'src/components/common/NavBar';
import StudentsList from 'src/components/StudentsList';
import { AddButton, Header, PageTitle } from './styles';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import StandardModal from 'src/components/common/StandardModal';

const StudentsPage = () => {
  document.title = 'Estudantes | CampusLink';
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Container>
      <NavBar />
      <Header>
        <PageTitle>Alunos Cadastrados</PageTitle>
        <AddButton onClick={handleModal}>
          <AddCircleIcon style={{ paddingRight: 5 }} /> Cadastrar Aluno
        </AddButton>
      </Header>
      <StudentsList />
      {isModalOpen && (
        <StandardModal
          isOpen={isModalOpen}
          title="Cadastrar Novo Aluno"
          onConfirm={handleModal}
          onClose={handleModal}
        >
          <form>
            <div>
              <label>Nome:</label>
              <input type="text" placeholder="Digite o nome do aluno" />
            </div>
            <div>
              <label>Curso:</label>
              <input type="text" placeholder="Digite o curso do aluno" />
            </div>
            <div>
              <label>Número:</label>
              <input type="text" placeholder="Digite o número do aluno" />
            </div>
          </form>
        </StandardModal>
      )}
    </Container>
  );
};

export default StudentsPage;
