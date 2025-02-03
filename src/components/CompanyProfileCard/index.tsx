import React, { useEffect, useState } from 'react';
import { Company } from 'src/entities/Company';
import {
  Content,
  EditIcon,
  Field,
  FieldLabel,
  Form,
  HeaderContainer,
  InfoCard,
  InfoItem,
  Input,
  ProfileHeader,
  SubText,
} from './styles';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import StandardModal from '../common/StandardModal';
import companyService from 'src/services/companyService';
interface CompanyProfileCard {
  company: Company | null;
}

const CompanyProfileCard: React.FC<CompanyProfileCard> = ({ company }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<Partial<Company>>({
    id: '',
    name: '',
    email: '',
    cnpj: '',
    phone: '',
    address: '',
  });

  useEffect(() => {
    if (company && isModalOpen) {
      setFormData({ ...company });
    }
  }, [company, isModalOpen]);

  const formatCreatedAt = (date: string | undefined) => {
    if (!date) return 'Não fornecido';
    const [year, month] = date.split('-');
    return `Cadastrado em ${month}/${year}`;
  };

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveEdit = async () => {
    try {
      if (!formData.id) {
        console.log('ID do estudante não encontrado');
        return;
      }

      const updatedCompany = {
        name: formData.name,
        email: formData.email,
        cnpj: formData.cnpj,
        phone: formData.phone,
        address: formData.address,
      };

      await companyService.updateCompany(formData.id, updatedCompany);
      alert('Empresa atualizada com sucesso!');
      handleModal();
      window.location.reload();
    } catch (error) {
      console.error('Erro ao atualizar estudante:', error);
      alert('Erro ao atualizar empresa');
    }
  };

  return (
    <Content>
      <StandardModal
        isOpen={isModalOpen}
        title={'Editar Empresa'}
        onClose={handleModal}
        confirmText="Salvar Alterações"
        onConfirm={handleSaveEdit}
      >
        <Form>
          <Field>
            <FieldLabel>Nome:</FieldLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Field>

          <Field>
            <FieldLabel>CNPJ:</FieldLabel>
            <Input
              type="text"
              name="cnpj"
              value={formData.cnpj}
              onChange={handleChange}
              required
            />
          </Field>

          <Field>
            <FieldLabel>Email:</FieldLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Field>

          <Field>
            <FieldLabel>CNPJ:</FieldLabel>
            <Input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </Field>
        </Form>
      </StandardModal>
      <HeaderContainer>
        <ProfileHeader>{company?.name || 'Nome não fornecido'}</ProfileHeader>
        <EditIcon onClick={handleModal}>
          <EditRoundedIcon />
        </EditIcon>
      </HeaderContainer>
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
