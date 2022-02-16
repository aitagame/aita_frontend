import { NearIcon } from 'views/icons/NearIcon'
import { ConnectWalletButton, WalletName } from './styled'

export const Near: React.FC = () => {
  return (
    <ConnectWalletButton>
      <NearIcon fill="black" />
      <WalletName>Near</WalletName>
    </ConnectWalletButton>
  )
}
