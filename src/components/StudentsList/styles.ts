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

export const StudentName = styled.h2`
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

export const StudentNumber = styled.p`
  font-size: 1rem;
  margin: 0;
  padding: 0 1rem;
  font-weight: bold;
  color: rgb(108, 108, 108);
`;

export const InfoTitle = styled.p`
  font-size: 0.9rem;
  margin: 0;
  padding: 0 1rem;
  font-weight: bold;
  color: rgb(108, 108, 108);
  @media (max-width: 615px) {
    display: none;
  }
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
