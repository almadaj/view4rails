import React, { useState } from 'react';
import {
  Banner,
  Button,
  Container,
  FormContainer,
  Input,
  Title,
  SubTitle,
  LogoHorizontal,
  Error,
} from './styles';
import banner from '../../assets/images/illustration-login.png';
import logo from '../../assets/images/logo-u.webp';
import { useNavigate } from 'react-router-dom';
import userService from 'src/services/userService';
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async (email: string, password: string) => {
    if (!email || !password) {
      setError('Por favor, insira um e-mail e senha');
      return;
    }

    if (!validateEmail(email)) {
      setError('Por favor, insira um e-mail válido');
      return;
    }

    try {
      console.log('Email:', email, 'Password:', password);
      await userService.login(email, password);
      setError('');
      navigate('/home');
    } catch (error) {
      setError('E-mail ou senha inválidos');
      console.log('Error in login', error);
    }
  };

  return (
    <Container>
      <Banner src={banner} />
      <FormContainer>
        <LogoHorizontal src={logo} />
        <Title>CampusLink</Title>
        <SubTitle>Estágios Unichristus</SubTitle>
        {error ? <Error>{error}</Error> : null}
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={() => handleLogin(email, password)}>Entrar</Button>
      </FormContainer>
    </Container>
  );
};

export default Login;
