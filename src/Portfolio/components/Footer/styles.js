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