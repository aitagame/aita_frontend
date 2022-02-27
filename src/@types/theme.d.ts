import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      secondaryLight: string;
      backgroundPrimary: string;
      backgroundSecondary: string;
      text: string;
      textReverse: string;
      textDisabled: string;
    };
    fonts: {
      primary: string;
      sizes: {
        title: string;
        subtitle: string;
        input: string;
      };
    };
    gutter: {
      small: string;
      medium: string;
      elements: string;
    };
  }
}
