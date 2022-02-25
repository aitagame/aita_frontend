import styled from 'styled-components';
import { desktopDevice } from 'views/theme/mediaQuery';
import { tabletDevice } from 'views/theme/mediaQuery';
import { mobileDevice } from 'views/theme/mediaQuery';

export const SubmitButtonStyled = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.textReverse};
  border: 0;
  font-size: 20px;
  border-radius: 2rem;
  outline: none;
  padding: 1rem;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.colors.secondaryLight};
  }
  ${desktopDevice} {
    width: 500px;
    margin: 2rem 0;
  }
  ${tabletDevice} {
    width: 55%;
    margin: 2rem auto;
  }
  ${mobileDevice} {
    width: 55%;
    margin: 2rem auto;
  }
`;