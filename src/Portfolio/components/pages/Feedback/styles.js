import styled from "styled-components";
import colors from "../../../config/colors";
import { isMobile } from "../../../utils/common";

export const FeedbackContainer = styled.div`
    background-color:${colors.background};
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    min-height:100vh;
`;


export const FeedbackTitle =styled.div`
    text-align:center;
    font-size:100px;
    font-weight:bold;
    padding-top:70px;
    font-family:Meow Script;
`;
export const FeedbackDescription =styled.div`
    font-size:18px;
    padding:50px;
    text-align:center;
`;
export const FeedbackForm =styled.form`
    width:50vw;
    margin:20px 0px;
    ${isMobile() && `width:95vw;`}
`;