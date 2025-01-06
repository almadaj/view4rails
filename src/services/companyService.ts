import { Company } from 'src/entities/Company';
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

  createCompany: async (company: Partial<Company>) => {
    const { name, cnpj, address, email, phone } = company;

    const companyData = {
      name,
      cnpj,
      address,
      email,
      phone,
    };

    try {
      const headers = getTokenAndHeaders();
      const res = await api.post('/companies', companyData, headers);
      return res.data;
    } catch (error) {
      console.log('Error in createCompany', error);
      throw error;
    }
  },

  showCompany: async (id: string) => {
    try {
      const headers = getTokenAndHeaders();
      const res = await api.get(`/companies/${id}`, headers);
      return res.data;
    } catch (error) {
      console.log('Error in getCompanyById', error);
      throw error;
    }
  },
};

export default companyService;
