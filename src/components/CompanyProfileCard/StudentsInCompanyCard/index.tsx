import React from 'react';
import { Student } from 'src/entities/Student';
import {
  Content,
  CourseTitle,
  ProfileHeader,
  StudentContainer,
  StudentName,
} from '../styles';
import { useNavigate } from 'react-router-dom';

const StudentHistoryCard: React.FC<{ students: Student[] }> = ({
  students,
}) => {
  const navigate = useNavigate();
  return (
    <Content>
      <ProfileHeader>Histórico de Alunos</ProfileHeader>
      {students.length > 0 ? (
        students
          .sort(({ name: nameA }, { name: nameB }) =>
            nameA.localeCompare(nameB),
          )
          .map((student) => (
            <StudentContainer
              key={student.id}
              onClick={() => navigate(`/students/${student.id}`)}
            >
              <StudentName>{student.name}</StudentName>
              <CourseTitle>{student.course}</CourseTitle>
            </StudentContainer>
          ))
      ) : (
        <p>Nenhum aluno encontrado.</p>
      )}
    </Content>
  );
};

export default StudentHistoryCard;
