import styled from 'styled-components';
import { MainWrapper } from 'views/components/BaseLayout/styled';
import { Title } from 'views/components/Title';
import { desktopDevice } from 'views/theme/mediaQuery';

export const UserName = styled(Title)`
  display: flex;
  justify-content: center;
  margin: 6rem 0 2rem;
  font-weight: 300;
  font-size: 1rem;
  ${desktopDevice} {
    justify-content: start;
    margin: 6rem 0 2rem 6rem;
  }
`;

export const ProfileContent = styled(MainWrapper)`
  min-height: 100vh;
`;

export const CreateCharacterWrapper = styled.div`
  width: 86%;
  border-top: 1px solid white;
  margin: 0 auto;
`;
