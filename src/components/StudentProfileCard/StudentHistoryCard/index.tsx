import React, { useState } from 'react';

import { Student } from 'src/entities/Student';
import { Internship } from 'src/entities/Internship';
import {
  CompanyCardHeader,
  CompanyName,
  Content,
  Field,
  FieldLabel,
  Form,
  HistoryItem,
  HistoryList,
  InfoLine,
  Input,
  Label,
  NoInternshipsMessage,
  ProfileHeader,
} from '../styles';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import StandardModal from 'src/components/common/StandardModal';
import internshipService from 'src/services/internshipService';
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInternship, setSelectedInternship] =
    useState<Internship | null>(null);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedInternship(null);
  };

  const handleOpenModal = (internship: Internship) => {
    setIsModalOpen(true);
    setSelectedInternship(internship);
  };

  const handleInputChange = (
    field: keyof Internship,
    value: string | number,
  ) => {
    if (selectedInternship) {
      setSelectedInternship({ ...selectedInternship, [field]: value });
    }
  };

  const handleUpdateInternship = async () => {
    if (selectedInternship) {
      try {
        const payload = {
          salary: selectedInternship.salary,
          workload: selectedInternship.workload,
          start_date: selectedInternship.start_date,
          end_date: selectedInternship.end_date,
        };

        await internshipService.updateInternship(
          selectedInternship.id,
          payload,
        );
        alert('Estágio atualizado com sucesso!');
        setSelectedInternship(null);
        window.location.reload();
        handleCloseModal();
      } catch (error) {
        console.error('Erro ao atualizar o estágio:', error);
        alert('Ocorreu um erro ao atualizar o estágio. Tente novamente.');
      }
    }
  };

  return (
    <Content>
      {isModalOpen && selectedInternship && (
        <StandardModal
          onClose={handleCloseModal}
          isOpen={isModalOpen}
          title={'Editar Estágio'}
          confirmText="Salvar"
          onConfirm={handleUpdateInternship}
        >
          <Form>
            <Field>
              <FieldLabel>Salário</FieldLabel>
              <Input
                type="number"
                value={selectedInternship.salary}
                onChange={(e) =>
                  handleInputChange('salary', Number(e.target.value))
                }
              />
            </Field>
            <Field>
              <FieldLabel>Carga Horária</FieldLabel>
              <Input
                type="number"
                value={selectedInternship.workload}
                onChange={(e) =>
                  handleInputChange('workload', Number(e.target.value))
                }
              />
            </Field>
            <Field>
              <FieldLabel>Data de Início</FieldLabel>
              <Input
                type="date"
                value={selectedInternship.start_date}
                onChange={(e) =>
                  handleInputChange('start_date', e.target.value)
                }
              />
            </Field>
            <Field>
              <FieldLabel>Data de Término</FieldLabel>
              <Input
                type="date"
                value={selectedInternship?.end_date || ''}
                onChange={(e) => handleInputChange('end_date', e.target.value)}
              />
            </Field>
          </Form>
        </StandardModal>
      )}
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
                <CompanyCardHeader key={internship.id}>
                  <CompanyName>{company[internship.company_id]}</CompanyName>
                  <span
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleOpenModal(internship)}
                  >
                    <CreateRoundedIcon />
                  </span>
                </CompanyCardHeader>
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
