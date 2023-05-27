import React from "react";
import { SkillTogglerContainer } from "./styles";
import { TimelineToggleOptions, TimelineToggleOption, TimelineTogglerContainer } from "../../Timeline/TimelineToggler/styles";
import ReactGA from "../../../../config/ga";

function SkillToggler({ type, setType,options=["life", "education", "work"] }) {
  return <TimelineTogglerContainer>
    <TimelineToggleOptions>
      {
        options.map((option, index) => {
          return <TimelineToggleOption 
          key={"toggle_option_" + index} 
          active={type === option} 
          onClick={() => {
            setType(option)
            ReactGA.event({
              action: "Changed Skill Filter",
              category: "Skills",
              label: option,
            });
          }}>{option}</TimelineToggleOption>
        })
      }

    </TimelineToggleOptions>
  </TimelineTogglerContainer>;
}
export default SkillToggler;