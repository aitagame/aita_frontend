import { ThemeProvider } from 'styled-components'
import { Wrapper } from './styled'
import { mainTheme } from '../../theme/mainTheme'
import { Header } from '../components/Header'

export const Main = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <Wrapper>
        <Header />
      </Wrapper>
    </ThemeProvider>
  )
}
