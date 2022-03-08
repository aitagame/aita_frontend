import styled from 'styled-components';
import { MainWrapper } from 'views/components/BaseLayout/styled';
import { Title } from 'views/components/Title';
import { desktopDevice } from 'views/theme/mediaQuery';
import { Input } from 'views/components/Input';

export const UserName = styled(Title)`
  display: flex;
  justify-content: center;
  margin: 2.5rem 0 1.5rem;
  font-weight: 300;
  font-size: 1rem;
  ${desktopDevice} {
    justify-content: start;
    margin: 2.5rem 0 1.5rem 6rem;
  }
`;

export const ProfileContentWrapper = styled(MainWrapper)`
  min-height: 100vh;
`;

export const CreateCharacterWrapper = styled.div`
  width: 86%;
  border-top: 0.03rem solid white;
  margin: 0 auto;
`;

export const NameDisplay = styled(Input)`
  margin: 3rem auto;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  color: ${({ theme }) => theme.colors.text};
  border-bottom: 0.03rem solid white;
  border-radius: 0;
  width: 50%;
  text-align: center;
  font-size: 1rem;
  display: flex;
`;
