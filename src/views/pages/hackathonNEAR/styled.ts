import styled from 'styled-components';
import { Input } from 'views/components/Input';
import { Wrapper } from 'views/components/Wrapper';
import { desktopDevice } from 'views/theme/mediaQuery';

export const HackathonWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  height: 100%;
`;

export const FormWrapper = styled.form`
  padding: 2rem 0;
  width: 32rem;
  max-width: 100%;

  ${desktopDevice} {
    width: 55vw;
    max-width: 32rem;
  }
`;

export const FormInput = styled(Input)`
  margin-bottom: ${({ theme }) => theme.gutter.elements};
`;
