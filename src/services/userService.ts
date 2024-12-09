import { jwtDecode } from 'jwt-decode';
import api from './api';
import getTokenAndHeaders from './authService';

const userService = {
  login: async (email: string, password: string) => {
    try {
      const res = await api.post('/login', { email, password });
      const token = res.data.token;
      const jwtDecoded = jwtDecode(token) as { user_id: string };
      await localStorage.setItem('token', token);
      await localStorage.setItem('userId', jwtDecoded.user_id);
      return res.data;
    } catch (error) {
      console.log('Error in login', error);
      throw error;
    }
  },
  getUserById: async (id: string) => {
    try {
      // const token = localStorage.getItem('token');
      // if (!token) {
      //   throw new Error('Token not found');
      // }
      // const res = await api.get(`/users/${id}`, {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // });
      const headers = getTokenAndHeaders();
      const res = await api.get(`/users/${id}`, headers);
      return res.data;
    } catch (error) {
      console.log('Error in getUserById', error);
      throw error;
    }
  },
};

export default userService;
