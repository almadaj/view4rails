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

export const FormGroup = styled.div`
  margin-bottom: 16px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  background-color: #062e70;
  width: 15%;
  color: #fff;
  font-size: 1.2rem;
  padding: 10px 15px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 15px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #555;
  }
`;
