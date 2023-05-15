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
  type="text",
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
      type={type}
      onChange={(e) => {
        setValue(e.target.value);
        setIsValid(validator(e.target.value));
      }}
    />
  </TextInputContainer>
    ;
}
export default TextInput;