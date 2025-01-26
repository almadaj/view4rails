import React, { useEffect, useState } from 'react';
import { Company } from 'src/entities/Company';
import companyService from 'src/services/companyService';
import {
  Button,
  Cnpj,
  CompanyName,
  Content,
  InfoContainer,
  PageButton,
  PagesContainer,
  PaginationContainer,
} from './styles';
import ArrowDownIcon from '@mui/icons-material/ArrowDownward';
import { useNavigate } from 'react-router-dom';

const CompaniesList = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const navigate = useNavigate();
  document.title = `Empresas | CampusLink`;

  useEffect(() => {
    const fetchCompanies = async () => {
      const companies = await companyService.getCompanies();
      companies.sort((a: { name: string }, b: { name: string }) =>
        a.name.localeCompare(b.name),
      );
      setCompanies(companies);
    };
    fetchCompanies();
  }, []);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const companiesToDisplay = companies.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (page < Math.ceil(companies.length / itemsPerPage))
      setPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  return (
    <>
      <ul>
        {companiesToDisplay.map((company) => {
          return (
            <Content key={company.id}>
              <InfoContainer>
                <CompanyName>{company.name}</CompanyName>
                <Cnpj>{company.cnpj}</Cnpj>
              </InfoContainer>
              <InfoContainer
                onClick={() => navigate(`/companies/${company.id}`)}
              >
                <Button>
                  <ArrowDownIcon />
                  Ver Status
                </Button>
              </InfoContainer>
            </Content>
          );
        })}
        <PaginationContainer>
          <PageButton disabled={page === 1} onClick={handlePreviousPage}>
            Anterior
          </PageButton>
          <PagesContainer>
            Página {page} de {Math.ceil(companies.length / itemsPerPage)}
          </PagesContainer>
          <PageButton
            disabled={page === Math.ceil(companies.length / itemsPerPage)}
            onClick={handleNextPage}
          >
            Próxima
          </PageButton>
        </PaginationContainer>
      </ul>
    </>
  );
};

export default CompaniesList;
