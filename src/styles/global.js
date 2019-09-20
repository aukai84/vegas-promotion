import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
import { media } from "./utils";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    height: 100%;
    font-size: 12px;
    overflow-x: hidden;
    ${media.small`
      font-size: 14px;
    `}
    ${media.large`
      font-size: 16px;
    `}
  }

  body {
    height: 100vh;
    font-family: ${theme.fonts.base};
    letter-spacing: 0.1px;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

  p {
    font-size: 1rem;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

`;
