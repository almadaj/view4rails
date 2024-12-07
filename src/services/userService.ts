import { jwtDecode } from 'jwt-decode';
import api from './api';

const userService = {
  login: async (email: string, password: string) => {
    try {
      const res = await api.post('/login', { email, password });
      const token = res.data.token;
      const jwtDecoded = jwtDecode(token);
      await localStorage.setItem('token', token);
      await localStorage.setItem('userId', JSON.stringify(jwtDecoded));
      return res.data;
    } catch (error) {
      console.log('Error in login', error);
      throw error;
    }
  },
};

export default userService;
