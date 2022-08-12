import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WraperVar = styled.div`
  display: inline-flex;
  padding-bottom: 16px;
  border-bottom: 1px solid black;
`;

export const ItemLinkVariablesStyled = styled(NavLink)`
  text-decoration: none;
  &:hover {
    color: green;
  }
`;
