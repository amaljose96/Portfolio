import React from "react";
import { PortfolioContainer } from "./styles";
import Body from "./components/Body";

function Portfolio(props) {
  return <PortfolioContainer className="appContainer">
    <Body/>
  </PortfolioContainer>;
}
export default Portfolio;