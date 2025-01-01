import ReactInputMask from 'react-input-mask';
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
  padding: 15px 25px;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 20px;
  cursor: pointer;
  align-items: center;
`;

export const Form = styled.form`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 15px;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: #333333;
`;

export const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  font-size: 14px;
  color: #555555;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const StyledInput = styled(ReactInputMask)`
  padding: 8px 12px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  font-size: 14px;
  color: #555555;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;
