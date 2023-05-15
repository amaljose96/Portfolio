import styled from "styled-components";
import colors from "../../config/colors";

export const ButtonContainer = styled.button`
appearance:none;
    background-color: ${props => props.backgroundColor};
    border:solid 1px ${props=>props.backgroundColor};
    color: ${props => props.color};
    padding:10px 20px;
    font-size:14px;
    width:fit-content;
    height:fit-content;
    border-radius:5px;
    transition: all 0.1s ease-in-out;
    opacity:1;
    cursor:${props=>props.disabled?"not-allowed":"pointer"};
    :hover{x
        opacity:0.95;
        border:solid 1px ${colors.text}22;
    }
    :active{
        opacity:0.9;
        transform:scale(1.05);
    }
    display:flex;
    align-items:center;
    user-select:none;
`;
export const ButtonSpacer = styled.div`
    display:block;
    min-width:10px;
    min-height:10px;
`;