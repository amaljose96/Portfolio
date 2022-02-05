import React from "react";
import CalendarEvent from "./CalendarEvent";
import { timelineContent } from "./constants";
import { TimelineContainer,YearSection,Year,YearContent,TimelineTitle } from "./styles";
import { enhanceTimelineContent } from "./utils";

function Timeline(props) {
  return <TimelineContainer id="timeline">
    <TimelineTitle>Story of my Life</TimelineTitle>
    {
      Object.keys(timelineContent).map(year => {
        return <YearSection>
          <Year>{year}</Year>
          <YearContent>
            {
              enhanceTimelineContent(timelineContent)[year].map((event,index) => {
                return <CalendarEvent {...event}/>
              })
            }

          </YearContent>
        </YearSection>
      })
    }
  </TimelineContainer>;
}
export default Timeline;