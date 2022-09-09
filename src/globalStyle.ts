import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fff;
    --gray-100: #e1e1e6;
    --gray-300: #c4c4cc;
    --gray-400: #8d8d99;
    --gray-600: #323238;
    --gray-700: #29292e;
    --gray-800: #202024;
    --gray-900: #121214;
    --purple-100: #B08FFF;
    --purple-300: #9F75FF;
    --purple-500: #8257E5;
    --purple-700: #6F48C9;
    --purple-900: #5E3FA6;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--gray-900);
    color: var(--gray-300);
    -webkit-font-smoothing: antialiased;
  }

  
  input,
  button,
  textarea,
  select {
    outline: none;
    border: none;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }
  
  button {
    cursor: pointer;
  }

  body,
  input,
  textarea,
  button {
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  @media (prefers-color-scheme: light) {
    :root {
    --white: #fff;
    --gray-900: #e1e1e6;
    --gray-800: #c4c4cc;
    --gray-700: #8d8d99;
    --gray-600: #323238;
    --gray-400: #29292e;
    --gray-300: #202024;
    --gray-100: #121214;
    --purple-900: #B08FFF;
    --purple-700: #9F75FF;
    --purple-500: #8257E5;
    --purple-300: #6F48C9;
    --purple-100: #5E3FA6;
  }
  
    body {
      background: var(--gray-900);
      color: var(--gray-300);
    }
  }
`;