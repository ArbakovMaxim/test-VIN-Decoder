import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ListCarStyled = styled.ul`
  list-style: none;
`;

export const ItemCarStyled = styled.li`
  margin-bottom: 1rem;
`;

export const ItemLinkCarStyled = styled(NavLink)`
  text-decoration: none;
  &:hover {
    color: green;
  }
`;
