import React, { useEffect, useState } from 'react';
import StandardModal from 'src/components/common/StandardModal';
import {
  Dropdown,
  DropdownItem,
  Form,
  FormGroup,
  Input,
  Label,
} from './styles';
import studentService from 'src/services/studentService';
import companyService from 'src/services/companyService';
import internshipService from 'src/services/internshipService';
import { User } from 'src/entities/User';
import { useNavigate } from 'react-router-dom';
import userService from 'src/services/userService';

interface InternshipFormProps {
  isModalOpen: boolean;
  handleModal: () => void;
}
const InternshipForm = ({ isModalOpen, handleModal }: InternshipFormProps) => {
  const [formData, setFormData] = useState({
    student_id: '',
    company_id: '',
    student_name: '',
    company_name: '',
    salary: '',
    workload: '',
    start_date: '',
    end_date: '',
    isCurrentJob: true,
  });
  const [suggestions, setSuggestions] = useState<{
    students: { id: string; name: string }[];
    companies: { id: string; name: string }[];
  }>({
    students: [],
    companies: [],
  });
  const [filteredStudents, setFilteredStudents] = useState<
    { id: string; name: string }[]
  >([]);
  const [filteredCompanies, setFilteredCompanies] = useState<
    { id: string; name: string }[]
  >([]);
  const [user, setUser] = useState<User>();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const students = await studentService.getStudents();
        const companies = await companyService.getCompanies();
        setSuggestions({ students, companies });
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    };
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
    fetchSuggestions();
  }, [navigate]);

  useEffect(() => {
    if (formData.student_name.trim()) {
      const filtered = suggestions.students.filter((student) =>
        student.name
          .toLowerCase()
          .includes(formData.student_name.toLowerCase()),
      );
      setFilteredStudents(filtered);
    } else {
      setFilteredStudents([]);
    }
  }, [formData.student_name, suggestions.students]);

  useEffect(() => {
    if (formData.company_name.trim()) {
      const filtered = suggestions.companies.filter((company) =>
        company.name
          .toLowerCase()
          .includes(formData.company_name.toLowerCase()),
      );
      setFilteredCompanies(filtered);
    } else {
      setFilteredCompanies([]);
    }
  }, [formData.company_name, suggestions.companies]);

  const handleStudentSelect = (student: { id: string; name: string }) => {
    setFormData((prev) => ({
      ...prev,
      student_name: student.name,
      student_id: student.id,
    }));
    setFilteredStudents([]);
  };

  const handleCompanySelect = (company: { id: string; name: string }) => {
    setFormData((prev) => ({
      ...prev,
      company_name: company.name,
      company_id: company.id,
    }));
    setFilteredCompanies([]);
  };

  const handleCreateInternship = async () => {
    try {
      const { student_id, company_id } = formData;
      if (
        !student_id ||
        !company_id ||
        !formData.salary ||
        !formData.workload ||
        !formData.start_date
      ) {
        alert('Preencha todos os campos obrigatórios!');
        return;
      }
      if (!user?.role) {
        alert('Você não tem permissão para cadastrar estágios!');
        return;
      }
      await internshipService.createInternship({
        student_id,
        company_id,
        salary: formData.salary,
        workload: formData.workload,
        start_date: formData.start_date,
        end_date: formData.end_date || null,
      });
      alert('Estágio cadastrado com sucesso!');
      handleModal();
    } catch (error) {
      console.error('Failed to create internship:', error);
    }
  };

  return (
    <>
      {isModalOpen && (
        <StandardModal
          isOpen={isModalOpen}
          title="Cadastrar Novo Estágio"
          onConfirm={handleCreateInternship}
          confirmText="Cadastrar Estágio"
          onClose={handleModal}
        >
          <Form>
            <FormGroup>
              <Label>Nome do Aluno:</Label>
              <Input
                type="text"
                name="student_name"
                value={formData.student_name}
                onChange={handleInputChange}
                placeholder="Digite o nome do aluno"
                autoComplete="off"
              />
              {filteredStudents.length > 0 && (
                <Dropdown>
                  {filteredStudents.map((student) => (
                    <DropdownItem
                      key={student.id}
                      onClick={() => handleStudentSelect(student)}
                    >
                      {student.name}
                    </DropdownItem>
                  ))}
                </Dropdown>
              )}
            </FormGroup>
            <FormGroup>
              <Label>Nome da Empresa:</Label>
              <Input
                type="text"
                name="company_name"
                value={formData.company_name}
                onChange={handleInputChange}
                placeholder="Digite o CNPJ da empresa"
                autoComplete="off"
              />
              {filteredCompanies.length > 0 && (
                <Dropdown>
                  {filteredCompanies.map((company) => (
                    <DropdownItem
                      key={company.id}
                      onClick={() => handleCompanySelect(company)}
                    >
                      {company.name}
                    </DropdownItem>
                  ))}
                </Dropdown>
              )}
            </FormGroup>
            <FormGroup>
              <Label>Salário Mensal:</Label>
              <Input
                type="number"
                name="salary"
                value={formData.salary}
                onChange={handleInputChange}
                placeholder="Digite o salário mensal"
                autoComplete="off"
              />
            </FormGroup>
            <FormGroup>
              <Label>Carga-horária Semanal:</Label>
              <Input
                type="text"
                name="workload"
                value={formData.workload}
                onChange={handleInputChange}
                placeholder="Digite a carga-horaria semanal"
              />
            </FormGroup>
            <FormGroup>
              <Label>Data de Início:</Label>
              <Input
                type="date"
                name="start_date"
                value={formData.start_date}
                onChange={handleInputChange}
                placeholder="Digite a data de início do estágio"
              />
            </FormGroup>
            <FormGroup>
              <Label>
                <Input
                  type="checkbox"
                  name="isCurrentJob"
                  checked={formData.isCurrentJob}
                  onChange={() =>
                    setFormData((prev) => ({
                      ...prev,
                      isCurrentJob: !prev.isCurrentJob,
                      end_date: !prev.isCurrentJob ? '' : prev.end_date,
                    }))
                  }
                />
                É o trabalho atual?
              </Label>
            </FormGroup>
            {!formData.isCurrentJob && (
              <FormGroup>
                <Label>Data de Término:</Label>
                <Input
                  type="date"
                  name="end_date"
                  value={formData.end_date}
                  onChange={handleInputChange}
                  placeholder="Digite a data de término do estágio"
                />
              </FormGroup>
            )}
          </Form>
        </StandardModal>
      )}
    </>
  );
};

export default InternshipForm;
