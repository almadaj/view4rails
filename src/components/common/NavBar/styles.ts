import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 15px 100px;
  background-color: rgb(248, 250, 252);
  border-bottom: 0.1px outset rgba(255, 255, 255, 0.7);
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 30px;
  margin-left: 60px;
`;

export const NavLink = styled(Link)`
  color: rgb(118, 118, 118);
  text-decoration: none;

  &:hover {
    color: #ff6347;
  }
`;

export const Separator = styled.div`
  border-right: 0.1px outset rgba(255, 255, 255, 0.7);
`;
