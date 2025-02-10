import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Container from 'src/components/common/Container';
import { NavBar } from 'src/components/common/NavBar';
import { Company } from 'src/entities/Company';
import companyService from 'src/services/companyService';
import { Arrow, BackButton, Content } from './styles';
import CompanyProfileCard from 'src/components/CompanyProfileCard';
import StudentsInCompanyCard from 'src/components/CompanyProfileCard/StudentsInCompanyCard';
import { Student } from 'src/entities/Student';

const CompanyProfile = () => {
  const { id } = useParams();
  const [company, setCompany] = useState<Company | null>(null);
  const [students, setStudents] = useState<Student[]>([]);
  const navigate = useNavigate();
  window.document.title = `${company?.name.split(/[,|\-|\s]/)[0]} | CampusLink`;
  useEffect(() => {
    const fetchStudent = async () => {
      try {
        if (!id) throw new Error('ID não fornecido!');

        const companyData = await companyService.showCompany(id);
        setCompany(companyData);

        const studentsData = await companyService.getInternsByCompany(id);
        setStudents(studentsData);
      } catch (err) {
        console.error('Erro ao buscar dados da empresa', err);
      }
    };

    fetchStudent();
  }, [id]);
  return (
    <Container>
      <NavBar />
      <Content>
        <BackButton onClick={() => navigate('/companies')}>
          <Arrow>➔</Arrow>
        </BackButton>
        <CompanyProfileCard company={company} />
        <StudentsInCompanyCard students={students} />
      </Content>
    </Container>
  );
};

export default CompanyProfile;
