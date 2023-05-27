import React from "react";
import { SkillItemContainer,SkillLine,SkillName,SkillValue,SkillSubText, height, lineWidth, trackColor, width } from "./styles";
import { skillColors } from "../config";
import { isMobile } from "../../../../utils/common";

function SkillItem({title,value,subtext,color,scroll=0}) {
  const skillItemContainer = React.useRef();
  let heightStart = skillItemContainer?.current?.offsetTop-(window.innerHeight)*0.7;
  let heightEnd = heightStart+height*2;
  let percent = (scroll-heightStart)/(height*2);
  if(scroll<heightStart){
    percent = 0
  }
  else if(scroll>heightEnd){
    percent = 1
  }
  if(title=="JavaScript")console.log(title,percent)
  let trainColor = color;
  let fillLength = (value/10)*percent * width;
  return <SkillItemContainer id={title} ref={skillItemContainer} percent={percent} perfect={value==10}>
    <SkillLine>
    <SkillName>{title}</SkillName>
    {/* <SkillValue>{value}</SkillValue> */}
    </SkillLine>
    
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} >
        <rect rx={lineWidth/2} y={height / 2 - (lineWidth / 2)} width={width} height={lineWidth} fill={trackColor} />
        <rect rx={lineWidth/2} y={height / 2 - (lineWidth / 2)} width={fillLength} height={lineWidth} fill={trainColor} />
      </svg> 
    <SkillSubText>{subtext}</SkillSubText>
  </SkillItemContainer>;
}
export default SkillItem;