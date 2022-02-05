import styled from "styled-components";

export const LandingContainer = styled.div`
height:100vh;
width:100vw;
    padding:85px;
    display:flex;
    align-items:center;
    box-sizing:border-box;
`;
export const LandingContent = styled.div`
`;
export const Name = styled.div`
    font-size:108px;
    font-weight:bold;
`;



export const NamePlaque = styled.div`
    margin-bottom:70px;
`;
export const Tagline = styled.div`
    font-size:18px;
    font-weight:light;
`;
export const Contact = styled.div`
    display:flex;
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