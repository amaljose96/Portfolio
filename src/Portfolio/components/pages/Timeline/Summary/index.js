import React from "react";
import { SummaryContainer,SummaryElement,SummaryLabel,SummaryValue } from "./styles";
import { timelineContent } from "../constants";
import { renderToString } from 'react-dom/server'

function getDuration(start,end) {
  const yearsDiff = end.getFullYear() - start.getFullYear();
  const monthsDiff = end.getMonth() - start.getMonth();
  const daysDiff = end.getDate() - start.getDate();
  const fractionalYears = (monthsDiff * 30 + daysDiff) / 365;
  const totalYears = yearsDiff + fractionalYears;
  return totalYears;
}

function Summary() {
  let workExperience=timelineContent.filter(item=>{
    let title = renderToString(item.title)
    return item.type.includes("work") && (title.includes("Started working as") || title.includes("Resigned") || title.includes("Left"))
  }).map(item=>{
    return getDuration(item.time,new Date())
  }).slice(2).reduce((curExp,time,index)=>{
    if(index%2==0){
      return curExp + time
    }
    else{
      return curExp - time
    }
  },0)
  return <SummaryContainer>
    <SummaryElement>
      <SummaryLabel>Age</SummaryLabel>
      <SummaryValue>{getDuration(timelineContent[0].time,new Date()).toFixed(1)}</SummaryValue>
    </SummaryElement>
    <SummaryElement>
      <SummaryLabel>Years of Experience</SummaryLabel>
      <SummaryValue>{workExperience.toFixed(2)}</SummaryValue>
    </SummaryElement>
  </SummaryContainer>;
}
export default Summary;