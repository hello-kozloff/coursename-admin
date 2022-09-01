import { createGlobalStyle } from 'styled-components'

export const Stylesheet = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');
  
  body {
    font-family: 'Manrope', sans-serif;
    font-size: 14px;
    letter-spacing: -.1px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  input:focus::placeholder {
    opacity: 0;
  }
`
