import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { NavBar } from 'src/components/common/NavBar';
import { Student } from 'src/entities/Student';
import studentService from 'src/services/studentService';
import {
  Arrow,
  BackButton,
  Content,
  InfoCard,
  InfoItem,
  MainContainer,
  ProfileHeader,
  SubText,
} from './styles';
import Container from 'src/components/common/Container';

const StudentProfile = () => {
  const { id } = useParams();
  const [student, setStudent] = useState<Student | null>(null);
  const name = student?.name?.split(' ');
  document.title = `${name?.[0]} | CampusLink`;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        if (!id) throw new Error('ID não fornecido!');
        const data = await studentService.showStudent(id);
        setStudent(data);
      } catch (err) {
        console.error('Erro ao buscar estudante:', err);
      }
    };
    fetchStudent();
  }, [id]);

  const formatCreatedAt = (date: string | undefined) => {
    if (!date) return 'Não fornecido';
    const [year, month] = date.split('-');
    return `Cadastrado em ${month}/${year}`;
  };

  const formatBirth = (date: string | undefined) => {
    if (!date) return 'Não fornecido';
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  };

  const formatStudentNumber = (studentNumber: string | undefined) => {
    if (!studentNumber) return 'Sem Identificação';
    const numberString = studentNumber.toString();
    return `${numberString.slice(0, 2)}.${numberString.slice(2, 3)}.${numberString.slice(3)}`;
  };

  return (
    <Container>
      <NavBar />
      <MainContainer>
        <BackButton onClick={() => navigate('/students')}>
          <Arrow>➔</Arrow>
        </BackButton>
        <Content>
          <ProfileHeader>{student?.name || 'Nome não fornecido'}</ProfileHeader>
          <SubText>{formatCreatedAt(student?.created_at)}</SubText>
          <InfoCard>
            <InfoItem>
              <span>Matrícula:</span>{' '}
              {formatStudentNumber(student?.student_number) || 'Não fornecido'}
            </InfoItem>
            <InfoItem>
              <span>Email:</span> {student?.email || 'Não fornecido'}
            </InfoItem>
            <InfoItem>
              <span>Curso:</span> {student?.course || 'Não fornecido'}
            </InfoItem>
            <InfoItem>
              <span>Telefone:</span> {student?.phone || 'Não fornecido'}
            </InfoItem>
            <InfoItem>
              <span>Endereço:</span> {student?.address || 'Não fornecido'}
            </InfoItem>
            <InfoItem>
              <span>Data de Nascimento:</span>{' '}
              {formatBirth(student?.birth) || 'Não fornecido'}
            </InfoItem>
          </InfoCard>
        </Content>
      </MainContainer>
    </Container>
  );
};

export default StudentProfile;
