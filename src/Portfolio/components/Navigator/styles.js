import styled from "styled-components";
import colors from "../../config/colors";
import { options } from "./constants";
const optionHeight = 30;
const optionMargin = 6;
const totalHeight = options.length * (optionHeight+optionMargin+2) ;
export const NavigatorContainer = styled.div`
    position:fixed;
    right:10px;
    top:calc(50vh - ${totalHeight/2}px);
    height:${totalHeight}px;
    background-color:${colors.text}66;
    border-radius:${optionHeight/2}px;
    backdrop-filter:blur(5px);
    z-index:400;
    transition:all 0.2s;
    ${props=>props.open && `
        backdrop-filter:blur(20px);
        background-color:${colors.text}aa;
    `}
`;


export const NavigatorBar =styled.div``;
export const NavigationIcon = styled.div`
    height:${optionHeight}px;
    width:${optionHeight}px;
    display:flex;
    align-items:center;
    justify-content:center;
`;
export const NavigationOption =styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height:${optionHeight}px;
    border-radius:${optionHeight}px;
    background-color:${colors.shade}22;
    min-width:${optionHeight}px;
    padding:${props=>props.open ? "0px 10px" : "0"};
    transition:all 0.2s;
    margin:${optionMargin}px;
    cursor:pointer;
    color:${colors.background};
    :hover{
        transform:scale(1.05);
        
        background-color:${colors.background}44;
    }
`;
export const NavigationOptionLabel =styled.div`
    width:${props=>props.open ? "fit-content" : "0px"};
    transition:all 0.2s;
    overflow: hidden;
    box-sizing: border-box;
`;