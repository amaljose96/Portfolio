import styled from "styled-components";
import colors from "../../../config/colors";

export const SkillsContainer = styled.div`
    background-color: ${colors.text};
    color:#fff;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    padding-bottom:60px;
`;
export const SkillsList = styled.div`
    width:80vw;
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
`;

export const Title = styled.div`
    font-size:36px;
    margin:40px 0px 30px 0px;
    width:80vw;
`;