import { getCookie } from "../utils/common";

const colors = {
  text: "#000000",
  primary: "#990000",
  secondary: "#FFCC00",
  background: "#EEE9E6",
  ...(() => {
    return getCookie("devmode")
      ? {
          primary: getCookie("primary") || "#00FFFF",
          text: getCookie("text") || "#00FF00",
          background: getCookie("background") || "#333333",
        }
      : {};
  })(),
};
export default colors;
