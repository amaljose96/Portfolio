import React from "react";
import { TimelineTogglerContainer, TimelineToggleOptions, TimelineToggleOption } from "./styles";
import ReactGA from "../../../../config/ga";
const options = ["life", "education", "work"]

function TimelineToggler({ types, setTypes }) {
  return <TimelineTogglerContainer>
      <TimelineToggleOptions>
        <TimelineToggleOption active={types.length === 3} onClick={() => { 
           ReactGA.event({
            action: "Changed Filter",
            category: "Timeline",
            label: options.join(", "),
          });
          setTypes(options) 
        }}>All</TimelineToggleOption>
        {
          options.map((option, index) => {
            return <TimelineToggleOption key={"toggle_option_" + index} active={types.includes(option)} onClick={() => {
              if (types.length === 1 && types[0] === option) {
                return
              }
              if (types.includes(option)) {
                ReactGA.event({
                  action: "Changed Filter",
                  category: "Timeline",
                  label: types.filter(t => t !== option).join(", "),
                });
                setTypes(types.filter(t => t !== option))
              }
              else {
                ReactGA.event({
                  action: "Changed Filter",
                  category: "Timeline",
                  label: [...types, option].join(", "),
                });
                setTypes([...types, option])
              }
            }}>{option}</TimelineToggleOption>
          })
        }

      </TimelineToggleOptions>
    

  </TimelineTogglerContainer>;
}
export default TimelineToggler;