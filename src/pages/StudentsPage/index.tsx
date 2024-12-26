import React, { useEffect, useState } from 'react';
import Container from 'src/components/common/Container';
import { NavBar } from 'src/components/common/NavBar';
import { Student } from 'src/entities/Student';
import studentService from 'src/services/studentService';

const StudentsPage = () => {
  document.title = 'Estudentes | CampusLink';
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const students = await studentService.getStudents();
      setStudents(students);
    };
    fetchStudents();
  }, []);
  return (
    <Container>
      <NavBar />
      <h1>Alunos Cadastrados</h1>
      {students
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((student) => {
          return (
            <div key={student.id}>
              <h2>{student.name}</h2>
              <p>
                {student.student_number
                  ? student.student_number
                  : 'Sem Identificaçao'}
              </p>
              <p>{student.email}</p>
              <p>{student.course}</p>
            </div>
          );
        })}
    </Container>
  );
};

export default StudentsPage;
