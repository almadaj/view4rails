import api from './api';

const userService = {
  login: async (email: string, password: string) => {
    try {
      const res = await api.post('/login', { email, password });
      return res.data;
    } catch (error) {
      console.log('Error in login', error);
      throw error;
    }
  },
};

export default userService;
