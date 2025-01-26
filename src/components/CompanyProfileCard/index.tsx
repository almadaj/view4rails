import React from 'react';
import { Company } from 'src/entities/Company';
import { Content, InfoCard, InfoItem, ProfileHeader, SubText } from './styles';

interface CompanyProfileCard {
  company: Company | null;
}

const CompanyProfileCard: React.FC<CompanyProfileCard> = ({ company }) => {
  const formatCreatedAt = (date: string | undefined) => {
    if (!date) return 'Não fornecido';
    const [year, month] = date.split('-');
    return `Cadastrado em ${month}/${year}`;
  };
  return (
    <Content>
      <ProfileHeader>{company?.name || 'Nome não fornecido'}</ProfileHeader>
      <SubText>{formatCreatedAt(company?.created_at)}</SubText>
      <InfoCard>
        <InfoItem>
          <span>CNPJ:</span> {company?.cnpj || 'Não fornecido'}
        </InfoItem>
        <InfoItem>
          <span>Email:</span> {company?.email || 'Não fornecido'}
        </InfoItem>
        <InfoItem>
          <span>Telefone:</span> {company?.phone || 'Não fornecido'}
        </InfoItem>
        <InfoItem>
          <span>Endereço:</span> {company?.address || 'Não fornecido'}
        </InfoItem>
      </InfoCard>
    </Content>
  );
};

export default CompanyProfileCard;
