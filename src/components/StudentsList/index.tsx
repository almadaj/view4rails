import React, { useEffect, useState } from 'react';
import { Student } from 'src/entities/Student';
import studentService from 'src/services/studentService';
import ArrowDownIcon from '@mui/icons-material/ArrowDownward';
import {
  Button,
  Content,
  InfoContainer,
  InfoTitle,
  PageButton,
  PagesContainer,
  PaginationContainer,
  StudentName,
  StudentNumber,
} from './styles';
import { useNavigate } from 'react-router';

const StudentsList = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudents = async () => {
      const data = await studentService.getStudents();
      data.sort((a: { name: string }, b: { name: string }) =>
        a.name.localeCompare(b.name),
      );
      setStudents(data);
    };
    fetchStudents();
  }, []);

  const formatStudentNumber = (studentNumber: string) => {
    if (!studentNumber) return 'Sem Identificação';
    const numberString = studentNumber.toString();
    return `${numberString.slice(0, 2)}.${numberString.slice(2, 3)}.${numberString.slice(3)}`;
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const studentsToDisplay = students.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (page < Math.ceil(students.length / itemsPerPage))
      setPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  return (
    <>
      <ul>
        {studentsToDisplay.map((student) => {
          return (
            <Content key={student.id}>
              <InfoContainer>
                <StudentName>{student.name}</StudentName>
                <StudentNumber>
                  {formatStudentNumber(student.student_number)}
                </StudentNumber>
              </InfoContainer>
              <InfoContainer>
                <InfoTitle>{student.course}</InfoTitle>
              </InfoContainer>
              <InfoContainer
                onClick={() => navigate(`/students/${student.id}`)}
              >
                <Button>
                  <ArrowDownIcon />
                  Ver Status
                </Button>
              </InfoContainer>
            </Content>
          );
        })}
        <PaginationContainer>
          <PageButton disabled={page === 1} onClick={handlePreviousPage}>
            Anterior
          </PageButton>
          <PagesContainer>
            Página {page} de {Math.ceil(students.length / itemsPerPage)}
          </PagesContainer>
          <PageButton
            disabled={page === Math.ceil(students.length / itemsPerPage)}
            onClick={handleNextPage}
          >
            Próxima
          </PageButton>
        </PaginationContainer>
      </ul>
    </>
  );
};

export default StudentsList;
