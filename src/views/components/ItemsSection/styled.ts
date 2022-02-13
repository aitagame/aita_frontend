import styled from 'styled-components'
import { ItemCardWrapper } from '../ItemCard/styled'
import { Wrapper } from '../Wrapper'

export const ItemsSectionWrapper = styled(Wrapper)``

export const Content = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.gutter.medium};
  ${ItemCardWrapper} {
    max-width: 25%;
  }
`

export const SectionTitle = styled.h5`
  font-size: ${({ theme }) => theme.fonts.sizes.title};
  margin-bottom: 0.5em;
  font-weight: 500;
`
