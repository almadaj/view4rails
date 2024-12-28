import React from 'react';
import { Button } from 'src/components/StudentsList/styles';
import {
  Backdrop,
  CloseButton,
  Content,
  Footer,
  Header,
  ModalContainer,
  Title,
} from './styles';

interface StandardModalProps {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  onConfirm?: () => void;
  confirmText?: string;
  cancelText?: string;
}

const StandardModal: React.FC<StandardModalProps> = ({
  isOpen,
  title,
  children,
  onClose,
  onConfirm,
  confirmText = 'Confirmar',
}) => {
  if (!isOpen) return null;

  return (
    <Backdrop>
      <ModalContainer>
        <Header>
          <Title>{title}</Title>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </Header>
        <Content>{children}</Content>
        <Footer>
          <Button onClick={onConfirm}>{confirmText}</Button>
        </Footer>
      </ModalContainer>
    </Backdrop>
  );
};

export default StandardModal;
