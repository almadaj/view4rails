import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 2.3rem;
  font-weight: bold;
  color: #333;
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
`;

export const ProfileCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  background-color: #062e70;
  width: 20%;
  color: #fff;
  font-size: 1.3rem;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 15px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #555;
  }
`;
