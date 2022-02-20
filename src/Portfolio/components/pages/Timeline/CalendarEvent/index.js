import React from "react";
import colors from "../../../../config/colors";
import { CalendarEventContainer, IconContainer, EventDetails, Time, Title, Description } from "./styles";

function CalendarEvent({ Icon = false,durationText, title, description = ""}) {
  return <CalendarEventContainer>
    <IconContainer>{Icon && <Icon fillColor={colors.primary} />}</IconContainer>
    <EventDetails>
      <Time>{durationText}</Time>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </EventDetails>

  </CalendarEventContainer>;
}
export default CalendarEvent;