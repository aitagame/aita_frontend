import styled from 'styled-components'

export const SocialLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const SocialText = styled.p``

export const SocialLink = styled.a`
  width: 2rem;
  height: 2rem;
  :hover {
    svg {
      fill: ${({ theme }) => theme.colors.secondary};
    }
  }

  svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.colors.text};
  }
`
