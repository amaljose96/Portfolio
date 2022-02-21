import styled from "styled-components";
import colors from "../../config/colors";

export const BackgroundElementsContainer = styled.div`
    position:fixed;
    top:0;
    left:0;
    height:100vh;
    width:100vw;
    z-index:-1;
    
`;



export const CardinalBanner = styled.div`
    height:200px;
    width:200vw;
    box-sizing:border-box;
    background-color:${colors.primary};
    margin-top:${props=>props.parallaxOffset}px;
`;
export const GoldBanner = styled.div`
    height:150px;
    width:200vw;
    box-sizing:border-box;
    background-color:${colors.secondary};
    margin-top:${props=>props.parallaxOffset}px;
`;