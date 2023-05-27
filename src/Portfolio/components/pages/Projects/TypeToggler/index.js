import React from "react";
import { TypeTogglerContainer, TypeToggleOptions, TypeToggleOption } from "./styles";
import ReactGA from "../../../../config/ga";
import { categoryTitles } from "../../Skills/config";
const options = Object.keys(categoryTitles);

function TypeToggler({types,setTypes}) {
  return <TypeTogglerContainer>
      <TypeToggleOptions>
        <TypeToggleOption active={types.length === options.length} onClick={() => { 
           ReactGA.event({
            action: "Changed Filter",
            category: "Projects",
            label: options.join(", "),
          });
          setTypes(options) 
          }}>All</TypeToggleOption>
        {
          options.map((option, index) => {
            return <TypeToggleOption key={"toggle_option_" + index} active={types.includes(option)} onClick={() => {
              if (types.length === 1 && types[0] === option) {
                return
              }
              if (types.includes(option)) {
                ReactGA.event({
                  action: "Changed Filter",
                  category: "Projects",
                  label: types.filter(t => t !== option).join(", "),
                });
                setTypes(types.filter(t => t !== option))
              }
              else {
                ReactGA.event({
                  action: "Changed Filter",
                  category: "Projects",
                  label: [...types, option].join(", "),
                });
                setTypes([...types, option])
              }
            }}>{categoryTitles[option]}</TypeToggleOption>
          })
        }

      </TypeToggleOptions>
    

  </TypeTogglerContainer>;
}
export default TypeToggler;