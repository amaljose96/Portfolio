import styled from "styled-components";
import colors from "../../../config/colors";
import { elementWidth, numItemsInRow, sideWidth } from "./constants";

export const TimelineContainer = styled.div`
    background-color:${colors.text}f0;
    width:100%;
    box-sizing:border-box;
    color:${colors.background};
`;
export const TimelineItems = styled.div`
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
`;
export const TimelineRow = styled.div`
    width:${elementWidth*numItemsInRow + (sideWidth * (numItemsInRow+1))}px;
    display:flex;
    align-items:center;
    justify-content:${props=>props.align==="left"?"flex-start":"flex-end"};
`;

export const TimelineTitle = styled.div`
    text-align:center;
    font-size:56px;
    font-weight:bold;
    padding-top:70px;
`;