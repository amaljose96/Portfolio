import React from "react";
import { TextInputContainer, Input, TextArea } from "./styles";

function TextInput({
  value,
  setValue,
  placeholder = "Placeholder",
  validator = () => true,
  isValid = null,
  isTextArea = false,
  name = "",
  hidden=false,
  setIsValid = () => { }
}) {
  
  
  let Component = isTextArea ? TextArea : Input;
  return <TextInputContainer>
    <Component
      isValid={isValid}
      value={value}
      placeholder={placeholder}
      isTextArea={isTextArea}
      name={name}
      hidden={hidden}
      onChange={(e) => {
        setValue(e.target.value);
        setIsValid(validator(e.target.value));
      }}
    />
  </TextInputContainer>
    ;
}
export default TextInput;