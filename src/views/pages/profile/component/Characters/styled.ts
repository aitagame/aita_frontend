import styled from 'styled-components';
import { Title } from 'views/components/Title';
import { desktopDevice } from 'views/theme/mediaQuery';

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
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  margin-top: 3rem;
`;
