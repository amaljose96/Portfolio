import styled from "styled-components";
import colors from "../../config/colors";

export const BackgroundElementsContainer = styled.div`
    position:fixed;
    top:0;
    left:0;
    height:100vh;
    width:100%;
    opacity:0.5;
    z-index:-1;
    filter:blur(50px);
`;
