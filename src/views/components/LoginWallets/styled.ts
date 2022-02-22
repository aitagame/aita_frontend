import styled from 'styled-components';
import { desktopDevice } from 'views/theme/mediaQuery';
import { Button } from '../Button';

export const ConnectWalletButton = styled(Button)`
  width: 30rem;
  max-width: 100%;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  svg {
    width: 5vmax;
    height: 5vmax;
  }

  ${desktopDevice} {
    flex-direction: column;
    width: 14vmax;
    height: 15vmax;
    max-width: 14vmax;
  }
`;

export const WalletName = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin-top: 0.5rem;
`;
