import styled from "styled-components";
import colors from "../../config/colors";

export const FooterContainer = styled.div`
    font-size:14px;
    text-align:center;
    background-color:${colors.text}cc;
    backdrop-filter:blur(5px);
    padding:20px;
    color:${colors.background};
`;