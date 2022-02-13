import { ThemeProvider } from 'styled-components'
import { PromoTitle, PromoWrapper, MainWrapper, PromoContent } from './styled'
import { mainTheme } from 'views/theme/mainTheme'
import { Header } from 'views/components/Header'
import { Button } from 'views/components/Button'
import { MainSection } from 'views/components/MainSection'
import { mainSectionsData } from 'views/data/main'
import { InfoSection } from 'views/components/InfoSection'

export const Main: React.FC = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <MainWrapper>
        <Header />
        <PromoWrapper background="https://store-images.s-microsoft.com/image/apps.59352.14333371177529780.b6b0e65b-5f45-4caa-81d5-0a50416a56ba.cfeee9be-c402-4365-9ed4-f3d18bdc14a4?mode=scale&q=90&h=1080&w=1920">
          <PromoContent>
            <PromoTitle>Main Promo Title</PromoTitle>
            <Button>Join Today</Button>
          </PromoContent>
        </PromoWrapper>
        {mainSectionsData.map((section, i) => (
          <MainSection key={section.id} reverse={i % 2 === 1} section={section} />
        ))}
        <InfoSection />
      </MainWrapper>
    </ThemeProvider>
  )
}
