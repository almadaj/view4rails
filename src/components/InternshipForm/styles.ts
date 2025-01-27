import styled from 'styled-components';
import ReactInputMask from 'react-input-mask';

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

export const Dropdown = styled.ul`
  position: absolute;
  z-index: 1000;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 25%;
  max-height: 200px;
  overflow-y: auto;
  list-style: none;
  padding: 4px 0;
  margin-top: 60px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const DropdownItem = styled.li`
  padding: 4px 12px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;
