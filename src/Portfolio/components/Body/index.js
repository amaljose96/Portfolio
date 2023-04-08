import React from "react";
import { BodyContainer } from "./styles";
import Landing from "../pages/Landing";
import Timeline from "../pages/Timeline";
import BackgroundElements from "../BackgroundElements";
import Projects from "../pages/Projects";
import Navigator from "../Navigator";
import Feedback from "../pages/Feedback";
import Footer from "../Footer";

function Body() {
  const [scrollTop, setScrollTop] = React.useState(0);
  React.useEffect(() => {
    const handleScroll = () => {
        setScrollTop(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return <BodyContainer>
    <BackgroundElements/>
    <Landing/>
    <Timeline scroll={scrollTop}/>
    <Projects/>
    <Navigator scroll={scrollTop}/>
    <Feedback/>
    <Footer/>
  </BodyContainer>;
}
export default Body;