import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle<any>`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Josefin Sans', sans-serif;
    background-image: ${({ theme }) => theme.backgroundImage};
    background-repeat: no-repeat;
    background-color: ${({ theme }) => theme.backgroundColor};
    background-size: 100%;
    @media(max-width: 800px) {
      background-image: ${({ theme }) => theme.backgroundMobile};
      margin: 0 auto;
      width: 90%;
    }
  }
  html {
    font-size: 18px;
  }
`;

export default GlobalStyle;
