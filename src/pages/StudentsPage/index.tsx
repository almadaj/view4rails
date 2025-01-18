import React, { useEffect, useState } from 'react';
import Container from 'src/components/common/Container';
import { NavBar } from 'src/components/common/NavBar';
import StudentsList from 'src/components/StudentsList';
import {
  AddButton,
  Form,
  FormGroup,
  Header,
  Input,
  Label,
  PageTitle,
  Select,
  StyledInput,
} from './styles';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import StandardModal from 'src/components/common/StandardModal';
import { Student } from 'src/entities/Student';
import { courses } from 'src/utils/AllCourses';
import { isValidEmail } from 'src/utils/VerifyEmail';
import { User } from 'src/entities/User';
import userService from 'src/services/userService';
import { useNavigate } from 'react-router-dom';
import studentService from 'src/services/studentService';

const StudentsPage = () => {
  document.title = 'Estudantes | CampusLink';
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState<User>();
  const [formData, setFormData] = useState<Partial<Student>>({
    name: '',
    email: '',
    course: '',
    student_number: '',
    phone: '',
    address: '',
    birth: '',
  });

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
        if (!user) {
          navigate('/');
          throw new Error('User not found');
        }
      } catch (error) {
        console.log('Error in fetchUser', error);
      }
    };

    fetchUser();
  }, [navigate]);

  const handleModal = () => {
    if (!user?.role) {
      alert('Você não tem permissão para cadastrar alunos!');
      return;
    }
    setIsModalOpen(!isModalOpen);
    setFormData({
      name: '',
      email: '',
      course: '',
      student_number: '',
      phone: '',
      address: '',
      birth: '',
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const registerNewStudent = async () => {
    if (!user?.role) {
      alert('Você não tem permissão para cadastrar alunos!');
      return;
    }

    if (
      formData.name === '' ||
      formData.email === '' ||
      formData.course === '' ||
      formData.student_number === '' ||
      formData.address === '' ||
      formData.birth === ''
    ) {
      alert('Preencha todos os campos!');
      return;
    }

    if (formData.email && !isValidEmail(formData.email)) {
      alert('E-mail inválido!');
      return;
    }

    if (formData.student_number) {
      const isDoubled = await studentService.getStudents();
      const isDoubledStudentNumber = isDoubled.find(
        (student: { student_number: string | undefined }) =>
          student.student_number === formData.student_number,
      );
      if (isDoubledStudentNumber) {
        alert('Matrícula já cadastrada!');
        return;
      }
    }

    try {
      await studentService.createStudent(formData);
      alert('Aluno registrado com sucesso!');
      console.log('Aluno registrado:', formData);
      window.location.reload();
      handleModal();
    } catch (error) {
      console.log('Error in registerNewStudent', error);
    }
  };

  return (
    <Container>
      <NavBar />
      <Header>
        <PageTitle>Alunos Cadastrados</PageTitle>
        <AddButton onClick={handleModal}>
          <AddCircleIcon style={{ paddingRight: 5 }} /> Cadastrar Aluno
        </AddButton>
      </Header>
      <StudentsList />
      {isModalOpen && (
        <StandardModal
          isOpen={isModalOpen}
          title="Cadastrar Novo Aluno"
          onConfirm={registerNewStudent}
          confirmText="Cadastrar"
          onClose={handleModal}
        >
          <Form>
            <FormGroup>
              <Label>Nome:</Label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Digite o nome do aluno"
              />
            </FormGroup>
            <FormGroup>
              <Label>Telefone</Label>
              <StyledInput
                mask="+55 (99) 9 9999-9999"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Digite o telefone do aluno"
              />
            </FormGroup>
            <FormGroup>
              <Label>E-mail:</Label>
              <Input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Digite o e-mail do aluno"
              />
            </FormGroup>
            <FormGroup>
              <Label>Curso</Label>
              <Select
                name="course"
                value={formData.course}
                onChange={handleSelectChange}
              >
                <option value="">Selecione o curso</option>
                {courses.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </Select>
            </FormGroup>
            <FormGroup>
              <Label>Matrícula:</Label>
              <Input
                type="number"
                name="student_number"
                value={formData.student_number}
                onChange={handleInputChange}
                placeholder="Digite a matrícula"
              />
            </FormGroup>
            <FormGroup>
              <Label>Endereço:</Label>
              <Input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Digite o endereço do aluno"
              />
            </FormGroup>
            <FormGroup>
              <Label>Data de Nascimento:</Label>
              <Input
                type="date"
                name="birth"
                value={formData.birth}
                onChange={handleInputChange}
                placeholder="Digite a data de nascimento"
              />
            </FormGroup>
          </Form>
        </StandardModal>
      )}
    </Container>
  );
};

export default StudentsPage;
