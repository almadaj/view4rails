import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  min-height: 100vh;
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
