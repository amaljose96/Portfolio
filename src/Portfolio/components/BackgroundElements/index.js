import React from "react";
import { BackgroundElementsContainer } from "./styles";

import Particles from "react-tsparticles";
import colors from "../../config/colors";

function BackgroundElements() {


  return <BackgroundElementsContainer >
    <Particles
      id="tsparticles"
      options={{
        fpsLimit: 120,
        particles: {
          color: {
            value: [colors.primary, colors.primary + "44", colors.secondary],
          },
          move: {
            enable: true,
            random: true,
            speed: 10,
            out_mode:"out",
            "attract": {
              "enable": true,
              "rotateX": 600,
              "rotateY": 1200
            }
          },
          number: {
            value: 10,
          },
          opacity: {
            value: 0.5,
            anim:{
              enable:true,
              opacity_min:0.3,
              speed:0.1
            }
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 200,
            anim:{
              enable:true,
              speed:10,
              size_min:50
            }
          },
        },
        detectRetina: true,
      }} />
  </BackgroundElementsContainer>;
}
export default BackgroundElements;