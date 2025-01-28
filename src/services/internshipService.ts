/* eslint-disable @typescript-eslint/no-explicit-any */
import api from './api';
import getTokenAndHeaders from './authService';

const internshipService = {
  getInternships: async () => {
    try {
      const headers = getTokenAndHeaders();
      const res = await api.get('/internships', headers);
      return res.data;
    } catch (error) {
      console.log('Error in getInternships', error);
      throw error;
    }
  },

  createInternship: async (data: any) => {
    try {
      const headers = getTokenAndHeaders();
      const res = await api.post('/internships', data, headers);
      return res.data;
    } catch (error) {
      console.log('Error in createInternship', error);
      throw error;
    }
  },
  updateInternship: async (id: string, data: any) => {
    try {
      const headers = getTokenAndHeaders();
      const res = await api.put(`/internships/${id}`, data, headers);
      return res.data;
    } catch (error) {
      console.log('Error in updateInternship', error);
      throw error;
    }
  },
};

export default internshipService;
