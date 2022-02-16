import { BaseLayout } from 'views/components/BaseLayout'
import { Metamask } from 'views/components/LoginWallets/Metamask'
import { Near } from 'views/components/LoginWallets/Near'
import { Title, TitleH2 } from 'views/components/Title'
import { ConnectWalletWrapper, LoginContent } from './styled'

export const Login: React.FC = () => {
  return (
    <BaseLayout>
      <LoginContent>
        <TitleH2 mb="1rem">Sample heading here</TitleH2>
        <Title>sample paragraph short description inserted in here</Title>
        <ConnectWalletWrapper>
          <Near />
          <Metamask />
        </ConnectWalletWrapper>
      </LoginContent>
    </BaseLayout>
  )
}
