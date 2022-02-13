import styled from 'styled-components'
import { Wrapper } from '../Wrapper'

export const MainSectionWrapper = styled(Wrapper)<{ reverse?: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  background-color: ${({ theme, reverse }) => reverse && theme.colors.backgroundSecondary};
  gap: ${({ theme }) => theme.gutter.medium};
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`

export const SectionImage = styled.span`
  height: 30vmin;
  width: 40vw;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`

export const Content = styled.section`
  width: 60vw;
  @media screen and (max-width: 800px) {
    width: 100%;
    text-align: center;
  }
`

export const SectionTitle = styled.h5`
  font-size: ${({ theme }) => theme.fonts.sizes.subtitle};
`
export const SectionText = styled.p`
  letter-spacing: 1px;
`
