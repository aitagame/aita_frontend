import { ThemeProvider } from 'styled-components'
import { PromoTitle, PromoWrapper, Wrapper, PromoContent } from './styled'
import { mainTheme } from 'views/theme/mainTheme'
import { Header } from 'views/components/Header'
import { Button } from 'views/components/Button'

export const Main = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <Wrapper>
        <Header />
        <PromoWrapper>
          <PromoContent>
            <PromoTitle>Main Promo Title</PromoTitle>
            <Button>Join Today</Button>
          </PromoContent>
        </PromoWrapper>
      </Wrapper>
    </ThemeProvider>
  )
}
