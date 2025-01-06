import { Student } from 'src/entities/Student';
import api from './api';
import getTokenAndHeaders from './authService';

const studentService = {
  getStudents: async () => {
    try {
      const headers = getTokenAndHeaders();
      const res = await api.get('/students', headers);
      return res.data;
    } catch (error) {
      console.log('Error in getStudents', error);
      throw error;
    }
  },

  showStudent: async (id: string) => {
    try {
      const headers = getTokenAndHeaders();
      const res = await api.get(`/students/${id}`, headers);
      return res.data;
    } catch (error) {
      console.log('Error in getStudentById', error);
      throw error;
    }
  },

  createStudent: async (student: Partial<Student>) => {
    const { name, email, course, student_number, phone, address, birth } =
      student;

    const studentData = {
      name,
      email,
      course,
      student_number,
      phone,
      address,
      birth,
    };

    try {
      const headers = getTokenAndHeaders();
      const res = await api.post('/students', studentData, headers);
      return res.data;
    } catch (error) {
      console.log('Error in createStudent', error);
      throw error;
    }
  },

  getStudentInternships: async (id: string) => {
    try {
      const headers = getTokenAndHeaders();
      const res = await api.get(`/students/${id}/internships`, headers);
      return res.data;
    } catch (error) {
      console.log('Error in getStudentInternships', error);
      throw error;
    }
  },
};

export default studentService;
