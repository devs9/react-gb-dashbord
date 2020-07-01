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
  /** Change Autocomplete styles in Chrome **/
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
    border: none !important;
    background-color: #4b4949 !important;
    -webkit-text-fill-color: #FFF !important;
    -webkit-box-shadow: 0 0 0px 1000px #575454 inset !important;
    transition: trasparent 5000s ease-in-out 0s !important;
  }
  
  #root {
    max-width: 100%;
    max-height: 100%;
    position: relative;
  }
`
