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
    "Name": "",
    "Email": "",
    "Phone": "",
    "Message": ""
  });
  const [isValid, setIsValid] = React.useState({
    "Name": null,
    "Email": null,
    "Phone": null,
    "Message": null
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

    fetch("https://ipinfo.io/?token=e92037ad283737").then(response=>response.json()).then(info=>{
      let body={
        ...form,
        isCookieEnabled:navigator.cookieEnabled.toString(),
        memory:navigator.deviceMemory.toString(),
        languages:navigator.languages.toString(),
        touchPoints:navigator.maxTouchPoints.toString(),
        userAgent:navigator.userAgent.toString(),
        isBot:navigator.webdriver.toString(),
        ...info
      }
      setFormState("sending")
      fetch(
        "https://formsubmit.co/amaljose96@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify(body) 
        }
      ).then(()=>{
        setFormState("sent")
      })
    })
    


    // form.Email=form.Email.replace("@","#");
    // ReactGA.event({
    //   action: "Send Message",
    //   category: form.Email,
    //   label: JSON.stringify(form)
    // });
    
    // setTimeout(()=>{
    //   setFormState("sent")
    // },2000);
    
  }
  return <FeedbackContainer id="message">
    <FeedbackTitle>Send me a Message</FeedbackTitle>
    <FeedbackDescription>You can contact me through the form below. You can also mail me <a href="mailto:amaljose96@gmail.com">here</a></FeedbackDescription>
    <FeedbackForm>
      <Labelize label="Your Name">
        <TextInput
          name="Name"
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
          name="Email"
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
          name="Phone"
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
          name="Message"
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
      <Button type="submit" text="Submit" disabled={!validateIsValid()} onClick={submitForm} formState={formState}/>
    </FeedbackForm>
  </FeedbackContainer>;
}
export default Feedback;