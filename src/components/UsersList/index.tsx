import React, { useEffect, useState } from 'react';
import { User } from 'src/entities/User';
import { MainContainer } from './styles';
import userService from 'src/services/userService';

const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await userService.getUsers();
        setUsers(users);
      } catch (error) {
        console.log('Error in fetchUsers', error);
      }
    };
    fetchUsers();
  }, []);
  return (
    <MainContainer>
      {users.map((user) => (
        <li key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.role}</p>
        </li>
      ))}
    </MainContainer>
  );
};
export default UsersList;
