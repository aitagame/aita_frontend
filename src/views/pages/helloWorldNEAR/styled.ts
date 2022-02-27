import styled from 'styled-components';
import { Button } from 'views/components/Button';
import { TitleH1 } from 'views/components/Title';
import { desktopDevice } from 'views/theme/mediaQuery';

export const BackgroundWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;
`;

export const ContentWrapper = styled.main`
  position: relative;
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
      width:31.25rem;
   }
`;

export const SubmitButtonStyled = styled(Button)`
  font-size: 1.25rem;
  padding: 1rem;
  position: relative;
  top: 14rem;
  width: 55%;
  margin: 2rem auto;
  ${desktopDevice} {
    width: 27rem;
  }
`;

export const Header = styled(TitleH1)`
  text-align: center;
`;
