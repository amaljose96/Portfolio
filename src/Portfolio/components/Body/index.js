import React from "react";
import { BodyContainer } from "./styles";
import Landing from "../pages/Landing";
import Timeline from "../pages/Timeline";
import BackgroundElements from "../BackgroundElements";
import Projects from "../pages/Projects";

function Body(props) {
  return <BodyContainer>
    <BackgroundElements/>
    <Landing/>
    <Timeline/>
    <Projects/>
  </BodyContainer>;
}
export default Body;