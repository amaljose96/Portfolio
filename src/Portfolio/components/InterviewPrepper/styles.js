import styled from "styled-components";
import { isMobile } from "../../utils/common";
import colors from "../../config/colors";
export const InterviewPrepperContainer = styled.div`
height:100vh;
max-height:100vh;
overflow-y: hidden;
    
`;

export const Question = styled.div`
    font-size:1.2em;
    margin-bottom:20px;
`;
export const Frame = styled.div`
position:absolute;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
height:100vh;
width:calc(100vw - 5px);
padding:10px;
box-sizing:border-box;
top:${props=>props.top}vh;
transition:all 0.5s ease-in-out;
overflow-y:hidden;
`;

export const Options = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
    width:70vw;
    margin:40px;
    ${isMobile() && `
        width:95vw;
    `}
`;
export const Option = styled.div`
    cursor:pointer;
    :hover{
        text-decoration:underline;
    }
    ${props => props.disabled && `
    cursor:not-allowed;
    opacity:0.5`
    }
    ${props => props.active && `
    color:${colors.primary}
   
    `
    }

`;