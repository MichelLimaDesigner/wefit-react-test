import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body{
    min-height: 100vh;
  }

  html,
  body,
  a,
  p,
  button,
  ul,
  ol,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  figure,
  figcaption {
    margin: 0;
    padding: 0;
    font-family: "Open Sans", sans-serif;
  }

  ul,
  ol {
    list-style: none;
  }

  a{
    color: inherit;
    text-decoration: none;
  }

  :root {
    --bg-color: #2f2e41;
    --text-gray-light: #999999;
    --bg-card: #ffffff;
    --primary-color: #009edd;
    --secondary-color: #039b00;
    --bg-btn-hover: #0073a1;
  }

  .text-right{
    text-align: right;
  }
`;

export const ButtonIcon = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
