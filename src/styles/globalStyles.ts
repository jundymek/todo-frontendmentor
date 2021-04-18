import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle<any>`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Josefin Sans', sans-serif;
    background-image: ${({ theme }) => theme.backgroundImage};
    background-size: 100% 30%;
    background-repeat: no-repeat;
    background-color: ${({ theme }) => theme.backgroundColor};
    min-height:100vh;
  }

`;

export default GlobalStyle;
