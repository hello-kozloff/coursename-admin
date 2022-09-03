import { createGlobalStyle } from 'styled-components'

export const Stylesheet = createGlobalStyle`
  body {
    font-family: 'Manrope', sans-serif;
    font-size: 16px;
  }

  a {
    color: #2DB38B;
    text-decoration: none;
  }
  
  input:focus::placeholder {
    opacity: 0;
  }
`
