import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: max-content;
  background-color: aliceblue;
  padding-bottom: 3rem;
  min-height: 100vh;
`;

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
