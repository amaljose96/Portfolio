import React from "react";
import { FeedbackContainer, FeedbackTitle, FeedbackDescription, FeedbackForm } from "./styles";
import Labelize from "../../Labelize";
import TextInput from "../../TextInput";
import { ButtonSpacer } from "../../Button/styles";
import Button from "../../Button";
import { validateEmail, validatePhone, validateText } from "../../TextInput/utils";
import ReactGA from "../../../config/ga";

function Feedback() {
  const [form, setForm] = React.useState({
    "Name": "Test",
    "Email": "amaljose96@gamil.com",
    "Phone": "2135739739",
    "Message": "Amal"
  });
  const [isValid, setIsValid] = React.useState({
    "Name": true,
    "Email": true,
    "Phone": true,
    "Message": true
  });
  const [formState,setFormState] =React.useState("unsent");
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
  function submitForm(){
    setFormState("sending")
    let body={
      ...form,
      isCookieEnabled:navigator.cookieEnabled,
      memory:navigator.deviceMemory,
      languages:navigator.languages,
      touchPoints:navigator.maxTouchPoints,
      userAgent:navigator.userAgent,
      isBot:navigator.webdriver
    }
    body.Email=body.Email.replace("@","#");
    ReactGA.event({
      action: "Send Message",
      category: body.Email,
      label: JSON.stringify(body)
    });
    
    setTimeout(()=>{
      setFormState("sent")
    },2000);
    
  }
  return <FeedbackContainer id="message">
    <FeedbackTitle>Send me a Message</FeedbackTitle>
    <FeedbackDescription>You can contact me through the form below. You can also mail me <a href="mailto:amaljose96@gmail.com">here</a></FeedbackDescription>
    <FeedbackForm>
      <Labelize label="Your Name">
        <TextInput
          value={form.Name}
          setValue={updateForm("Name")}
          isValid={isValid.Name}
          setIsValid={updateIsValid("Name")}
          placeholder="Name" 
          validator={validateText}/>
      </Labelize>
      <ButtonSpacer />
      <Labelize label="Email">
        <TextInput
          value={form.Email}
          setValue={updateForm("Email")}
          isValid={isValid.Email}
          setIsValid={updateIsValid("Email")}
          placeholder="your-email@_____.com" 
          validator={validateEmail}/>
      </Labelize>
      <ButtonSpacer />
      <Labelize label="Phone Number">
        <TextInput
          value={form.Phone}
          setValue={updateForm("Phone")}
          isValid={isValid.Phone}
          setIsValid={updateIsValid("Phone")}
          placeholder="+1 (___) ____" 
          validator={validatePhone}/>
      </Labelize>
      <ButtonSpacer />
      <Labelize label="Your Message">
        <TextInput
          value={form.Message}
          setValue={updateForm("Message")}
          isValid={isValid.Message}
          setIsValid={updateIsValid("Message")}
          placeholder="Your message goes here."
          isTextArea
          wordLimit={"750"} 
          validator={validateText}/>
      </Labelize>
      <ButtonSpacer />
      <Button text="Submit" disabled={!validateIsValid()} onClick={submitForm} formState={formState}/>
    </FeedbackForm>
  </FeedbackContainer>;
}
export default Feedback;