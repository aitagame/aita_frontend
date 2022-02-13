import styled from 'styled-components'
import { Wrapper } from '../Wrapper'

export const InfoSectionWrapper = styled(Wrapper)<{ reverse?: boolean }>``

export const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${({ theme }) => theme.gutter.small};
`

export const SectionTitle = styled.h5`
  font-size: ${({ theme }) => theme.fonts.sizes.title};
`
export const SectionText = styled.p`
  letter-spacing: 1px;
  font-size: ${({ theme }) => theme.fonts.sizes.subtitle};
`
