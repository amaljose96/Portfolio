import styled from "styled-components";
import colors from "../../../../config/colors";

export const CalendarEventContainer = styled.div`
    border-left-style:solid;
    border-color:${colors.background};
    border-width:1px;
    margin-left:49px;
    display:flex;
    align-items:center;
    padding-top:${props=>props.gapBefore+50}px;
    padding-bottom:${props=>props.gapAfter+50}px;
`;

export const Highlight = styled.span`
    color:${colors.secondary};
`;
export const SecondHighlight = styled.span`
    font-weight:bold;
`;
export const IconContainer = styled.div`
    width:50px;
    margin-left:-25px;
    display:flex;
    justify-content:center;
    background-color:${colors.background};
    height:50px;
    border-radius:50%;
`;

export const EventDetails = styled.div`
    margin-left:100px;
`;

export const Time = styled.div``;
export const Title = styled.div``;
export const Description = styled.div``;