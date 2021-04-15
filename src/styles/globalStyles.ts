import { createGlobalStyle } from "styled-components";
import bgImage from "../assets/images/bg-desktop-dark.jpg";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Josefin Sans', sans-serif;
    background-image: url(${bgImage});
    background-size: contain;
    background-repeat: no-repeat;
    /* box-sizing:border-box; */
    background-color: hsl(235, 24%, 19%);
  }

`;

export default GlobalStyle;
