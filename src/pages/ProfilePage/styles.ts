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
  justify-content: center;
  margin-top: 20px;
  width: 100%;
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
  background-color: #062e70;
  color: #fff;
  font-size: 1.2rem;
  padding: 10px 15px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  margin-top: 15px;
  width: 200px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  &:hover {
    background-color: #555;
  }
`;

export const ImagePreview = styled.img`
  margin: auto;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ccc;
  cursor: pointer;
  &:hover {
    border: 3px solid #007bff;
    transition: all 0.3s;
  }
`;
