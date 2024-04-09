import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  min-height: 100vh;
  line-height: 1.5;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

`;

export default GlobalStyles;
