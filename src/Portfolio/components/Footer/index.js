import React from "react";
import { FooterContainer, ContactLine, GitLine, CommitMessage } from "./styles";
import gitInfo from "./gitinfo.json";

function secondsToDhms(duration) {
  let seconds = Number(duration / 1000)
  var d = Math.floor(seconds / (3600 * 24))
  var h = Math.floor((seconds % (3600 * 24)) / 3600)
  var m = Math.floor((seconds % 3600) / 60)
  var s = Math.floor(seconds % 60)
  var dDisplay = d > 0 ? d + (d === 1 ? " day, " : " days, ") : ""
  var hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : ""
  var mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : ""
  var sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : ""
  return dDisplay + hDisplay + mDisplay + sDisplay
}

function Footer() {
  let [aliveText, setAliveText] = React.useState("");
  React.useEffect(() => {
    const deployTime = new Date(gitInfo.time);
    let duration = new Date().getTime() - deployTime.getTime()
    setAliveText(secondsToDhms(duration))
    setInterval(() => {
      let duration = new Date().getTime() - deployTime.getTime()
      setAliveText(secondsToDhms(duration))
    }, 1000)
  }, [])


  return <FooterContainer>
    <ContactLine>amaljose96@gmail.com | +1 (213)573-9739 | © 2023 </ContactLine>
    <GitLine>{gitInfo.commit} alive for {aliveText} since {gitInfo.time} |  <CommitMessage onClick={() => {
      window.open("https://github.com/amaljose96/portfolio/commit/" + gitInfo.commit, "blank");
    }}>{gitInfo.message}</CommitMessage></GitLine>
  </FooterContainer>;
}
export default Footer;