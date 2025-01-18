import React, { useEffect, useState } from 'react';
import { User } from 'src/entities/User';
import {
  MainContainer,
  ModalText,
  UserData,
  UserItem,
  UserList,
} from './styles';
import userService from 'src/services/userService';
import StandardModal from '../common/StandardModal';

const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await userService.getUsers();
        setUsers(users);
      } catch (error) {
        console.log('Error in fetchUsers', error);
      }
    };
    const fetchCurrentUser = async () => {
      try {
        const token = localStorage.getItem('userId');
        if (!token) {
          throw new Error('Token not found');
        }
        const user = await userService.getUserById(token);
        setCurrentUser(user);
      } catch (error) {
        console.log('Error in fetchCurrentUser', error);
      }
    };
    fetchCurrentUser();
    fetchUsers();
  }, []);

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const handleToggleAdmin = async () => {
    if (!selectedUser || !currentUser?.role) {
      return;
    }
    try {
      await userService.toggleAdminUser(selectedUser.id);
      console.log('User authorizations has changed: ', selectedUser);
      alert('Autorizações alteradas: ' + selectedUser?.name);
      handleModalClose();
      window.location.reload();
    } catch (error) {
      console.log('Error in handleToggleAdmin', error);
    }
  };

  return (
    <MainContainer>
      <StandardModal
        isOpen={isModalOpen}
        title={'Gerenciar Autorizações'}
        onClose={() => handleModalClose()}
        onConfirm={handleToggleAdmin}
        confirmText={'Salvar Alterações'}
      >
        <ModalText>
          Deseja {selectedUser?.role ? ' remover' : ' conceder'} autorização de{' '}
          <br />
          administrador para o usuário {
            selectedUser?.name.split(' ')[0]
          }?
        </ModalText>
      </StandardModal>
      {users
        .filter((user) => user.id !== currentUser?.id)
        .map((user) => (
          <UserList key={user.id} onClick={() => handleUserClick(user)}>
            <UserItem>
              <UserData>
                {user.name} {user?.role ? ' ★' : ''}
              </UserData>
              <UserData>{user.email}</UserData>
            </UserItem>
          </UserList>
        ))}
    </MainContainer>
  );
};
export default UsersList;
