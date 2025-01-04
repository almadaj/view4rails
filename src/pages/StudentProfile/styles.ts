import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  min-height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const ProfileHeader = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-top: -0.5rem;
`;

export const BackButton = styled.button`
  align-self: flex-start;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  font-size: 1rem;
  color: #007bff;
  cursor: pointer;
  margin-left: 2rem;

  &:hover {
    color: #ff0000;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const Arrow = styled.span`
  display: inline-block;
  transform: rotate(180deg);
  font-size: 1.2rem;
`;

export const SubText = styled.p`
  font-size: 1rem;
  color: #666;
  margin-top: -2rem;
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
