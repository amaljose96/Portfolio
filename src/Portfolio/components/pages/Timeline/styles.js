import styled from "styled-components";
import colors from "../../../config/colors";

export const TimelineContainer = styled.div`
    background:linear-gradient(120deg, #000000ff,#1B0000ee);
    width:100vw;
    padding:80px;
    box-sizing:border-box;
    color:${colors.background};
`;


export const TimelineTitle = styled.div`
    text-align:center;
    margin:50px;
`;
export const YearSection = styled.div`
    padding-left:30px;
    border-width:1px;
    margin-left:100px;
`;
export const Year = styled.div`
    width:50px;
    box-sizing:border-box;
    font-weight:bold;
    background-color:${colors.background};
    color:${colors.text};
`;
export const YearContent = styled.div``;