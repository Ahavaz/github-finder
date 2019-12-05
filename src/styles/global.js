import { createGlobalStyle } from 'styled-components'

import theme from './theme'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100vh;
  }

  #root {
    display: flex;
    flex-direction: column;
  }
  
  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    color: ${theme.babyPowder};
    background-image: linear-gradient(45deg, ${theme.purpureus}, ${theme.raisinBlack});
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 200vw 200vh;
    font-family: 'Roboto', sans-serif;
  }
`

export default GlobalStyle
