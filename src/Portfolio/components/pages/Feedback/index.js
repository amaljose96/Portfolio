import React from "react";
import { FeedbackContainer, FeedbackTitle, FeedbackDescription, FeedbackForm } from "./styles";
import Labelize from "../../Labelize";
import TextInput from "../../TextInput";
import { ButtonSpacer } from "../../Button/styles";
import Button from "../../Button";
import { validateEmail, validatePhone, validateText } from "../../TextInput/utils";

function Feedback() {
  const [form, setForm] = React.useState({
    "name": "",
    "email": "",
    "phone": "",
    "message": ""
  });
  const [isValid, setIsValid] = React.useState({
    "name": null,
    "email": null,
    "phone": null,
    "message": null
  });
  function updateField(value,setValue){
    return (field)=>{
    return (newValue) => {
      setValue({
        ...value,
        [field]: newValue
      })
    }
  }
}
  const updateForm = updateField(form,setForm);
  const updateIsValid = updateField(isValid,setIsValid);
  
  function validateIsValid(){
    return Object.keys(isValid).every(key => isValid[key] === true)
  }
  return <FeedbackContainer id="message">
    <FeedbackTitle>Send me a Message</FeedbackTitle>
    <FeedbackDescription>You can contact me through the form below. You can also mail me <a href="mailto:amaljose96@gmail.com">here</a></FeedbackDescription>
    <FeedbackForm>
      <Labelize label="Your Name">
        <TextInput
          value={form.name}
          setValue={updateForm("name")}
          isValid={isValid.name}
          setIsValid={updateIsValid("name")}
          placeholder="Name" 
          validator={validateText}/>
      </Labelize>
      <ButtonSpacer />
      <Labelize label="Email">
        <TextInput
          value={form.email}
          setValue={updateForm("email")}
          isValid={isValid.email}
          setIsValid={updateIsValid("email")}
          placeholder="your-email@_____.com" 
          validator={validateEmail}/>
      </Labelize>
      <ButtonSpacer />
      <Labelize label="Phone Number">
        <TextInput
          value={form.phone}
          setValue={updateForm("phone")}
          isValid={isValid.phone}
          setIsValid={updateIsValid("phone")}
          placeholder="+1 (___) ____" 
          validator={validatePhone}/>
      </Labelize>
      <ButtonSpacer />
      <Labelize label="Your Message">
        <TextInput
          value={form.message}
          setValue={updateForm("message")}
          isValid={isValid.message}
          setIsValid={updateIsValid("message")}
          placeholder="Your message goes here."
          isTextArea
          wordLimit={"750"} 
          validator={validateText}/>
      </Labelize>
      <ButtonSpacer />
      <Button text="Submit" disabled={!validateIsValid()}/>
    </FeedbackForm>
  </FeedbackContainer>;
}
export default Feedback;