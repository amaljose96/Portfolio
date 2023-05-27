import { categoryTitles, skillColors, skillConfig } from "./config";

export function getSkillItems(type){
    if(type === "Categories"){
        let categories = Object.keys(categoryTitles);
        let items=[];
        categories.forEach((category)=>{
            items.push({
                type:"title",
                text:categoryTitles[category]
            })
            let relevantSkills = Object.keys(skillConfig).filter(skill=>
                skillConfig[skill].type === category
            ).sort((a,b)=>skillConfig[b].confidence - skillConfig[a].confidence);
            relevantSkills.forEach(skill=>{
                let item = skillConfig[skill];
                items.push({
                    type:"item",
                    title:skill,
                    value:item.confidence,
                    subtext:"",
                    color:skillColors[category]
                })
            })
        });
        return items
    }
    else if(type === "Confidence"){
        return Object.keys(skillConfig).sort((a,b)=>skillConfig[b].confidence - skillConfig[a].confidence).map(skill=>{
            let item = skillConfig[skill];
            return {
                type:"item",
                title:skill,
                value:item.confidence,
                subtext:categoryTitles[item.type],
                color:skillColors[item.type]
            }
        });
    }
}