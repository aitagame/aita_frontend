import styled from 'styled-components';
import { desktopDevice, tabletDevice, mobileDevice } from 'views/theme/mediaQuery';

export const BackgroundWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;
`;

export const ContentWrapper = styled.main`
  position: absolute;
  top: 35vh;
  width: 100%;
  text-align: center;
  ${desktopDevice} {
    top: 34vh;
  }
`;

export const FormWrapper = styled.form`
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center
   text-align: center;
   padding: 2rem 0;
   margin: auto;
   ${desktopDevice} {
      width:500px;
   }
`;

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

export const Header = styled.h1<{ fz?: string; mb?: string }>`
  font-size: ${({ fz }) => fz || '2rem'};
  // margin-bottom: ${({ mb }) => mb || 'initial'};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  text-align: center;
`;
