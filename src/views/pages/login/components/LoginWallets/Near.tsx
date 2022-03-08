import { NearIcon } from 'views/icons/NearIcon';
import { WalletName } from './styled';
import { useContext } from 'react';
import { AuthContext } from 'views/context/Auth';
import { useNear } from 'views/hooks/useNear';
import { SquareButton } from 'views/components/Button';

export const Near: React.FC = () => {
  const { setAuthMethod } = useContext(AuthContext);
  const { connect, signIn } = useNear();

  return (
    <SquareButton
      onClick={() => {
        setAuthMethod('Near');
        connect().then(() => {
          signIn();
        });
      }}
    >
      <NearIcon fill="black" />
      <WalletName>Near</WalletName>
    </SquareButton>
  );
};
