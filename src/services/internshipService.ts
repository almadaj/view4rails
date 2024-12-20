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
};

export default internshipService;
