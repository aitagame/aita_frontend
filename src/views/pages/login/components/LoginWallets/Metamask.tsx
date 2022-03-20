import { SquareButton } from 'views/components/Button';
import { MetamaskIcon } from 'views/icons/MetamaskIcon';
import { WalletName } from './styled';

export const Metamask: React.FC = () => {
  return (
    <SquareButton>
      <MetamaskIcon />
      <WalletName>Metamask</WalletName>
    </SquareButton>
  );
};
