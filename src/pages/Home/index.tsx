import React, { useEffect, useState } from 'react';
import { Title } from './styles';
import { useNavigate } from 'react-router-dom';
import userService from 'src/services/userService';

const Home = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('userId');
        if (!token) {
          navigate('/');
          throw new Error('Token not found');
        }

        const user = await userService.getUserById(token);
        setUserName(user.name);
        if (!user) {
          navigate('/login');
          throw new Error('Token not found');
        }
      } catch (error) {
        console.log('Error in fetchUser', error);
      }
    };
    fetchUser();
  }, [navigate]);
  return <Title>Olá, {userName}</Title>;
};

export default Home;
