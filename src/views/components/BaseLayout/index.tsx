import { BaseContent, MainWrapper } from './styled';
import { Header } from 'views/components/Header';
import { Footer } from '../Footer';

interface BaseLayoutProps {
  withMenu?: boolean;
  withFooter?: boolean;
  withPlayButton?: boolean;
}

export const BaseLayout: React.FC<BaseLayoutProps> = ({
  children,
  withMenu = true,
  withFooter = false,
  withPlayButton = false,
}) => {
  return (
    <MainWrapper>
      <Header withMenu={withMenu} withPlayButton={withPlayButton} />
      <BaseContent>{children}</BaseContent>
      {withFooter && <Footer />}
    </MainWrapper>
  );
};
