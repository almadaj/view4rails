import styled from 'styled-components';
// import { ReactInputMask } from 'react-input-mask';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: aliceblue;
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin: 10px 0;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 0 20px;
`;

export const ResultsText = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-top: 20px;
  &:span {
    font-weight: bold;
  }
`;

export const ResultsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
  width: 60%;
`;

export const ResultItem = styled.li`
  padding: 10px 15px;
  margin-bottom: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const ContainerItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemText = styled.li`
  font-weight: bold;
  color: #333;
  font-size: 1rem;
`;

export const NumberText = styled.li`
  font-weight: bold;
  color: rgb(108, 108, 108);
  font-size: 1rem;
`;

export const Form = styled.form`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 15px;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: #333333;
`;

export const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  font-size: 14px;
  color: #555555;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

// export const StyledInput = styled(ReactInputMask)`
//   padding: 8px 12px;
//   border: 1px solid #dddddd;
//   border-radius: 4px;
//   font-size: 14px;
//   color: #555555;

//   &:focus {
//     border-color: #007bff;
//     outline: none;
//   }
// `;
