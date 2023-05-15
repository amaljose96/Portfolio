import React from "react";
import { FooterContainer,ContactLine,GitLine } from "./styles";
import gitInfo from "./gitinfo.json";

function Footer() {
  return <FooterContainer>
    <ContactLine>amaljose96@gmail.com | +1 (213)573-9739 | © 2023 </ContactLine>
    <GitLine>{gitInfo.commit} | {gitInfo.time}</GitLine>
    </FooterContainer>;
}
export default Footer;