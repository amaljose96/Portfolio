import React from "react";
import { LoaderContainer,LoadingBar,Cursor,ProgressText, LoaderIcon } from "./styles";

function Loader({progress,progressText}) {
  return <LoaderContainer>
    <LoaderIcon/>
    <LoadingBar>
      <Cursor progress={progress}/>
    </LoadingBar>
    <ProgressText>{(progress*100).toFixed(2)} % | {progressText}</ProgressText>
  </LoaderContainer>;
}
export default Loader;