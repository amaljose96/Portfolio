import React from "react";
import colors from "../../../../config/colors";
import { CalendarEventContainer, IconContainer, EventDetails, Time, Title, Description } from "./styles";

function CalendarEvent({ Icon = false,durationText, title, description = "",gapBefore,gapAfter }) {
  return <CalendarEventContainer gapBefore={gapBefore} gapAfter={gapAfter}>
    <IconContainer>{Icon && <Icon fillColor={colors.text} />}</IconContainer>
    <EventDetails>
      <Time>{durationText}</Time>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </EventDetails>

  </CalendarEventContainer>;
}
export default CalendarEvent;