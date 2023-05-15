import React from "react";
import { TextInputContainer, Input, TextArea } from "./styles";

function TextInput({
  value,
  setValue,
  placeholder = "Placeholder",
  type = "text",
  disabled = false,
  validator = () => true,
  isValid = null,
  isTextArea = false,
  name = "",
  hidden=false,
  setIsValid = () => { }
}) {
  return <input value={value}  onChange={(e) => {
    setValue(e.target.value);
    // setIsValid(validator(e.target.value));
  }}
  
  
  />
  let Component = isTextArea ? TextArea : Input;
  return <TextInputContainer>
    <Component
      isValid={isValid}
      value={value}
      placeholder={placeholder}
      type={type}
      isTextArea={isTextArea}
      disabled={disabled}
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