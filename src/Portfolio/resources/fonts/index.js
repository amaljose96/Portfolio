import TescoModern from "./TescoModern.ttf";
import AvenirLight from "./AvenirLight.ttf";
import Helvetica from "./Helvetica.ttf";
import Archer from "./Archer.ttf";

const allFonts=`
@font-face {
    font-family: "TESCO Modern";   
    src: local("TescoModern"),
      url(${TescoModern}) format("truetype");
}

@font-face {
  font-family: "Avenir";   
  src: local("AvenirLight"),
    url(${AvenirLight}) format("truetype");
}

@font-face {
  font-family: "Helvetica";   
  src: local("Helvetica"),
    url(${Helvetica}) format("truetype");
}

@font-face {
  font-family: "Archer";   
  src: local("Archer"),
    url(${Archer}) format("truetype");
}

`
export default allFonts