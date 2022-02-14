import { AppLink } from '../AppLink'
import { Logo } from '../Logo'
import { SocialLinks } from '../SocialLinks'
import { FooterWrapper, Links } from './styled'

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Logo src="" />
      <Links>
        <AppLink to="/">Mobile app</AppLink>
        <AppLink to="/">Community</AppLink>
        <AppLink to="/">Company</AppLink>
      </Links>
      <SocialLinks />
    </FooterWrapper>
  )
}
