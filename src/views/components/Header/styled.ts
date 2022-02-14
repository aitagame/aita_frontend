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
