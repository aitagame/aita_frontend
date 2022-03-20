import { BaseLayout } from 'views/components/BaseLayout';
import { TitleH1 } from 'views/components/Title';
import { ContentWrapper } from './styled';

export const Market = () => {
  return (
    <BaseLayout>
      <ContentWrapper withGap>
        <TitleH1>Coming Soon</TitleH1>
      </ContentWrapper>
    </BaseLayout>
  );
};
