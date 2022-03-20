import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AppLink = styled(Link)<{ selected?: boolean }>`
  padding: 0 0.5rem;
  color: ${({ theme, selected }) => (selected ? theme.colors.secondary : theme.colors.text)};
  text-decoration: none;
  font-weight: 500;
  :hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
