import { styled } from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 3rem;
`;

export const PageTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const AddButton = styled.button`
  display: flex;
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;
  align-items: center;
`;
