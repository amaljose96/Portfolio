import { skillColors, skillConfig } from "../Skills/config";
import { ProjectsData } from "./constants";

function checkSkill(types) {
    return (skill) => {
        if (!skillConfig[skill]) {
            return false;
        }
        let type = (skillConfig[skill] || {}).type
        return types.includes(type)
    }
}

export function getFilteredProjects(types) {
    return ProjectsData.filter((section) => {
        return section.projects.some(project => project.techStack.some(checkSkill(types)))
    }).map((section, si) => {
        return {
            ...section,
            projects: section.projects.filter(project => project.techStack.some(checkSkill(types))).map(project => {
                return {
                    ...project,
                    techStack: project.techStack.sort((a, b) => {
                        let aConfidence =skillConfig[a].confidence
                        let bConfidence =skillConfig[b].confidence
                        return bConfidence - aConfidence
                    }).map((skill, ski) => {
                        let type = skillConfig[skill].type
                        let skillColor = skillColors[type]
                        return {
                            color: skillColor,
                            onClick: () => {
                                let point = document.getElementById(skill).offsetTop;
                                window.scrollTo({
                                    top: point - window.innerHeight / 3,
                                    behavior: "smooth",
                                });
                            },
                            text: skill
                        }
                    })
                }
            })
        }
    });
}