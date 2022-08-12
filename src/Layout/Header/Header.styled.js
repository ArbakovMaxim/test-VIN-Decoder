import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  text-align: center;
  gap: 12px;
  margin-bottom: 16px;
  padding: 25px;
  border-bottom: 1px solid black;
`;

export const ItemLinkCarStyled = styled(NavLink)`
  text-decoration: none;
  padding: 10px;
  margin: 0 10px 20px 10px;
  background-color: #2196f3;
  color: white;
  border-radius: 5px;
  #2196f3 &:hover {
    color: green;
  }
`;
