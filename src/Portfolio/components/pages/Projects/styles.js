import styled from "styled-components";
import { isMobile } from "../../../utils/common";

export const ProjectsContainer = styled.div``;
export const ProjectsTitle = styled.div`
    position:sticky;
    top:0px;
    font-size:24px;
    font-weight:bold;
    padding: 30px 80px;
    backdrop-filter:blur(5px);
    background-color:#fff1;
    z-index:10;
    ${isMobile() && `
        padding:10px 10px;
        justify-content:center;
        flex-direction:column;
        text-align:center;
    `}
`;
export const ProjectSections = styled.div`
    padding:0px 80px;
    box-sizing:border-box;
    ${isMobile() && `
        padding:0px 5px;
    `}
`;
export const ProjectSection = styled.div`
    margin-bottom:30px;
`;
export const ProjectSectionTitle = styled.div`
    font-size:24px;
    margin:10px 0px;
    ${isMobile() && `
        text-align:center;
    `}
`;
export const ProjectSectionCards = styled.div`
    display:flex;
    align-items:flex-start;
    justify-content:center;
    flex-wrap:wrap;
`;
export const ProjectCard = styled.div`
    padding:20px;
    box-sizing:border-box;
    border-radius:10px;
    backdrop-filter:blur(5px);
    background-color:#fff8;
    width:600px;
    margin:10px;
    ${isMobile() && `
        width:100%;
    `}
    ${props=>props.font && `font-family : ${props.font}`}
`;
export const ProjectTitle = styled.div`
    font-size:18px;
    font-weight:bold;
    color:${props => props.color};
`;

export const ProjectLinkTitle = styled(ProjectTitle)`
    opacity:0.8;
    text-decoration:underline;
    :hover{
        cursor:pointer;
        opacity:1;
    }
`;
export const ProjectDuration = styled.div`
font-size:12px;
font-style:italic;
`;
export const ProjectDescription = styled.div`
margin-top:10px;
    margin-bottom:5px;
    font-size:16px;
`;
export const ProjectContribution = styled.div`
    color:${props => props.color};
    font-size:16px;
`;

export const ProjectStack = styled.div`
    display:flex;
    flex-wrap:wrap;
    margin-top:10px;
`;
export const ProjectStackChip = styled.div`
    font-size:10px;
    padding:5px 10px;
    background-color:${props => props.color};
    margin:3px;
    color:#fff;
    border-radius:100px;
    backdrop-filter:blur(5px);
    opacity:0.8;
    user-select:none;
    :hover{
        opacity:1;
    }
`;
