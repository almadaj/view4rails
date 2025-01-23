import styled from 'styled-components';
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MainCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 95%;
`;
export const Label = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
  color: rgb(118, 118, 118);
  margin: 10px 0;
`;

export const Info = styled.p`
  font-size: 1rem;
  color: #333;
  margin: 5px 0;
`;
