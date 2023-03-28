import { css } from '@emotion/react';
export const GlobalStyles = css`
  :root {
    --bgmain: #f5f5f5;
    --white: #fff;
    --black: #000000;
    --warning: #ea8d0b;
    --mainText: #000;
    --headerLink: #1f1f1f;
    --subText: #717171;
    --cardbg: #000000;
    --cardsubtext: #c9c9c9;
    --svgfill: #262626;
    --svghover: #f4efc484;
    --footerformbg: #0d0d0d;
    --placeholder: #616161;
    --inputbg: #1a1a1a;
    --formtext: #8d8d8d;
  }
  *:focus {
    outline: none;
  }
  html,
  body {
    height: 100%;
  }
  form input::-webkit-validation-bubble-message,
  form select::-webkit-validation-bubble-message,
  form textarea::-webkit-validation-bubble-message {
    display: none;
  }
  body {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 12px;
    color: #000000;
    background-color: #f5f5f5;
    line-height: 1.5;
  }
  input:focus {
    outline: none;
  }
  input[type='text']::-moz-focus-inner,
  input[type='email']::-moz-focus-inner,
  input[type='password']::-moz-focus-inner,
  textarea::-moz-focus-inner {
    border: 0;
    outline: none;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  ul,
  ol {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }
  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;
