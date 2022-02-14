import styled from 'styled-components'
import { desktopDevice, mobileDevice } from 'views/theme/mediaQuery'
import { AppLink } from '../AppLink'
import { LogoWrapper } from '../Logo'
import { PlayGameButtonStyled } from '../PlayGameButton/styled'

export const HeaderWrapper = styled.header`
  width: 100vw;
  position: fixed;
  z-index: 2;
  padding: ${({ theme }) => `1rem ${theme.gutter.small}}`};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  ${desktopDevice} {
    padding: ${({ theme }) => `1rem ${theme.gutter.medium}}`};
  }
  ${mobileDevice} {
    ${PlayGameButtonStyled} {
      display: none;
    }
  }
`

export const HeaderContent = styled.div`
  ${LogoWrapper} {
    display: inline-block;
    margin-right: 5rem;
  }
  ${mobileDevice} {
    ${AppLink} {
      display: none;
    }
  }
`
