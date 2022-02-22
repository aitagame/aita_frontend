import { MainWrapper } from './styled';
import { Header } from 'views/components/Header';
import { Footer } from '../Footer';

export const BaseLayout: React.FC = ({ children }) => {
  return (
    <MainWrapper>
      <Header />
      {children}
      <Footer />
    </MainWrapper>
  );
};
