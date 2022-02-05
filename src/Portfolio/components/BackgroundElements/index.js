import React from "react";
import { BackgroundElementsContainer, CardinalBanner, GoldBanner } from "./styles";
import { getFactor } from "./utils";

function BackgroundElements() {
  const [yScrollFactor, setYScrollFactor] = React.useState(0);

  const handleScroll = function () {
    setYScrollFactor(getFactor(document.getElementsByClassName("appContainer")[0].scrollTop, document.getElementsByClassName("appContainer")[0].scrollHeight - document.getElementsByClassName("appContainer")[0].clientHeight))
  }



  React.useLayoutEffect(() => {
    document.getElementsByClassName("appContainer")[0].addEventListener("scroll", handleScroll);
  }, [])


  return <BackgroundElementsContainer >
    <CardinalBanner  parallaxOffset={yScrollFactor*1000}/>
    <GoldBanner parallaxOffset={yScrollFactor*500+50}/>
  </BackgroundElementsContainer>;
}
export default BackgroundElements;