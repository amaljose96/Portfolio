import React from "react";
import { LoadingAPIContainer } from "./styles";
import { getSteps } from "./services";
import Button from "../../Button";
import Loader from "./Loader";

function LoadingAPI({top,query,goToQuestions}) {
  const {initialStep,steps}=getSteps(query);
  const totalSteps=steps.length;
  const [finishedStep,setFinishedStep] = React.useState(0);
  const [progressText,setProgressText] = React.useState(initialStep.text);
  React.useEffect(()=>{
    if(top === 0){
      steps.reduce((previousActivity,step,index)=>{
        return previousActivity.then(result=>{
          setFinishedStep(index+1)
          setProgressText(step.text)
          return step.activity(result)
        })
      },initialStep.activity).then((questions)=>{
        goToQuestions(questions)
      })
    }
  },[top])
  return <LoadingAPIContainer top={top}>
    <Loader progressText={progressText} progress={finishedStep/totalSteps}/>
  </LoadingAPIContainer>;
}
export default LoadingAPI;