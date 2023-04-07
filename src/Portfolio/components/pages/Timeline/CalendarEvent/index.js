import React from "react";
import colors from "../../../../config/colors";
import { CalendarEventContainer, IconContainer, Time, Title, TopContent,BottomContent } from "./styles";
import { elementWidth, lineWidth,trainColor,trackColor } from "../constants";
function getDurationText(duration) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let time = new Date(duration);
  return `${months[time.getMonth()]} ${time.getFullYear()}`
}
function CalendarEvent({ Icon = false, durationText, title, time, percent = 0, forward }) {
  return <CalendarEventContainer>
    <TopContent percent={percent}>
      <IconContainer percent={percent}>
        {Icon && <Icon fillColor={colors.primary} size={35}/>}
      </IconContainer>
      <Time percent={percent}>{durationText ? durationText : getDurationText(time)}</Time>
    </TopContent>
    <svg width={elementWidth} height={lineWidth + 10} viewBox={`0 0 ${elementWidth} ${lineWidth}`} >
      <rect x="0" y="0" width={elementWidth} height={lineWidth} fill={trackColor} />
      {
        forward && <rect x="0" y="0" width={percent * elementWidth} height={lineWidth} fill={trainColor} />
      }
      {
        !forward && <rect x={(1 - percent) * elementWidth} y="0" width={percent * elementWidth} height={lineWidth} fill={trainColor} />
      }

    </svg>
    <BottomContent percent={percent}>

        <Title>{title}</Title>
      
    </BottomContent>



  </CalendarEventContainer>;
}
export default CalendarEvent;