import { PromoTitle, PromoWrapper, PromoContent } from './styled';
import { MainSection } from 'views/pages/main/components/MainSection';
import { mainSectionsData } from 'views/pages/main/data';
import { ItemsSection } from 'views/pages/main/components/ItemsSection';
import { PlayGameButton } from 'views/components/PlayGameButton';
import promoImage from 'views/assets/promo.jpg';
import { BaseLayout } from 'views/components/BaseLayout';

export const Main: React.FC = () => {
  return (
    <BaseLayout withMenu={false} withFooter withPlayButton>
      <PromoWrapper background={promoImage}>
        <PromoContent>
          <PromoTitle>Discover the mysterious power within </PromoTitle>
          <PlayGameButton title="Join Today" />
        </PromoContent>
      </PromoWrapper>
      {mainSectionsData.map((section, i) => (
        <MainSection key={section.id} reverse={i % 2 === 1} section={section} />
      ))}
      <ItemsSection />
    </BaseLayout>
  );
};
