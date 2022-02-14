import styled from 'styled-components'

export const LogoWrapper = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  font-size: 1.3rem;
`

export const Logo: React.FC = () => {
  return <LogoWrapper>Aita</LogoWrapper>
}
