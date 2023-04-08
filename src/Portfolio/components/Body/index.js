import React from "react";
import { BodyContainer } from "./styles";
import Landing from "../pages/Landing";
import Timeline from "../pages/Timeline";
import BackgroundElements from "../BackgroundElements";
import Projects from "../pages/Projects";
import Navigator from "../Navigator";
import Feedback from "../pages/Feedback";

function Body() {
  return <BodyContainer>
    <BackgroundElements/>
    <Landing/>
    <Timeline/>
    <Projects/>
    <Navigator/>
    <Feedback/>
  </BodyContainer>;
}
export default Body;