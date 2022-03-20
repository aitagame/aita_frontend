import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogoLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  font-size: 1.3rem;
  text-decoration: none;
  display: inline-block;
`;

export const Logo: React.FC = () => {
  return <LogoLink to="/profile">Aita</LogoLink>;
};
