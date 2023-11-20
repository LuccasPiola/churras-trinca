import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    secondary: string;
    gray: {
      main: string;
      background: string;
    };
    text: {
      main: string;
      secondary: string;
    };
  }
}
