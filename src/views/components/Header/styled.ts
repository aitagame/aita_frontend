import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  width: 100vw;
  position: fixed;
  padding: ${({ theme }) => `1rem ${theme.gutter.medium}}`};
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const PlayButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.textReverse};
  border: 0;
  border-radius: 0.6rem;
  outline: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`
