import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { BaseLayout } from 'views/components/BaseLayout';
import { Metamask } from 'views/pages/login/components/LoginWallets/Metamask';
import { Near } from 'views/pages/login/components/LoginWallets/Near';
import { Title, TitleH2 } from 'views/components/Title';
import { useAuthValues } from 'views/hooks/useAuthValues';
import { useLocalStorage } from 'views/hooks/useLocalStorage';
import { ConnectWalletWrapper, LoginContent } from './styled';

export const Login: React.FC = () => {
  const { isLoggedIn } = useAuthValues();
  const navigate = useNavigate();
  const { getLSValue } = useLocalStorage();

  useEffect(() => {
    if (isLoggedIn) navigate(getLSValue('loginFrom', false) || '/');
  }, [getLSValue, isLoggedIn, navigate]);

  return (
    <BaseLayout>
      <LoginContent>
        <TitleH2 mb="2rem">Connect your wallet</TitleH2>
        <Title>Create or connect existing wallet to play the game</Title>
        <ConnectWalletWrapper>
          <Near />
          <Metamask />
        </ConnectWalletWrapper>
      </LoginContent>
    </BaseLayout>
  );
};
