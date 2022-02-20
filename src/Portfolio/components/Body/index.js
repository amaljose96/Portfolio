import React from "react";
import { BodyContainer } from "./styles";
import Landing from "../pages/Landing";
import Timeline from "../pages/Timeline";
import BackgroundElements from "../BackgroundElements";

function Body(props) {
  return <BodyContainer>
    <BackgroundElements/>
    <Landing/>
    <Timeline/>
  </BodyContainer>;
}
export default Body;