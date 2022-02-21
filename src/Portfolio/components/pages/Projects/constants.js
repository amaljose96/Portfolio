export const skillType={
    "frontend":["React","HTML","CSS","styled-components","Jest","Enzyme","ReactVR"],
    "languages":["JavaScript","Python","Harlowe"],
    "backend":["Django","NodeJS","Flask"],
    "database":["Redis","PostgreSQL","MongoDB"],
    "UX":["Figma"],
    "AI":["scikit-learn"]
}
export const skillColors={
    "frontend":"#000d96",
    "languages":"#900",
    "backend":"#d4a900",
    "database":"#00c90a",
    "UX":"#7500ab",
    "AI":"#c40080",
    "other":"#333"
}
export const ProjectsData=[{
    title: "Work Projects",
    projects:[ 
        {
            title:"AARDVARC",
            description:"USC School of Pharmacy's Automated approach to reviewing and developing valuable assessment resources for its curriculum. It helps the school streamline its programmatic, curricular, faculty, teaching, and experiential data.",
            contribution:"I worked with the team to develop new features and build UX wireframes for the admin panel. ",
            link:"https://acadoinformatics.com/aardvarc/",
            techStack:["Django","Python","HTML","CSS","JavaScript","Figma"],
            duration:"December 2021 - Present",
            color:"#900",
        },
        {
            title:"TYPS eCases",
            description:"eCases are a part of the Teach Yourself Pharmaceutical Sciences platform by USC School of Pharmacy, aimed at presenting different scenarios to Pharmacy students testing on their response to the situation.",
            contribution:"I worked with the team to develop the eCases using Twine, HTML and CSS. I also developed a platform wherein new eCases can be 'run' instead of built from scratch.",
            techStack:["Twine", "Harlowe", "HTML", "CSS"],
            duration:"October 2021 - Present",
            color:"#900",
        },
        {
            title:"myProduct Promotions",
            description:"Promotions management tool for products sold at Tesco stores. The module helps in streamlining the complete promotion lifecycle, reducing the number of duplicate and stale promotions at Tesco by 60%.",
            contribution:"I worked as a Frontend developer, architecting and developing new components and screens after through discussions with the product management team. The team managed the NodeJS middleware, React Frontend Application, Redis cache system and Selenium test automation suite for the application",
            techStack:["JavaScript","React", "styled-components", "Jest", "Enzyme", "NodeJS", "Redis"],
            duration:"September 2018 - July 2021",
            color:"#00569f",
        },
        {
            title:"Unified Dashboard",
            description:"Project tracking dashboard for Unified Visualization and Analysis of stories, code quality, app health and user experience metrics and support processes in a single view. It pulls data from Github, Sonarqube, Jira, AppDynamics and Zendesk to give managers and directors a single yet detailed view of the status of an application",
            contribution:"Solely developed the POC for Unified Dashboard in React, NodeJS and MongoDB, hosted on Tesco Private Cloud. Later, the application was extended with more features, built on a Springboot backend with PostgreSQL.",
            techStack:["JavaScript","React", "styled-components", "NodeJS", "MongoDB", "Jest","Enzyme","Figma"],
            duration:"May 2019 - July 2021",
            color:"#00569f",
        },
        {
            title:"myEveryday Conversations",
            description:"Conversation logging application built for the HR team at Tesco to to manage regular and ad-hoc meetings between Tesco colleagues and their managers.",
            contribution:"I worked on the UX prototypes for the application discussing with the HR team and built the React frontend for the application hosted on Tesco Private Cloud",
            techStack:["JavaScript","React", "styled-components", "NodeJS", "PostgreSQL", "Figma"],
            duration:"October 2018 - May 2019",
            color:"#00569f",
        },
        {
            title:"Product Group ID Matcher",
            description:"AI tool that automated categorization of inventory products to speed up adding new entities to the system and eliminate errors.",
            contribution:"Worked with the AI lead at Tesco to build the Frontend application and supporting Flask backend",
            techStack:["JavaScript","React", "styled-components", "Python", "Flask", "scikit-learn"],
            duration:"June 2019",
            color:"#00569f",
        },
        {
            title:"Virtual Store",
            description:"Virtual Reality Application that helps planogrammers at Tesco to visualize and plan the ideal placement of products in the store and get an idea of how the store would look like.",
            contribution:"Worked with the team to build the ReactVR application and integrate with NodeJS backend connected to existing Tesco APIs",
            techStack:["JavaScript","ReactVR", "NodeJS"],
            duration:"July 2018 - September 2018",
            color:"#00569f",
        },
    ]
}]