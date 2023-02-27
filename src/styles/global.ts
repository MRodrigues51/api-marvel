import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: ${(props) => props.theme.colors.background};
  }
  body, input, p, a, button {
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSizes.normal};
    font-family: ${(props) => props.theme.fonts};
  }
`
