import React from "react";
import { NavigatorContainer, NavigatorBar, NavigationOption, NavigationOptionLabel, NavigationIcon } from "./styles";
import { options } from "./constants";
import colors from "../../config/colors";
import ReactGA from "../../config/ga";

function Navigator({ scroll }) {
  const [showLabels, setShowLabels] = React.useState(false);


  return <NavigatorContainer
    open={showLabels}
    onMouseEnter={() => {
      ReactGA.event({
        category: "Navigator",
        action: "Expand",
        label: true, // optional
      });
      setShowLabels(true)
    }}
    onMouseLeave={() => {
      ReactGA.event({
        category: "Navigator",
        action: "Expand",
        label: false, // optional
      });
      setShowLabels(false)
    }}
  >
    <NavigatorBar>
      {options.map((option, index) => {
        scroll = Math.ceil(scroll)
        let scrollStart = document.getElementById(option.href)?.offsetTop;
        let scrollEnd = document.getElementById(options[index + 1]?.href)?.offsetTop;
        if (index == options.length - 1) {
          scrollEnd = Infinity;
        }
        let isOptionActive = scrollStart === undefined ? index === 0 : scroll >= (scrollStart) && scroll < (scrollEnd);
        return <NavigationOption active={isOptionActive} open={showLabels} onClick={() => {
          document.getElementById(option.href).scrollIntoView({
            behavior: 'smooth'
          });
          ReactGA.event({
            category: "Navigator",
            action: "Navigate",
            label: option.label, // optional
          });
        }}>
          <NavigationIcon>
            <option.icon size={20} fillColor={isOptionActive ? colors.secondary : colors.background} />
          </NavigationIcon>
          <NavigationOptionLabel open={showLabels}>{option.label}</NavigationOptionLabel>
        </NavigationOption>
      })}
    </NavigatorBar>
  </NavigatorContainer>;
}
export default Navigator;