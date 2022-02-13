import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  width: 100vw;
  position: fixed;
  z-index: 2;
  padding: ${({ theme }) => `1rem ${theme.gutter.medium}}`};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
`

export const Logo = styled.img``

export const HeaderLink = styled(Link)`
  padding: 0 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  :hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`
