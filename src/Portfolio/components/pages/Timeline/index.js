import React from "react";
import CalendarEvent from "./CalendarEvent";
import { timelineContent } from "./constants";
import { TimelineContainer,YearSection,Year,YearContent } from "./styles";
import TimelineToggler from "./TimelineToggler";
import { enhanceTimelineContent } from "./utils";

function Timeline() {
  let [enabledTypes,setEnabledTypes] = React.useState(["work","education"])
  return <TimelineContainer id="timeline">
    <TimelineToggler types={enabledTypes} setTypes={setEnabledTypes}/>
    {
      enabledTypes.length === 0 && <>Select event type</>
    }
    {
      Object.keys(timelineContent).map(year => {
        if(timelineContent[year].filter(event=>{
          if(!event.type){
            return true;
          }
          let commonTypes=event.type.filter(type=>{
            return enabledTypes.includes(type)
          })
          return commonTypes.length!==0
        }).length!==0){
          return <YearSection key={year}>
          <Year>{year}</Year>
          <YearContent>
            {
              enhanceTimelineContent(timelineContent)[year].map((event,index) => {
                let shouldRender=true;
                if(event.type){
                  let commonTypes=event.type.filter(type=>{
                    return enabledTypes.includes(type)
                  })
                  shouldRender=commonTypes.length!==0
                }
                if(shouldRender){
                  return <CalendarEvent key={year+"_"+index} {...event}/>
                }
                else{
                  return false
                }
                
              })
            }

          </YearContent>
        </YearSection>
        }
        else{
          return false
        }
       
      })
    }
  </TimelineContainer>;
}
export default Timeline;