import React from "react";
import { SkillsContainer,SkillsList,Title } from "./styles";
import { TimelineTitle } from "../Timeline/styles";
import SkillToggler from "./SkillToggler";
import { getSkillItems } from "./utils";
import SkillItem from "./SkillItem";

function Skills({scroll=0}) {
  const [type,setType] = React.useState("Categories");
  let items = getSkillItems(type)
  return <SkillsContainer id="skills">
    <TimelineTitle>Skills</TimelineTitle>
    <SkillToggler type={type} setType={setType} options={["Categories","Confidence"]}/>
    <SkillsList>
    {items.map(item=>{
      if(item.type === "title"){
        return <Title>{item.text}</Title>
      }
      else{
        return <SkillItem {...item} scroll={scroll}/>
      }
    })}
    </SkillsList>
  </SkillsContainer>;
}
export default Skills;