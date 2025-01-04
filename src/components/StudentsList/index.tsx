import React, { useEffect, useState } from 'react';
import { Student } from 'src/entities/Student';
import studentService from 'src/services/studentService';
import ArrowDownIcon from '@mui/icons-material/ArrowDownward';
import {
  Button,
  Content,
  InfoContainer,
  InfoTitle,
  StudentName,
  StudentNumber,
} from './styles';
import { useNavigate } from 'react-router';

const StudentsList = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchStudents = async () => {
      const students = await studentService.getStudents();
      setStudents(students);
    };
    fetchStudents();
  }, []);

  const formatStudentNumber = (studentNumber: string) => {
    if (!studentNumber) return 'Sem Identificação';
    const numberString = studentNumber.toString();
    return `${numberString.slice(0, 2)}.${numberString.slice(2, 3)}.${numberString.slice(3)}`;
  };

  return (
    <>
      <ul>
        {students
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((student) => {
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
      </ul>
    </>
  );
};

export default StudentsList;
