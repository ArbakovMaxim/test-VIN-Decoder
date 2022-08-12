import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  text-align: center;
  gap: 12px;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
`;

export const ItemLinkCarStyled = styled(NavLink)`
  text-decoration: none;
  &:hover {
    color: green;
  }
`;
