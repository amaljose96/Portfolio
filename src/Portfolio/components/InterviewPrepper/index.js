import React from "react";
import { InterviewPrepperContainer } from "./styles";
import Landing from "./Landing";
import { calculateTranslateY } from "./utils";
import NewTopic from "./NewTopic";
import LoadingAPI from "./LoadingAPI";
import QuestionsView from "./QuestionsView";

function InterviewPrepper() {
  const [currentView, setCurrentView] = React.useState("landing");
  const [query,setQuery] = React.useState({});
  const [questions,setQuestions] = React.useState([]);
  return <InterviewPrepperContainer>
      <Landing
        top={calculateTranslateY("landing",currentView)}
        startNewTopic={() => {
          setCurrentView("newTopic")
        }}
        viewOldSessions={() => {
          setCurrentView("oldSessions")
        }}
      />
      <NewTopic
       top={calculateTranslateY("newTopic",currentView)}
       proceedToLoading={(recievedQuery)=>{
        setCurrentView("loading");
        setQuery(recievedQuery)
       }}
      />

      <LoadingAPI
       top={calculateTranslateY("loading",currentView)}
       query={query}
       goToQuestions={(retrievedQuestions)=>{
        setQuestions(retrievedQuestions);
        setCurrentView("questions")
       }}
      />
      <QuestionsView
      top={calculateTranslateY("questions",currentView)}
      questions={questions}
      />
    
  </InterviewPrepperContainer>;
}
export default InterviewPrepper;