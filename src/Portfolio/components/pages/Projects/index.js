import React from "react";
import { ProjectsContainer, ProjectsTitle, ProjectSections, ProjectSection, ProjectSectionTitle, ProjectSectionCards, ProjectCard, ProjectTitle, ProjectDuration, ProjectStack, ProjectDescription, ProjectContribution, ProjectLinkTitle, ProjectStackChip, backgroundColorKeyframes } from "./styles";
import TypeToggler from "./TypeToggler";
import ReactGA from "../../../config/ga";
import { skillColors, skillConfig } from "../Skills/config";
import { getFilteredProjects } from "./utils";
import { getAnimatedColor, isMobile } from "../../../utils/common";

function Projects({ scroll = 0 }) {

  const projectScroll = React.useRef();
  let scrollTop = 0;
  let top = projectScroll?.current?.offsetTop || 0;
  let height = projectScroll?.current?.clientHeight || 1;
  let trigger = top - window.innerHeight / (isMobile() ? 3 : 2);
  if (scroll < trigger) {
    scrollTop = 0;
  }
  else {
    scrollTop = scroll - trigger;
  }
  const [types, setTypes] = React.useState(["frontend", "UX","languages"]);
  let displayProjects = getFilteredProjects(types);
  let backgroundColor = getAnimatedColor(backgroundColorKeyframes, scrollTop / height)
  return <ProjectsContainer
    id="projects"
    ref={projectScroll}
    shade={backgroundColor}
  >
    <ProjectsTitle>Projects</ProjectsTitle>
    <TypeToggler types={types} setTypes={setTypes} />
    <ProjectSections>
      {
        displayProjects.map((section, si) => {
          return <ProjectSection key={"section_" + si}>
            <ProjectSectionTitle>{section.title}</ProjectSectionTitle>
            <ProjectSectionCards>
              {
                section.projects.map((project, pi) => {
                  return <ProjectCard key={si + "_project_" + pi} font={project.font} onClick={() => {
                    ReactGA.event({
                      action: "Clicked Project Card",
                      category: section.title,
                      label: project.title
                    });
                  }}>
                    {project.link ?
                      <ProjectLinkTitle onClick={() => { window.open(project.link) }} color={project.color}>{project.title}</ProjectLinkTitle> :
                      <ProjectTitle color={project.color}>{project.title}</ProjectTitle>
                    }
                    <ProjectDuration>{project.duration}</ProjectDuration>
                    <ProjectDescription>{project.description}</ProjectDescription>
                    <ProjectContribution color={project.color}>{project.contribution}</ProjectContribution>
                    <ProjectStack>
                      {
                        project.techStack.map((skill, ski) => {
                          return <ProjectStackChip
                            key={si + "_" + pi + "_skill_" + ski}
                            color={skill.color}
                            onClick={skill.onClick}>
                            {skill.text}
                          </ProjectStackChip>
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