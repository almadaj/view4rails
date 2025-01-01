import React, { useEffect, useState } from 'react';
import { Company } from 'src/entities/Company';
import companyService from 'src/services/companyService';
import { Button, Cnpj, CompanyName, Content, InfoContainer } from './styles';
import ArrowDownIcon from '@mui/icons-material/ArrowDownward';

const CompaniesList = () => {
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      const companies = await companyService.getCompanies();
      setCompanies(companies);
    };
    fetchCompanies();
  }, []);
  return (
    <>
      <ul>
        {companies
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((company) => {
            return (
              <Content key={company.id}>
                <InfoContainer>
                  <CompanyName>{company.name}</CompanyName>
                  <Cnpj>{company.cnpj}</Cnpj>
                </InfoContainer>
                <InfoContainer onClick={() => console.log('Ver Status')}>
                  <Button>
                    <ArrowDownIcon />
                    Ver Status
                  </Button>
                </InfoContainer>
              </Content>
            );
          })}
      </ul>
    </>
  );
};

export default CompaniesList;
