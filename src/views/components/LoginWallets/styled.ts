import styled from 'styled-components'
import { Button } from '../Button'

export const ConnectWalletButton = styled(Button)`
  max-width: 14vmax;
  width: 14vmax;
  height: 15vmax;
  padding: 3vw 0;
  border-radius: 1rem;

  svg {
    width: 5vmax;
    height: 5vmax;
  }
`

export const WalletName = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin-top: 0.5rem;
`
