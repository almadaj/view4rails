import { jwtDecode } from 'jwt-decode';
import api from './api';
import getTokenAndHeaders from './authService';
import { User } from 'src/entities/User';

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
      const headers = getTokenAndHeaders();
      const res = await api.get(`/users/${id}`, headers);
      return res.data;
    } catch (error) {
      console.log('Error in getUserById', error);
      throw error;
    }
  },
  getUsers: async () => {
    try {
      const headers = getTokenAndHeaders();
      const res = await api.get('/users', headers);
      return res.data;
    } catch (error) {
      console.log('Error in getUsers', error);
      throw error;
    }
  },

  updateUser: async (id: string, data: Partial<User>) => {
    try {
      const headers = getTokenAndHeaders();
      const res = await api.put(`/users/${id}`, data, headers);
      return res.data;
    } catch (error) {
      console.log('Error in updateUser', error);
      throw error;
    }
  },

  toggleAdminUser: async (id: string) => {
    try {
      const headers = getTokenAndHeaders();
      const res = await api.put(`/users/${id}/admin`, {}, headers);
      return res.data;
    } catch (error) {
      console.log('Error in toggleAdminUser', error);
      throw error;
    }
  },
};

export default userService;
