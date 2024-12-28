import styled from 'styled-components';
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: #f5f5f5;
  border-bottom: 1px solid #ddd;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 18px;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #333;
`;

export const Content = styled.div`
  padding: 16px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 16px;
  background: #f5f5f5;
  border-top: 1px solid #ddd;
`;

export const Button = styled.button<{ primary?: boolean }>`
  background: ${(props) => (props.primary ? '#007BFF' : '#f5f5f5')};
  color: ${(props) => (props.primary ? '#fff' : '#333')};
  border: 1px solid ${(props) => (props.primary ? '#007BFF' : '#ddd')};
  border-radius: 4px;
  padding: 8px 16px;
  margin-left: 8px;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.primary ? '#0056b3' : '#e0e0e0')};
  }
`;
