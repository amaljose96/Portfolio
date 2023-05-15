import styled from "styled-components";
import colors from "../../../../config/colors";
import { isMobile } from "../../../../utils/common";

export const TimelineTogglerContainer = styled.div`
    position: sticky;
    top: 0px;
    right: 0px;
    height:50px;
    width:fit-content;
    display:flex;
    align-items: center;
    justify-content: flex-end;
    width:100%;
    padding-right:10px;
    box-sizing: border-box;
    z-index:300;
    ${isMobile() && `
        justify-content: center;
        padding:0px;
    `}
`;
export const TimelineToggleOptions = styled.div`
    display:inline-flex;
    align-items:center;
    border:solid 1px ${colors.shade}33;
    background-color:${colors.text}cc;
    border-radius:100px;
    margin:20px 0px;
    backdrop-filter:blur(10px);
`;
export const TimelineToggleOption = styled.div`
    background-color:${props => props.active ? colors.background + "99" : "none"};
    color:${props => props.active ? colors.background : colors.shade};
    transition:all 0.3s;
    user-select:none;
    font-size:12px;
    padding:5px 15px;
    text-transform:capitalize;
    border-radius:200px;
    margin:5px;
    :hover{
        cursor:pointer;
        color:${colors.secondary};
    }
`;