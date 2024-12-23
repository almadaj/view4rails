/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Company } from 'src/entities/Company';
import companyService from 'src/services/companyService';

const CompanyChart = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [limitedCompanies, setLimitedCompanies] = useState<Company[]>([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const companies = await companyService.getCompanies();
        const sortedCompanies = companies.sort(
          (a: { created_at: string }, b: { created_at: string }) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
        );
        setCompanies(companies);
        setLimitedCompanies(sortedCompanies.slice(0, 5));
      } catch (error) {
        console.log('Error in fetchCompanies', error);
      }
    };
    fetchCompanies();
  }, []);

  return (
    <>
      <ul>
        {limitedCompanies.map((company) => (
          <li key={company.id}>
            <strong>Empresa:</strong> {company.name} <br />
            <strong>Contato:</strong> {company.email} <br />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CompanyChart;
