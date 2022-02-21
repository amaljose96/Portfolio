import styled from "styled-components";
import colors from "../../../config/colors";

export const TimelineContainer = styled.div`
    background:linear-gradient(120deg, #000000ee,#1B0000aa);
    width:100vw;
    box-sizing:border-box;
    color:${colors.background};
`;


export const YearSection = styled.div`
    padding-left:30px;
    border-width:1px;
    margin-left:100px;
`;
export const Year = styled.div`
    width:50px;
    box-sizing:border-box;
    padding-left:5px;
    font-weight:bold;
    background-color:${colors.background};
    color:${colors.text};
`;
export const YearContent = styled.div``;