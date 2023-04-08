import React from "react";
import { GlobalStyle, PortfolioContainer } from "./styles";
import Body from "./components/Body";
function Portfolio() {
  return <PortfolioContainer className="appContainer">
    <GlobalStyle/>
    <Body/>
  </PortfolioContainer>;
}
export default Portfolio;