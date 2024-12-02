import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #e4f3fb;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 40%;
  background-color: #fff;
`;

export const Banner = styled.img`
  display: block;
  object-fit: contain;
  height: 80vh;
  width: 60%;
`;

export const LogoHorizontal = styled.img`
  object-fit: cover;
  width: 40%;
  margin-bottom: -4rem;
  clip-path: inset(0 0 20% 0);
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 0rem;
  color: #007bff;
`;

export const SubTitle = styled.h2`
  font-size: 1.5rem;
  margin-top: 0rem;
  color: #a5a5a5;
`;

export const Input = styled.input`
  width: 300px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 15px;
  font-size: 1rem;
  &::placeholder {
    padding-left: 0.5rem;
    color: #c5c5c5;
  }

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const Button = styled.button`
  width: 300px;
  padding: 0.5rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 15px;
  font-size: 1rem;
`;
