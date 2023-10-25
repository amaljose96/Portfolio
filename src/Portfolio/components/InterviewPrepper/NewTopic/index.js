import React from "react";
import { NewTopicContainer } from "./styles";
import { Option, Options, Question } from "../styles";
import TextInput from "../../TextInput";
import Button from "../../Button";

function NewTopic({top,proceedToLoading}) {
  const [chosenTrack,setChosenTrack] = React.useState("none");
  const [query,setQuery] = React.useState("");
  return <NewTopicContainer top={top}>
    <Question>Would you like to prepare for a role or just on a few topics?</Question>
    <Options>
    <Option onClick={()=>setChosenTrack("role")} active={chosenTrack === "role"}>Role</Option>
    <Option onClick={()=>setChosenTrack("topics")} active={chosenTrack === "topics"}>Topics</Option>
    </Options>
    {
      chosenTrack === "role" && 
        <Question>Enter Role Requirements here:</Question>
      
    }
    {
      chosenTrack === "topics" && 
        <Question>Enter your Topics list here:</Question>
    }
    {
      chosenTrack !=="none" && 
      <>
       <TextInput 
       value={query} 
       setValue={setQuery} 
       isTextArea={true}
       placeholder={chosenTrack === "role" ? "Job Description" : "List of topics separated by commas"}
       />
       <br/><br/><br/>
       <Button text={"Proceed"} 
       disabled={chosenTrack === "none"}
       onClick={()=>{
        proceedToLoading({
          content:query,
          type:chosenTrack
        })
       }}/>
       </>
    }

  </NewTopicContainer>;
}
export default NewTopic;