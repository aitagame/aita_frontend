import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary};
`

export const PromoWrapper = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  padding-top: 50vh;
  position: relative;
`

export const PromoContent = styled.div`
  position: absolute;
  top: 50vh;
  width: 100%;
  text-align: center;
`

export const PromoTitle = styled.h1`
  font-size: ${({ theme }) => theme.fonts.sizes.title};
`
