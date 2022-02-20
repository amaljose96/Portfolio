import React from "react";
import { TimelineTitle, TimelineTogglerContainer,TimelineToggleOptions,TimelineToggleOption } from "./styles";

const options=["life","education","work"]

function TimelineToggler({types,setTypes}) {
  return <TimelineTogglerContainer>
    <TimelineTitle>Timeline</TimelineTitle>
    <TimelineToggleOptions>
      <TimelineToggleOption active={true} onClick={()=>{setTypes(options)}}>All</TimelineToggleOption>
      {
        options.map(option=>{
            return <TimelineToggleOption active={types.includes(option)} onClick={()=>{
              if(types.includes(option)){
                setTypes(types.filter(t=>t!==option))
              }
              else{
                setTypes([...types,option])
              }
            }}>{option}</TimelineToggleOption>
        })
      }
      
    </TimelineToggleOptions>
    </TimelineTogglerContainer>;
}
export default TimelineToggler;