import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  :root {
    --highlight: #a404b7;
    --background: #0496b7;
    --white: #eee;

    --container: 100rem;

    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html: {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
    color: var(--white);
    background: var(--background);
  }

  body {
    font-family: 'Montserrat', sans-serif;
  }

  p {
    font-size: 1rem;
    line-height: var(--small);
  }

  a {
    color: var(--highlight);
  }
`

export default GlobalStyles
