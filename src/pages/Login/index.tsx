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
} from './styles';
import banner from '../../assets/images/illustration-login.png';
import logo from '../../assets/images/logo-u.webp';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <Container>
      <Banner src={banner} />
      <FormContainer>
        <LogoHorizontal src={logo} />
        <Title>CampusLink</Title>
        <SubTitle>Estágios Unichristus</SubTitle>
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
        <Button onClick={handleLogin}>Entrar</Button>
      </FormContainer>
    </Container>
  );
};

export default Login;
