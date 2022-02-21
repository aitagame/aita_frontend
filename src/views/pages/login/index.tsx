import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { BaseLayout } from 'views/components/BaseLayout'
import { Metamask } from 'views/components/LoginWallets/Metamask'
import { Near } from 'views/components/LoginWallets/Near'
import { Title, TitleH2 } from 'views/components/Title'
import { useAuth } from 'views/hooks/useAuth'
import { useLocalStorage } from 'views/hooks/useLocalStorage'
import { ConnectWalletWrapper, LoginContent } from './styled'

export const Login: React.FC = () => {
  const { isLoggedIn } = useAuth()
  const navigate = useNavigate()
  const { getLSValue } = useLocalStorage()

  useEffect(() => {
    if (isLoggedIn) navigate(getLSValue('loginFrom', false) || '/')
  }, [getLSValue, isLoggedIn, navigate])

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
