import React, { useEffect, useState } from 'react';
import Container from 'src/components/common/Container';
import { NavBar } from 'src/components/common/NavBar';
import {
  AddButton,
  FormGroup,
  Header,
  Input,
  Label,
  PageTitle,
  Form,
  StyledInput,
} from './styles';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CompaniesList from 'src/components/CompaniesList';
import { User } from 'src/entities/User';
import { Company } from 'src/entities/Company';
import StandardModal from 'src/components/common/StandardModal';
import userService from 'src/services/userService';
import companyService from 'src/services/companyService';
const CompaniesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState<User>();
  const [formData, setFormData] = useState<Partial<Company>>({
    name: '',
    cnpj: '',
    address: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('userId');
        if (!token) {
          throw new Error('Token not found');
        }
        const user = await userService.getUserById(token);
        setUser(user);
        if (!user) {
          throw new Error('User not found');
        }
      } catch (error) {
        console.log('Error in fetchUser', error);
      }
    };
    fetchUser();
  }, []);

  const handleModal = () => {
    if (!user?.role) {
      alert('Você não tem permissão para cadastrar empresas!');
      return;
    }
    setIsModalOpen(!isModalOpen);
    setFormData({
      name: '',
      cnpj: '',
      address: '',
      email: '',
      phone: '',
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const formattedValue = name === 'cnpj' ? formatCNPJ(value) : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: formattedValue,
    }));
  };

  const handleCreateCompany = async () => {
    if (!user?.role) {
      alert('Você não tem permissão para cadastrar empresas!');
      return;
    }
    if (
      !formData.name ||
      !formData.cnpj ||
      !formData.address ||
      !formData.email ||
      !formData.phone
    ) {
      alert('Preencha todos os campos obrigatórios!');
      return;
    }
    if (formData.cnpj.length < 18) {
      alert('CNPJ inválido!');
      return;
    }

    if (formData.cnpj) {
      const isDoubled = await companyService.getCompanies();
      const isDoubledCnpj = isDoubled.find(
        (company: { cnpj: string | undefined }) =>
          company.cnpj === formData.cnpj,
      );
      if (isDoubledCnpj) {
        alert('CNPJ já cadastrado!');
        return;
      }

      try {
        await companyService.createCompany(formData);
        alert('Empresa cadastrada com sucesso!');
        setIsModalOpen(false);
        window.location.reload();
      } catch (error) {
        console.log('Error in createCompany', error);
        throw error;
      }
    }
  };

  const formatCNPJ = (value: string) => {
    const onlyNumbers = value.replace(/\D/g, '');
    return onlyNumbers
      .replace(/^(\d{2})(\d)/, '$1.$2')
      .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/\.(\d{3})(\d)/, '.$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .slice(0, 18);
  };
  return (
    <Container>
      <NavBar />
      <Header>
        <PageTitle>Empresas Cadastradas</PageTitle>
        <AddButton onClick={handleModal}>
          <AddCircleIcon style={{ paddingRight: 5 }} /> Cadastrar Empresa
        </AddButton>
      </Header>
      <CompaniesList />
      {isModalOpen && (
        <StandardModal
          isOpen={isModalOpen}
          title={'Cadastro de Empresas'}
          onConfirm={handleCreateCompany}
          confirmText="Cadastrar Empresa"
          onClose={handleModal}
        >
          <Form>
            <FormGroup>
              <Label>Nome Fantasia</Label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Digite o nome-fantasia"
              />
            </FormGroup>
            <FormGroup>
              <Label>CNPJ</Label>
              <Input
                type="text"
                name="cnpj"
                value={formData.cnpj}
                onChange={handleInputChange}
                placeholder="Digite o CNPJ da empresa"
              />
            </FormGroup>
            <FormGroup>
              <Label>Telefone</Label>
              <StyledInput
                mask="+55 (99) 9999-9999"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Digite o telefone da empresa"
              />
            </FormGroup>
            <FormGroup>
              <Label>E-Mail</Label>
              <Input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Digite o email da empresa"
              />
            </FormGroup>
            <FormGroup>
              <Label>Endereço</Label>
              <Input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Digite o endereço da empresa"
              />
            </FormGroup>
          </Form>
        </StandardModal>
      )}
    </Container>
  );
};

export default CompaniesPage;
