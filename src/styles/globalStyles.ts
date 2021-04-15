import { createGlobalStyle } from "styled-components";
import bgImage from "../assets/images/bg-desktop-dark.jpg";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Josefin Sans', sans-serif;
    background-image: url(${bgImage});
    background-size: 100% 40%;
    background-repeat: no-repeat;
    background-color: hsl(235, 21%, 11%);
  }

`;

export default GlobalStyle;
