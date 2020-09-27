import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --background: #fff;
    --primary: #A23521;
    --whatsapp: #1ebea5;
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