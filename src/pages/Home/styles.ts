import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: aliceblue;
`;

export const GreetingContainer = styled.div`
  flex-direction: column;
  padding: 2rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem;
  flex-grow: 1;
  margin: 0 0.5rem;
`;

export const WelcomeText = styled.h2`
  font-size: 1.3rem;
  color: rgb(102, 102, 102);
  margin-bottom: -1.8rem;
`;

export const Title = styled.h2`
  font-size: 1.7rem;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1rem;
`;

export const AddButton = styled.button`
  background-color: #062e70;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 10px;
  padding: 0.7rem 1.5rem;
  height: 3rem;
  margin-top: 2.7rem;
  cursor: pointer;
`;

export const Notification = styled.button`
  display: flex;
  background-color: #fff;
  color: #062e70;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  margin-top: 2.7rem;
`;

export const ChartCard = styled.div`
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  max-width: 40%;
  padding: 1rem;
  margin-left: 3rem;
`;
