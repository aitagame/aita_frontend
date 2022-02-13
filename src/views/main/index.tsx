import { useMemo } from 'react'
import { ThemeProvider } from 'styled-components'
import { PromoTitle, PromoWrapper, MainWrapper, PromoContent } from './styled'
import { mainTheme } from 'views/theme/mainTheme'
import { Header } from 'views/components/Header'
import { Button } from 'views/components/Button'
import { MainSection } from 'views/components/MainSection'
import { mainSectionsMock } from 'views/mock/main'

export const Main: React.FC = () => {
  const mainSections = useMemo(() => {
    return mainSectionsMock.map((section, i) => (
      <MainSection key={section.id} reverse={i % 2 === 1} section={section} />
    ))
  }, [])

  return (
    <ThemeProvider theme={mainTheme}>
      <MainWrapper>
        <Header />
        <PromoWrapper>
          <PromoContent>
            <PromoTitle>Main Promo Title</PromoTitle>
            <Button>Join Today</Button>
          </PromoContent>
        </PromoWrapper>
        {mainSections}
      </MainWrapper>
    </ThemeProvider>
  )
}
