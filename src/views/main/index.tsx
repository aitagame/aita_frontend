import { PromoTitle, PromoWrapper, MainWrapper, PromoContent } from './styled'
import { Header } from 'views/components/Header'
import { Button } from 'views/components/Button'
import { MainSection } from 'views/components/MainSection'
import { mainBackground, mainSectionsData } from 'views/data/main'
import { InfoSection } from 'views/components/InfoSection'
import { ItemsSection } from 'views/components/ItemsSection'
import { Footer } from 'views/components/Footer'

export const Main: React.FC = () => {
  return (
    <MainWrapper>
      <Header />
      <PromoWrapper background={mainBackground}>
        <PromoContent>
          <PromoTitle>Main Promo Title</PromoTitle>
          <Button>Join Today</Button>
        </PromoContent>
      </PromoWrapper>
      {mainSectionsData.map((section, i) => (
        <MainSection key={section.id} reverse={i % 2 === 1} section={section} />
      ))}
      <InfoSection />
      <ItemsSection />
      <Footer />
    </MainWrapper>
  )
}
