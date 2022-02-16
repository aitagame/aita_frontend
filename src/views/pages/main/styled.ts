import styled from 'styled-components'

export const PromoWrapper = styled.div<{ background: string }>`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  background-image: ${({ background }) => `url(${background})`};
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  position: relative;
`

export const PromoContent = styled.div`
  position: absolute;
  top: 70vh;
  width: 100%;
  text-align: center;
`

export const PromoTitle = styled.h1`
  font-size: ${({ theme }) => theme.fonts.sizes.title};
`
