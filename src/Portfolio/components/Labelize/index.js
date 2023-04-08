import React from "react";
import { LabelizeContainer,Label } from "./styles";

function Labelize({label,children}) {
  return <LabelizeContainer>
    <Label>{label}</Label>
    {children}
  </LabelizeContainer>;
}
export default Labelize;