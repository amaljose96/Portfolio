import styled from "styled-components";
import colors from "../../../../config/colors";

export const LoaderContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;



export const LoadingBar = styled.div`
    width: 500px;
    height:2px;
    border:1px solid ${colors.text}11;
    border-radius:100px;
`;
export const Cursor = styled.div`
    width:${props=>props.progress * 500}px;
    height:2px;
    background-color:${colors.secondary};
    transition:all 0.3s linear;
`;
export const ProgressText = styled.div`
    text-align:center;
    margin-top:20px;
`;


export const LoaderIcon = styled.div`


    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    margin-bottom:30px;
  
  :after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 8px;
    box-sizing: border-box;
    background-color:${colors.secondary};
    border: 32px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: loader 2s infinite;
  }
  @keyframes loader{
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
  }
`;