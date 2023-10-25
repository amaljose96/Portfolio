import { getCookie } from "../utils/common";

export function hexToRGB(hex) {
  if (hex.length === 7) {
    hex = hex + "ff";
  }
  let r = "0x" + hex[1] + hex[2];
  let g = "0x" + hex[3] + hex[4];
  let b = "0x" + hex[5] + hex[6];
  let a = "0x" + hex[7] + hex[8];
  return { r, g, b, a }
}
export function rgbaToHex(r, g, b, a) {
  if (r.length === 1)
    r = "0" + r;
  if (g.length === 1)
    g = "0" + g;
  if (b.length === 1)
    b = "0" + b;
  if (a.length === 1)
    a = "0" + a;
  return "#" + r + g + b + a;
}

export function hexToHSL(hex) {
  let {r,g,b} = hexToRGB(hex);

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  let h = 0;
  if (max === min) {
    h = 0; // achromatic (no hue)
  } else if (max === r) {
    h = ((g - b) / (max - min)) % 6;
  } else if (max === g) {
    h = (2 + (b - r) / (max - min)) % 6;
  } else if (max === b) {
    h = (4 + (r - g) / (max - min)) % 6;
  }
  h = Math.round(h * 60);

  const l = (max + min) / 2;

  let s = 0;
  if (max !== min) {
    s = ((max - l) / Math.min(l, 1 - l));
  }
  s = Math.round(s * 100);
  return { h, s, l };
}

function getTransitionColor(start, end, percent) {
  let {r:sr,g:sg,b:sb,a:sa} = hexToRGB(start);
  let {r:er,g:eg,b:eb,a:ea} = hexToRGB(end);
  let rr = ((+sr) * (1 - percent) + (+er) * percent).toString(16).split(".")[0];
  let rg = ((+sg) * (1 - percent) + (+eg) * percent).toString(16).split(".")[0];
  let rb = ((+sb) * (1 - percent) + (+eb) * percent).toString(16).split(".")[0];
  let ra = ((+sa) * (1 - percent) + (+ea) * percent).toString(16).split(".")[0];
  return rgbaToHex(rr,rg,rb,ra);
}
const colors = {
  text: "#000000",
  primary: "#CB333B",
  secondary: "#ebadb0",
  shade: "#EFEFEF",
  background: "#FFFFFF",
  getTransitionColor,
  ...(() => {
    return getCookie("devmode")
      ? {
        primary: getCookie("primary") || "#00FFFF",
        text: getCookie("text") || "#00FF00",
        background: getCookie("background") || "#333333",
        secondary: getCookie("secondary") || "#FF00FF",
        shade: getCookie("shade") || "#555555",
      }
      : {};
  })(),
};
export default colors;
