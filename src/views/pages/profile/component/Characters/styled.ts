import styled from 'styled-components';
import { Title } from 'views/components/Title';
import { desktopDevice } from 'views/theme/mediaQuery';
import { Button } from 'views/components/Button';

export const Wrapper = styled.div`
  display: block;
`;

export const SelectCharacter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
  ${desktopDevice} {
    flex-direction: row;
  }
`;

export const SubHeader = styled(Title)`
  margin: 3rem auto;
  display: flex;
  justify-content: center;
`;

export const StartGameButton = styled(Button)`
  margin: 3rem auto;
  display: block;
  padding: 1rem;
  font-size: 1rem;
  width: 15rem;
`;
