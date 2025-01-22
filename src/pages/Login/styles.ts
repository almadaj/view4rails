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

  @media (max-width: 768px) {
    width: 100%;
    background-color: #e4f3fb;
  }
`;

export const Banner = styled.img`
  display: block;
  object-fit: contain;
  height: 80vh;
  width: 60%;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const LogoHorizontal = styled.img`
  object-fit: cover;
  width: 200px;
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

export const Error = styled.p`
  color: red;
  font-size: 1rem;
  margin-top: -5px;
`;

export const Input = styled.input`
  width: 300px;
  padding: 0.5rem;
  padding-left: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 15px;
  font-size: 1rem;
  color: rgb(95, 95, 95);
  &::placeholder {
    color: #c5c5c5;
  }

  &:focus {
    border-color: #007bff;
    outline: none;
  }

  @media (max-width: 785px) {
    width: 70%;
    padding: 10px;
  }
`;

export const Button = styled.button`
  width: 250px;
  padding: 0.5rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 15px;
  font-size: 1rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 785px) {
    width: 70%;
    padding: 10px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 300px;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 785px) {
    width: 70%;
  }
`;

export const StyledInput = styled.input`
  margin: auto;
  width: 100%;
  padding: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border: 1px solid #ccc;
  border-radius: 15px;
  font-size: 1rem;
  color: rgb(95, 95, 95);

  &::placeholder {
    color: #c5c5c5;
  }

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const ToggleButton = styled.button`
  position: absolute;
  top: 55%;
  right: -3%;
  /* transform: translateY(20%); */
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: rgb(95, 95, 95);
  display: flex;

  &:focus {
    outline: none;
  }
`;
