import styled from 'styled-components'
import { Wrapper } from '../Wrapper'

export const InfoSectionWrapper = styled(Wrapper)<{ reverse?: boolean }>``

export const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  gap: ${({ theme }) => theme.gutter.medium};
`

export const SectionTitle = styled.h5`
  font-size: ${({ theme }) => theme.fonts.sizes.title};
  margin-bottom: 0.5em;
  font-weight: 500;
`
export const SectionText = styled.p`
  letter-spacing: 1px;
  font-size: ${({ theme }) => theme.fonts.sizes.subtitle};
  margin-bottom: 2rem;
`
