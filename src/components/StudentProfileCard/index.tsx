import React from 'react';
import { Student } from 'src/entities/Student';
import { Content, InfoCard, InfoItem, ProfileHeader, SubText } from './styles';

interface StudentProfileCardProps {
  student: Student | null;
}
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

const StudentProfileCard: React.FC<StudentProfileCardProps> = ({ student }) => {
  return (
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
  );
};

export default StudentProfileCard;
