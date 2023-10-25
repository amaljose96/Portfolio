import React from "react";
import { QuestionsViewContainer } from "./styles";

function QuestionsView({top,questions}) {
  console.log("Questions",questions)
  return <QuestionsViewContainer top={top}>QuestionsView</QuestionsViewContainer>;
}
export default QuestionsView;