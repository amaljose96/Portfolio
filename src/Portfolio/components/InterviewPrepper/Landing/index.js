import React from "react";
import { LandingContainer, Title } from "./styles";
import { getExistingSessions } from "../utils";
import { Option, Options, Question } from "../styles";

function Landing({ top, startNewTopic, viewOldSessions }) {
  const hasExistingSessions = getExistingSessions().length != 0;
  return <LandingContainer
    top={top}
  >
    <Title>Interview Prepper!</Title>
    <Question>What would you like to do?</Question>
    <Options>
      <Option
        onClick={startNewTopic}
      >Prepare for an interview
      </Option>
      <Option
        onClick={hasExistingSessions && viewOldSessions}
        disabled={!hasExistingSessions}
      >Revisit Old Sessions
      </Option>
    </Options>
  </LandingContainer>;
}
export default Landing;