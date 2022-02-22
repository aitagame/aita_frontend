import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AppLink = styled(Link)`
  padding: 0 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  :hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
