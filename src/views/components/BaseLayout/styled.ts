import styled from 'styled-components'

export const MainWrapper = styled.main`
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const BaseContent = styled.div`
  flex: 2;
  padding-top: 3.9rem;
`
