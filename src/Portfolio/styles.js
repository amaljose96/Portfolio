import styled,{ createGlobalStyle }  from "styled-components";
import colors from "./config/colors";
import fonts from "./config/fonts";
import { isMobile } from "./utils/common";

export const PortfolioContainer = styled.div`
  color: ${colors.text};
  ${fonts.default};
  width: calc(100vw -${isMobile() ?0:5}px);
  top: 0;
  left: 0;
`;



export const GlobalStyle = createGlobalStyle`
  body {
   padding: 0;
   margin: 0;
  ::-webkit-scrollbar {
    width: 5px;
    height:5px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background-color: ${colors.text}99;
    
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${colors.primary}aa;
    border-radius:10px;
    transition: all 0.5s;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:active {
    background: ${colors.secondary};
  }
  }
  html {
    scroll-behavior: smooth;
  }
  `;