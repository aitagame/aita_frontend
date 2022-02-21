import styled from 'styled-components'
import { BaseContent } from 'views/components/BaseLayout/styled'
import { desktopDevice } from 'views/theme/mediaQuery'

export const LoginContent = styled(BaseContent)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const ConnectWalletWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4rem 2rem 10rem;
  gap: 2rem;

  ${desktopDevice} {
    flex-direction: row;
    justify-content: space-evenly;
    gap: 1vmax;
    padding: 10vh;
  }
`
