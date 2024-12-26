import api from './api';
import getTokenAndHeaders from './authService';

const companyService = {
  getStudents: async () => {
    try {
      const headers = getTokenAndHeaders();
      const res = await api.get('/students', headers);
      return res.data;
    } catch (error) {
      console.log('Error in getCompanies', error);
      throw error;
    }
  },
};

export default companyService;
