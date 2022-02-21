import { NearIcon } from 'views/icons/NearIcon'
import { ConnectWalletButton, WalletName } from './styled'
import { useContext } from 'react'
import { AuthContext } from 'views/context/Auth'
import { useNear } from 'views/hooks/useNear'

export const Near: React.FC = () => {
  const { setAuthMethod } = useContext(AuthContext)
  const { connectNear, signIn } = useNear()

  return (
    <ConnectWalletButton
      onClick={() => {
        setAuthMethod('Near')
        connectNear().then(() => {
          signIn()
        })
      }}
    >
      <NearIcon fill="black" />
      <WalletName>Near</WalletName>
    </ConnectWalletButton>
  )
}
