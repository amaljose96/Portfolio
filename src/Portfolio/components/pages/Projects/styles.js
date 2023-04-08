import styled from "styled-components";
import { isMobile } from "../../../utils/common";
import colors from "../../../config/colors";

export const ProjectsContainer = styled.div`
    background-color:${colors.text}0a;
    padding-bottom:40px;
`;
export const ProjectsTitle = styled.div`
    text-align:center;
    font-size:56px;
    font-weight:bold;
    padding-top:70px;
`;
export const ProjectSections = styled.div`
    padding:0px 80px;
    box-sizing:border-box;
    ${isMobile() && `
        padding:0px 5px;
    `}
`;
export const ProjectSection = styled.div`
    backdrop-filter:blur(5px);
    border-radius:20px;
    padding-top:0px;
    margin:30px 0px;
`;
export const ProjectSectionTitle = styled.div`
    font-size:28px;
    text-align:center;
    padding:30px 0px;
    position:sticky;
    top:0;
    left:0;
    z-index:10;
    margin-bottom:1px;
    background-color:${colors.background};
    border-radius:20px 20px 0px 0px;
`;
export const ProjectSectionCards = styled.div`
    
    :last-child{
        border-radius:0px 0px 20px 20px;
    }
`;
export const ProjectCard = styled.div`
    padding:20px;
    box-sizing:border-box;
    margin:1px 0px;
    width:100%;
    
    background-color:${colors.background}aa ;
    transition: all 0.2s linear;
    ${props=>props.font && `font-family : ${props.font}`};
    :hover{
        background-color:${colors.background}ff;
    }
    :last-of-type{
        border-radius:0px 0px 20px 20px;
    }
`;
export const ProjectTitle = styled.div`
    font-size:18px;
    font-weight:bold;
    z-index:5;
    color:${props => props.color};
`;

export const ProjectLinkTitle = styled(ProjectTitle)`
    opacity:0.8;
    text-decoration:underline;
    z-index:5;
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
    text-align:left;
`;
export const ProjectContribution = styled.div`
    color:${props => props.color};
    font-size:16px;
    text-align:left;
`;

export const ProjectStack = styled.div`
    display:flex;
    flex-wrap:wrap;
    margin-top:10px;
    z-index:5;
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
    :first-of-type{
        margin-left:0px;
    }
`;
