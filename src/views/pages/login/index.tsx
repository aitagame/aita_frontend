import { appConfig } from 'config/appConfig'
import { useCallback, useContext, useEffect } from 'react'
import { BaseLayout } from 'views/components/BaseLayout'
import { Metamask } from 'views/components/LoginWallets/Metamask'
import { Near } from 'views/components/LoginWallets/Near'
import { Title, TitleH2 } from 'views/components/Title'
import { AuthContext } from 'views/context/Auth'
import { useLocalStorage } from 'views/hooks/useLocalStorage'
import { NearLSWallet } from 'views/types/near'
import { ConnectWalletWrapper, LoginContent } from './styled'

export const Login: React.FC = () => {
  const { setNearAuth } = useContext(AuthContext)
  const { getLSValue } = useLocalStorage()

  const checkNearAuth = useCallback(() => {
    const nearWalletData: NearLSWallet = getLSValue('_wallet_auth_key')
    const accountId = nearWalletData.accountId
    if (!accountId) return
    setNearAuth({
      accountId,
      functionalKey: nearWalletData.allKeys[0],
      keyStore: getLSValue(`near-api-js:keystore:${accountId}:${appConfig.nearNetworkId}`, false),
    })
  }, [getLSValue, setNearAuth])

  useEffect(() => {
    checkNearAuth()
  }, [checkNearAuth])

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
