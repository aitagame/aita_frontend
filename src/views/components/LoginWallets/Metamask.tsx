import { MetamaskIcon } from 'views/icons/MetamaskIcon';
import { ConnectWalletButton, WalletName } from './styled';

export const Metamask: React.FC = () => {
  return (
    <ConnectWalletButton>
      <MetamaskIcon fill="black" />
      <WalletName>Metamask</WalletName>
    </ConnectWalletButton>
  );
};
