import styled from "styled-components";
import colors from "../../../../config/colors";
import { elementWidth, lineWidth, rowHeight, sideWidth } from "../constants";

export const CalendarEventContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    width:${elementWidth}px;
    height:${rowHeight - sideWidth}px;
    box-sizing:border-box;padding:${sideWidth}px;
    padding:0;
`;
export const TopContent = styled.div`
    height:${((rowHeight - sideWidth) / 2) - (lineWidth / 2) - 1}px;
    max-height:${((rowHeight - sideWidth) / 2) - (lineWidth / 2) - 1}px;
    min-height:${((rowHeight - sideWidth) / 2) - (lineWidth / 2) - 1}px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    opacity:${props=>0.1+props.percent*0.9};
`;
export const IconContainer = styled.div`
    width:80px;
    max-width:80px;
    min-width:80px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:${colors.background};
    height:80px;
    min-height:80px;
    max-height:80px;
    border-radius:50%;
    opacity:${props=>0.1+props.percent*0.9};
`;
export const Time = styled.div`
    margin-top:10px;
    color:${props => colors.getTransitionColor(colors.background, colors.secondary, props.percent)};
`;

export const BottomContent = styled(TopContent)`
    width:${elementWidth}px;
    background-color:${colors.shade}22;
    padding:0px 10px;
    border-radius:0px 0px ${sideWidth/2}px ${sideWidth/2}px;
    box-sizing:border-box;
`


export const Title = styled.div`
    text-align:center;
`;