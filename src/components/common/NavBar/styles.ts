import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #062e70;
  color: white;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 15px;
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    color: #ff6347;
  }
`;
