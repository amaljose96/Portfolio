import React from "react";
import { ProjectsData, skillColors, skillType } from "./constants";
import { ProjectsContainer, ProjectsTitle, ProjectSections, ProjectSection, ProjectSectionTitle, ProjectSectionCards, ProjectCard, ProjectTitle, ProjectDuration, ProjectStack, ProjectDescription, ProjectContribution, ProjectLinkTitle, ProjectStackChip, backgroundColorKeyframes } from "./styles";
import TypeToggler from "./TypeToggler";
import ReactGA from "../../../config/ga";
import { getAnimatedColor, isMobile } from "../../../utils/common";

function Projects({scroll=0}) {

  const projectScroll = React.useRef();

  let scrollTop = 0;
  let trigger = projectScroll?.current?.offsetTop-window.innerHeight/(isMobile() ? 3 : 2);
  if (scroll < trigger) {
    scrollTop=0;
  }
  else {
    scrollTop=scroll - trigger;
  }
  
  const [types,setTypes] = React.useState(["frontend","UX"]);
  return <ProjectsContainer id="projects" ref={projectScroll} shade={getAnimatedColor(backgroundColorKeyframes,scrollTop/(projectScroll?.current?.clientHeight||1))}>
    <ProjectsTitle>Projects</ProjectsTitle>
    <TypeToggler types={types} setTypes={setTypes}/>
    <ProjectSections>
      {
        ProjectsData.filter((section)=>{
          return section.projects.some(project => project.techStack.some(skill=>{
            let type = Object.keys(skillType).find(type => skillType[type].includes(skill)) || "other"
            return types.includes(type)
          }))
        }).map((section,si) => {
          return <ProjectSection key={"section_"+si}>
            <ProjectSectionTitle>{section.title}</ProjectSectionTitle>
            <ProjectSectionCards>
              {
                section.projects.filter(project=>project.techStack.some(skill=>{
                  let type = Object.keys(skillType).find(type => skillType[type].includes(skill)) || "other"
                  return types.includes(type)
                })).map((project,pi) => {
                  return <ProjectCard  key={si+"_project_"+pi} font={project.font} onClick={()=>{
                    ReactGA.event({
                      action: "Clicked Project Card",
                      category: section.title,
                      label: project.title
                    });
                  }}>
                    {project.link ? <ProjectLinkTitle onClick={() => { window.open(project.link) }} color={project.color}>{project.title}</ProjectLinkTitle> : <ProjectTitle color={project.color}>{project.title}</ProjectTitle>}
                    <ProjectDuration>{project.duration}</ProjectDuration>
                    <ProjectDescription>{project.description}</ProjectDescription>
                    <ProjectContribution color={project.color}>{project.contribution}</ProjectContribution>
                    <ProjectStack>
                      {
                        project.techStack.map((skill,ski) => {
                          let type = Object.keys(skillType).find(type => skillType[type].includes(skill)) || "other"
                          let skillColor = skillColors[type]

                          return <ProjectStackChip key={si+"_"+pi+"_skill_"+ski} color={skillColor}>{skill}</ProjectStackChip>
                        })
                      }
                    </ProjectStack>
                  </ProjectCard>
                })
              }
            </ProjectSectionCards>
          </ProjectSection>
        })
      }
    </ProjectSections>


  </ProjectsContainer>;
}
export default Projects;