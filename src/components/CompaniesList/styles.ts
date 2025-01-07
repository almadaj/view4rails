import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  border-radius: 15px;
  border: 0.5px solid #ccc;
  margin-right: 3rem;
  margin-bottom: 1rem;
  padding: 1rem;
  justify-content: space-between;
  flex-direction: row;
  background-color: rgb(248, 250, 252);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 615px) {
    flex-direction: column;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 30%;
  @media (max-width: 615px) {
    margin-top: 1rem;
    max-width: 100%;
  }
`;

export const CompanyName = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  padding: 0 1rem;
  word-wrap: break-word;
  word-break: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  max-width: 100%;
`;

export const Cnpj = styled.p`
  font-size: 1rem;
  margin: 0;
  padding: 0 1rem;
  font-weight: bold;
  color: rgb(108, 108, 108);
`;

export const Button = styled.button`
  display: flex;
  background-color: #062e70;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;
  align-items: center;
  @media (max-width: 615px) {
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 60%;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 3rem;
`;

export const PagesContainer = styled.div`
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  font-weight: bold;
  color: rgb(108, 108, 108);
  align-items: center;
  justify-content: center;
`;

export const PageButton = styled.button`
  background-color: #062e70;
  color: white;
  border: none;
  padding: 10px 15px;
  margin: 0 5px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
