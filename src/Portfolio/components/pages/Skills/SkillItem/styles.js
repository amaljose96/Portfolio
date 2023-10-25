import styled from "styled-components";
import colors from "../../../../config/colors";
import { isMobile } from "../../../../utils/common";
export const width = isMobile() ? window.innerWidth-50 : 400;
export const lineWidth = 7;
export const height = lineWidth + 10;
export const trackColor = colors.background+"10";
export const SkillItemContainer = styled.div`
    width: ${width}px;
    margin:10px;
    padding:20px;
    border-radius:20px;
    opacity:${props=>0.2+props.percent*0.8};
    background-color:${colors.background}08;
    ${props=>props.perfect && `
        border:solid 1px ${colors.primary}55;
    `}
    :hover{
        background-color:${colors.background}10;
    }
`;
export const SkillLine =styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

export const SkillName = styled.div`
    font-size:18px;
    margin-bottom:5px;
`;

export const SkillValue =styled.div`
    font-size:16px;
    font-weight:bold;
    color:${colors.background}01;
`;
export const SkillSubText = styled.div`
    font-size:12px;
    color:${colors.background}55;
`;