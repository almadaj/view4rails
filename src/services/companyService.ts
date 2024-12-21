import api from './api';
import getTokenAndHeaders from './authService';

const companyService = {
  getCompanies: async () => {
    try {
      const headers = getTokenAndHeaders();
      const res = await api.get('/companies', headers);
      return res.data;
    } catch (error) {
      console.log('Error in getCompanies', error);
      throw error;
    }
  },
};

export default companyService;
