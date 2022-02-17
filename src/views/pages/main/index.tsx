import { PromoTitle, PromoWrapper, PromoContent } from './styled'
import { MainSection } from 'views/components/MainSection'
import { mainSectionsData } from 'views/data/main'
import { InfoSection } from 'views/components/InfoSection'
import { ItemsSection } from 'views/components/ItemsSection'
import { PlayGameButton } from 'views/components/PlayGameButton'
import promoImage from 'views/assets/promo.jpg'
import { BaseLayout } from 'views/components/BaseLayout'

export const Main: React.FC = () => {
  return (
    <BaseLayout>
      <PromoWrapper background={promoImage}>
        <PromoContent>
          <PromoTitle>Main Promo Title</PromoTitle>
          <PlayGameButton title="Join Today" />
        </PromoContent>
      </PromoWrapper>
      {mainSectionsData.map((section, i) => (
        <MainSection key={section.id} reverse={i % 2 === 1} section={section} />
      ))}
      <InfoSection />
      <ItemsSection />
    </BaseLayout>
  )
}