import React from "react";
import { ProjectsData, skillColors, skillType } from "./constants";
import { ProjectsContainer, ProjectsTitle, ProjectSections, ProjectSection, ProjectSectionTitle, ProjectSectionCards, ProjectCard, ProjectTitle, ProjectDuration, ProjectStack, ProjectDescription, ProjectContribution, ProjectLinkTitle, ProjectStackChip } from "./styles";

function Projects() {
  return <ProjectsContainer>
    <ProjectsTitle>Projects</ProjectsTitle>
    <ProjectSections>
      {
        ProjectsData.map(section => {
          return <ProjectSection>
            <ProjectSectionTitle>{section.title}</ProjectSectionTitle>
            <ProjectSectionCards>
              {
                section.projects.map(project => {
                  return <ProjectCard>
                    {project.link ? <ProjectLinkTitle onClick={() => { window.open(project.link) }} color={project.color}>{project.title}</ProjectLinkTitle> : <ProjectTitle color={project.color}>{project.title}</ProjectTitle>}
                    <ProjectDuration>{project.duration}</ProjectDuration>
                    <ProjectDescription>{project.description}</ProjectDescription>
                    <ProjectContribution color={project.color}>{project.contribution}</ProjectContribution>
                    <ProjectStack>
                      {
                        project.techStack.map(skill => {
                          let type = Object.keys(skillType).find(type => skillType[type].includes(skill)) || "other"
                          let skillColor = skillColors[type]

                          return <ProjectStackChip color={skillColor}>{skill}</ProjectStackChip>
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