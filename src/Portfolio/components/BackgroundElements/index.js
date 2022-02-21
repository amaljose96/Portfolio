import React from "react";
import { BackgroundElementsContainer, CardinalBanner, GoldBanner } from "./styles";
import { getFactor } from "./utils";
import Particles from "react-tsparticles";

function BackgroundElements() {
  // const [yScrollFactor, setYScrollFactor] = React.useState(0);

  // const handleScroll = function () {
  //   setYScrollFactor(getFactor(document.getElementsByClassName("appContainer")[0].scrollTop, document.getElementsByClassName("appContainer")[0].scrollHeight - document.getElementsByClassName("appContainer")[0].clientHeight))
  // }


  
  // React.useLayoutEffect(() => {
  //   document.getElementsByClassName("appContainer")[0].addEventListener("scroll", handleScroll);
  // }, [])


  return <BackgroundElementsContainer >
    <Particles
      id="tsparticles"
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#990000",
          },
          links: {
            color: "#FFCC00",
            distance: 350,
            enable: true,
            opacity: 0.9,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: true,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 10,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 8,
          },
        },
        detectRetina: true,
      }}/>
  </BackgroundElementsContainer>;
}
export default BackgroundElements;