import styled from 'styled-components';

export const MainContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const UserList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
  min-width: 500px;
`;

export const UserItem = styled.li`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  p {
    margin: 0;
    color: #333;
    font-size: 14px;
  }

  &:hover {
    background-color: rgb(191, 222, 218);
  }
`;

export const UserData = styled.p`
  margin: 0;
  color: #333;
  font-size: 14px;
`;

export const ModalText = styled.p`
  margin: 0;
  color: #333;
  font-size: 18px;
  font-weight: bold;
  padding: 15px;
  text-align: center;
`;
