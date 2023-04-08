import React from "react";
import { NavigatorContainer, NavigatorBar, NavigationOption, NavigationOptionLabel, NavigationIcon } from "./styles";

import { options } from "./constants";
import colors from "../../config/colors";

function Navigator(props) {
  const [showLabels, setShowLabels] = React.useState(false);


  return <NavigatorContainer 
  open={showLabels}
  onMouseEnter={() => {
    setShowLabels(true)
  }}
    onMouseLeave={() => {
      setShowLabels(false)
    }}
  >
    <NavigatorBar>
      {options.map(option => {
        return <NavigationOption open={showLabels} onClick={()=>{
          document.getElementById(option.href).scrollIntoView({ 
            behavior: 'smooth' 
          });
        }}>
          <NavigationIcon>
            <option.icon size={20} fillColor={colors.background} />
          </NavigationIcon>
          <NavigationOptionLabel open={showLabels}>{option.label}</NavigationOptionLabel>
        </NavigationOption>
      })}
    </NavigatorBar>
  </NavigatorContainer>;
}
export default Navigator;