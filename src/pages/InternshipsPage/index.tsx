import React, { useEffect, useState } from 'react';
import Container from '../../components/common/Container';
import { NavBar } from 'src/components/common/NavBar';
import SearchBar from 'src/components/common/SearchBar';
import {
  MainContainer,
  Content,
  ResultsText,
  Title,
  ResultsList,
  ResultItem,
  ItemText,
  ContainerItem,
  NumberText,
} from './styles';
import studentService from 'src/services/studentService';
import { Student } from 'src/entities/Student';
import { useNavigate } from 'react-router-dom';
import InternshipForm from 'src/components/InternshipForm';
import { User } from 'src/entities/User';
import userService from 'src/services/userService';

const InternshipsPage = () => {
  const [search, setSearch] = useState('');
  const [students, setStudents] = useState<Student[]>([]);
  const [filteredStudents, setFilteredStudents] = useState<Student[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState<User>();
  const navigate = useNavigate();

  document.title = 'Central de Estágios | CampusLink';

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await studentService.getStudents();
        setStudents(response);
      } catch (error) {
        console.error('Failed to fetch students:', error);
      }
    };
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
    fetchStudents();
  }, [navigate]);

  useEffect(() => {
    if (search.trim()) {
      const results = students.filter(
        (student) =>
          student.name.toLowerCase().includes(search.toLowerCase()) ||
          student.student_number?.includes(search),
      );
      setFilteredStudents(results);
    } else {
      setFilteredStudents([]);
    }
  }, [search, students]);

  const handleModal = () => {
    if (!user?.role) {
      alert('Você não tem permissão para cadastrar estágios!');
      return;
    }
    setModalOpen(!isModalOpen);
  };

  const formatStudentNumber = (studentNumber: string) => {
    if (!studentNumber) return 'Sem Identificação';
    const numberString = studentNumber.toString();
    return `${numberString.slice(0, 2)}.${numberString.slice(2, 3)}.${numberString.slice(3)}`;
  };

  return (
    <Container>
      <NavBar />
      <MainContainer>
        <Content>
          <Title>Central de Estágios</Title>
          <SearchBar
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            buttonText="Cadastrar"
            onSearch={handleModal}
          />
          {search && filteredStudents.length === 0 && (
            <ResultsText>
              Sem resultados encontrados para &quot;{search}&quot;.
            </ResultsText>
          )}
          {filteredStudents.length > 0 && (
            <ResultsList>
              {filteredStudents.map((student) => (
                <ResultItem
                  key={student.id}
                  onClick={() => navigate(`/students/${student.id}`)}
                >
                  <ContainerItem>
                    <ItemText>{student.name}</ItemText>
                    <NumberText>
                      {formatStudentNumber(student.student_number)}
                    </NumberText>
                  </ContainerItem>
                  <ItemText>{student.course}</ItemText>
                </ResultItem>
              ))}
            </ResultsList>
          )}
          {isModalOpen && (
            <InternshipForm
              isModalOpen={isModalOpen}
              handleModal={handleModal}
            />
          )}
        </Content>
      </MainContainer>
    </Container>
  );
};

export default InternshipsPage;
