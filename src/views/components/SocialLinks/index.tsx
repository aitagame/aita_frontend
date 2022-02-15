import { LinkIcons, SocialLink, SocialLinksWrapper, SocialText } from './styled'
import { InstagramIcon } from 'views/icons/InstagramIcon'
import { DiscordIcon } from 'views/icons/DiscordIcon'
import { FacebookIcon } from 'views/icons/FacebookIcon'
import { TwitterIcon } from 'views/icons/TwitterIcon'
import { ReactNode } from 'react'

interface SocialIcon {
  icon: ReactNode
  url: string
}

type SocialIconType = 'facebook' | 'twitter' | 'discord' | 'instagram'

const icons: Record<SocialIconType, SocialIcon> = {
  facebook: {
    icon: <FacebookIcon />,
    url: '',
  },
  instagram: {
    icon: <InstagramIcon />,
    url: '',
  },
  twitter: {
    icon: <TwitterIcon />,
    url: '',
  },
  discord: {
    icon: <DiscordIcon />,
    url: '',
  },
}

export const SocialLinks: React.FC = () => {
  return (
    <SocialLinksWrapper>
      <SocialText>Follow us:</SocialText>
      <LinkIcons>
        {(Object.keys(icons) as SocialIconType[]).map(iconKey => (
          <SocialLink href={icons[iconKey].url} key={iconKey}>
            {icons[iconKey].icon}
          </SocialLink>
        ))}
      </LinkIcons>
    </SocialLinksWrapper>
  )
}
