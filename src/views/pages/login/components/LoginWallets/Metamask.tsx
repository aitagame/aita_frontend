import { SquareButton } from 'views/components/Button';
import { MetamaskIcon } from 'views/icons/MetamaskIcon';
import { WalletName } from './styled';

export const Metamask: React.FC = () => {
  return (
    <SquareButton>
      <MetamaskIcon fill="black" />
      <WalletName>Metamask</WalletName>
    </SquareButton>
  );
};
