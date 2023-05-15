import React from "react";
import colors from "../../../config/colors";
import { FacebookIcon } from "../../../resources/icons/facebook";
import { GithubIcon } from "../../../resources/icons/github";
import { InstagramIcon } from "../../../resources/icons/instagram";
import { LinkedInIcon } from "../../../resources/icons/linkedin";
import { LandingContainer, LandingContent, Name, NamePlaque, Tagline, Contact, ContactElement } from "./styles";
import { MyFace } from "../../../resources/icons/myFace";
import { TwitterIcon } from "../../../resources/icons/twitter";

function Landing() {
  return <LandingContainer id="home">
    <LandingContent>
      <NamePlaque>
        <Name>Amal Jose</Name>
        <Tagline>React Developer. UX Designer. Photographer. Pianist. Random.</Tagline>
      </NamePlaque>
      <Contact>
        <ContactElement onClick={() => {
          window.open("https://www.linkedin.com/in/amaljose96");
        }}>
          <LinkedInIcon fillColor={colors.primary} />
        </ContactElement>
        <ContactElement onClick={() => {
          window.open("https://github.com/amaljose96");
        }}>
          <GithubIcon fillColor={colors.primary} />
        </ContactElement>
        <ContactElement onClick={() => {
          window.open("https://www.instagram.com/the_aj96/");
        }}>
          <InstagramIcon fillColor={colors.primary} />
        </ContactElement>
        <ContactElement onClick={() => {
          window.open("https://www.facebook.com/amaljose96");
        }}>
          <FacebookIcon fillColor={colors.primary} />
        </ContactElement>
        <ContactElement onClick={() => {
          window.open("https://twitter.com/amaljose_aj");
        }}>
          <TwitterIcon fillColor={colors.primary} />
        </ContactElement>
      </Contact>
      </LandingContent>
      <MyFace/>
  </LandingContainer>;
}
export default Landing;