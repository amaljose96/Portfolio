import React from "react";
import { TextInputContainer, Input, TextArea, WordCount } from "./styles";

function TextInput({
  value,
  setValue,
  placeholder = "Placeholder",
  type = "text",
  disabled = false,
  wordLimit = 0,
  validator = () => true,
  isValid = null,
  isTextArea = false,
  name = "",
  hidden=false,
  setIsValid = () => { }
}) {
  React.useEffect(() => {
    setIsValid((wordLimit !== 0 ? value.length <= wordLimit : true) && validator(value));
  },[])
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
        if(disabled){
          return;
        }
        setValue(e.target.value);
        setIsValid((wordLimit !== 0 ? e.target.value.length <= wordLimit : true) && validator(e.target.value));
      }}
    />


    {
      wordLimit > 0 && <WordCount isAboveLimit={value.length > wordLimit}>{value.length}/{wordLimit}</WordCount>
    }

  </TextInputContainer>
    ;
}
export default TextInput;