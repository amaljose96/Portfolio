import styled from "styled-components";
import { isMobile } from "../../../utils/common";

export const LandingContainer = styled.div`
    height:100vh;
    width:100%;
    display:flex;
    align-items:flex-end;
    justify-content:space-between;
    box-sizing:border-box;
    ${isMobile() && `flex-direction:column;`}
`;
export const LandingContent = styled.div`
    margin-left:10vw;
    width:40vw;
    display:flex;
    align-items:flex-start;
    justify-content:center;
    flex-direction:column;
    height:100vh;
    ${isMobile() && `width:100%; height:70vh;align-items:center;`}
`;
export const Name = styled.div`
    font-size:108px;
    font-weight:bold;
    color:#900;
`;



export const NamePlaque = styled.div`
    margin-bottom:70px;
    ${isMobile() && `text-align:center;`}
`;
export const Tagline = styled.div`
    font-size:18px;
    font-weight:light;
    ${isMobile() && `padding:10px;`}
    box-sizing:border-box;
`;
export const Contact = styled.div`
    display:flex;
    ${isMobile() && `justify-content:center;`}
`;
export const ContactElement = styled.div`
    margin:0px 7.5px;
    box-shadow:0px 0px 10px 1px #0001;
    border-radius:5px;
    cursor:pointer;
    opacity:0.8;
    :hover{
        opacity:1;
    }
`;
export const Image = styled.svg`
    width:50vw;
    ${isMobile() && `width:auto; height:30vh;align-items:center;`}
`;