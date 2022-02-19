import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --container-background: #FFFFFF;

    --primary-font-color: #000000;
    --secondary-font-color: ##B0B0B0;
    --placeholder-font-color: #767676;
    --button-primary-font-color: #FFFFFF;

    --link-button-color: #1A4F8B;
    --primary-button-background-color: #1A4F8B;
    --secondary-button-background-color: #BF1541;
    --facebook-button-background-color: #385C8E;
    --google-button-background-color: #F14436;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font-size: 16px (Desktop)

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media(max-width: 720px) {
      font-size: 87.5%;
    }
  }


  body {
    background: var(---background);
    -webkit-font-smoothing: antialiased;
  }

  // does not import the body font automatically : input, textarea, button
  body, input, textarea, button {
    font-family: roboto, sans-serif;
    font-weight: 400;
    background: var(--background);
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`