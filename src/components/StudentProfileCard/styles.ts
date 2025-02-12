import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`;

export const ProfileHeader = styled.h1`
  flex-grow: 1;
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-top: -0.5rem;
`;

export const EditIcon = styled.span`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

export const SubText = styled.p`
  font-size: 1rem;
  color: #666;
  margin-top: -3rem;
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  background: #f9f9f9;
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid #eee;

  span {
    font-weight: bold;
    color: #555;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export const HistoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const HistoryItem = styled.li`
  margin-bottom: 1.5rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const CompanyCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const CompanyName = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  display: block;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const InfoLine = styled.span`
  display: block;
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Label = styled.span`
  font-weight: bold;
  color: #333;
`;

export const NoInternshipsMessage = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #999;
  margin-top: -1.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.8rem;
  margin-bottom: 1rem;
`;

export const FieldLabel = styled.label`
  font-weight: 600;
  margin-bottom: 0.3rem;
  color: #333;
`;

export const Input = styled.input`
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  width: 90%;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;

export const Select = styled.select`
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  width: 90%;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;
