import React, { useEffect, useState } from 'react';
import { Student } from 'src/entities/Student';
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
  Select,
  SubText,
} from './styles';
import StandardModal from '../common/StandardModal';
import { courses } from 'src/utils/AllCourses';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import studentService from 'src/services/studentService';

interface StudentProfileCardProps {
  student: Student | null;
}
const formatCreatedAt = (date: string | undefined) => {
  if (!date) return 'Não fornecido';
  const [year, month] = date.split('-');
  return `Cadastrado em ${month}/${year}`;
};

const formatBirth = (date: string | undefined) => {
  if (!date) return 'Não fornecido';
  const [year, month, day] = date.split('-');
  return `${day}/${month}/${year}`;
};
const formatStudentNumber = (studentNumber: string | undefined) => {
  if (!studentNumber) return 'Sem Identificação';
  const numberString = studentNumber.toString();
  return `${numberString.slice(0, 2)}.${numberString.slice(2, 3)}.${numberString.slice(3)}`;
};

const StudentProfileCard: React.FC<StudentProfileCardProps> = ({ student }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<Partial<Student>>({
    name: '',
    email: '',
    student_number: '',
    course: '',
    phone: '',
    address: '',
    birth: '',
  });

  useEffect(() => {
    if (student && isModalOpen) {
      setFormData({ ...student });
    }
  }, [student, isModalOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      course: e.target.value,
    }));
  };

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSaveEdit = async () => {
    try {
      if (!formData.id) {
        console.log('ID do estudante não encontrado');
        return;
      }

      const updatedStudent = {
        name: formData.name,
        email: formData.email,
        course: formData.course,
        student_number: formData.student_number,
        phone: formData.phone,
        address: formData.address,
        birth: formData.birth,
      };

      await studentService.updateStudent(formData.id, updatedStudent);
      alert('Estudante atualizado com sucesso!');
      handleModal();
      window.location.reload();
    } catch (error) {
      console.error('Erro ao atualizar estudante:', error);
      alert('Erro ao atualizar estudante');
    }
  };

  return (
    <Content>
      <StandardModal
        isOpen={isModalOpen}
        title={'Editar Estudante'}
        onClose={handleModal}
        onConfirm={handleSaveEdit}
        confirmText={'Salvar Alterações'}
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
            <FieldLabel>Matrícula:</FieldLabel>
            <Input
              type="text"
              name="student_number"
              value={formData.student_number}
              onChange={handleChange}
              required
            />
          </Field>

          <Field>
            <FieldLabel>Curso:</FieldLabel>
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
          </Field>

          <Field>
            <FieldLabel>Telefone:</FieldLabel>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </Field>

          <Field>
            <FieldLabel>Endereço</FieldLabel>
            <Input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </Field>

          <Field>
            <FieldLabel>Data de Nascimento:</FieldLabel>
            <Input
              type="date"
              name="birth"
              value={formData.birth}
              onChange={handleChange}
            />
          </Field>
        </Form>
      </StandardModal>
      <HeaderContainer>
        <ProfileHeader>{student?.name || 'Nome não fornecido'}</ProfileHeader>
        <EditIcon onClick={handleModal}>
          <EditRoundedIcon />
        </EditIcon>
      </HeaderContainer>
      <SubText>{formatCreatedAt(student?.created_at)}</SubText>
      <InfoCard>
        <InfoItem>
          <span>Matrícula:</span>{' '}
          {formatStudentNumber(student?.student_number) || 'Não fornecido'}
        </InfoItem>
        <InfoItem>
          <span>Email:</span> {student?.email || 'Não fornecido'}
        </InfoItem>
        <InfoItem>
          <span>Curso:</span> {student?.course || 'Não fornecido'}
        </InfoItem>
        <InfoItem>
          <span>Telefone:</span> {student?.phone || 'Não fornecido'}
        </InfoItem>
        <InfoItem>
          <span>Endereço:</span> {student?.address || 'Não fornecido'}
        </InfoItem>
        <InfoItem>
          <span>Data de Nascimento:</span>{' '}
          {formatBirth(student?.birth) || 'Não fornecido'}
        </InfoItem>
      </InfoCard>
    </Content>
  );
};

export default StudentProfileCard;
