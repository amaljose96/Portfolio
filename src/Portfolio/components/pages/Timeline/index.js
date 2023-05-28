import React from "react";
import CalendarEvent from "./CalendarEvent";
import { timelineContent } from "./constants";
import { TimelineContainer, TimelineItems, TimelineRow, TimelineTitle } from "./styles";
import TimelineToggler from "./TimelineToggler";
import { generateInteractiveTimeline } from "./utils";
import SidePiece from "./SidePiece";
import { isMobile } from "../../../utils/common";


function Timeline({ scroll = 0 }) {
  let [enabledTypes, setEnabledTypes] = React.useState(["work", "education"]);
  const timelineScroll = React.useRef();

  let scrollTop = 0;
  let timelineTop = timelineScroll?.current?.offsetTop || 0;
  let trigger = timelineTop - window.innerHeight / (isMobile() ? 3 : 2);
  if (scroll < trigger) {
    scrollTop = 0;
  }
  else {
    scrollTop = scroll - trigger;
  }



  let filteredContent = timelineContent.filter(event => {
    if (!event.type) {
      return true;
    }
    let commonTypes = event.type.filter(type => {
      return enabledTypes.includes(type)
    })
    return commonTypes.length !== 0
  })
  let interactiveTimeline = generateInteractiveTimeline(filteredContent);
  return <TimelineContainer id="timeline" ref={timelineScroll}>
    <TimelineTitle>Timeline</TimelineTitle>
    <TimelineToggler types={enabledTypes} setTypes={setEnabledTypes} />
    <br /><br /><br />
    {
      enabledTypes.length === 0 && <>Select event type</>
    }
    <TimelineItems>
      {
        interactiveTimeline.map((row, index) => {

          return <TimelineRow key={Math.random()} align={index % 2 === 0 ? "left" : "right"}>
            {
              row.map(element => {
                let percent = element.getPercent(scrollTop)
                if (element.type === 'side') {
                  return <SidePiece key={Math.random()} {...element} percent={percent} forward={index % 2 === 0} />
                }
                else {
                  return <CalendarEvent key={Math.random()} {...element} percent={percent} forward={index % 2 === 0} />
                }
              })
            }
          </TimelineRow>



        })
      }
    </TimelineItems>

  </TimelineContainer>;
}
export default Timeline;