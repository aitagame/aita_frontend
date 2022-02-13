import styled from 'styled-components'
import { InfoCardType } from 'views/types/mainPage'

export const InfoCardWrapper = styled.div<{ type?: InfoCardType }>``

export const SectionImage = styled.span`
  img {
    width: 100%;
    height: 30vmin;
    object-fit: cover;
  }
`

export const Content = styled.section`
  padding: ${({ theme }) => theme.gutter.medium};
`

export const SectionTitle = styled.h5`
  font-size: ${({ theme }) => theme.fonts.sizes.subtitle};
`
export const SectionText = styled.p`
  letter-spacing: 1px;
`
