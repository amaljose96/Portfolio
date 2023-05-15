import styled from "styled-components";
import colors from "../../config/colors";

export const FooterContainer = styled.div`
    
    text-align:center;
    background-color:${colors.text}cc;
    backdrop-filter:blur(5px);
    padding:20px;
    color:${colors.background};
`;
export const ContactLine = styled.div`
font-size:16px;
`;
export const GitLine = styled.div`
font-size:10px;
color:${colors.background}33;
`;
export const CommitMessage = styled.span`
    font-size:10px;
    color:${colors.background}33;
    transition: all 0.2s ease-in-out;
    :hover{
        color:${colors.background}99;
        cursor:pointer;
    }
`;