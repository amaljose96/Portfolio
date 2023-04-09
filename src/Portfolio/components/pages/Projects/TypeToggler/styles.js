import styled from "styled-components";
import colors from "../../../../config/colors";
import { isMobile } from "../../../../utils/common";

export const TypeTogglerContainer = styled.div`
    position: sticky;
    top: 10px;
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
        max-width:100vw;
        margin-top:30px;
    `}
`;
export const TypeToggleOptions = styled.div`
    display:inline-flex;
    align-items:center;
    background-color:${colors.text}22;
    border-radius:100px;
    margin:20px 0px;
    backdrop-filter:blur(10px);
    flex-wrap: wrap;
    justify-content:center;
    ${isMobile() && `
       border-radius:0px;
    `}
`;
export const TypeToggleOption = styled.div`
    background-color:${props => props.active ? colors.background + "ee" : "none"};
    color:${props => props.active ? colors.text : colors.text};
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