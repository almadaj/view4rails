import React from 'react';
import { User } from 'src/entities/User';
import { Info, Label, LabelContainer, MainCard, MainContainer } from './styles';

interface ProfileCardProps {
  user: User | undefined;
}

const formatDate = (date: string | undefined) => {
  if (!date) return '';
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString('pt-BR');
};

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  return (
    <MainContainer>
      <MainCard>
        <LabelContainer>
          <Label>Nome:</Label> <Info>{user?.name}</Info>
        </LabelContainer>
        <LabelContainer>
          <Label>Email:</Label> <Info>{user?.email}</Info>
        </LabelContainer>
        <LabelContainer>
          <Label>Registro:</Label> <Info>{user?.registration}</Info>
        </LabelContainer>
        <LabelContainer>
          <Label>Função:</Label>{' '}
          <Info>{user?.role ? 'Secretária' : 'Coordenação'}</Info>
        </LabelContainer>
        <LabelContainer>
          <Label>Cadastrado em:</Label>
          <Info>{formatDate(user?.created_at)}</Info>
        </LabelContainer>
      </MainCard>
    </MainContainer>
  );
};

export default ProfileCard;
