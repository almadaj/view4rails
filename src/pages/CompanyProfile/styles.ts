import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin: 1rem 0;
`;

export const Subtitle = styled.h2`
  font-size: 2rem;
  margin: 0 0;
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
