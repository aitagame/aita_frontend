import styled from 'styled-components';
import { desktopDevice } from 'views/theme/mediaQuery';
import { tabletDevice } from 'views/theme/mediaQuery';
import { mobileDevice } from 'views/theme/mediaQuery';

export const Input = styled.input`
  text-align: center;
  font-size: 20px;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: 40px;
  ::placeholder {
    color: #c4c4c4;
  }
  ${desktopDevice} {
    width: 500px;
  }
  ${tabletDevice} {
    width: 55%;
    margin: auto;
  }
  ${mobileDevice} {
    width: 55%;
    margin: auto;
  }
`;
