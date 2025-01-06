import React from 'react';

import { Student } from 'src/entities/Student';
import { Internship } from 'src/entities/Internship';
import {
  CompanyName,
  Content,
  HistoryItem,
  HistoryList,
  InfoLine,
  Label,
  NoInternshipsMessage,
  ProfileHeader,
} from '../styles';

const formatBirth = (date: string | undefined) => {
  if (!date) return 'Não fornecido';
  const [year, month, day] = date.split('-');
  return `${day}/${month}/${year}`;
};

interface StudentHistoryCardProps {
  student: Student | null;
  internships: Internship[];
  company: Record<string, string>;
}

const StudentHistoryCard: React.FC<StudentHistoryCardProps> = ({
  internships,
  company,
}) => {
  return (
    <Content>
      <ProfileHeader>Histórico do Aluno</ProfileHeader>
      {internships.length === 0 ? (
        <NoInternshipsMessage>
          Este aluno ainda não possui estágios cadastrados.
        </NoInternshipsMessage>
      ) : (
        <HistoryList>
          {internships
            .slice()
            .sort((a, b) => {
              const dateA = new Date(a.start_date).getTime();
              const dateB = new Date(b.start_date).getTime();
              return dateB - dateA;
            })
            .map((internship) => (
              <HistoryItem key={internship.id}>
                <CompanyName>{company[internship.company_id]}</CompanyName>
                <InfoLine>
                  <Label>Salário:</Label> R$ {internship.salary}
                </InfoLine>
                <InfoLine>
                  <Label>Carga Horária:</Label> {internship.workload} horas
                </InfoLine>
                <InfoLine>
                  <Label>Data de Início:</Label>{' '}
                  {formatBirth(internship.start_date)}
                </InfoLine>
                <InfoLine>
                  <Label>Data de Término:</Label>{' '}
                  {internship.end_date
                    ? formatBirth(internship.end_date)
                    : 'Em andamento'}
                </InfoLine>
              </HistoryItem>
            ))}
        </HistoryList>
      )}
    </Content>
  );
};

export default StudentHistoryCard;
