import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { NavBar } from 'src/components/common/NavBar';
import { Student } from 'src/entities/Student';
import studentService from 'src/services/studentService';
import { Arrow, BackButton, MainContainer } from './styles';
import Container from 'src/components/common/Container';
import { Internship } from 'src/entities/Internship';
import companyService from 'src/services/companyService';
import StudentProfileCard from 'src/components/StudentProfileCard';
import StudentHistoryCard from 'src/components/StudentProfileCard/StudentHistoryCard';

const StudentProfile = () => {
  const { id } = useParams();
  const [student, setStudent] = useState<Student | null>(null);
  const [internships, setInternships] = useState<Internship[]>([]);
  const [company, setCompany] = useState<Record<string, string>>({});
  const name = student?.name?.split(' ');
  document.title = `${name?.[0]} | CampusLink`;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        if (!id) throw new Error('ID não fornecido!');

        const studentData = await studentService.showStudent(id);
        setStudent(studentData);

        const internshipsData = await studentService.getStudentInternships(id);
        setInternships(internshipsData);

        const companyNames: Record<string, string> = {};
        for (const internship of internshipsData) {
          if (!companyNames[internship.company_id]) {
            try {
              const company = await companyService.showCompany(
                internship.company_id,
              );
              companyNames[internship.company_id] = company.name;
            } catch (err) {
              console.error(
                `Erro ao buscar dados da empresa (ID: ${internship.company_id}):`,
                err,
              );
            }
          }
        }
        setCompany(companyNames);
      } catch (err) {
        console.error('Erro ao buscar dados do estudante e estágios:', err);
      }
    };

    fetchStudent();
  }, [id]);

  return (
    <Container>
      <NavBar />
      <MainContainer>
        <BackButton onClick={() => navigate('/students')}>
          <Arrow>➔</Arrow>
        </BackButton>
        <StudentProfileCard student={student} />
        <StudentHistoryCard
          internships={internships}
          student={student}
          company={company}
        />
      </MainContainer>
    </Container>
  );
};

export default StudentProfile;
