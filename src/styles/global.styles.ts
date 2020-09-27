import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --background: #fff;
    --primary: #A23521;
    --whatsapp: #1ebea5;

    --space-xxs: 4px;
    --space-xs: 8px;
    --space-sm: 16px;
    --space: 24px;
    --space-md: 32px;
    --space-lg: 48px;
    --space-xlg: 64px;
    --screen-xs: 360px;
    --screen-sm: 768px;
    --screen-md: 992px;
    --screen-lg: 1280px;
    --screen-xlg: 1440px;
  }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font: 400 14px sans-serif;
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  #__next {
    height: 100vh;
  }

  .container {
    width: 90vw;
    max-width: 700px;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`

export default GlobalStyle
