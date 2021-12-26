import React from "react";
import { BodyContainer } from "./styles";
import { Route, Switch } from "react-router-dom";
import { appBasePath } from "../../config/paths";
import Landing from "../pages/Landing";
import Timeline from "../pages/Timeline";

function Body(props) {
  return <BodyContainer>
    <Switch>
      <Route path={appBasePath} component={Landing}/>
      <Route path={appBasePath+"/timeline"} component={Timeline}/>
    </Switch>
  </BodyContainer>;
}
export default Body;