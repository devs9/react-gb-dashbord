import {createGlobalStyle} from 'styled-components'

export const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    width: 100%;
    height: 100%;
  }
  input, select { 
    font-size: 100%;
  }
  
  #root {
    max-width: 100%;
    max-height: 100%;
    position: relative;
  }
`
