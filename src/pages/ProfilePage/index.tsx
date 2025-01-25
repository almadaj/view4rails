import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'src/components/common/Container';
import { NavBar } from 'src/components/common/NavBar';
import { User } from 'src/entities/User';
import userService from 'src/services/userService';
import {
  Button,
  ProfileCardContainer,
  Title,
  Input,
  FormGroup,
  Label,
} from './styles';
import ProfileCard from 'src/components/ProfileCard';
import StandardModal from 'src/components/common/StandardModal';
import { isValidEmail } from 'src/utils/VerifyEmail';

const ProfilePage = () => {
  const [user, setUser] = useState<User>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<Partial<User>>({
    name: user?.name || '',
    email: user?.email || '',
  });

  const navigate = useNavigate();
  window.document.title = 'Perfil | CampusLink';

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('userId');
        if (!token) {
          navigate('/');
          throw new Error('Token not found');
        }
        const user = await userService.getUserById(token);
        setUser(user);
        setFormData({ name: user?.name || '', email: user?.email || '' }); // Atualiza formData com dados do usuário
      } catch (error) {
        console.log('Error in fetchUser', error);
      }
    };
    fetchUser();
  }, [navigate]);

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
    if (isModalOpen)
      setFormData({ name: user?.name || '', email: user?.email || '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditProfile = async () => {
    try {
      const token = localStorage.getItem('userId');
      if (!token) {
        navigate('/');
        throw new Error('Token not found');
      }
      if (!formData.name || !formData.email || !isValidEmail(formData.email))
        alert('Preencha os campos corretamente');
      const updatedUser = await userService.updateUser(token, formData);
      setUser(updatedUser);
      setIsModalOpen(false);
      window.location.reload();
    } catch (error) {
      console.log('Error in handleEditProfile', error);
    }
  };

  return (
    <Container>
      <NavBar />
      <Title>Perfil</Title>

      <StandardModal
        isOpen={isModalOpen}
        onClose={handleOpenModal}
        onConfirm={handleEditProfile}
        confirmText="Salvar Alterações"
        title="Editar Perfil"
      >
        <FormGroup>
          <Label htmlFor="name">Nome:</Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">E-mail:</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </FormGroup>
      </StandardModal>

      <ProfileCard user={user} />
      <ProfileCardContainer>
        <Button onClick={handleOpenModal}>Editar Perfil</Button>
      </ProfileCardContainer>
    </Container>
  );
};

export default ProfilePage;
