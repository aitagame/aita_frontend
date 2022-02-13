import styled from 'styled-components'

export const ItemCardWrapper = styled.div`
  text-align: center;
`

export const ItemImage = styled.img`
  height: 20vh;
  max-height: 210px;
`

export const SectionTitle = styled.h5`
  font-size: 1.2rem;
  margin-bottom: 0.5em;
  color: ${({ theme }) => theme.colors.text};
`
export const SectionText = styled.p`
  color: ${({ theme }) => theme.colors.text};
`
