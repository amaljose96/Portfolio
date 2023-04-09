import { getCookie } from "../utils/common";
function getTransitionColor(start,end,percent){
  if(start.length === 7){
    start=start+"ff";
  }
  if(end.length === 7){
    end=end+"ff";
  }
  let sr = "0x" + start[1] + start[2];
  let sg = "0x" + start[3] + start[4];
  let sb = "0x" + start[5] + start[6];
  let sa = "0x" + start[7] + start[8];
  let er = "0x" + end[1] + end[2];
  let eg = "0x" + end[3] + end[4];
  let eb = "0x" + end[5] + end[6];
  let ea = "0x" + end[7] + end[8];
  let rr = ((+sr)*(1-percent) + (+er)*percent).toString(16).split(".")[0];
  let rg = ((+sg)*(1-percent) + (+eg)*percent).toString(16).split(".")[0];
  let rb = ((+sb)*(1-percent) + (+eb)*percent).toString(16).split(".")[0];
  let ra = ((+sa)*(1-percent) + (+ea)*percent).toString(16).split(".")[0];
  if (rr.length == 1)
    rr = "0" + rr;
  if (rg.length == 1)
    rg = "0" + rg;
  if (rb.length == 1)
    rb = "0" + rb;
  if (ra.length == 1)
    ra = "0" + ra;
  return "#"+rr+rg+rb+ra;
}
const colors = {
  text: "#000000",
  primary: "#990000",
  secondary: "#FFCC00",
  shade:"#EFEFEF",
  background: "#FFFFFF",
  getTransitionColor,
  ...(() => {
    return getCookie("devmode")
      ? {
          primary: getCookie("primary") || "#00FFFF",
          text: getCookie("text") || "#00FF00",
          background: getCookie("background") || "#333333",
          secondary:  getCookie("secondary") || "#FF00FF",
          shade:getCookie("shade") || "#555555",
        }
      : {};
  })(),
};
export default colors;
