import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      secondaryLight: string
      backgroundPrimary: string
      backgroundSecondary: string
      text: string
      textReverse: string
    }
    fonts: {
      primary: string
      sizes: {
        title: string
        subtitle: string
      }
    }
    gutter: {
      small: string
      medium: string
    }
  }
}
